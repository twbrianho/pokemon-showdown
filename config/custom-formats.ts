// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

import { type FormatList } from "../sim/dex-formats";

export const Formats: FormatList = [
	{
		section: "Dunsparces & Dragonites",
	},
	{
		name: "[Gen 9] PokeDnD Standard",
		desc: `Custom format allowing ALL Pokémon with no restrictions.`,
		mod: "dnd",
		ruleset: [
			"Team Preview",
			"HP Percentage Mod",
			"Cancel Mod",
			"Endless Battle Clause",
			// NatDex Mod components WITHOUT the natDexTier validation:
			"+Unobtainable",
			"+Past",
			"Sketch Post-Gen 7 Moves",
			// Allow everything else:
			"+CAP",
			"+Custom",
			"+Future",
			"+LGPE",
			"+Nonexistent",
		],
	},
	{
		name: "[Gen 9] PokeDnD Doubles",
		desc: `Custom Doubles format allowing ALL Pokémon with no restrictions.`,
		mod: "dnd",
		gameType: "doubles",
		ruleset: [
			"Team Preview",
			"HP Percentage Mod",
			"Cancel Mod",
			"Endless Battle Clause",
			// NatDex Mod components WITHOUT the natDexTier validation:
			"+Unobtainable",
			"+Past",
			"Sketch Post-Gen 7 Moves",
			// Allow everything else:
			"+CAP",
			"+Custom",
			"+Future",
			"+LGPE",
			"+Nonexistent",
		],
	},
	{
		name: "[Gen 9] PokeDnD Multi",
		desc: `Custom Multi (2v2) format allowing ALL Pokémon with no restrictions. 4 players: p1+p3 vs p2+p4, with 2 Pokémon active per side.`,
		mod: "dnd",
		gameType: "multi",
		ruleset: [
			"Team Preview",
			"HP Percentage Mod",
			"Cancel Mod",
			"Endless Battle Clause",
			// NatDex Mod components WITHOUT the natDexTier validation:
			"+Unobtainable",
			"+Past",
			"Sketch Post-Gen 7 Moves",
			// Allow everything else:
			"+CAP",
			"+Custom",
			"+Future",
			"+LGPE",
			"+Nonexistent",
		],
	},
	{
		name: "[Gen 9] PokeDnD Free4All",
		desc: `Custom Free-For-All (1v1v1v1) format allowing ALL Pokémon with no restrictions. 4 independent players, each fighting for themselves.`,
		mod: "dnd",
		gameType: "freeforall",
		ruleset: [
			"Team Preview",
			"HP Percentage Mod",
			"Cancel Mod",
			"Endless Battle Clause",
			// NatDex Mod components WITHOUT the natDexTier validation:
			"+Unobtainable",
			"+Past",
			"Sketch Post-Gen 7 Moves",
			// Allow everything else:
			"+CAP",
			"+Custom",
			"+Future",
			"+LGPE",
			"+Nonexistent",
		],
	},
];
