function getRandomAnimation(animations) {
	const total = animations.reduce((sum, item) => {
		if (item.name === "easterEgg" && !config.easterEgg) return sum;
		return sum + item.probability;
	}, 0);
	let choice = randomInRange(total);

	for (let i = 0; i < animations.length; ++i) {
		if (animations[i].name === "easterEgg" && !config.easterEgg) continue;
		else if (choice < animations[i].probability) {
			return animations[i].function;
		} else {
			choice -= animations[i].probability;
		}
	}

	return animations[randomInRange(animations.length)].function;
}

function generateAnimation(frames) {
	if (!config.disableBuyAndThrow) animations.buySoda(frames);

	for (let i = 0; i < config.numberOfActions; ++i) {
		animations.static(frames, randomInRange(12, 48));
		if (i % 2 === 0) getRandomAnimation(probabilities.action1)(frames);
		else getRandomAnimation(probabilities.action2)(frames);
	}
	animations.static(frames, randomInRange(12, 48));

	if (!config.disableBuyAndThrow) animations.throwSoda(frames);
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
				document.querySelector("#loader progress").value = loadedImages;
				images[fileName] = img;
				loadedImages++;
				if (loadedImages === imageURLs.length) {
					resolve(images);
				}
			};
		});
	});
}
