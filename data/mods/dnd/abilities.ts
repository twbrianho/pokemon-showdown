export const Abilities: import("../../../sim/dex-abilities").ModdedAbilityDataTable =
	{
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
					this.add(
						"-message",
						`${source.name} lost the gamble and fainted from Let It Ride!`,
					);
					this.faint(source, source, this.effect);
				}
			},
		},
	};
