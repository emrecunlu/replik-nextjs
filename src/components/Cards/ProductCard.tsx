import Image from 'next/image';
import Link from 'next/link';

type Props = {
	image: string;
	title: string;
	description: string;
	href: string;
};

export default function ProductCard({
	image,
	title,
	description,
	href,
}: Props) {
	return (
		<div className="rounded-md border border-gray-2 00 group select-none transition-all">
			<div className="p-8">
				<div className="w-full overflow-hidden rounded-md">
					<Image
						src={image}
						width={256}
						height={173}
						className="w-full object-cover rounded group-hover:scale-110 transition-all duration-700 group-hover:brightness-75 shadow-gray-900"
						alt={title}
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex flex-col mt-8 gap-y-2">
						<h1 className="font-semibold text-gray-900">{title}</h1>
						<span className="text-sm text-gray-600">{description}</span>
					</div>
					<div className="flex mt-8">
						<Link
							className="rounded-full bg-gradient-to-r from-indigo-500 hover:to-indigo-500 to-indigo-600 text-white font-semibold text-sm py-2 px-8 transition-all duration-700"
							href={href}
						>
							İncele
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
