import {type frame} from "@/lib/types";
import {addFrames} from "@/lib/utils";

export default {
	static: (frames: frame[], framesQuantity: number) => {
		addFrames(frames, "normal", framesQuantity);
	},
	staticLookUp: (frames: frame[], framesQuantity: number) => {
		addFrames(frames, "look_up_3", framesQuantity);
	},
	buySoda: (frames: frame[]) => {
		addFrames(frames, "buy_soda_01", 3);
		addFrames(frames, "buy_soda_02", 2);
		addFrames(frames, "buy_soda_03", 2);
		addFrames(frames, "buy_soda_04", 2);
		addFrames(frames, "buy_soda_05", 2);
		addFrames(frames, "buy_soda_06", 2);
		addFrames(frames, "buy_soda_07", 2);
		addFrames(frames, "buy_soda_08", 2);
		addFrames(frames, "buy_soda_09", 3);
		addFrames(frames, "buy_soda_10", 3);
		addFrames(frames, "buy_soda_11", 3);
		addFrames(frames, "buy_soda_12", 8);
	},
	throwSoda: (frames: frame[]) => {
		addFrames(frames, "throw_soda_01", 3);
		addFrames(frames, "throw_soda_02", 3);
		addFrames(frames, "throw_soda_03", 3);
		addFrames(frames, "throw_soda_04", 3);
		addFrames(frames, "throw_soda_05", 1);
		addFrames(frames, "throw_soda_06", 1);
		addFrames(frames, "throw_soda_07", 1);
		addFrames(frames, "throw_soda_08", 1);
		addFrames(frames, "throw_soda_09", 2);
		addFrames(frames, "throw_soda_10", 2);
		addFrames(frames, "throw_soda_11", 1);
		addFrames(frames, "throw_soda_12", 3);
		addFrames(frames, "throw_soda_01", 9);
	},
	blink: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
	},
	doubleBlink: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "normal", frameQuantity * 3);
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
	},
	lookUp: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity);
		addFrames(frames, "look_up_1", frameQuantity);
		addFrames(frames, "look_up_2", frameQuantity);
		addFrames(frames, "look_up_3", frameQuantity);
	},
	lookDown: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "look_up_3", frameQuantity);
		addFrames(frames, "look_up_2", frameQuantity);
		addFrames(frames, "look_up_1", frameQuantity);
		addFrames(frames, "normal", frameQuantity);
	},
	startDrink: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity);
		addFrames(frames, "stop_drink_8", frameQuantity);
		addFrames(frames, "stop_drink_7", frameQuantity);
		addFrames(frames, "stop_drink_6", frameQuantity);
		addFrames(frames, "stop_drink_5", frameQuantity);
		addFrames(frames, "stop_drink_4", frameQuantity);
		addFrames(frames, "stop_drink_3", frameQuantity);
		addFrames(frames, "stop_drink_2", frameQuantity);
		addFrames(frames, "stop_drink_1", frameQuantity);
	},
	stopDrink: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "stop_drink_1", frameQuantity);
		addFrames(frames, "stop_drink_2", frameQuantity);
		addFrames(frames, "stop_drink_3", frameQuantity);
		addFrames(frames, "stop_drink_4", frameQuantity);
		addFrames(frames, "stop_drink_5", frameQuantity);
		addFrames(frames, "stop_drink_6", frameQuantity);
		addFrames(frames, "stop_drink_7", frameQuantity);
		addFrames(frames, "stop_drink_8", frameQuantity);
		addFrames(frames, "normal", frameQuantity);
	},
	drink: (frames: frame[], times = 1, frameQuantity = 2) => {
		for (let i = 0; i < times; ++i) {
			addFrames(frames, "drink_1", frameQuantity);
			addFrames(frames, "drink_2", frameQuantity);
			addFrames(frames, "drink_3", frameQuantity);
			addFrames(frames, "drink_2", frameQuantity);
			addFrames(frames, "drink_1", frameQuantity);
		}
	},
	lookAtCan: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity);
		addFrames(frames, "stop_drink_8", frameQuantity);
		addFrames(frames, "stop_drink_7", frameQuantity);
		addFrames(frames, "stop_drink_6", frameQuantity * 2);
		addFrames(frames, "stop_drink_5", frameQuantity * 10);
		addFrames(frames, "stop_drink_5", frameQuantity);
		addFrames(frames, "stop_drink_6", frameQuantity);
		addFrames(frames, "stop_drink_7", frameQuantity);
		addFrames(frames, "stop_drink_8", frameQuantity);
	},
	talk: (frames: frame[], frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity, () => document.querySelector<HTMLAudioElement>("#audio")?.play());
		addFrames(frames, "talk_1", frameQuantity * 2);
		addFrames(frames, "talk_2", frameQuantity * 2);
	}
};
