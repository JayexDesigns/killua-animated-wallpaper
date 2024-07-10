import {type frame} from "@/lib/types";

export const randomInRange = (n1: number, n2?: number) => {
	if (!n2) return Math.floor(Math.random() * n1);
	else return Math.floor(Math.random() * (n2 - n1) + n1);
};

export const addFrames = (frames: frame[], image: string, frameQuantity: number, callback?: () => void) => {
	for (let i = 0; i < frameQuantity; ++i) {
		frames.push({image, callback});
	}
};
