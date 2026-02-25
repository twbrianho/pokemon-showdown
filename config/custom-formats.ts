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
];
