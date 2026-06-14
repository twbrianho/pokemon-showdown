# How to Add Custom Items, Abilities, and Moves

This guide explains how to add custom items, abilities, and moves to your Pokémon Showdown server and client. It uses the pre-existing custom Pokémon `Fakemontest` (Normal/Dragon) and its custom assets as a reference.

---

## 1. Custom Moves

Custom moves are defined server-side and then registered in the client.

### Server Configuration
Open [moves.ts](file:///Users/brian/Desktop/DunsparcesAndDragonites/code/pokemon-showdown/data/mods/dnd/moves.ts) and add your move configuration:

```typescript
export const Moves: import("../../../sim/dex-moves").ModdedMoveDataTable = {
	"17black": {
		num: -1001,
		accuracy: 3, // ~3% hit rate
		basePower: 1000,
		category: "Physical",
		name: "17 Black",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, contact: 1 },
		onPrepareHit: function (target, source, move) {
			this.attrLastMove("[still]");
			this.add("-anim", source, "Guillotine", target); // Guillotine animation
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		desc: "Has a tiny chance to hit (roughly 3%), but deals massive damage (1000 BP).",
		shortDesc: "3% chance to hit, 1000 BP.",
	},
};
```

* **Linking to a Pokémon:** Learnsets are configured in [learnsets.ts](file:///Users/brian/Desktop/DunsparcesAndDragonites/code/pokemon-showdown/data/mods/dnd/learnsets.ts). To allow `Fakemontest` to learn `17 Black`, we mapped the move ID `"17black"`:
  ```typescript
  fakemontest: {
      learnset: {
          "17black": ["9L1"], // Learned at Level 1 in Gen 9
      }
  }
  ```

---

## 2. Custom Abilities

Abilities use callback hooks in the Showdown engine to modify mechanics, stats, or battle states.

### Server Configuration
Open [abilities.ts](file:///Users/brian/Desktop/DunsparcesAndDragonites/code/pokemon-showdown/data/mods/dnd/abilities.ts) and define your ability:

```typescript
export const Abilities: import("../../../sim/dex-abilities").ModdedAbilityDataTable = {
	letitride: {
		name: "Let It Ride",
		desc: "The user's moves always have at least 87% accuracy. However, if the user misses a move, they faint immediately.",
		shortDesc: "87% minimum accuracy; faints if a move misses.",
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (typeof accuracy !== "number") return;
			if (accuracy < 87) {
				this.debug("Let It Ride boosting accuracy to 87%");
				return 87;
			}
		},
		onSourceAccuracyMiss(source, target, move) {
			if (!source.fainted) {
				this.add("-message", `${source.name} lost the gamble and fainted from Let It Ride!`);
				this.faint(source, source, this.effect);
			}
		},
	},
};
```

* **Linking to a Pokémon:** Add the ability key under `abilities` in your Pokémon's pokedex entry in [pokedex.ts](file:///Users/brian/Desktop/DunsparcesAndDragonites/code/pokemon-showdown/data/mods/dnd/pokedex.ts):
  ```typescript
  fakemontest: {
      // ...
      abilities: { 0: "Serene Grace", 1: "Let It Ride", H: "Multiscale" },
  }
  ```

---

## 3. Custom Items

Items can boost damage, change types, or apply triggers when held by a Pokémon.

### Server Configuration
Open [items.ts](file:///Users/brian/Desktop/DunsparcesAndDragonites/code/pokemon-showdown/data/mods/dnd/items.ts) and configure the item:

```typescript
export const Items: import("../../../sim/dex-items").ModdedItemDataTable = {
	whitepointycap: {
		name: "White Pointy Cap",
		spritenum: 114, // Placeholder icon index (e.g. Silk Scarf)
		fling: {
			basePower: 1000,
		},
		onModifyDamage(damage, source, target, move) {
			if (target.hasType("Dark")) {
				this.debug("White Pointy Cap boost");
				return this.chainModify(1.5);
			}
		},
		desc: "Boosts the user's damage against Dark-type Pokemon by 1.5x.",
		shortDesc: "Boosts damage against Dark-types by 1.5x.",
		num: -1001,
		gen: 9,
		isNonstandard: "Custom",
	},
};
```

---

## 4. Rebuilding the Project

After making any changes to custom items, abilities, or moves, you **must compile and restart** both the server and client to synchronize teambuilder lists and game engine logic.

### A. Rebuild and Restart Server
Run the build script in the `pokemon-showdown` directory to compile your TypeScript files into `dist/`:
```bash
npm run build
npm run start
```

### B. Register on the Client
For your custom objects to show up in the client teambuilder UI:
1. Update client files (like `caches/pokemon-showdown/data/` pokedex, learnsets, etc.) to mirror your server definitions.
2. Run `npm run build` inside `pokemon-showdown-client/caches/pokemon-showdown`.
3. Run `node build full` in the client root directory to update search indexes and cachebusters.
