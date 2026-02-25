export const Items: import("../../../sim/dex-items").ModdedItemDataTable = {
	whitepointycap: {
		name: "White Pointy Cap",
		spritenum: 114, // Silk Scarf icon as placeholder
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
