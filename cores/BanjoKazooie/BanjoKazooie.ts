import { bus, EventsClient, EventHandler } from 'modloader64_api/EventHandler';
import { IModLoaderAPI, ICore } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import * as API from './API/Imports';
import * as CORE from './src/Imports';

export class BanjoKazooie implements ICore, API.IBKCore {
	header = 'NBK';
	ModLoader: IModLoaderAPI = {} as IModLoaderAPI;
	eventTicks: Map<string, Function> = new Map<string, Function>();
	rom_header!: IRomHeader;

	camera!: API.ICamera;
	player!: API.IPlayer;
	runtime!: API.IRuntime;
	save!: API.ISaveContext;
	version!: API.GameVersion;

	character!: CORE.Character;
	commandBuffer!: CORE.CommandBuffer;
	payloads: string[] = new Array<string>();

	// Private address handlers for events
	private actor_arr_addr!: number;
	private beta_menu_addr!: number;
	private col_a_addr!: number;
	private col_v_addr!: number;
	private lookup_addr!: number;
	private voxel_arr_addr!: number;
	private voxel_cnt_addr!: number;

	// Utility values
	private curScn: number = 0;

	isPlaying(): boolean {
		return !(
			this.player.movement_state === 0 ||
			this.runtime.get_current_profile() === API.ProfileType.TITLE
		);
	}

	preinit(): void {
		let vStr: string = '';
		switch (this.rom_header.country_code) {
			case 'J':
				this.version = API.GameVersion.JP_1_0;
				CORE.VersionHandler.load_jp_1_0();
				vStr = 'J0';
				break;
			case 'P':
				this.version = API.GameVersion.PAL_1_0;
				CORE.VersionHandler.load_pal_1_0();
				vStr = 'P0';
				break;
			case 'E':
				if (this.rom_header.revision === 1) {
					this.version = API.GameVersion.USA_1_1;
					CORE.VersionHandler.load_usa_1_1();
					vStr = 'E1';
				} else {
					this.version = API.GameVersion.USA_1_0;
					CORE.VersionHandler.load_usa_1_0();
					vStr = 'E0';
				}
				break;
			default:
				this.version = API.GameVersion.USA_1_0;
				CORE.VersionHandler.load_usa_1_0();
				vStr = 'E0';
				break;
		}

		// Payload injection
		this.payloads.push(__dirname + '/src/asm/' + vStr + '/BetaMenu.payload');
		this.payloads.push(__dirname + '/src/asm/' + vStr + '/CommandBuffer.payload');
		this.payloads.push(__dirname + '/src/asm/' + vStr + '/LevelEventClearFix.payload');

		// Version independant globals
		global.ModLoader[API.AddressType.PUPPET] = 0xD01000;
		global.ModLoader[API.AddressType.COL_ACTOR] = 0xD01180;
		global.ModLoader[API.AddressType.COL_VOXEL] = 0xD01100;

		// Internal handler addresses
		this.beta_menu_addr = global.ModLoader[API.AddressType.BETA_MENU];
		this.actor_arr_addr = global.ModLoader[API.AddressType.RT_ACTOR_ARRAY_PTR];
		this.col_a_addr = global.ModLoader[API.AddressType.COL_ACTOR];
		this.col_v_addr = global.ModLoader[API.AddressType.COL_VOXEL];
		this.lookup_addr = global.ModLoader[API.AddressType.RT_CUR_LEVEL_LOOKUP];
		this.voxel_arr_addr = global.ModLoader[API.AddressType.RT_VOXEL_ARRAY_PTR];
		this.voxel_cnt_addr = global.ModLoader[API.AddressType.RT_VOXEL_COUNT_PTR];
	}
	init(): void { }
	postinit(): void {
		this.camera = new CORE.Camera(this.ModLoader.emulator);
		this.player = new CORE.Player(this.ModLoader.emulator);
		this.runtime = new CORE.Runtime(this.ModLoader.emulator);
		this.save = new CORE.SaveContext(this.ModLoader.emulator);
		this.character = new CORE.Character(this.ModLoader.emulator, this);
		this.commandBuffer = new CORE.CommandBuffer(this.ModLoader.emulator);
	}
	onTick(): void {
		if (!this.isPlaying()) {
			this.character.onTick();
			return;
		}

		this.detect_map();
		this.detect_collision();
		this.return_to_lair();

		// Tick stuff
		this.character.onTick();
		this.commandBuffer.onTick();
		this.eventTicks.forEach((value: Function, key: string) => {
			value();
		});
	}

	@EventHandler(EventsClient.ON_INJECT_FINISHED)
	onCore_InjectFinished(evt: any) {
		// Inject payloads
		for (let i = 0; i < this.payloads.length; i++) {
			this.ModLoader.payloadManager.parseFile(this.payloads[i]);
		}
	}

	private detect_map() {
		let scn = this.runtime.current_scene;
		if (scn === this.curScn) return;

		let lvl = 0;
		if (scn !== 0) lvl = this.find_level(scn);
		this.runtime.current_level = lvl;

		this.curScn = scn;
		bus.emit(API.BkEvents.ON_SCENE_CHANGE, scn, lvl);
	}

	private find_level(scene: number): number {
		let ptr = this.lookup_addr;
		let val = this.ModLoader.emulator.rdramRead16(ptr);
		while (val !== scene) {
			ptr += 0x08;
			val = this.ModLoader.emulator.rdramRead16(ptr);
		}
		return this.ModLoader.emulator.rdramRead16(ptr + 0x02);
	}

	private detect_collision() {
		// Initializers
		let addr: number;
		let ptr: number;
		let i: number;

		let actors: Array<number> = [];
		let voxels: Array<number> = [];

		for (i = 0; i < 16; i++) {
			// Actors
			addr = this.col_a_addr + (i * 4);
			ptr = this.ModLoader.emulator.rdramRead32(addr);
			if (ptr !== 0) {
				actors.push(ptr);
				this.ModLoader.emulator.rdramWrite32(addr, 0);
			}

			// Voxels
			addr = this.col_v_addr + (i * 4);
			ptr = this.ModLoader.emulator.dereferencePointer(addr);
			if (ptr !== 0) {
				voxels.push(ptr);
				this.ModLoader.emulator.rdramWrite32(addr, 0);
			}
		}

		if (actors.length > 0) bus.emit(API.BkEvents.ON_COLLIDE_ACTOR, actors);
		if (voxels.length > 0) bus.emit(API.BkEvents.ON_COLLIDE_VOXEL, voxels);
	}

	private return_to_lair() {
		let curLvl = this.runtime.current_level;
		if (
			curLvl !== API.LevelType.GRUNTILDAS_LAIR &&
			curLvl !== API.LevelType.SPIRAL_MOUNTAIN
		) this.ModLoader.emulator.rdramWrite8(this.beta_menu_addr, 1);
	}
}

export default BanjoKazooie;