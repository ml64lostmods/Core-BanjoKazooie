import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';
import * as SUB from './sub/Imports';

export class SaveContext extends API.BaseObj implements API.ISaveContext {
	private eeprom_addr: number = global.ModLoader[API.AddressType.SAVE_EEPROM];
	private moves_addr: number = global.ModLoader[API.AddressType.SAVE_MOVE_FLAGS];

	// Abstraction
	inventory: API.IInventory;
	flags_game: API.IBuffered;
	flags_honeycomb: API.IBuffered;
	flags_jiggy: API.IBuffered;
	flags_token: API.IBuffered;
	note_totals: API.IBuffered;

	constructor(emu: IMemory) {
		super(emu);

		this.inventory = new SUB.Inventory(emu);
		this.flags_game = new SUB.GameFlags(emu);
		this.flags_honeycomb = new SUB.HoneyCombFlags(emu);
		this.flags_jiggy = new SUB.JiggyFlags(emu);
		this.flags_token = new SUB.MumboTokenFlags(emu);
		this.note_totals = new SUB.NoteTotalBuffer(emu);
	}

	get_save(file: API.ProfileType): Buffer {
		let offset = file as number;
		if (offset === -1) offset = 3;
		offset *= 0x78;
		return this.emulator.rdramReadBuffer(this.eeprom_addr + offset, 0x78);
	}
	set_save(file: API.ProfileType, val: Buffer) {
		let offset = file as number;
		if (offset === -1) offset = 3;
		offset *= 0x78;
		this.emulator.rdramWriteBuffer(this.eeprom_addr + offset, val);
	}

	get moves(): number {
		return this.emulator.rdramRead32(this.moves_addr);
	}
	set moves(val: number) {
		this.emulator.rdramWrite32(this.moves_addr, val);
	}
}
