function getRandomAnimation(animations) {
	const total = animations.reduce((sum, item) => sum + item.probability, 0);
	let choice = randomInRange(total);

	for (let i = 0; i < animations.length; ++i) {
		if (choice < animations[i].probability) {
			return animations[i].function;
		} else {
			choice -= animations[i].probability;
		}
	}

	return animations[0].function;
}

function generateAnimation(frames) {
	animations.buySoda(frames);

	for (let i = 0; i < randomInRange(12, 18); ++i) {
		animations.static(frames, randomInRange(12, 48));
		if (i % 2 === 0) getRandomAnimation(probabilities.action1)(frames);
		else getRandomAnimation(probabilities.action2)(frames);
	}
	animations.static(frames, randomInRange(12, 48));

	animations.throwSoda(frames);
}

function preloadImages(imageURLs) {
	return new Promise((resolve, reject) => {
		let loadedImages = 0;
		let images = {};
		imageURLs.forEach(url => {
			const img = new Image();
			img.src = url;
			const path = url.split("/");
			const file = path[path.length - 1].split(".");
			const fileName = file[0];
			img.onload = () => {
				images[fileName] = img;
				loadedImages++;
				if (loadedImages === imageURLs.length) {
					resolve(images);
				}
			};
		});
	});
}
