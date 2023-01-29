import React from 'react';

export type Props = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

export default function InfoCard({ icon, title, description }: Props) {
	return (
		<div className="flex items-start gap-x-8">
			<div
				className="bg-indigo-400 w-12 h-12 flex items-center justify-center text-white"
				style={{ borderRadius: '50% 50% 65% 35% / 30% 30% 70% 70% ' }}
			>
				<span className="text-white">{icon}</span>
			</div>
			<div className="flex flex-col flex-1">
				<h1 className="text-gray-900 font-semibold mb-2">{title}</h1>
				<span className="text-sm text-gray-700 leading-relaxed">
					{description}
				</span>
			</div>
		</div>
	);
}
