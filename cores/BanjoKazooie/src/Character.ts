import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';

export class Character implements API.ICharacter {
    private emulator: IMemory;
    private core: API.IBKCore;
    private bufFloat: Buffer;

    private bear_bird: API.CharacterType = API.CharacterType.BANJO_KAZOOIE;
    private termite: API.CharacterType = API.CharacterType.BANJO_TERMITE;
    private crocodile: API.CharacterType = API.CharacterType.BANJO_CROCODILE;
    private walrus: API.CharacterType = API.CharacterType.BANJO_WALRUS;
    private pumpkin: API.CharacterType = API.CharacterType.BANJO_PUMPKIN;
    private bee: API.CharacterType = API.CharacterType.BANJO_BEE;

    true_id: number = 0x034d;

	constructor(emu: IMemory, core: API.IBKCore) {
        this.emulator = emu;
        this.core = core;
        this.bufFloat = Buffer.alloc(4);
    }
    
    get bear_bird_id() { return this.bear_bird; }
    set bear_bird_id(value: API.CharacterType) { this.bear_bird = value; }

    get termite_id() { return this.termite; }
    set termite_id(value: API.CharacterType) { this.termite = value; }

    get crocodile_id() { return this.crocodile; }
    set crocodile_id(value: API.CharacterType) { this.crocodile = value; }

    get walrus_id() { return this.walrus; }
    set walrus_id(value: API.CharacterType) { this.walrus = value; }

    get pumpkin_id() { return this.pumpkin; }
    set pumpkin_id(value: API.CharacterType) { this.pumpkin = value; }

    get bee_id() { return this.bee; }
    set bee_id(value: API.CharacterType) { this.bee = value; }

	onTick() {
        switch(this.core.player.animal) {
            case API.AnimalType.BEAR_BIRD:
                switch(this.bear_bird) {
                    case API.CharacterType.BANJO_KAZOOIE: this.set_raw(0x034e, 1.0); break;
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
                    case API.CharacterType.LIMBO: this.set_character(0x04cc, 0.7); break;
                    case API.CharacterType.MUMBO: this.set_character(0x03c6, 0.8); break;
                    case API.CharacterType.NABNUT: this.set_character(0x0502, 0.75); break;
                    case API.CharacterType.TOOTY: this.set_character(0x035a, 0.3); break;
                    case API.CharacterType.TOOTY_UGLY: this.set_character(0x0469, 0.15); break;
                }
                break;
            case API.AnimalType.TERMITE:
                switch(this.termite) {
                    case API.CharacterType.BANJO_TERMITE: this.set_animal(0x034f, 1.0); break;
                    case API.CharacterType.TERMITE: this.set_animal(0x0350, 0.4); break;
                    case API.CharacterType.CRAB_GREEN: this.set_animal(0x0358, 0.6); break;
                }
                break;
            case API.AnimalType.CROCODILE:
                switch(this.crocodile) {
                    case API.CharacterType.BANJO_CROCODILE: this.set_animal(0x0374, 1.0); break;
                    case API.CharacterType.MR_VILE: this.set_animal(0x0373, 0.9); break;
                }
                break;
            case API.AnimalType.WALRUS:
                switch(this.walrus) {
                    case API.CharacterType.BANJO_WALRUS: this.set_animal(0x0359, 1.0); break;
                    case API.CharacterType.WOZZA: this.set_animal(0x0494, 0.5); break;
                }
                break;
            case API.AnimalType.PUMPKIN:
                switch(this.pumpkin) {
                    case API.CharacterType.BANJO_PUMPKIN: this.set_animal(0x036f, 1.0); break;
                    case API.CharacterType.SNOWBALL: this.set_animal(0x0378, 1.0); break;
                }
                break;
            case API.AnimalType.BEE:
                switch(this.bee) {
                    case API.CharacterType.BANJO_BEE: this.set_animal(0x0362, 1.0); break;
                    case API.CharacterType.ZUBBA: this.set_animal(0x0446, 1.0); break;
                }
                break;
        }
    }

    private set_raw(value: number, scale: number) {
        // Model
        this.true_id = value;
        this.emulator.rdramWrite16(0x2986b2, value);
        this.emulator.rdramWrite16(0x2986ba, value);
        this.emulator.rdramWrite16(0x2986be, value);

        // Level specific banjo model
        if (this.core.runtime.current_level === API.LevelType.GRUNTILDAS_LAIR) {
            this.core.player.model_index = 0x034e;
        } else { this.core.player.model_index = 0x034d; }

        // Scale
        this.bufFloat.writeFloatBE(scale, 0);
        this.core.player.scale = this.bufFloat.readInt32BE(0);
    }
    
    private set_character(value: number, scale: number) {
        this.set_raw(value, scale);

        // Head/Eye fix for custom models
        let render = this.core.player.visible_parts;
        render[0] = 1;
        render[2] = 1;
        render[4] = 1;
        this.core.player.visible_parts = render;
    }

    private set_animal(value: number, scale: number) {
        // Model
        this.true_id = value;

        // Scale
        this.bufFloat.writeFloatBE(scale, 0);
        this.core.player.scale = this.bufFloat.readInt32BE(0);
    }
}