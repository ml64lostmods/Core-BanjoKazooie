export const enum GameVersion {
	JP_1_0,
	PAL_1_0,
	USA_1_0,
	USA_1_1,
}

export const enum BkEvents {
	ON_COLLIDE_ACTOR = "BK:onActorCollision",
	ON_COLLIDE_VOXEL = "BK:onVoxelCollision",
	ON_SCENE_CHANGE = "BK:onSceneChange",
}

export const enum CMD {
	EMPTY = 0x00000000,
	SPAWN = 0xffffffff,
	DESPAWN = 0xfffffffe,
}

export const enum AddressType {
	BETA_MENU = 'BK:beta_menu',

	CAMERA = 'BK:camera',
	INVENTORY = 'BK:inventory',
	PLAYER = 'BK:player',
	PUPPET = 'BK:puppet',

	COL_ACTOR = 'BK:col_actor',
	COL_VOXEL = 'BK:col_voxel',

	RT_ACTOR_ARRAY_PTR = 'BK:rt_actor_arr_ptr',
	RT_COLLISION_PTR = 'BK:rt_collision_ptr',
	RT_CUR_EXIT = 'BK:rt_current_exit',
	RT_CUR_HEALTH = 'BK:rt_current_health',
	RT_CUR_LEVEL = 'BK:rt_current_level',
	RT_CUR_LEVEL_EVENTS = 'BK:rt_current_level_events',
	RT_CUR_LEVEL_LOOKUP = 'BK:rt_current_level_table',
	RT_CUR_PROFILE = 'BK:rt_current_profile',
	RT_CUR_SCENE = 'BK:rt_current_scene',
	RT_CUR_SCENE_EVENTS = 'BK:rt_current_scene_events',
	RT_IS_CUTSCENE = 'BK:rt_is_cutscene',
	RT_IS_LOADING = 'BK:rt_is_loading',
	RT_TRANSITION_STATE = 'BK:rt_transition_state',
	RT_VOXEL_ARRAY_PTR = 'BK:rt_voxel_arr_ptr',
	RT_VOXEL_COUNT_PTR = 'BK:rt_voxel_cnt_ptr',

	SAVE_CHEAT_FLAGS = 'BK:save_flags_cheat',
	SAVE_EEPROM = 'BK:save_eeprom',
	SAVE_GAME_FLAGS = 'BK:save_flags_game',
	SAVE_HONEYCOMB_FLAGS = 'BK:save_flags_honeycomb',
	SAVE_JIGGY_FLAGS = 'BK:save_flags_jiggy',
	SAVE_MOVE_FLAGS = 'BK:save_flags_move',
	SAVE_MUMBO_TOKEN_FLAGS = 'BK:save_flags_token',
	SAVE_NOTE_TOTALS = 'BK:save_note_totals'
}

export enum AnimationType {
	UNKNOWN = 0x0000,
	BANJO_DUCKING = 0x0001,
	BANJO_WALKING_SLOW = 0x0002,
	BANJO_WALKING = 0x0003,
	// 0x0004 X
	BANJO_PUNCHING = 0x0005,
	// 0x0006 X
	BANJO_TALON_TROT_END = 0x0007,
	BANJO_JUMPING = 0x0008,
	BANJO_DYING = 0x0009,
	BANJO_CLIMBING = 0x000a,
	// 0x000B
	BANJO_RUNNING = 0x000c,
	// 0x000D
	BANJO_SKIDDING = 0x000e,
	BANJO_HURT = 0x000f,
	BIGBUTT_CHARGING = 0x0010,
	BANJO_WONDERWING_RUNNING = 0x0011,
	// 0x0012 X
	// 0x0013 X
	// 0x0014 X
	BANJO_TALON_TROT_WALKING = 0x0015,
	BANJO_TALON_TROT_START = 0x0016,
	BANJO_FLUTTER = 0x0017,
	BANJO_FEATHERY_FLAP = 0x0018,
	BANJO_RATATAT_RAP = 0x0019,
	BANJO_RATATAT_RAP_START = 0x001a,
	BANJO_WONDERWING_JUMPING = 0x001b,
	BANJO_BEAK_BARGE = 0x001c,
	BANJO_BEAK_BUSTER = 0x001d,
	// 0x001E X
	// 0x001F X
	// 0x0020 X
	BIGBUTT_SKIDDING = 0x0021,
	BANJO_WONDERWING_START = 0x0022,
	BANJO_WONDERWING = 0x0023,
	YUMYUM_HOPPING = 0x0024,
	// 0x0025 X
	BANJO_TALON_TROT = 0x0026,
	BANJO_TALON_TROT_JUMPING = 0x0027,
	TERMITE_HURT = 0x0028,
	TERMITE_DYING = 0x0029,
	BANJO_SHOOTING_EGG = 0x002a,
	BANJO_POOPING_EGG = 0x002b,
	SNIPPET_WALKING = 0x002c,
	JINJO_IDLE = 0x002d,
	BANJO_JIGGY_JIG = 0x002e,
	JINJO_HELP = 0x002f,
	HELD_JIGGY_JIGGY_JIG = 0x0030,
	JINJO_HOPPING = 0x0031,
	BIGBUTT_ATTACKING = 0x0032,
	BIGBUTT_EATING = 0x0033,
	BIGBUTT_DYING = 0x0034,
	BIGBUTT_ALERTED = 0x0035,
	BIGBUTT_WALKING = 0x0036,
	// 0037
	BANJO_FLYING = 0x0038,
	BANJO_SWIMMING_SURFACE = 0x0039,
	// 003A X
	// 003B X
	BANJO_DIVING = 0x003c,
	BANJO_SHOCK_SPRING_JUMP_1 = 0x003d,
	BANJO_FLYING_CRASH = 0x003e,
	BANJO_SWIMMING_UNDERWATER_B = 0x003f,
	BANJO_WADING_BOOTS_START = 0x0040,
	BANJO_WADING_BOOTS = 0x0041,
	BANJO_WADING_BOOTS_WALKING = 0x0042,
	BANJO_BEAKBOMB_START = 0x0043,
	BANJO_TURBO_TALON_TRAINERS = 0x0044,
	BANJO_FLYING_START = 0x0045,
	// 0046 X
	BANJO_BEAKBOMB = 0x0047,
	BANJO_SHOCK_SPRING_JUMP_START = 0x0048,
	BANJO_SHOCK_SPRING_JUMP_2 = 0x0049,
	// 004A X
	BANJO_FLAP_FLIP = 0x004b,
	BANJO_FLAP_FLIP_TRANSISTION = 0x004c,
	BANJO_HURT_2 = 0x004d,
	MM_MUDHUT_SMASHING = 0x004e,
	BANJO_WATER_SPLASH = 0x004f,
	// 0050 X
	CONGA_IDLE = 0x0051,
	CONGA_HURT = 0x0052,
	CONGA_DEFEATED = 0x0053,
	CONGA_THROWING = 0x0054,
	CONGA_BEATING_CHEST = 0x0055,
	CONGA_RAISING_ARMS = 0x0056,
	BANJO_SWIMMING_UNDERWATER = 0x0057,
	BANJO_SWIMMING_UNDERWATER_A = 0x0058,
	BANJO_SLIDING_BACK = 0x0059,
	BANJO_SLIDING_FRONT = 0x005a,
	CHIMPY_HOPPING = 0x005b,
	CHIMPY_IDLE = 0x005c,
	CHIMPY_WALKING = 0x005d,
	TICKER_IDLE = 0x005e,
	TICKER_WALKING = 0x005f,
	TERMITE_JUMPING = 0x0060,
	BANJO_FLAP_FLIP_END = 0x0061,
	GRUBLIN_IDLE = 0x0062,
	GRUBLIN_WALKING = 0x0063,
	GRUBLIN_JUMPING = 0x0064,
	BEEHIVE_DYING = 0x0065,
	BANJO_TALON_TROT_HURT = 0x0066,
	WADING_BOOTS_IDLE = 0x0067,
	BANJO_FALLING = 0x0068,
	BANJO_ON_TUMBLAR = 0x0069,
	MUMBO_SLEEPING = 0x006a,
	MUMBO_WALKING = 0x006b,
	MUMBO_IDLE = 0x006c,
	MUMBO_TRANSFORMING = 0x006d,
	MUMBO_UNKNOWN_6E = 0x006e,
	BANJO_IDLE = 0x006f,
	BANJO_SWIMMING_UNDERWATER_2 = 0x0070,
	BANJO_SWIMMING_SLOW = 0x0071,
	BANJO_CARRYING_ITEM = 0x0072,
	BANJO_CARRYING_ITEM_WALKING = 0x0073,
	// 0074 X
	// 0075 X
	// 0076
	BANJO_LOSING_MINIGAME = 0x0077,
	SNACKER_SWIMMING = 0x0078,
	CS_CONCERT_MUMBO_PLAYING = 0x0079,
	CS_CONCERT_BANJO_ANGRY = 0x007a,
	CS_CONCERT_BANJO_PLAYING = 0x007b,
	CS_CONCERT_BANJO_END = 0x007c,
	CS_CONCERT_TOOTY_START = 0x007d,
	CS_CONCERT_BANJO_START = 0x007e,
	CS_CONCERT_CUTSCENE = 0x007f,
	CS_CONCERT_TIMER = 0x0080,
	CS_CONCERT_UNKNOWN_0x81 = 0x0081,
	CS_CONCERT_MUMBO_DANCING = 0x0082,
	CS_CONCERT_TOOTY_DANCING = 0x0083,
	TOOTY_HOPPING = 0x0084,
	// 0085
	// 0086 X
	// 0087 X
	// 0088 X
	// 0089 X
	// 008A X
	// 008B X
	RAREWARE_LOGO_FALLING = 0x008c,
	// 008D X
	// 008E X
	NINTENDO_CUBE_WALKING = 0x008f,
	NINTENDO_CUBE_SHRUGGING = 0x0090,
	CS_CONCERT_FROG_HOPPING = 0x0091,
	SHRAPNEL_CHASING = 0x0092,
	TOOTY_RUNNING = 0x0093,
	GRUBLIN_DYING = 0x0094,
	BANJO_IDLE_KAZOOIE_TAUNT = 0x0095,
	SNIPPET_RECOVERING = 0x0096,
	SNIPPET_DYING = 0x0097,
	// 0098
	// 0099
	RIPPER_IDLE = 0x009a,
	RIPPER_CHASING = 0x009b,
	// 009C X
	NIBBLY_CHASING = 0x009d,
	TEEHEE_IDLE = 0x009e,
	TEEHEE_ALERTED = 0x009f,
	PUMPKIN_WALKING = 0x00a0,
	PUMPKIN_JUMPING = 0x00a1,
	CONGA_THROWING_2 = 0x00a2,
	NAPPER_SLEEPING = 0x00a3,
	NAPPER_LOOKING_AROUND = 0x00a4,
	NAPPER_WALKING = 0x00a5,
	NAPPER_ALERTED = 0x00a6,
	MOTZHAND_IDLE = 0x00a7,
	MOTZHAND_PLAYING = 0x00a8,
	POT = 0x00a9,
	YUMYUM_IDLE = 0x00aa,
	YUMYUM_EATING = 0x00ab,
	TEEHEE_CHASING = 0x00ac,
	NIBBLY_FLYING_START = 0x00ad,
	NIBBLY_IDLE = 0x00ae,
	// 00AF X
	BANJO_FALLING_2 = 0x00b0,
	BANJO_CLIMBING_2 = 0x00b1,
	BANJO_CLIMBING_FREEZE = 0x00b2,
	CHOMPA_IDLE = 0x00b3,
	CHOMPA_ATTACKING = 0x00b4,
	BLUBBER_WALKING = 0x00b5,
	BLUBBER_CRYING = 0x00b6,
	BLUBBER_DANCING = 0x00b7,
	BLUBBER_RUNNING = 0x00b8,
	BANJO_DROWNING = 0x00b9,
	// 00BA X
	// 00BB X
	LOCKUP_IDLE = 0x00bc,
	NIPPER_VULNERABLE = 0x00bd,
	NIPPER_HURT = 0x00be,
	NIPPER_ATTACKING = 0x00bf,
	NIPPER_IDLE = 0x00c0,
	// 00C1  Littlebounce
	// 00C2  Wobblybounce
	CLANKER_IDLE = 0x00c3,
	CLANKER_MOUTH_OPEN = 0x00c4,
	GRABBA_APPEARING = 0x00c5,
	GRABBA_HIDING = 0x00c6,
	GRABBA_IDLE = 0x00c7,
	GRABBA_DEFEATED = 0x00c8,
	MAGIC_CARPET = 0x00c9,
	GLOOP_SWIMMING = 0x00ca,
	GLOOP_BLOWING_BUBBLE = 0x00cb,
	BANJO_BEAKBOMB_END = 0x00cc,
	// 00CD Green Grate near RBB… (4B1)
	RUBEE_IDLE = 0x00ce,
	HISTUP_RAISED = 0x00cf,
	HISTUP_RAISING = 0x00d0,
	HISTUP_IN_POT = 0x00d1,
	BANJO_GETTING_UP = 0x00d2, // ;-)
	BANJO_BEAKBOMB_HURT = 0x00d3,
	SWITCH_DOWN = 0x00d4,
	SWITCH_UP = 0x00d5,
	TURBO_TALON_TRAINERS_IDLE = 0x00d6,
	// 00D7
	// 00D8
	GOBI_IDLE = 0x00d9,
	GOBI_PULLING_ON_CHAIN = 0x00da,
	FLIBBIT_HOPPING = 0x00db,
	GOBIS_ROPE_PULLING = 0x00dc,
	GOBIS_ROPE_IDLE = 0x00dd,
	// 00DE X
	RUBEE_PETTING_TOOTS = 0x00df,
	CROC_WALKING = 0x00e0,
	CROC_IDLE = 0x00e1,
	HISTUP_PEEKING = 0x00e2,
	RUBEE_IDLE_2 = 0x00e3,
	RUBEE_PLAYING = 0x00e4,
	GRABBA_SHADOW_SPAWNING = 0x00e5,
	GRABBA_SHADOW_IDLE = 0x00e6,
	GRABBA_SHADOW_HIDING = 0x00e7,
	GRABBA_SHADOW_DEFEATED = 0x00e8,
	SLAPPA_APPEARING = 0x00e9,
	SLAPPA_MOVING = 0x00ea,
	SLAPPA_SLAPPING = 0x00eb,
	SLAPPA_GETTING_UP = 0x00ec,
	ANCIENT_ONE_ENTER_EXIT = 0x00ed,
	SLAPPA_DYING = 0x00ee,
	SLAPPA_HURT = 0x00ef,
	MINIJINXY_EATING = 0x00f0,
	MAGIC_CARPET_2 = 0x00f1,
	// 00F2 X
	// 00F3 X
	GOBI_RELAXING = 0x00f4,
	// 00F5
	BANJO_IDLE_PULLING_KAZOOIE = 0x00f6,
	GOBI_HAPPY = 0x00f7,
	GOBI_RUNNING = 0x00f8,
	BUZZBOMB_FLYING = 0x00f9,
	FLIBBIT_IDLE = 0x00fa,
	FLIBBIT_TURNING = 0x00fb,
	GOBI_GIVING_WATER = 0x00fc,
	GOBI_GETTING_UP = 0x00fd,
	TRUNKER_SHORT = 0x00fe,
	TRUNKER_GROWING = 0x00ff,
	// 0100
	TANKTUP_HEAD_IDLE = 0x0101,
	TANKTUP_HEAD_POUNDED = 0x0102,
	TANKTUP_LEG_BACK_LEFT_HIT = 0x0103,
	TANKTUP_LEG_FRONT_LEFT_HIT = 0x0104,
	TANKTUP_LEG_FRONT_RIGHT_HIT = 0x0105,
	TANKTUP_LEG_BACK_RIGHT_HIT = 0x0106,
	TANKTUP_SPAWNING_JIGGY = 0x0107,
	SIR_SLUSH_IDLE = 0x0108,
	SIR_SLUSH_ATTACKING = 0x0109,
	// 010A X
	// 010B
	BANJO_DUCKING_TURNING = 0x010c,
	BANJO_FLYING_HIT = 0x010d,
	BUZZBOMB_PREPARING_CHARGE = 0x010e,
	BUZZBOMB_CHARGING = 0x010f,
	BUZZBOMB_FALLING = 0x0110,
	BUZZBOMB_DYING = 0x0111,
	FLIBBIT_DYING_START = 0x0112,
	FLIBBIT_DYING_END = 0x0113,
	// 0114 X
	// 0115 X
	BANJO_DUCKING_LOOKING = 0x0116,
	// 0117 Jellyfish (Unknown) 0x117
	// 0118 X
	// 0119 X
	// 011A X
	BANJO_CARRYING_ITEM_THROWING = 0x011b,
	CROC_JUMPING = 0x011c,
	CROC_HURT = 0x011d,
	CROC_DYING = 0x011e,
	WALRUS_IDLE = 0x011f,
	WALRUS_WALKING = 0x0120,
	WALRUS_JUMPING = 0x0121,
	CROC_BITING = 0x0122,
	CROC_EAT_WRONG_THING = 0x0123,
	MR_VILE_EATING = 0x0124,
	YUMBLIE_APPEARING = 0x125,
	YUMBLIE_LEAVING = 0x0126,
	YUMBLIE_IDLE = 0x0127,
	GRUMBLIE_APPEARING = 0x0128,
	GRUMBLIE_LEAVING = 0x0129,
	GRUMBLIE_IDLE = 0x012a,
	TIPTUP_LOOKING_AROUND_SHRUGGING = 0x012b,
	TIPTUP_TAPPING = 0x012c,
	TIPTUP_CHOIR_MEMBER_IDLE = 0x012d,
	TIPTUP_CHOIR_MEMBER_SINGING = 0x012e,
	TIPTUP_CHOIR_MEMBER_HURT = 0x012f,
	JINJO_CIRCLING_START = 0x0130,
	JINJO_CIRCLING_END = 0x0131,
	FLOATSAM_BOUNCING = 0x0132,
	NIPPER_DYING = 0x0133,
	// 0134
	// 0135
	// 0136
	GRIMLET_ATTACKING = 0x0137,
	TEXT_BACKDROP_APPEARING = 0x0138,
	BOTTLES_DISAPPEARING = 0x0139,
	BOTTLES_APPEARING = 0x013a,
	BOTTLES_SCRATCHING = 0x13b,
	BOTTLES_MOLEHILL_IDLE_1 = 0x013c,
	BOTTLES_MOLEHILL_IDLE_2 = 0x013d,
	SNORKEL_SWIMMING = 0x013e,
	SNORKEL_STUCK = 0x013f,
	// 0140
	// 0141
	RBB_ANCHOR_IDLE = 0x0141,
	RBB_ANCHOR_RISING = 0x0142,
	BUTTON = 0x0143,
	JINXY_SNIFFING = 0x0144,
	JINXY_SNEEZING = 0x0145,
	BOSS_BOOMBOX_APPEARING = 0x0146,
	BOOMBOX_HOPPING = 0x0147,
	BOOMBOX_EXPLODING = 0x0148,
	BANJO_FALL_DAMAGE = 0x0149,
	BANJO_LISTENING = 0x014a,
	CROCTUS_IDLE = 0x014b,
	BOGGY_IDLE = 0x014c,
	BOGGY_HIT = 0x014d,
	BOGGY_LAYING_DOWN = 0x14e,
	BOGGY_RUNNING = 0x014f,
	BOGGY_ON_SLED_IDLE = 0x0150,
	RACE_FLAG_HIT = 0x0151,
	RACE_FLAG_IDLE = 0x0152,
	GOLD_CHEST_SPAWNING = 0x0153,
	SNACKER_EATING = 0x0154,
	SNIPPET_GET_UP = 0x0155,
	MUTIE_SNIPPET_WALKING = 0x0156,
	MUTIE_SNIPPET_UPSIDEDOWN_START = 0x0157,
	MUTIE_SNIPPET_UPSIDEDOWN = 0x0158,
	MUTIE_SNIPPET_UPSIDEDOWN_END = 0x0159,
	GRILLE_CHOMPA_ATTACKING = 0x015a,
	GRILLE_CHOMPA_DYING = 0x015b,
	WHIPLASH_IDLE = 0x015c,
	WHIPLASH_ATTACKING = 0x015d,
	// 015E
	CS_CONCERT_BANJO_OFF_SCREEN = 0x015f,
	CS_CONCERT_BUG_CRAWLING = 0x0160,
	// 0161
	TOOTS_IDLE = 0x0162,
	CS_CONCERT_BUZZBOMB_HITTING_LOGO = 0x0163,
	// 0164
	BEEHIVE_IDLE = 0x0165,
	GOLD_CHEST_BOUNCING = 0x0166,
	// 0167 Banjo/MoveVeryLittle (used in small cutscenes)
	// 0168
	// 0169
	// 016A
	SNAREBEAR_SNAPPING = 0x016b,
	SNAREBEAR_IDLE = 0x016c,
	TWINKLY_BOX_OPENING = 0x016d,
	MUMBO_RECLINING = 0x016e,
	ZUBBA_FLYING = 0x016f,
	ZUBBA_IDLE = 0x0170,
	ZUBBA_FALLING = 0x0171,
	ZUBBA_LANDING = 0x0172,
	FLOWER_SPRING_GROWING = 0x0173,
	FLOWER_SUMMER_GROWING = 0x0174,
	FLOWER_AUTUMN_GROWING = 0x0175,
	GOBI_YAWNING = 0x0176,
	GOBI_SLEEPING = 0x0177,
	TWINKLY_APPEARING = 0x0178,
	BOGGY_ON_SLED_TAUNTING = 0x0179,
	BOGGY_ON_SLED_LOOKING_BACK = 0x017a,
	// 017B
	TWINKLY_TWINKLING = 0x017c,
	BOOGYS_CHILDREN_HAPPY = 0x017d,
	BOOGYS_CHILDREN_SAD = 0x017e,
	MUMBO_SWEEPING = 0x017f,
	MUMBO_ROTATION = 0x0180,
	FLOWER_SPRING_IDLE = 0x0181,
	FLOWER_SUMMER_IDLE = 0x0182,
	FLOWER_AUTUMN_IDLE = 0x0183,
	BIG_CLUCKER_ATTACKING_SHORT = 0x0184,
	BIG_CLUCKER_ATTACKING_LONG = 0x0185,
	BIG_CLUCKER_DYING = 0x0186,
	// 0187
	PUMPKIN_DYING = 0x0188,
	FLOATSAM_DYING = 0x0189,
	FP_PRESENT_IDLE = 0x018a,
	// 018B X
	// 018C X
	// 018D
	// 018E
	EYRIE_SPRING_FALLING_ASLEEP = 0x018f,
	EYRIE_SPRING_SLEEPING = 0x0190,
	EYRIE_SUMMER_IDLE = 0x0191,
	EYRIE_SUMMER_GROWING = 0x0192,
	EYRIE_SUMMER_FALLING_ASLEEP = 0x0193,
	EYRIE_SUMMER_SLEEPING = 0x0194,
	EYRIE_AUTUMN_IDLE = 0x0195,
	EYRIE_AUTUMN_GROWING = 0x0196,
	EYRIE_AUTUMN_FALLING_ASLEEP = 0x0197,
	EYRIE_AUTUMN_SLEEPING = 0x0198,
	EYRIE_WINTER_IDLE = 0x0199,
	EYRIE_WINTER_FLYING = 0x019a,
	BANJO_TRANSFORMING = 0x019b,
	WALRUS_HURT = 0x019c,
	WALRUS_DYING = 0x019d,
	WALRUS_ON_SLED = 0x019e,
	WALRUS_LOST_RACE_START = 0x019f,
	// 01A0 Unknown Dying (0x1A0)
	SLED_IDLE = 0x01a1,
	NABNUT_SLEEPING = 0x01a2,
	NABNUT_IDLE = 0x01a3,
	NABNUT_EATING = 0x01a4,
	// 01A5 X
	GNAWTY_IDLE = 0x01a6,
	GNAWTY_HAPPY = 0x01a7,
	GNAWTY_WALKING = 0x01a8,
	WALRUS_LOST_RACE = 0x01a9,
	BOGGY_WON_RACE = 0x01aa,
	BOGGY_LOST_RACE = 0x01ab,
	WOZZA_WITH_JIGGY_IDLE = 0x01ac,
	WOZZA_THROWING_JIGGY = 0x01ad,
	WOZZA_WALKING = 0x01ae,
	TWINKLY_MUNCHER_DYING = 0x01af,
	TWINKLY_MUNCHER_APPEARING = 0x01b0,
	TWINKLY_MUNCHER_IDLE = 0x01b1,
	TWINKLY_MUNCHER_MUNCHING = 0x01b2,
	WOZZA_BEFORE_STOP = 0x01b3,
	WOZZA_SCARED = 0x01b4,
	WOZZA_GIVING_JIGGY = 0x01b5,
	WOZZA_HALF_THROW_FREEZE = 0x01b6,
	CS_INTRO_GREEN_MIST_IDLE = 0x01b7,
	CS_INTRO_DOOR_OPENING = 0x01b8,
	CS_INTRO_GRUNTY_IDLE = 0x01b9,
	// 01BA
	CS_INTRO_GRUNTY_PICKING_NOSE = 0x01bb,
	// 01BC
	CS_INTRO_GRUNTY_ANGRY_AT_DINGPOT = 0x01bd,
	CS_INTRO_GRUNTY_THROWING_BOOGER = 0x01be,
	CS_INTRO_GRUNTY_SHOCKED_CONFUSED = 0x01bf,
	CS_INTRO_GRUNTY_WALKING = 0x01c0,
	// 01C1
	CS_INTRO_DOOR_CLOSING = 0x01c2,
	// 01C3
	CS_INTRO_GRUNTYS_BROOM_FLYING = 0x01c4,
	GRUNTY_FLYING = 0x01c5,
	// 01C6
	CS_INTRO_BANJO_SLEEPING = 0x01c7,
	CS_INTRO_BANJO_WAKING_UP = 0x01c8,
	CS_INTRO_BEDSHEETS_BANJO_SLEEPING = 0x01c9,
	CS_INTRO_BEDSHEETS_BANJO_AWAKE = 0x01ca,
	CS_INTRO_KAZOOIE_ON_COAT_RACK_APPEARING = 0x01cb,
	// 01CC
	CS_INTRO_KAZOOIE_ON_COAT_RACK_IDLE = 0x01cd,
	CS_INTRO_CURTAIN = 0x01ce,
	CS_INTRO_KAZOOIE_ON_COAT_RACK_UNEASY = 0x01cf,
	TOOTY_IDLE = 0x01d0,
	// 01D1
	// 01D2
	CS_INTRO_KAZOOIE_ON_COAT_RACK_WAKING_BANJO = 0x01d3,
	CS_INTRO_KAZOOIE_ON_COAT_RACK_FALLING = 0x01d4,
	TOOTY_SCARE = 0x01d5,
	GRUBLIN_WALKING_2 = 0x01d6,
	GRUBLIN_ALERTED = 0x01d7,
	GRUBLIN_CHASING = 0x01d8,
	GRUBLIN_DYING_2 = 0x01d9,
	SNIPPET_IDLE = 0x01da,
	MUTIE_SNIPPET_IDLE = 0x01db,
	BEE_FLYING = 0x01dc,
	BEE_WALKING = 0x01dd,
	BEE_IDLE = 0x01de,
	BEE_UNKNOWN_0X1DF = 0x01df,
	BEE_HURT = 0x01e0,
	BEE_DYING = 0x01e1,
	BEE_JUMPING = 0x01e2,
	GV_BRICK_WALL_SMASHING = 0x01e3,
	LIMBO_IDLE = 0x01e4,
	LIMBO_ALERTED = 0x01e5,
	LIMBO_CHASING = 0x01e6,
	LIMBO_BREAKING = 0x01e7,
	LIMBO_RECOVERING = 0x01e8,
	MUMMUM_IDLE = 0x01e9,
	MUMMUM_CURLING = 0x01ea,
	MUMMMUM_UNCURLING = 0x01eb,
	// 01EC
	RIPPER_HURT = 0x01ed,
	RIPPER_DYING = 0x01ee,
	// 01EF
	// 01F0  Web (Floor)
	// 01F1  Web Dying (Floor)
	// 01F2  Web (Wall)
	// 01F3  Web Dying (Wall)
	SHRAPNEL_IDLE = 0x01f4,
	// 01F5
	// Jiggy Transition
	// 01F6
	// 01F7  Kazooie Feathers Poof (End intro)
	// 01F8  Bottles PointAtGrunty
	// 01F9  Tooty Confused
	SEXY_GRUNTY_WALKING = 0x01fa,
	SEXY_GRUNTY_CHECKING_SELF_OUT = 0x01fb,
	UGLY_TOOTY_WALKING = 0x01fc,
	UGLY_TOOTY_PUNCHING = 0x01fd,
	// 01FE  Machine Door Opening
	// 01FF  Machine Door Closing
	// 0200  Static Machine Door Up
	KLUNGO_WALKING = 0x0201,
	KLUNGO_PUSHING_BUTTON = 0x0202,
	// 0203 X
	GRUNTY_FALLING = 0x0204,
	// 0205  Dingpot wap
	// 0206  Dingpot
	// 0207  Grunty Crammed in Machine
	ROYSTEN_IDLE = 0x0208,
	CUCKOO_CLOCK_IDLE = 0x0209,
	CUCKOO_CLOCK_CHIMING = 0x020a,
	// 020B  Grunty Falling
	// 020C
	KLUNGO_PULLING_LEVER = 0x020d,
	// 020E Machine Lever down
	KLUNGO_LAUGHING = 0x020f,
	// 0210  Machine
	// 0211
	WARP_CAULDRON_ACTIVATING = 0x0212,
	WARP_CAULDRON_SLEEPING = 0x0213,
	WARP_CAULDRON_IDLE = 0x0214,
	WARP_CAULDRON_TELEPORTING = 0x0215,
	WARP_CAULDRON_REJECTING = 0x0216,
	// 0217  Transform Pad
	// 0218
	// 0219
	EYRIE_SUMMER_EATING = 0x021a,
	EYRIE_AUTUMN_EATING = 0x021b,
	// 021C
	EYRIE_FLYING = 0x021d,
	EYRIE_WINTER_POOPING_JIGGY = 0x021e,
	// 021F X
	// 0220  Sir. Slush
	// 0221  Wozza (in cave)
	// 0222  Boggy Sleeping
	TOPPER_IDLE = 0x0223,
	TOPPER_DYING = 0x0224,
	// 0225  Colliwobble
	// 0226  Bawl
	// 0227  Bawl Dying
	// 0228
	// 0229  Whipcrack Attacking
	// 022A  Whipcrack
	NABNUT_FAT = 0x022b,
	NABNUT_CRYING = 0x022c,
	NABNUT_HAPPY = 0x022d,
	NABNUT_IDLE_2 = 0x022e,
	NABNUT_RUNNING = 0x022f,
	MRS_NABNUT_SLEEPING = 0x0230,
	NABNUTS_BEDSHEETS = 0x0231,
	// 0232  X
	// 0233  Chinker
	// 0234  Snare-Bear (Winter)
	// 0235  Sarcophagus (GV Lobby)
	PUMPKIN_HURT = 0x0236,
	// 0237  Twinkly Present
	LOGGO_IDLE = 0x0238,
	// 0239  Leaky Hop
	// 023A  Gobi Fly
	// 023B  Gobi Fly Prepare Attack
	// 023C  Gobi Fly Charge
	// 023D  Gobi Fly Dying
	// 023E Portrait Chompa (Picture Monster)
	// 023F  Portrait
	LOGGO_FLUSHING = 0x0240,
	// 0241
	// 0242  Gobi Relaxing
	GRUBLIN_HOOD_IDLE = 0x0243,
	GRUBLIN_HOOD_ALERTED = 0x0244,
	GRUBLIN_HOOD_CHASING = 0x0245,
	GRUBLIN_HOOD_DYING = 0x0246,
	// 0247
	// 0248
	// 0249
	FS_BANJO_COOKING_IDLE = 0x024a,
	FS_BANJO_COOKING_SELECTED = 0x024b,
	FS_BANJO_COOKING_SPIN = 0x024c,
	FS_BANJO_SLEEPING_IDLE = 0x024d,
	FS_BANJO_SLEEPING_SELECTED = 0x024e,
	FS_BANJO_SLEEPING_SPRING = 0x024f,
	FS_BANJO_PLAYING_GAMEBOY_IDLE = 0x0250,
	FS_BANJO_PLAYING_GAMEBOY_THUMBSUP = 0x0251,
	FS_BANJO_PLAYING_GAMEBOY_SPRING = 0x0252,
	BIGBUTT_HURT = 0x0253,
	BIGBUTT_DEFEATED_START = 0x0254,
	BIGBUTT_RECOVERING = 0x0255,
	// 0256
	// 0257  Grunty Green Spell (flying)
	// 0258  Grunty Hurt
	// 0259  Grunty Hurt
	// 025A  Grunty Fireball Spell
	ACORN_IDLE = 0x025b,
	// 025C  Grunty Phase 1 Swooping
	// 025D  Grunty Entring Final Phase
	// 025E  Grunty Phase 1 Vulnerable
	// 025F  Grunty
	// 0260  Grunty Fireball Spell
	// 0261  Grunty Green Spell
	JINJO_STATUE_RISING = 0x0262,
	// 0263  Grunty Fall off Broom
	JINJO_STATUE_ACTIVATING = 0x0264,
	JINJO_STATUE_IDLE = 0x0265,
	// 0266  Grunty/Falling down tower
	// 0267  Big Blue Egg
	// 0269  Big Red Feather
	// 026A  Big Gold Feather
	BRENTILDA_IDLE = 0x026b,
	BRENTILDA_HANDS_ON_HIPS = 0x026c,
	GRUNTLING_IDLE = 0x026d,
	GRUNTLING_ALERTED = 0x026e,
	GRUNTLING_CHASING = 0x026f,
	GRUNTLING_DYING = 0x0270,
	// 0271  Door of Grunty
	CHEATO_IDLE = 0x0272,
	SNACKER_HURT = 0x0273,
	SNACKER_DYING = 0x0274,
	// 0275  Jinjonator Activating
	// 0276  Jinjonator Charging
	// 0277
	// 0278  Jinjonator Recoil
	// 0279  Grunty JawDrop > Shiver
	// 027A  Grunty Hurt by Jinjonator
	// 027B  Jinjonator? (spin spin spin, stop far way, shake)
	// 027C  Jinjonator Charging
	// 027D  Jinjonator Final Hit
	// 027E  Jinjonator Taking Flight
	// 027F  Jinjonator Circling
	// 0280  Jinjonator Attacking
	// 0281  Wishy-Washy-Banjo 'Doooohh….'
	// 0282  Banjo Unlocking Note Door
	// 0283  Grunty Chattering Teeth
	// 0284  PRESS START Appearing
	// 0285  PRESS START
	// 0286  NO CONTROLLER Appearing
	// 0287  NO CONTROLLER
	FLIBBIT_HURT = 0x0288,
	GNAWTY_SWIMMING = 0x0289,
	FF_WASHING_MACHINE = 0x028a,
	// 028B Grunty
	GRUNTY_DOLL = 0x028c,
	// 028D  Grunty Walking
	// 028E  Tooty Looking Around
	// 028F  Dingpot
	// 0290  Dingpot Shooting
	// 0291  Mumbo Flipping Food
	// 0292  Food Flipping
	// 0293  Banjo Drinking
	// 0294  Mumbo Screaming
	// 0295  Banjo's Chair Breaking
	// 0296  Bottles Eating corn
	// 0297  Mumbo Skidding/Giving Flower
	// 0298
	// 0299  Bottles Falling off chair
	// 029A  Banjo Drunk
	// 029B  Kazooie Hits Banjo
	// 029C  Yellow Jinjo Waving & Whistling
	// 029D  Melon Babe Walking
	// 029E  Blubber On Jetski
	// 029F  Blubber Cheering on JetSki
	// 02A0  Curtains (Bottles Bonus)
	// 02A1  Banjo's Hand Dropping Jiggy
	// 02A2  Banjo's Hand
	// 02A3  Banjo's Hand Turning Jiggy (Right)
	// 02A4  Banjo's Hand Turning Jiggy (Left)
	// 02A5  Banjo's Hand Grabbing Jiggy
	// 02A6  Banjo's Hand Thumbs Up
	// 02A7  Banjo's Hand Placing Jiggy
	// 02A8  Banjo's Hand Thumbs Down
	// 02A9  Nibbly Falling
	// 02AA  Nibbly Dying
	// 02AB  Tee-Hee Dying
	// 02AC  Grunty Upset
	// 02AD  Grunty Looking
	// 02AE  Tree Shaking (Mumbo)
	// 02AF  Mumbo Sliding down tree
	// 02B0  Mumbo on tree (waving pictures)
	// 02B1  Mumbo falling from tree
	// 02B2  Bottles Eating watermelon
	// 02B3  Mumbo Hit by Coconuts
	// 02B4  Mumbo shake head sitting down
	// 02B5  Mumbo Jumping > Running
	// 02B6  Klungo Pushing rock
	// 02B7  Klungo Tired
	// 02B8  Tooty Drinking
	// 02B9  Grunty's Rock
	// 02BA  Kazooie Talking
	// 02BB  Mumbo Running After Melon Babe
	// 02BC  Mumbo Talking
	// 02BD
	// 02BE
	// 02BF
	// 02C0  Piranha Dying
	// 02C1
	// 02C2
	// 02C3
	// 02C4
	// 02C5  Grunty Preparing charge
	// 02C6  Mumbo's Hand
	// 02C7  Mumbo's Hand Appearing
	// 02C8  Mumbo's Hand Leaving
}

export enum ActorType {
	BIGBUTT = 0x0004,
	TICKER = 0x0005,
	GRUBLIN = 0x0006,
	MUMBO_0X0007 = 0x0007,
	MM_CONGA = 0x0008,
	MM_HUT = 0x0009,
	FISH = 0x000a,
	SHOCK_SPRING_PAD = 0x000b,
	MUD_HUT = 0x000c,
	WOOD_DEMOLISHED = 0x000d,
	BULL_2 = 0x000e,
	MM_CHIMPY = 0x000f,
	MM_JU_JU_HITBOX = 0x0011,
	BEEHIVE = 0x0012,
	MM_CONGA_ORANGE = 0x0014,
	SHADOW = 0x0017,
	LEAKY = 0x001e,
	OYSTER = 0x0024,
	MMM_CEMETARY_POT = 0x0025,
	CLIMBABLE_POLE = 0x0026,
	MM_COLLECTABLE_ORANGE = 0x0029,
	TTC_GOLD_BULLION = 0x002a,
	TURBO_TRAINERS = 0x002c,
	MUMBO_TOKEN = 0x002d,
	PHANTOM = 0x0039,
	MMM_MOTZAND = 0x003a,
	BIG_KEY = 0x003c,
	RBB_PROPELLER_1 = 0x003d,
	RBB_PROPELLER_2 = 0x003e,
	RBB_PROPELLER_3 = 0x003f,
	RBB_PROPELLER_4 = 0x0040,
	RBB_PROPELLER_5 = 0x0041,
	RBB_PROPELLER_6 = 0x0042,
	SCREW = 0x0043,
	ROCK = 0x0044,
	UNKNOWN_0X0045 = 0x0045,
	JIGGY = 0x0046,
	EMPTY_HONEYCOMB_PIECE = 0x0047,
	EXTRA_LIFE = 0x0049,
	WOOD_EXPLOSION = 0x004a,
	EXPLOSION_2 = 0x004b,
	STEAM = 0x004c,
	STEAM_2 = 0x004d,
	SPARKLES = 0x004e,
	SPARKLES_2 = 0x004f,
	HONEYCOMB = 0x0050,
	MUSIC_NOTE = 0x0051,
	EGG = 0x0052,
	TTC_RED_ARROW = 0x0053,
	TTC_RED_QUESTION_MARK = 0x0054,
	TTC_RED_X = 0x0055,
	EXPLOSION = 0x0056,
	MM_ORANGE_PAD = 0x0057,
	MM_JUJU_TOTEM_POLE = 0x0059,
	JIGGY_IN_HAND = 0x005a,
	EGG_1 = 0x005b,
	COLLECTABLE_JINJO_YELLOW = 0x005e,
	COLLECTABLE_JINJO_ORANGE = 0x005f,
	COLLECTABLE_JINJO_BLUE = 0x0060,
	COLLECTABLE_JINJO_PINK = 0x0061,
	COLLECTABLE_JINJO_GREEN = 0x0062,
	WATER_LEVEL_SWITCH = 0x0064,
	WADING_BOOTS = 0x0065,
	UNKNOWN_0X0066 = 0x0066,
	TTC_SNIPPET = 0x0067,
	SNACKER = 0x0068,
	TTC_YUMYUM = 0x0069,
	UNKNOWN_0X006C = 0x006c,
	BANJO_DOOR = 0x006d,
	CS_CONCERT_BK = 0x008e,
	CS_CONCERT_MUMBO = 0x008f,
	YELLOW_JINJO_1 = 0x0090,
	YELLOW_JINJO_2 = 0x0091,
	CS_CONCERT_TOOIE = 0x0092,
	CS_NINTENDO_CUBE = 0x0093,
	CS_RAREWARE_LOGO = 0x0094,
	YELLOW_JINJO_3 = 0x0095,
	YELLOW_JINJO_4 = 0x0096,
	YELLOW_JINJO_5 = 0x0097,
	YELLOW_JINJO_6 = 0x0098,
	UNKNOWN_0X0099 = 0x0099,
	UNKNOWN_0X009A = 0x009a,
	CS_CONCERT_BULL = 0x009b,
	CS_CONCERT_FROG = 0x009c,

	// 	{id=0x009D, name="Bull"},
	GRUNTY_1 = 0x009e,
	YELLOW_JINJO_7 = 0x009f,
	// 	{id=0x00A0, name="Banjo-Kazooie Sign"},
	UNKNOWN_0X00A1 = 0x00a1,
	// 	{id=0x00A2, name="Fire Sparkle"},
	YELLOW_JINJO_8 = 0x00a3,
	UNKNOWN_0X00A4 = 0x00a4,
	CS_CONCERT_BUZZBOMB = 0x00a5,
	BGS_YUMBLIE = 0x00a6,
	CS_BBQ_MUMBO = 0x00a7,
	CS_BBQ_1 = 0x00a8,
	CS_BBQ_2 = 0x00a9,
	CS_INTRO_DINGPOT_1 = 0x00aa,
	CS_INTRO_GRUNTY_ARMS = 0x00ab,
	GRUNTY_2 = 0x00ac,
	CS_INTRO_NIBBLY = 0x00ad,
	CS_INTRO_DINGPOT_2 = 0x00ae,
	CS_INTRO_GREEN_MIST = 0x00af,
	CS_INTRO_BOTTLES = 0x00b0,
	CS_INTRO_BOTTLES_MOLEHILL = 0x00b1,
	CS_INTRO_MACHINE_ROOM_DOOR = 0x00b2,
	CS_INTRO_TOOTY = 0x00b4,
	CS_INTRO_GRUNTYS_BROOMSTICK = 0x00b5,
	CS_INTRO_GRUNTY_ON_BROOMSTICK = 0x00b6,
	YELLOW_JINJO_9 = 0x00b7,
	CS_INTRO_BANJO_SLEEPING = 0x00b8,
	CS_INTRO_BED = 0x00b9,
	YELLOW_JINJO_10 = 0x00ba,
	CS_INTRO_KAZOOIE_ON_COAT_RACK = 0x00bb,
	CS_INTRO_BANJOS_CURTAINS = 0x00bc,
	CS_INTRO_CURTAINS_PURPLE_CHECKERED = 0x00bc,
	CS_INTRO_BANJOS_DOOR = 0x00bd,
	// 	{id=0x00BD, name="Door, Yellow 2D"},
	YELLOW_JINJO_11 = 0x00be,
	YELLOW_JINJO_12 = 0x00bf,
	// 	{id=0x00C0, name="Unknown 0x00C0"},
	// 	{id=0x00C1, name="Jiggy Cutout Board"},
	CS_GAMEOVER_SEXY_GRUNTY = 0x00c2,
	CS_GAMEOVER_UGLY_TOOTY = 0x00c3,
	// 	{id=0x00C5, name="Chimpy's Tree Stump"},
	MMM_RIPPER = 0x00c7,
	// 	{id=0x00C8, name="Boggy on Sled 2"},
	MMM_TEEHEE = 0x00ca,
	// 	{id=0x00CB, name="Barrel Top"},
	// 	{id=0x00E4, name="Flight Pad"},
	// 	{id=0x00E4, name="Fly Pad"},
	CC_GLOOP = 0x00e6,
	// 	{id=0x00E7, name="Unknown 0x00E7"},
	BGS_TANKTUP = 0x00e8,
	BGS_TANKTUP_HEAD = 0x00e9,
	BGS_TANKTUP_LEG_1 = 0x00ea,
	BGS_TANKTUP_LEG_2 = 0x00eb,
	BGS_TANKTUP_LEG_3 = 0x00ec,
	EGG_2 = 0x00ee,
	EGG_3 = 0x00ef,
	EGG_4 = 0x00f0,
	// 	{id=0x00F1, name="Leaf"},
	TTC_BLACK_SNIPPET = 0x00f2,
	// 	{id=0x00F3, name="Unknown 0x00F3"},
	CC_MUTIE_SNIPPET = 0x00f5,
	// 	{id=0x00F6, name="Big Alligator"},
	// 	{id=0x0101, name="Side of Rock"},
	// 	{id=0x0102, name="Side of Rock"},
	// 	{id=0x0108, name="Shadow 0x0108"},
	// 	{id=0x0109, name="Big Door"},
	// 	{id=0x010A, name="Main Door"},
	MMM_CELLAR_DOOR = 0x010b,
	//   {id=0x010C, name="Locked Gade"},

	// 	{id=0x010D, name="Gate"},
	// 	{id=0x010E, name="Hatch"},
	MMM_CHURCH_DOOR = 0x0114,
	TTC_BLUBBER = 0x0115,
	// 	{id=0x0116, name="Bullseye"},
	TTC_NIPPER_SHELL = 0x0117,
	// 	{id=0x0118, name="Grey Slappa"},
	GV_MAGIC_CARPET_1 = 0x0119,
	// 	{id=0x011A, name="Sarcopphagus"},
	GV_RUBEE = 0x011b,
	GV_HISTUP = 0x011c,
	// 	{id=0x011D, name="Pot"},
	// 	{id=0x011E, name="Hand Shadows"},
	// 	{id=0x011F, name="Dirt flies up"},
	// 	{id=0x0120, name="Purple Slappe"},
	// 	{id=0x0121, name="Big Jinxy Head"},
	// 	{id=0x0122, name="Square Shadow"},
	GV_MAGIC_CARPET_2 = 0x0123,
	// 	{id=0x0124, name="Sir Slush, Snowman"},
	// 	{id=0x0124, name="Snowman"},
	// 	{id=0x0125, name="Snowball"},
	// 	{id=0x0126, name="Snowman's Hat"},
	// 	{id=0x0129, name="Red Feather"},
	// 	{id=0x012C, name="Bottles Mound"},
	// 	{id=0x012C, name="Mole Hill"},
	GV_GOBI_1 = 0x012e,
	// 	{id=0x012F, name="Bamboo"},
	// 	{id=0x0130, name="Jinxy's Legs"},
	GV_GOBI_2 = 0x0131,
	GV_TRUNKER = 0x0132,
	// 	{id=0x0133, name="Flibbit"},
	// 	{id=0x0134, name="Buzzbomb"},
	// 	{id=0x0134, name="Dragon Fly"},
	GV_GOBI_3 = 0x0135,
	BGS_FLIBBET_YELLOW = 0x0137,
	// 	{id=0x0139, name="Yumblie"},
	BGS_MR_VILE = 0x013a,
	RBB_FLOATSAM = 0x013b,
	// 	{id=0x013E, name="Nothing?"},
	GV_SUN_SWITCH = 0x013f,
	GV_SUN_DOOR = 0x0140,
	GV_STAR_HATCH = 0x0142,
	GV_KAZOOIE_DOOR = 0x0143,
	GV_STAR_SWITCH = 0x0144,
	GV_HONEYCOMB_SWITCH = 0x0145,
	GV_KAZOOIE_TARGET = 0x0146,
	GV_ANCIENT_ONE = 0x0147,
	BGS_GREEN_JIGGY_SWITCH = 0x014e,
	BGS_DESTROYED_JIGGY = 0x014f,
	// 	{id=0x0151, name="Lockup"},
	// 	{id=0x0152, name="Lockup"},
	// 	{id=0x0153, name="Lockup"},
	FP_CHRISTMAS_TREE = 0x015f,
	// 	{id=0x0160, name="Boggy on Sled"},
	// 	{id=0x0161, name="Unknown 0x0161"},
	// 	{id=0x0162, name="Unknown 0x0162"},
	// 	{id=0x0163, name="Bat"},
	SM_COLIWOBBLE = 0x0164,
	// 	{id=0x0165, name="Bawl"},
	SM_TOPPER = 0x0166,
	// 	{id=0x0167, name="Coliwobble (Spawns Extra Honeycomb Piece)"},
	CCW_WINTER_SWITCH = 0x0168,
	// 	{id=0x0169, name="Door"},
	CCW_AUTUMN_SWITCH = 0x016a,
	// 	{id=0x016B, name="Door"},
	CCW_SUMMER_SWITCH = 0x016c,
	// 	{id=0x016D, name="Door"},
	SM_QUARRY = 0x016f,
	// 	{id=0x0172, name="Weird Green Ball 1"},
	// 	{id=0x0173, name="Weird Green Ball 2"},
	//   {id=0x0174, name="Weird Green Ball 3"},

	// 	{id=0x0175, name="Ship Propeller"},
	// 	{id=0x0176, name="Green propeller switch"},
	// 	{id=0x0177, name="Shaft"},
	// 	{id=0x0178, name="Spinning Platform 1"},
	// 	{id=0x0179, name="Spinning Platform 2"},
	// 	{id=0x017A, name="Spinning Platform 3"},
	// 	{id=0x017B, name="Grey Cog 1"},
	// 	{id=0x017C, name="Grey Cog 2"},
	// 	{id=0x017D, name="Grey Cog 3"},
	// 	{id=0x017E, name="Shaft 1"},
	// 	{id=0x017F, name="Shaft 2"},
	// 	{id=0x0180, name="Shaft 3"},
	// 	{id=0x0181, name="Sled 1"},
	// 	{id=0x0182, name="Sled 2"},
	// 	{id=0x018F, name="Honeycomb Switch"},
	// 	{id=0x0191, name="Secret X Barrel Top"},
	FILE_SELECT_BANJO_PLAYING_GAMEBOY = 0x0196,
	FILE_SELECT_BANJO_COOKING = 0x0197,
	FILE_SELECT_BANJOS_BED = 0x0198,
	FILE_SELECT_BANJOS_CHAIR = 0x0199,
	FILE_SELECT_BANJOS_KITCHEN = 0x019a,
	// 	{id=0x019B, name="Another Secret can get in desert"},
	// 	{id=0x019B, name="SNS Conversation Regarding Secrets on Beach"},
	// 	{id=0x019C, name="THE END"},
	// 	{id=0x01BB, name="Propeller 7"},
	// 	{id=0x01BC, name="Propeller 8"},
	// 	{id=0x01BD, name="Propeller 9"},
	// 	{id=0x01BE, name="Boat Propeller Switch"},
	// 	{id=0x01BF, name="1 Switch"},
	// 	{id=0x01C0, name="2 Switch"},
	// 	{id=0x01C1, name="3 Switch"},
	// 	{id=0x01C2, name="Gold Whistle 1"},
	// 	{id=0x01C3, name="Gold Whistle 2"},
	// 	{id=0x01C4, name="Gold Whistle 3"},
	// 	{id=0x01C6, name="Pipe"},
	// 	{id=0x01C7, name="Anchor Switch"},
	RBB_SNORKEL = 0x01c8,
	RBB_ANCHOR_AND_CHAIN = 0x01c9,
	RBB_RAREWARE_FLAG_POLE = 0x01ca,
	// 	{id=0x01CC, name="Grill Chompa"},
	LAIR_CHEATO_1 = 0x01d5,
	LAIR_CHEATO_2 = 0x01d6,
	LAIR_CHEATO_3 = 0x01d7,
	// 	{id=0x01D8, name="Big Blue Egg"},
	// 	{id=0x01D9, name="Big Red Feather"},
	// 	{id=0x01DA, name="Big Gold Feather"},
	// 	{id=0x01DB, name="GAME OVER Logo"},
	// 	{id=0x01DC, name="BANJO-KAZOOIE Logo"},
	// 	{id=0x01DD, name="Copyright Info"},
	// 	{id=0x01DE, name="PRESS START"},
	// 	{id=0x01DF, name="NO CONTROLLER"},
	// 	{id=0x01E0, name="Jiggy Picture"},
	// 	{id=0x01E1, name="Iron Gate"},
	// 	{id=0x01E2, name="Spring Switch"},
	// 	{id=0x01E3, name="Door"},
	// 	{id=0x01E4, name="Toots"},
	// 	{id=0x01E5, name="Dust flies"},
	// 	{id=0x01E5, name="Firecrackers?!"},
	// 	--{id=0x01E7, name="Kitchen (Banjo's House)},
	// 	{id=0x01E9, name="Venus Flytrap"},
	FP_MOGGY = 0x01ea,
	FP_SOGGY = 0x01eb,
	FP_GROGGY = 0x01ec,
	FP_COLLECTABLE_PRESENT_BLUE = 0x01ed,
	FP_COLLECTABLE_PRESENT_GREEN = 0x01ef,
	FP_COLLECTABLE_PRESENT_RED = 0x01f1,
	FP_WOZZA_OUTSIDE = 0x01f3,
	// 	{id=0x01F5, name="Kazooie Door 2"},
	// 	{id=0x01F7, name="Pyramid"},
	// 	{id=0x01F8, name="Unknown 0x01F8"},
	// 	{id=0x01F9, name="Cactus"},
	BGS_CROCTUS = 0x01fa,
	// 	{id=0x01FB, name="BGS Maze Jiggy Switch"},
	// 	{id=0x01FD, name="Clock Switch"},
	// 	{id=0x01FE, name="Gate"},
	// 	{id=0x01FF, name="Red Feather"},
	// 	{id=0x0200, name="Gold Feather"},
	// 	{id=0x0203, name="Note Door"},
	MM_WITCH_SWITCH = 0x0204,
	MMM_WITCH_SWITCH = 0x0206,
	TTC_WITCH_SWITCH = 0x0208,
	RBB_WITCH_SWITCH = 0x020b,
	// 	{id=0x020D, name="Brick wall"},
	// 	{id=0x020E, name="Entrance door to MM"},
	// 	{id=0x020F, name="RBB Entrance Door"},
	//   {id=0x0210, name="BGS Entrance Door"},

	// 	{id=0x0211, name="Chest lid"},
	// 	{id=0x0212, name="Big Iron Bars"},
	// 	{id=0x0213, name="Circular Grate"},
	// 	{id=0x0214, name="Grate Switch"},
	// 	{id=0x0215, name="Tall Pipe 1"},
	// 	{id=0x0216, name="Tall Pipe 2"},
	// 	{id=0x0217, name="Pipe Switch"},
	// 	{id=0x0218, name="Pipe"},
	// 	{id=0x0219, name="Pipe Switch 2"},
	// 	{id=0x021A, name="CC Entrance grates"},
	// 	{id=0x021B, name="Grunty's Hat"},
	// 	{id=0x021C, name="Wooden Door"},
	// 	{id=0x021D, name="Steel Door"},
	// 	{id=0x021E, name="Circular Green Grate"},
	// 	{id=0x021F, name="Circular Brown Grate"},
	// 	{id=0x0220, name="RBB Jigsaw grate"},
	// 	{id=0x0221, name="Water Switch 1"},
	// 	{id=0x0222, name="Water Switch 2"},
	// 	{id=0x0223, name="Water Switch 3"},
	// 	{id=0x0224, name="Ice Ball"},
	// 	{id=0x0224, name="Sarcopphagus"},
	// 	{id=0x0225, name="Rareware box"},
	// 	{id=0x0226, name="GV Entrance"},
	// 	{id=0x0227, name="Phantom Glow"},
	// 	{id=0x0228, name="Invisible Wall"},
	// 	{id=0x0229, name="House"},
	// 	{id=0x022B, name="Frozen Mumbo Hut"},
	// 	{id=0x022C, name="Christmas Present Stack"},
	// 	{id=0x022D, name="Snowy Bridge"},
	// 	{id=0x022E, name="Snowy Bridge 2"},
	// 	{id=0x022F, name="Snowy Bridge 3"},
	// 	{id=0x0230, name="Cobweb"},
	// 	{id=0x0231, name="Big yellow cobweb"},
	// 	{id=0x0233, name="Mumbo's Hut"},
	// 	{id=0x0234, name="CCW Entrance Door"},
	// 	{id=0x0235, name="FP Entrance Door"},
	// 	{id=0x0236, name="FP Entrance Door 2"},
	CCW_WITCH_SWITCH = 0x0237,
	FP_WITCH_SWITCH = 0x0239,
	// 	{id=0x023A, name="Wooden snow drift texture"},
	// 	{id=0x023B, name="Cauldron"},
	// 	{id=0x023C, name="CCW Switch"},
	// 	{id=0x023D, name="Mumbo Transformation Pad"},
	// 	{id=0x023E, name="Empty wooden coffin"},
	// 	{id=0x023F, name="Skylights"},
	// 	{id=0x0242, name="Unknown 0x0242"},
	// 	{id=0x0243, name="Wooden Panel"},
	// 	{id=0x0244, name="Sarcopphagus Lid"},
	// 	{id=0x0245, name="Sarcopphagus switch"},
	// 	{id=0x0246, name="Flying pad switch"},
	// 	{id=0x0247, name="Kazooie fly disk"},
	//   {id=0x0248, name="Shock jump switch"},

	// 	{id=0x0249, name="Kazooie Shock Spring disc"},
	// 	{id=0x0253, name="Piece of glass panel"},
	// 	{id=0x0254, name="Piece of glass panel"},
	// 	{id=0x0255, name="Tomb"},
	// 	{id=0x0256, name="Witch Switch (GV)"},
	// 	{id=0x0257, name="Witch Switch (BGS)"},
	// 	{id=0x0258, name="Tomb Top"},
	// 	{id=0x0259, name="Grunty eye switch 1"},
	// 	{id=0x025A, name="Grunty eye switch 2"},
	CC_WITCH_SWITCH = 0x025b,
	// 	{id=0x025C, name="Sharkfood Island"},
	SNS_ICE_KEY = 0x025d,
	SNS_EGG = 0x025e,
	// 	{id=0x025F, name="Nabnut's Window Spring"},
	// 	{id=0x0260, name="Nabnut's Window Summer"},
	// 	{id=0x0261, name="Nabnut's Window Fall"},
	// 	{id=0x0262, name="Nabnut's Window Winter"},
	// 	{id=0x0263, name="Safety Boat"},
	// 	{id=0x0264, name="Safety Boat"},
	// 	{id=0x0265, name="Door"},
	// 	{id=0x0266, name="Window 1"},
	// 	{id=0x0267, name="Window 2"},
	BGS_TIPTUP = 0x027a,
	// 	{id=0x027B, name="Choir Member (Yellow)"},
	// 	{id=0x027C, name="Choir Member (Cyan)"},
	// 	{id=0x027D, name="Choir Member (Blue)"},
	// 	{id=0x027E, name="Choir Member (Red)"},
	// 	{id=0x027F, name="Choir Member (Pink)"},
	// 	{id=0x0280, name="Choir Member (Purple)"},
	// 	{id=0x0281, name="Kaboom Part 1"},
	// 	{id=0x0282, name="Kaboom Part 2"},
	// 	{id=0x0283, name="Kaboom Part 3"},
	// 	{id=0x0284, name="Kaboom Part 4"},
	// 	{id=0x0285, name="Big Jinxy Head"},
	// 	{id=0x0286, name="Big Jinxy Head 2"},
	// 	{id=0x0287, name="Big Jinxy Head 3"},
	// 	{id=0x0288, name="Weird Green Ball"},
	//   {id=0x0289, name="Vent"},

	// 	{id=0x028A, name="Underwater Whipcrack"},
	// 	{id=0x028B, name="Waterfall/Cauldron Sound"},
	// 	{id=0x028C, name="Green Drain 1"},
	// 	{id=0x028D, name="Green Drain 2"},
	// 	{id=0x028E, name="Green Drain 3"},
	// 	{id=0x028F, name="Vent"},
	// 	{id=0x0290, name="Propeller 10"},
	// 	{id=0x0291, name="Propeller 11"},
	// 	{id=0x0292, name="Spinning SawBlade (Fast)"},
	// 	{id=0x0293, name="Propeller 13"},
	// 	{id=0x0294, name="Propeller 14"},
	// 	{id=0x0295, name="Propeller 15"},
	// 	{id=0x0296, name="Bell Buoy"},
	// 	{id=0x0297, name="Row Boat"},
	// 	{id=0x0298, name="Flat Board"},
	// 	{id=0x0299, name="Lump of Honey"},
	// 	{id=0x029A, name="Flat Board"},
	// 	{id=0x029B, name="Zubba"},
	// 	{id=0x029C, name="Zubba (Attacker)"},
	// 	{id=0x029D, name="Beakstalk"},
	// 	{id=0x029E, name="Gobi"},
	// 	{id=0x029F, name="Big Clucker"},
	// 	{id=0x02A0, name="Unknown 0x02A0"},
	// 	{id=0x02A1, name="Eyrie"},
	// 	{id=0x02A2, name="Catapiller"},
	// 	{id=0x02A3, name="Big Eyrie"},
	// 	{id=0x02A4, name="TNT Box Part 1"},
	// 	{id=0x02A5, name="Extra Life Spawn Location (RBB)"},
	// 	{id=0x02A6, name="Nabnut 1"},
	// 	{id=0x02A7, name="Nabnut 2"},
	// 	{id=0x02A8, name="Nabnut 3"},
	// 	{id=0x02A9, name="Acorn"},
	// 	{id=0x02AA, name="Gnawty 1"},
	// 	{id=0x02AB, name="Gnawty (Summer)"},
	// 	{id=0x02AC, name="Gnawty's Boulder"},
	// 	{id=0x02AE, name="Leaf Particles (Screen Overlay)"},
	// 	{id=0x02B0, name="Rain"},
	// 	{id=0x02B2, name="Snow"},
	// 	{id=0x02B5, name="Nonsense picture"},
	// 	{id=0x02D8, name="Two Poles"},
	// 	{id=0x02D9, name="X 1 (Crashes?)"},
	// 	{id=0x02DA, name="X 2 (Crashes?)"},
	// 	{id=0x02DB, name="Dingpot 3"},
	// 	{id=0x02DC, name="Gnawty's Shelves"},
	// 	{id=0x02DD, name="Gnawty's Bed"},
	// 	{id=0x02DE, name="Gnawty's House"},
	// 	{id=0x02DF, name="Lighthouse"},
	// 	{id=0x02E0, name="Stairs"},
	// 	{id=0x02E1, name="Underwater Ship Warp?"},
	// 	{id=0x02E2, name="Lighthouse Body"},
	//   {id=0x02E3, name="World Entrance Sign"}, -- MM, RBB

	// 	{id=0x02E4, name="Level Entry/Exit"},
	// 	{id=0x02E5, name="Wooden Door"},
	// 	{id=0x02E6, name="Nabnut's Door"},
	// 	{id=0x02E7, name="Wooden Door"},
	// 	{id=0x02E8, name="Window 3"},
	// 	{id=0x02E9, name="Short Window"},
	// 	{id=0x02EA, name="Tall Window"},
	// 	{id=0x02ED, name="Machine Room Booth"},
	// 	{id=0x02EE, name="Klungo 1"},
	// 	{id=0x02EF, name="Tooty 0x02EF"},
	// 	{id=0x02F0, name="Machine Room Console"},
	// 	{id=0x02F1, name="Tooty's force field"},
	// 	{id=0x02F2, name="Machine Room booth"},
	// 	{id=0x02F3, name="Lightning"},
	// 	{id=0x02F4, name="Roysten's Bowl"},
	// 	{id=0x02F5, name="Cuckoo Clock"},
	// 	{id=0x02F6, name="Yellow Jinjo 0x02F6"},
	// 	{id=0x02F7, name="Yellow Jinjo 0x02F7"},
	// 	{id=0x02F8, name="Yellow Jinjo 0x02F8"},
	// 	{id=0x02F9, name="Yellow Jinjo 0x02F9"},
	// 	{id=0x02FA, name="Klungo 2"},
	// 	{id=0x02FC, name="Mumbo 0x02FC"},
	// 	{id=0x02FD, name="Snacker"},
	// 	{id=0x02FE, name="Yellow Jinjo 0x02FE"},
	// 	{id=0x02FF, name="Unknown 0x02FF"},
	// 	{id=0x0300, name="Unknown 0x0300"},
	// 	{id=0x0301, name="Blubber"},
	// 	{id=0x0302, name="Rock"},
	// 	{id=0x0303, name="Yellow Jinjo 0x0303"},
	// 	{id=0x0304, name="Yellow Jinjo 0x0304"},
	// 	{id=0x0305, name="Yellow Jinjo 0x0305"},
	// 	{id=0x0306, name="Yellow Jinjo 0x0306"},
	// 	{id=0x0307, name="Yellow Jinjo 0x0307"},
	// 	{id=0x0308, name="Yellow Jinjo 0x0308"},
	// 	{id=0x0309, name="Yellow Jinjo 0x0309"},
	// 	{id=0x030A, name="Yellow Jinjo 0x030A"},
	// 	{id=0x030B, name="Dead Beanstalk"},
	// 	{id=0x030C, name="'Z' Logo"},
	// 	{id=0x030D, name="TNT Box Part 2"},
	// 	{id=0x030E, name="Eyrie Big "},
	// 	{id=0x030F, name="Whip Crack"},
	// 	{id=0x0310, name="Acorn mound"},
	// 	{id=0x0311, name="Nabnut's Wife"},
	// 	{id=0x0312, name="Nabnut's Bed Covers"},
	// 	{id=0x0313, name="Nabnut's Duvet"},
	// 	{id=0x0314, name="Nabnut 4"},
	// 	{id=0x0315, name="Nabnut (Top Half)"},
	// 	{id=0x031A, name="Gnawty (Winter)"},
	// 	{id=0x031C, name="Stationary Platform (Engine Room)"},
	// 	{id=0x031D, name="Pyramid 2"},
	// 	{id=0x031E, name="Palm Tree"},
	// 	{id=0x0332, name="Blue Twinkly"},
	// 	{id=0x0333, name="Green Twinkly"},
	// 	{id=0x0334, name="Orange Twinkly"},
	// 	{id=0x0335, name="Red Twinkly"},
	// 	{id=0x0336, name="Twinkly Box"},
	// 	{id=0x0337, name="Twinkly Muncher"},
	// 	{id=0x0338, name="Christmas Tree Switch"},
	// 	{id=0x0339, name="Christmas Tree"},
	//   {id=0x033A, name="Blue Present 0x033A"},

	// 	{id=0x033B, name="Green Pesent 0x033B"},
	// 	{id=0x033C, name="Red Present 0x033C"},
	// 	{id=0x033D, name="Boggy on Sled 3"},
	// 	{id=0x033E, name="Nintendo Cube?"},
	// 	{id=0x033F, name="Wozza (In Cave)"},
	// 	{id=0x0340, name="Ice Tree"},
	// 	{id=0x0341, name="Unknown 0x0341"},
	// 	{id=0x0348, name="Brentilda"},
	// 	{id=0x034D, name="Bee Swarm"},
	// 	{id=0x034E, name="Limbo"},
	// 	{id=0x034F, name="Mummy"},
	// 	{id=0x0350, name="Sea Grublin"},
	// 	{id=0x0352, name="Grunty after first note door"},
	// 	{id=0x0353, name="Weird green ball"},
	// 	{id=0x0354, name="Water Drops"},
	// 	{id=0x0355, name="Purple ice pole"},
	// 	{id=0x0356, name="Green Ice Pole"},
	// 	{id=0x0357, name="Big Ice Pole"},
	// 	{id=0x0358, name="Ice Pole"},
	// 	{id=0x035D, name="Ice pole"},
	// 	{id=0x035E, name="Race rostrum"},
	// 	{id=0x035F, name="Finish banner"},
	// 	{id=0x0360, name="Start banner"},
	// 	--id=0x361, name="Stop n' Swap?"},
	// 	{id=0x0367, name="Gruntling"},
	// 	{id=0x0368, name="Mumbo Token Sign (5)"},
	// 	{id=0x0369, name="Mumbo Token Sign (20)"},
	// 	{id=0x036A, name="Mumbo Token Sign (15)"},
	// 	{id=0x036B, name="Mumbo Token Sign (10)"},
	// 	{id=0x036C, name="Mumbo Token Sign (25)"},
	// 	{id=0x036D, name="Coliwobble"},
	// 	{id=0x036E, name="Bawl"},
	// 	{id=0x036F, name="Topper"},
	// 	{id=0x0370, name="Gold Feather"},
	// 	{id=0x0374, name="Text Trigger (Mumbo's On Vacation)"},
	// 	{id=0x0375, name="Grublin Hood"},
	// 	{id=0x0376, name="Boss Boom Box"},
	// 	--{id=0x037A, name="Assosiated with MoleHill"}, --talk volume?
	// 	{id=0x037C, name="Dust or Steam Cloud"},
	// 	{id=0x037D, name="Ice Cube"},
	// 	{id=0x037E, name="Dead Venus Flytrap"},
	// 	{id=0x037F, name="Loggo"},
	// 	{id=0x0380, name="Beetle"},
	// 	{id=0x0381, name="Portrait Chompa"},
	// 	{id=0x0382, name="Portrait (Grunty)"},
	// 	{id=0x0383, name="Fire"},
	// 	{id=0x0384, name="Steam and sparks"},
	// 	{id=0x0385, name="Portrait (Blackeye)"},
	// 	{id=0x0386, name="Portrait (Tower)"},
	// 	{id=0x0387, name="Portrait (Tree)"},
	//   {id=0x0388, name="Portrait (Ghosts)"},

	// 	{id=0x0389, name="Fireball"},
	// 	{id=0x038A, name="Green Blast"},
	// 	{id=0x038B, name="Grunty"},
	// 	{id=0x03A0, name="Ice Cube"},
	// 	{id=0x03A1, name="Jinjonator Stand"},
	// 	{id=0x03A2, name="Jinjo Stand"},
	// 	{id=0x03A5, name="Orange Jinjo"},
	// 	{id=0x03A6, name="Green Jinjo"},
	// 	{id=0x03A7, name="Purple Jinjo"},
	// 	{id=0x03A8, name="Yellow Jinjo 0x03A8"},
	// 	{id=0x03AA, name="Big Green Blast"},
	// 	{id=0x03AC, name="Jinjonator"},
	// 	{id=0x03AD, name="Rock Smash"},
	// 	{id=0x03AE, name="Boggy's Igloo"},
	// 	{id=0x03AF, name="Shadow"},
	// 	{id=0x03B0, name="House chimney"},
	// 	{id=0x03B7, name="Puzzle Jiggy Podium"},
	// 	{id=0x03BB, name="Fireball"},
	// 	{id=0x03BC, name="Jiggy Podium"},
	// 	{id=0x03BF, name="Gruntling 2"},
	// 	{id=0x03C0, name="Gruntling 3"},
	// 	{id=0x03C1, name="Purple TeeHee"},
	// 	{id=0x03C2, name="Unknown 0x03C2"},
	// 	{id=0x03C4, name="Washing machine Cauldron"},
	// 	{id=0x03C5, name="Gruntilda (Furnace Fun)"},
	// 	{id=0x03C6, name="Furnace Fun Podium"},
	// 	{id=0x03C7, name="Grunty Doll (Furnace Fun)"},
	// 	{id=0x03C8, name="Tooty (Furnace Fun)"},
}

export enum AnimalType {
	UNKNOWN = 0x00,
	BEAR_BIRD = 0x01,
	TERMITE = 0x02,
	PUMPKIN = 0x03,
	WALRUS = 0x04,
	CROCODILE = 0x05,
	BEE = 0x06,
	WASHING_MACHINE = 0x07
}

export enum CharacterType {
	// CHARACTER
	BANJO_KAZOOIE,
	BLUBBER,
	BOTTLES,
	CHIMPY,
	CONGA,
	GRUNTILDA_SEXY,
	GRUNTILDA_UGLY,
	JINJO_BLUE,
	JINJO_GREEN,
	JINJO_ORANGE,
	JINJO_PINK,
	JINJO_YELLOW,
	KLUNGO,
	LIMBO,
	MUMBO,
	NABNUT,
	TOOTY,
	TOOTY_UGLY,

	// TERMITE
	BANJO_TERMITE,
	TERMITE,
	CRAB_GREEN,

	// CROCODIILE
	BANJO_CROCODILE,
	MR_VILE,

	// WALRUS
	BANJO_WALRUS,
	WOZZA,

	// PUMPKIN
	BANJO_PUMPKIN,
	SNOWBALL,

	// BEE
	BANJO_BEE,
	ZUBBA
}

export enum ExitType {
	UNKNOWN = 0x00,

	MM_MAIN_MUMBOS_SKULL = 0x01,
	MM_MAIN_TICKERS_TOWER_BOTTOM = 0x02,
	MM_MAIN_TICKERS_TOPER_TOP = 0x03,
	MM_MAIN_BUTTON_CUTSCENE = 0x04,
	MM_MAIN_LEVEL_ENTRANCE = 0x05,

	TTC_MAIN_SANDCASTLE = 0x03,
	TTC_MAIN_LEVEL_ENTRANCE = 0x04,
	TTC_BLUBBERS_SHIP_TOP = 0x05,
	TTC_BLUBBERS_SHIP_BOTTOM = 0x06,
	TTC_MAIN_BLUBBERS_SHIP_TOP = 0x06,
	TTC_MAIN_BLUBBERS_SHIP_SIDE = 0x07,
	TTC_MAIN_LIGHTHOUSE_TOP = 0x08,
	TTC_MAIN_NIPPER = 0x0a,
	TTC_LIGHTHOUSE_BOTTOM = 0x0c,
	TTC_STAIR_ALCOVE_TOP = 0x0e,
	TTC_STAIR_ALCOVE_BOTTOM = 0x0f,

	SM_MAIN_BANJOS_HOUSE = 0x12,
	SM_MAIN_GRUNTILDAS_LAIR = 0x13
}

export enum InventoryType {
	TIMER_HOURGLASS1 = 0x00 * 4, // 0x00
	TIMER_SKULL = 0x01 * 4, // 0x04
	TIMER_PROPELLOR = 0x03 * 4, // 0x0c
	TIMER_XMAS_TREE = 0x05 * 4, // 0x14
	TIMER_HOURGLASS2 = 0x06 * 4, // 0x18
	CUR_LVL_NOTES = 0x0c * 4, // 0x30
	EGGS = 0x0d * 4, // 0x34
	CUR_LVL_JIGGIES = 0x0e * 4, // 0x38
	FEATHERS_RED = 0x0f * 4, // 0x3c
	FEATHERS_GOLD = 0x10 * 4, // 0x40
	CUR_LVL_JINJOS = 0x12 * 4, // 0x48
	HONEYCOMBS_EMPTY = 0x13 * 4, // 0x4c
	HEALTH = 0x14 * 4, // 0x50
	HEALTH_CONTAINERS = 0x15 * 4, // 0x54
	LIVES = 0x16 * 4, // 0x58
	AIR = 0x17 * 4, // 0x5c
	CUR_LVL_GOLD_BULLION = 0x18 * 4, // 0x60
	CUR_LVL_ORANGE = 0x19 * 4, // 0x64
	VILE_SCORE_PLYR = 0x1a * 4, // 0x68
	VILE_SCORE_VILE = 0x1b * 4, // 0x6c
	MUMBO_TOKENS = 0x1c * 4, // 0x70
	GRUMBLIES = 0x1d * 4, // 0x74
	YUMBLIES = 0x1e * 4, // 0x78
	CUR_LVL_PRESENT_GREEN = 0x1f * 4, // 0x7c
	CUR_LVL_PRESENT_BLUE = 0x20 * 4, // 0x80
	CUR_LVL_PRESENT_RED = 0x21 * 4, // 0x84
	CUR_LVL_CATERPILLARS = 0x22 * 4, // 0x88
	CUR_LVL_ACORNS = 0x23 * 4, // 0x8c
	TWINKLIES = 0x24 * 4, // 0x90
	TEXT_MUMBO_TOKENS = 0x25 * 4, // 0x94
	JIGGIES = 0x26 * 4, // 0x98
	JOKER_CARD = 0x27 * 4, // 0x9c
	TEXT_JIGGIES = 0x2b * 4, // 0xac
	NOTE_TOTALS = 0x30 * 4 // 0xc0
}

export enum JinjoType {
	BLUE = 0x00,
	GREEN = 0x01,
	ORANGE = 0x02,
	PINK = 0x03,
	YELLOW = 0x04
}

export enum LevelType {
	UNKNOWN = 0x00,
	MUMBOS_MOUNTAIN = 0x01,
	TREASURE_TROVE_COVE = 0x02,
	CLANKERS_CAVERN = 0x03,
	BUBBLE_GLOOP_SWAMP = 0x04,
	FREEZEEZY_PEAK = 0x05,
	GRUNTILDAS_LAIR = 0x06,
	GOBEYS_VALEY = 0x07,
	CLICK_CLOCK_WOODS = 0x08,
	RUSTY_BUCKET_BAY = 0x09,
	MAD_MONSTER_MANSION = 0x0a,
	SPIRAL_MOUNTAIN = 0x0b,
	GRUNTILDAS_LAIR_ROOF = 0x0c,
	TITLE_SCREEN = 0x0d,
	ROMHACK_LEVEL = 0x0e
}

export enum MoveType {
	BEAK_BARGE = 0x00,
	BEAK_BOMB = 0x01,
	BEAK_BUSTER = 0x02,
	CAMERA_CONTROLS = 0x03,
	BEAR_PUNCH = 0x04,
	CLIMB_POLES = 0x05,
	EGGS = 0x06,
	FEATHERY_FLAP = 0x07,
	FLIP_FLAP = 0x08,
	FLYING = 0x09,
	VARIABLE_JUMP_HEIGHT = 0x0a,
	RAT_A_TAT_RAP = 0x0b,
	ROLL = 0x0c,
	SHOCK_SPRING_JUMP = 0x0d,
	WADDING_BOOTS = 0x0e,
	DIVE = 0x0f,
	TALON_TROT = 0x10,
	TURBO_TALON_TRAINERS = 0x11,
	WONDERWING = 0x12,
	NOTE_DOOR_MOLE_HILL = 0x13
}

export enum ProfileType {
	TITLE = -1,
	A = 0,
	B = 2,
	C = 1
}

export enum SceneType {
	UNKNOWN = 0x00,
	SM_MAIN = 0x01,
	MM_MAIN = 0x02,
	UNKNOWN_0X03 = 0x03,
	UNKNOWN_0x04 = 0x04,
	TTC_BLUBBERS_SHIP = 0x05,
	TTC_NIPPERS_SHELL = 0x06,
	TTC_MAIN = 0x07,
	UNKNOWN_0X08 = 0x08,
	UNKNOWN_0x09 = 0x09,
	TTC_SANDCASTLE = 0x0a,
	CC_CLANKERS_CAVERN = 0x0b,
	MM_TICKERS_TOWER = 0x0c,
	BGS_MAIN = 0x0d,
	MM_MUMBOS_SKULL = 0x0e,
	UNKNOWN_0X0F = 0x0f,
	BGS_MR_VILE = 0x10,
	BGS_TIPTUP = 0x11,
	GV_MAIN = 0x12,
	GV_MATCHING_GAME = 0x13,
	GV_MAZE = 0x14,
	GV_WATER = 0x15,
	GV_RUBEES_CHAMBER = 0x16,
	UNKNOWN_0X17 = 0x17,
	UNKNOWN_0X18 = 0x18,
	UNKNOWN_0X19 = 0x19,
	GV_SPHINX = 0x1a,
	MMM_MAIN = 0x1b,
	MMM_CHURCH_1 = 0x1c,
	MMM_CELLAR = 0x1d,
	START_NINTENDO = 0x1e,
	START_RAREWARE = 0x1f,
	END_SCENE_2_ = 0x20,
	CC_WITCH_SWITCH = 0x21,
	CC_INSIDE_CLANKER = 0x22,
	CC_GOLD_FEATHER = 0x23,
	MMM_TIMBLAR_SHED = 0x24,
	MMM_WELL = 0x25,
	MMM_DINING_ROOM_NAPPER = 0x26,
	FP_MAIN = 0x27,
	MMM_ROOM_1 = 0x28,
	MMM_ROOM_2 = 0x29,
	MMM_FIREPLACE = 0x2a,
	MMM_CHURCH_2 = 0x2b,
	MMM_BATHROOM = 0x2c,
	MMM_BEDROOM = 0x2d,
	MMM_FLOORBOARDS = 0x2e,
	MMM_BARREL = 0x2f,
	MMM_MUMBOS_SKULL = 0x30,
	RBB_MAIN = 0x31,
	UNKNOWN_0X32 = 0x32,
	UNKNOWN_0X33 = 0x33,
	RBB_ENGINE_ROOM = 0x34,
	RBB_WAREHOUSE_1 = 0x35,
	RBB_WAREHOUSE_2 = 0x36,
	RBB_CONTAINER_1 = 0x37,
	RBB_CONTAINER_3 = 0x38,
	RBB_CREW_CABIN = 0x39,
	RBB_BOSS_BOOM_BOX = 0x3a,
	RBB_STORE_ROOM = 0x3b,
	RBB_KITCHEN = 0x3c,
	RBB_NAVIGATION_ROOM = 0x3d,
	RBB_CONTAINER_2 = 0x3e,
	RBB_CAPTAINS_CABIN = 0x3f,
	CCW_MAIN = 0x40,
	FP_BOGGYS_IGLOO = 0x41,
	UNKNOWN_0X42 = 0x42,
	CCW_SPRING = 0x43,
	CCW_SUMMER = 0x44,
	CCW_AUTUMN = 0x45,
	CCW_WINTER = 0x46,
	BGS_MUMBOS_SKULL = 0x47,
	FP_MUMBOS_SKULL = 0x48,
	UNKNOWN_0X49 = 0x49,
	CCW_SPRING_MUMBOS_SKULL = 0x4a,
	CCW_SUMMER_MUMBOS_SKULL = 0x4b,
	CCW_AUTUMN_MUMBOS_SKULL = 0x4c,
	CCW_WINTER_MUMBOS_SKULL = 0x4d,
	UNKNOWN_0X4E = 0x4e,
	UNKNOWN_0X4F = 0x4f,
	UNKNOWN_0X50 = 0x50,
	UNKNOWN_0X51 = 0x51,
	UNKNOWN_0X52 = 0x52,
	FP_INSIDE_XMAS_TREE = 0x53,
	UNKNOWN_0X54 = 0x54,
	UNKNOWN_0X55 = 0x55,
	UNKNOWN_0X56 = 0x56,
	UNKNOWN_0X57 = 0x57,
	UNKNOWN_0X58 = 0x58,
	UNKNOWN_0X59 = 0x59,
	CCW_SUMMER_ZUBBAS_HIVE = 0x5a,
	CCW_SPRING_ZUBBAS_HIVE = 0x5b,
	CCW_AUTUMN_ZUBBAS_HIVE = 0x5c,
	UNKNOWN_0X5D = 0x5d,
	CCW_SPRING_NABNUTS_HOUSE = 0x5e,
	CCW_SUMMER_NABNUTS_HOUSE = 0x5f,
	CCW_AUTUMN_NABNUTS_HOUSE = 0x60,
	CCW_WINTER_NABNUTS_HOUSE = 0x61,
	CCW_WINTER_NABNUTS_1 = 0x62,
	CCW_AUTUMN_NABNUTS_2 = 0x63,
	CCW_WINTER_NABNUTS_2 = 0x64,
	CCW_SPRING_TOP = 0x65,
	CCW_SUMMER_TOP = 0x66,
	CCW_AUTUMN_TOP = 0x67,
	CCW_WINTER_TOP = 0x68,
	GL_LOBBY_MM = 0x69,
	GL_PUZZLE_TTC = 0x6a,
	GL_PUZZLE_CC = 0x6a,
	GL_NOTE_DOOR_180 = 0x6b,
	GL_PUZZLE_CCW = 0x6b,
	GL_RED_CAULDRON = 0x6c,
	GL_LOBBY_TTC = 0x6d,
	GL_LOBBY_GV = 0x6e,
	GL_LOBBY_FP = 0x6f,
	GL_LOBBY_CC = 0x70,
	GL_WITCH_STATUE = 0x71,
	GL_LOBBY_BGS = 0x72,
	UNKNOWN_0X73 = 0x73,
	GL_PUZZLE_GV = 0x74,
	GL_LOBBY_MMM = 0x75,
	GL_NOTE_DOOR_640 = 0x76,
	GL_LOBBY_RBB = 0x77,
	GL_PUZZLE_RBB = 0x78,
	GL_LOBBY_CCW = 0x79,
	GL_FLOOR_2_CRYPT_INSIDE = 0x7a,
	INTRO_LAIR_1 = 0x7b,
	INTRO_BANJO_HOUSE_1 = 0x7c,
	INTRO_SPIRAL_A = 0x7d,
	INTRO_SPIRAL_B = 0x7e,
	FP_WOZZAS_CAVE = 0x7f,
	GL_FLOOR_3 = 0x80,
	INTRO_LAIR_2 = 0x81,
	INTRO_MACHINE_1 = 0x82,
	INTRO_GAME_OVER = 0x83,
	INTRO_LAIR_5 = 0x84,
	INTRO_SPIRAL_C = 0x85,
	INTRO_SPIRAL_D = 0x86,
	INTRO_SPIRAL_E = 0x87,
	INTRO_SPIRAL_F = 0x88,
	INTRO_BANJO_HOUSE_2 = 0x89,
	INTRO_BANJO_HOUSE_3 = 0x8a,
	RBB_ANCHOR = 0x8b,
	SM_BANJO_HOUSE = 0x8c,
	MMM_INSIDE_LOGGO = 0x8d,
	GL_FURNACE_FUN = 0x8e,
	TTC_SHARKFOOD_ISLAND = 0x8f,
	GL_BATTLEMENTS = 0x90,
	FILE_SELECT = 0x91,
	GV_SECRET_CHAMBER = 0x92,
	GL_DINGPOT = 0x93,
	INTRO_SPIRAL_G = 0x94,
	END_SCENE_3 = 0x95,
	END_SCENE_1 = 0x96,
	END_SCENE_4 = 0x97,
	INTRO_GRUNTY_THREAT_1 = 0x98,
	INTRO_GRUNTY_THREAT_2 = 0x99,
	ROMHACK_SCENE = 0xa0
}

export enum ActorIdType {
	ORANGE = 0x02d2,
	JINJO_YELLOW = 0x03bb,
	JINJO_ORANGE = 0x03bc,
	JINJO_BLUE = 0x03c0,
	JINJO_PINK = 0x03c1,
	JINJO_GREEN = 0x03c2,
	GOLD_BULLION = 0x03c7,
	PRESENT_BLUE = 0x047f,
	PRESENT_GREEN = 0x0480,
	PRESENT_RED = 0x0481,
	CATERPILLAR = 0x0485,
	ACORN = 0x048e,
	NOTE = 0x06d6
}

export enum VoxelIdType {
	NOTE = 0x1640,
	ORANGE = 0x02d2,
	GOLD_BULLION = 0x03c7,
	PRESENT_BLUE = 0x047f,
	PRESENT_GREEN = 0x0480,
	PRESENT_RED = 0x0481,
	CATERPILLAR = 0x0485,
	ACORN = 0x048e
}