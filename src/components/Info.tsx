import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	description: string;
	href: string;
	rtl?: boolean;
};

export default function Info({ title, description, href, rtl }: Props) {
	return (
		<div className="flex items-center justify-between gap-x-20 flex-col md:flex-row gap-y-12">
			<div
				className={`flex flex-col flex-2 xl:flex-1 gap-y-12 ${
					rtl ? 'order-1' : 'md:order-none order-1'
				}`}
			>
				<h1 className="text-gray-900 font-bold xl:text-4xl lg:text-3xl text-2xl drop-shadow">
					{title}
				</h1>
				<span className="leading-relaxed text-gray-900">{description}</span>
				<div className={`flex ${rtl && 'md:justify-end'}`}>
					<Link
						className="text-sm font-semibold bg-gradient-to-tr from-indigo-300 to-indigo-500 text-white px-12 py-3 rounded-full hover:to-indigo-400 transition-all shadow-2xl shadow-gray-900/50"
						href={href}
					>
						Detaya Git
					</Link>
				</div>
			</div>
			<div className="select-none w-full md:w-auto">
				<Image
					src="/static/images/550.png"
					className="w-full h-full object-cover"
					width={550}
					height={550}
					alt="Information Image"
				/>
			</div>
		</div>
	);
}
