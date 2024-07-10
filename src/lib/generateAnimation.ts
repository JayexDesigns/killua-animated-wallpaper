import animations from "@/config/animations";
import {type frame} from "@/lib/types";
import {randomInRange} from "@/lib/utils";

export default function generateAnimation(frames: frame[]) {
	animations.buySoda(frames);

	for (let i = 0; i < randomInRange(12, 18); ++i) {
		animations.static(frames, randomInRange(12, 48));
		const choice = randomInRange(100);
		if (i % 2 === 0) {
			if (choice < 50) animations.doubleBlink(frames);
			else if (choice >= 50) animations.blink(frames);
		} else {
			if (choice < 30) {
				animations.lookUp(frames);
				animations.staticLookUp(frames, randomInRange(24, 72));
				animations.lookDown(frames);
			} else if (choice >= 30 && choice < 85) {
				animations.startDrink(frames);
				animations.drink(frames, randomInRange(3, 7));
				animations.stopDrink(frames);
			} else if (choice >= 80 && choice < 99) {
				animations.lookAtCan(frames);
			} else if (choice >= 99) {
				animations.talk(frames);
			}
		}
	}
	animations.static(frames, randomInRange(12, 48));

	animations.throwSoda(frames);
}
