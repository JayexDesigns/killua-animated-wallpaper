export interface imageElement {
	[key: string]: HTMLImageElement;
}

export interface frame {
	image: string;
	callback?: () => void;
}
