export type INavbarItem = {
	title: string;
	to: string;
	children?: { title: string; to: string }[];
};

export const items: INavbarItem[] = [
	{
		title: 'Anasayfa',
		to: '/',
	},
	{
		title: 'Kurumsal',
		to: '/kurumsal',
		children: [
			{
				title: 'Kurumsal 1',
				to: '/kurumsal1',
			},
		],
	},
	{
		title: 'Hizmetlerimiz',
		to: '/hizmetlerimiz',
	},
	{
		title: 'Blog',
		to: '/blog',
	},
	{
		title: 'İletişim',
		to: '/contact',
	},
];
