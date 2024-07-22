const randomInRange = (n1, n2 = undefined) => {
	if (!n2) return Math.floor(Math.random() * n1);
	else return Math.floor(Math.random() * (n2 - n1) + n1);
};

const addFrames = (frames, image, frameQuantity, callback) => {
	for (let i = 0; i < frameQuantity; ++i) {
		frames.push({image, callback});
	}
};
