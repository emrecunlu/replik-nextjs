import Link from 'next/link';

export type Props = {
	icon: React.ReactNode;
	title: string;
	description: string;
	href: string;
};

export default function BlobCard({
	icon,
	title,
	description,
	href,
}: Props) {
	return (
		<div className="border border-gray-100 rounded-md shadow-xl shadow-indigo-100 px-8 py-12 selcet-none">
			<div
				className="flex items-center justify-center w-16 h-16 bg-indigo-600 mx-auto mb-8"
				style={{ borderRadius: '46% 54% 55% 45% / 30% 30% 70% 70% ' }}
			>
				{icon}
			</div>
			<div className="flex flex-col gap-y-6 mb-8">
				<h1 className="text-center font-semibold text-gray-900 text-xl">
					{title}
				</h1>
				<span className="text-center text-sm text-gray-700 leading-relaxed">
					{description}
				</span>
			</div>
			<div className="flex justify-center">
				<Link
					href={href}
					className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-sm font-semibold rounded-full px-8 py-3"
				>
					Görüntüle
				</Link>
			</div>
		</div>
	);
}
