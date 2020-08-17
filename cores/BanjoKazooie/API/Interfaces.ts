import * as apiEnum from './Enums';

// ##################################################################
// ##  Sub-Classes
// ##################################################################

export interface IBuffered {
	get_all(): Buffer;
	set_all(value: Buffer): void;
	get_bit(flag: number): boolean;
	set_bit(flag: number, value: boolean): void;
	get(offset: number): number;
	set(offset: number, value: number): void;
}

export interface ICharacter {
	true_id: number;
	bear_bird_id: number;
	termite_id: number;
	crocodile_id: number;
	walrus_id: number;
	pumpkin_id: number;
	bee_id: number;
}

export interface ICommandBuffer {
	runCommand(
		command: apiEnum.CMD,
		index: number,
		callback?: Function
	): void;
}

export interface IInventory {
	acorn: number;
	caterpillar: number;
	eggs: number;
	gold_bullions: number;
	gold_feathers: number;
	health_upgrades: number;
	honeycombs: number;
	jiggies: number;
	jinjos: number;
	lives: number;
	notes: number;
	orange: number;
	present_green: number;
	present_blue: number;
	present_red: number;
	red_feathers: number;
	tokens: number;
}

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export interface ICamera {
	position: Buffer;
	pos_x: number;
	pos_y: number;
	pos_z: number;
	rotation: Buffer;
	rot_x: number;
	rot_y: number;
	rot_z: number;
}

export interface IPlayer {
	animal: apiEnum.AnimalType;
	animation: Buffer;
	anim_frame: number;
	anim_id: number;
	flip_facing: boolean;
	model_index: number;
	model_ptr: number;
	movement_state: number;
	opacity: number;
	position: Buffer;
	pos_x: number;
	pos_y: number;
	pos_z: number;
	rotation: Buffer;
	rot_x: number;
	rot_y: number;
	rot_z: number;
	scale: number;
	visible: boolean;
	visible_parts: Buffer;
}

export interface IRuntime {
	current_exit: number;
	current_health: number;
	current_level: number;
	current_level_events: number;
	current_scene: apiEnum.SceneType;
	current_scene_events: number;

	get_current_profile(): apiEnum.ProfileType;
	get_transition_state(): number;

	is_cutscene(): boolean;
	is_loading(): boolean;
	goto_scene(scene: apiEnum.SceneType, exit: apiEnum.ExitType): void;
}

export interface ISaveContext {
	inventory: IInventory;
	flags_cheat: IBuffered;
	flags_game: IBuffered;
	flags_honeycomb: IBuffered;
	flags_jiggy: IBuffered;
	flags_token: IBuffered;
	note_totals: IBuffered;

	get_save(file: apiEnum.ProfileType): Buffer;
	set_save(file: apiEnum.ProfileType, val: Buffer): void;

	moves: number;
}

export interface IBKCore {
	camera: ICamera;
	player: IPlayer;
	runtime: IRuntime;
	save: ISaveContext;
	version: apiEnum.GameVersion;

	character: ICharacter;
	commandBuffer: ICommandBuffer;

	isPlaying(): boolean;
}
