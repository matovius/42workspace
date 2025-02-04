import type { Space } from './types';

export const OfficeSpaces: Space[] = [
	// {
	// 	name: 'Day Pass',
	// 	price: 20,
	// 	duration: 'day',
	// 	url: '/spaces/#',
	// 	details: 'Work a day at our coworking hub. Only available on weekdays between 08:00 and 18:00.'
	// },
	{
		name: 'Flex Desk',
		price: 175,
		duration: 'month',
		url: '/spaces/#',
		details:
			'Available every day from 08:00 to 18:00, this option offers coffee, tea, a kitchen, and limited private phone booth use.'
	},
	{
		name: 'Premium Desk',
		price: 300,
		duration: 'month',
		url: '/spaces/#',
		details:
			'Available for 24/7 access, this option offers free meeting rooms and phone booths, Espresso, a kitchen, a printer and a fully-equipped gym.'
	},
	{
		name: 'Dedicated Desk',
		price: 375,
		duration: 'month',
		url: '/spaces/#',
		details:
			'This option offers everything from the Premium Desk option, plus a whole dedicated desk, a furnished space, plus cleaning.'
	},
	{
		name: 'Private Office',
		price: 375,
		duration: 'month',
		url: '/spaces/#',
		details:
			'This option offers everything from the Dedicated Desk option, plus your very own private office.'
	}
];

export const MeetingSpaces: Space[] = [
	{
		name: 'Milliways',
		price: 42,
		duration: 'hour',
		url: '/spaces/#'
	},
	{
		name: 'Magrathea',
		price: 42,
		duration: 'hour',
		url: '/spaces/#'
	},
	{
		name: "Don't Panic",
		price: 55,
		duration: 'hour',
		url: '/spaces/#'
	},
	{
		name: 'Cyberworkplace',
		price: 90,
		duration: 'hour',
		url: '/spaces/#'
	},
	{
		name: 'Arthur',
		price: 42,
		duration: 'hour',
		url: '/spaces/#'
	},
	{
		name: 'Vogon Poetry',
		price: 42,
		duration: 'hour',
		url: '/spaces/#'
	}
];
