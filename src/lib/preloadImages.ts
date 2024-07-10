import {type imageElement} from "@/lib/types";

export default function preloadImages(imageURLs: string[]) {
	return new Promise((resolve: (value: imageElement) => void, reject) => {
		let loadedImages = 0;
		let images: imageElement = {};
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
