const imageURLs = [
	"assets/keyframes/blink.png",
	"assets/keyframes/buy_soda_01.png",
	"assets/keyframes/buy_soda_02.png",
	"assets/keyframes/buy_soda_03.png",
	"assets/keyframes/buy_soda_04.png",
	"assets/keyframes/buy_soda_05.png",
	"assets/keyframes/buy_soda_06.png",
	"assets/keyframes/buy_soda_07.png",
	"assets/keyframes/buy_soda_08.png",
	"assets/keyframes/buy_soda_09.png",
	"assets/keyframes/buy_soda_10.png",
	"assets/keyframes/buy_soda_11.png",
	"assets/keyframes/buy_soda_12.png",
	"assets/keyframes/drink_1.png",
	"assets/keyframes/drink_2.png",
	"assets/keyframes/drink_3.png",
	"assets/keyframes/look_down.png",
	"assets/keyframes/look_up_1.png",
	"assets/keyframes/look_up_2.png",
	"assets/keyframes/look_up_3.png",
	"assets/keyframes/look_up_talk_1.png",
	"assets/keyframes/look_up_talk_2.png",
	"assets/keyframes/normal.png",
	"assets/keyframes/stop_drink_1.png",
	"assets/keyframes/stop_drink_2.png",
	"assets/keyframes/stop_drink_3.png",
	"assets/keyframes/stop_drink_4.png",
	"assets/keyframes/stop_drink_5.png",
	"assets/keyframes/stop_drink_6.png",
	"assets/keyframes/stop_drink_7.png",
	"assets/keyframes/stop_drink_8.png",
	"assets/keyframes/talk_1.png",
	"assets/keyframes/talk_2.png",
	"assets/keyframes/throw_soda_01.png",
	"assets/keyframes/throw_soda_02.png",
	"assets/keyframes/throw_soda_03.png",
	"assets/keyframes/throw_soda_04.png",
	"assets/keyframes/throw_soda_05.png",
	"assets/keyframes/throw_soda_06.png",
	"assets/keyframes/throw_soda_07.png",
	"assets/keyframes/throw_soda_08.png",
	"assets/keyframes/throw_soda_09.png",
	"assets/keyframes/throw_soda_10.png",
	"assets/keyframes/throw_soda_11.png",
	"assets/keyframes/throw_soda_12.png"
];

const animations = {
	static: (frames, framesQuantity) => {
		addFrames(frames, "normal", framesQuantity);
	},
	staticLookUp: (frames, framesQuantity) => {
		addFrames(frames, "look_up_3", framesQuantity);
	},
	buySoda: frames => {
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
	throwSoda: frames => {
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
	blink: (frames, frameQuantity = 2) => {
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
	},
	doubleBlink: (frames, frameQuantity = 2) => {
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "normal", frameQuantity * 3);
		addFrames(frames, "look_down", frameQuantity);
		addFrames(frames, "blink", frameQuantity);
		addFrames(frames, "look_down", frameQuantity);
	},
	lookUp: (frames, frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity);
		addFrames(frames, "look_up_1", frameQuantity);
		addFrames(frames, "look_up_2", frameQuantity);
		addFrames(frames, "look_up_3", frameQuantity);
	},
	lookDown: (frames, frameQuantity = 2) => {
		addFrames(frames, "look_up_3", frameQuantity);
		addFrames(frames, "look_up_2", frameQuantity);
		addFrames(frames, "look_up_1", frameQuantity);
		addFrames(frames, "normal", frameQuantity);
	},
	startDrink: (frames, frameQuantity = 2) => {
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
	stopDrink: (frames, frameQuantity = 2) => {
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
	drink: (frames, times = 1, frameQuantity = 2) => {
		for (let i = 0; i < times; ++i) {
			addFrames(frames, "drink_1", frameQuantity);
			addFrames(frames, "drink_2", frameQuantity);
			addFrames(frames, "drink_3", frameQuantity);
			addFrames(frames, "drink_2", frameQuantity);
			addFrames(frames, "drink_1", frameQuantity);
		}
	},
	lookAtCan: (frames, frameQuantity = 2) => {
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
	talk: (frames, frameQuantity = 2) => {
		addFrames(frames, "normal", frameQuantity, () => document.querySelector("#audio").play());
		addFrames(frames, "talk_1", frameQuantity * 2);
		addFrames(frames, "talk_2", frameQuantity * 2);
	}
};
