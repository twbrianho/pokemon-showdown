# How to Add a Fakemon (Server Guide)

This guide explains how to add a Custom Pokémon (Fakemon) to the Pokémon Showdown engine. This server-side process allows the game engine to recognize the Fakemon, validate its stats/abilities/moves, and allow it to be used in battles.

If you want the Fakemon to appear in the Teambuilder UI and have custom sprites, you **must also follow the Client Guide** located in the `pokemon-showdown-client` directory!

## 1. Define the Fakemon's Base Stats

Open `data/mods/dnd/pokedex.ts` and add a new entry.

- **CRITICAL:** You must assign a **negative** `num` (Pokedex ID). Official Pokémon use positive numbers (1 to 1025). Using negative numbers (e.g., `-1001`, `-1002`) guarantees your Fakemon won't clash with official additions and flags the client to render them as "Custom".

```typescript
export const Pokedex: import("../../../sim/dex-species").ModdedSpeciesDataTable =
    {
        mycustomfakemon: {
            num: -1001, // <--- MUST BE UNIQUE AND NEGATIVE
            name: "MyCustomFakemon",
            types: ["Fire", "Fairy"],
            baseStats: {
                hp: 80,
                atk: 110,
                def: 80,
                spa: 110,
                spd: 80,
                spe: 100,
            },
            abilities: { 0: "Magic Guard", H: "Levitate" }, // H is Hidden Ability
            heightm: 1.2,
            weightkg: 45.0,
            color: "Red",
            eggGroups: ["Field"],
        },
    };
```

## 2. Define the Legality Tier

Open `data/mods/dnd/formats-data.ts`. You must assign a tier so the engine knows this Pokémon is allowed in your custom format.

```typescript
export const FormatsData: import("../../../sim/dex-species").ModdedSpeciesFormatsDataTable =
    {
        mycustomfakemon: {
            tier: "Custom", // Marks it as legal for our DND mod
        },
    };
```

## 3. Define the Learnset (Moves)

Open `data/mods/dnd/learnsets.ts`. This dictates which moves the server battle engine will permit your Fakemon to use.

```typescript
export const Learnsets: import("../../../sim/dex-species").ModdedLearnsetDataTable =
    {
        mycustomfakemon: {
            learnset: {
                tackle: ["9L1"], // "9" = Gen 9. "L1" = Learned at Level 1.
                flamethrower: ["9M"], // "M" = TM/HM/TR
                moonblast: ["9L50"],
                protect: ["9M"],
            },
        },
    };
```

## 4. Restart the Server

The Node process needs to be rebooted to recognize changes to the TypeScript mod files.

1. Kill your running server terminal (`Ctrl+C`).
2. Run `node pokemon-showdown start`.
