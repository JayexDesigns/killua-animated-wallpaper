const config = {
	numberOfActions: 16,
	disableBuyAndThrow: false,
	easterEgg: false
};

const probabilities = {
	action1: [
		{
			name: "blink",
			function: frames => {
				animations.blink(frames);
			},
			probability: 50
		},
		{
			name: "doubleBlink",
			function: frames => {
				animations.doubleBlink(frames);
			},
			probability: 50
		}
	],
	action2: [
		{
			name: "lookUp",
			function: frames => {
				animations.lookUp(frames);
				animations.staticLookUp(frames, randomInRange(24, 72));
				animations.lookDown(frames);
			},
			probability: 30
		},
		{
			name: "drink",
			function: frames => {
				animations.startDrink(frames);
				animations.drink(frames, randomInRange(3, 7));
				animations.stopDrink(frames);
			},
			probability: 50
		},
		{
			name: "lookAtCan",
			function: frames => {
				animations.lookAtCan(frames);
			},
			probability: 20
		},
		{
			name: "easterEgg",
			function: frames => {
				animations.talk(frames);
			},
			probability: 1
		}
	]
};
