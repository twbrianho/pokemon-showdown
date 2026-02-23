// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

import { type FormatList } from "../sim/dex-formats";

export const Formats: FormatList = [
	{
		section: "Dunsparces & Dragonites",
	},
	{
		name: "[Gen 9] PokeDnD Standard",
		desc: `Custom format allowing ALL Pokémon.`,
		mod: "dnd",
		ruleset: [
			"! Obtainable",
			"Standard AG", // Base "Anything Goes" rules
			"NatDex Mod", // Allow National Dex Pokémon
			"+CAP", // Allow CAP (Create-A-Pokémon) fakemon
			"+Custom", // Allow any custom fakemon
			"+Future", // Allow future generation Pokémon
			"+Past", // Allow past generation Pokemon and mechanics (Megas)
			"+Gigantamax", // Allow Gigantamax Pokemon
		],
	},
	{
		name: "[Gen 9] PokeDnD Doubles",
		desc: `Custom Doubles format allowing ALL Pokémon.`,
		mod: "dnd",
		gameType: "doubles",
		ruleset: [
			"! Obtainable",
			"Standard AG", // Base "Anything Goes" rules
			"NatDex Mod", // Allow National Dex Pokémon
			"+CAP", // Allow CAP (Create-A-Pokémon) fakemon
			"+Custom", // Allow any custom fakemon
			"+Future", // Allow future generation Pokémon
			"+Unreleased", // Allow unreleased Pokémon
			"+Past", // Allow past generation Pokémon and mechanics (Megas)
			"+Gigantamax", // Allow Gigantamax forms
		],
	},
];
