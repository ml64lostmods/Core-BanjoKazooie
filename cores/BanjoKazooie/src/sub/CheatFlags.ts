import IMemory from 'modloader64_api/IMemory';
import * as API from '../../API/Imports';

export class CheatFlags extends API.BufferObj implements API.IBuffered {
	constructor(emu: IMemory) {
		super(emu, global.ModLoader[API.AddressType.SAVE_CHEAT_FLAGS], 0x19);
	}
}