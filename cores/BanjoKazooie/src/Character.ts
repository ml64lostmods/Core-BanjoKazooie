import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';

export class Character implements API.ICharacter {
    private emulator: IMemory;
    private core: API.IBKCore;
    private bufScale: Buffer;

    private character: API.CharacterType = API.CharacterType.BANJO_KAZOOIE;

	constructor(emu: IMemory, core: API.IBKCore) {
        this.emulator = emu;
        this.core = core;
        this.bufScale = Buffer.alloc(4);
    }
    
    get character_id() { return this.character; }
    set character_id(value: API.CharacterType) { this.character = value; }

	onTick() {
        switch(this.core.player.animal) {
            case API.AnimalType.BEAR_BIRD:
                switch(this.character) {
                    case API.CharacterType.BANJO_KAZOOIE: this.set_character(0x034e, 1.0); break;
                    case API.CharacterType.BOTTLES: this.set_character(0x0387, 1.0); break;
                    case API.CharacterType.BLUBBER: this.set_character(0x0370, 0.7); break;
                    case API.CharacterType.CHIMPY: this.set_character(0x035d, 0.8); break;
                    case API.CharacterType.CONGA: this.set_character(0x035c, 0.6); break;
                    case API.CharacterType.GRUNTILDA_SEXY: this.set_character(0x0468, 0.2); break;
                    case API.CharacterType.GRUNTILDA_UGLY: this.set_character(0x0451, 0.7); break;
                    case API.CharacterType.JINJO_BLUE: this.set_character(0x03c0, 1.0); break;
                    case API.CharacterType.JINJO_GREEN: this.set_character(0x03c2, 1.0); break;
                    case API.CharacterType.JINJO_ORANGE: this.set_character(0x03bc, 1.0); break;
                    case API.CharacterType.JINJO_PINK: this.set_character(0x03c1, 1.0); break;
                    case API.CharacterType.JINJO_YELLOW: this.set_character(0x03bb, 1.0); break;
                    case API.CharacterType.KLUNGO: this.set_character(0x046A, 0.6); break;
                    case API.CharacterType.MUMBO: this.set_character(0x03c6, 0.8); break;
                    case API.CharacterType.NABNUT: this.set_character(0x0502, 0.75); break;
                    case API.CharacterType.SKELETON: this.set_character(0x04cc, 0.7); break;
                    case API.CharacterType.TOOTY: this.set_character(0x035a, 0.3); break;
                    case API.CharacterType.TOOTY_UGLY: this.set_character(0x0469, 0.15); break;
                }
                break;
        }
    }
    
    private set_character(value: number, scale: number) {
        // Model
        this.emulator.rdramWrite16(0x2986ba, value);
        this.emulator.rdramWrite16(0x2986be, value);

        // Scale
        this.bufScale.writeFloatBE(scale, 0);
        this.core.player.scale = this.bufScale.readInt32BE(0);
    }

}