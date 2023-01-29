import Link from 'next/link';
import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

interface IProps {
	title: string;
	items: { title: string; href: string }[];
}

export default function Breadcrumb({ title, items }: IProps) {
	return (
		<div className="w-full pt-[theme(spacing.24)] bg-gradient-to-b from-blue-700 to-indigo-900 flex items-center relative">
			<div className="container lg:py-28 py-20 z-10">
				<h1 className="text-center font-bold text-white lg:text-5xl md:text-4xl text-3xl tracking-wider">
					{title.toUpperCase()}
				</h1>
				<ul className="flex items-center justify-center mt-8 gap-x-4 flex-wrap">
					{items.map((item, index: number) => (
						<React.Fragment key={index}>
							<li>
								<Link
									className="text-gray-50 hover:text-white lg:text-base text-sm transition-all"
									href={item.href}
								>
									{item.title}
								</Link>
							</li>
							{index !== items.length - 1 && (
								<AiOutlineDoubleRight className="fill-gray-200" />
							)}
						</React.Fragment>
					))}
				</ul>
			</div>
			<div
				className="bg-cover bg-no-repeat h-full absolute w-full top-0 opacity-20"
				style={{ backgroundImage: "url('/static/images/wave.svg')" }}
			></div>
		</div>
	);
}
