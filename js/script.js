let currentFrame = 0;
let frameDuration = 1000 / 24;
let animationInterval;
let frames = [];

function drawFrame(canvas, ctx, images, frame) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (frames[frame].callback) frames[frame].callback();
	ctx.drawImage(images[frames[frame].image], 0, 0, canvas.width, canvas.height);
}

function startAnimation(canvas, ctx, images, fps = 24) {
	frameDuration = 1000 / fps;
	if (animationInterval) clearInterval(animationInterval);
	animationInterval = setInterval(() => {
		if (currentFrame === 0) {
			frames = [];
			generateAnimation(frames);
		}
		drawFrame(canvas, ctx, images, currentFrame);
		currentFrame = (currentFrame + 1) % frames.length;
	}, frameDuration);
}

window.onload = async () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");

	document.querySelector("#loader progress").max = imageURLs.length;
	const images = await preloadImages(imageURLs);
	document.querySelector("#loader").style.display = "none";

	startAnimation(canvas, ctx, images);
};
