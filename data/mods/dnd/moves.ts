export const Moves: import("../../../sim/dex-moves").ModdedMoveDataTable = {
	"17black": {
		num: -1001,
		accuracy: 3, // ~1/33 chance, close to 1/38 (roulette wheel)
		basePower: 1000,
		category: "Physical",
		name: "17 Black",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, contact: 1 },
		onPrepareHit: function (target, source, move) {
			this.attrLastMove("[still]");
			this.add("-anim", source, "Guillotine", target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		desc: "Has a tiny chance to hit (roughly 3%), but deals massive damage (1000 BP).",
		shortDesc: "3% chance to hit, 1000 BP.",
	},
};
