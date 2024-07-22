const probabilities = {
	action1: [
		// Blink
		{
			function: frames => {
				animations.blink(frames);
			},
			probability: 50
		},
		// Double Blink
		{
			function: frames => {
				animations.doubleBlink(frames);
			},
			probability: 50
		}
	],
	action2: [
		// Look Up
		{
			function: frames => {
				animations.lookUp(frames);
				animations.staticLookUp(frames, randomInRange(24, 72));
				animations.lookDown(frames);
			},
			probability: 30
		},
		// Drink
		{
			function: frames => {
				animations.startDrink(frames);
				animations.drink(frames, randomInRange(3, 7));
				animations.stopDrink(frames);
			},
			probability: 50
		},
		// Look At Can
		{
			function: frames => {
				animations.lookAtCan(frames);
			},
			probability: 19
		},
		// Easter Egg
		{
			function: frames => {
				animations.talk(frames);
			},
			probability: 1
		}
	]
};
