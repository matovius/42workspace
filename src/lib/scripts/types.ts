export type Link = {
	label: string;
	url: string;
};

export type Duration = 'hour' | 'day' | 'month';

export type Space = {
	name: string;
	price: number;
	duration: Duration;
	url?: string;
	details?: string;
	img?: string;
	imgAlt?: string;
};
