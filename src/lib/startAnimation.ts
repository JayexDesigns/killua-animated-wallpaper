import generateAnimation from "@/lib/generateAnimation";
import {type frame, type imageElement} from "@/lib/types";

let currentFrame = 0;
let frameDuration = 1000 / 24;
let animationInterval: number | undefined;
let frames: frame[] = [];

function drawFrame(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, images: imageElement, frame: number) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (frames[frame].callback) frames[frame].callback();
	ctx.drawImage(images[frames[frame].image], 0, 0, canvas.width, canvas.height);
}

export default function startAnimation(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, images: imageElement, fps = 24) {
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
