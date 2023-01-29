import classNames from 'classnames';
import Link from 'next/link';

interface ISection extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode;
	spacing?: boolean;
}

interface IHeader {
	title: string;
	description?: string;
	aligment?: 'left' | 'center';
}

interface IBody {
	children: React.ReactNode;
}

interface IHeaderLink {
	title: string;
	href: string;
}

export default function Section({ children, spacing, ...props }: ISection) {
	return (
		<section {...props}>
			{(spacing && <div className="py-32">{children}</div>) || children}
		</section>
	);
}

Section.Body = ({ children }: IBody) => {
	return <div className="container">{children}</div>;
};

Section.Header = ({ title, description, aligment = 'center' }: IHeader) => {
	return (
		<div className="container mb-20">
			<div
				className={classNames({
					'w-full max-w-xl': true,
					'text-center mx-auto': aligment === 'center',
				})}
			>
				<h1
					className={classNames({
						'xl:text-4xl text-3xl text-gray-900 font-bold drop-shadow': true,
						'mb-8': description,
					})}
				>
					{title}
				</h1>
				{description && (
					<span className="text-gray-700 leading-relaxed">{description}</span>
				)}
			</div>
		</div>
	);
};

Section.HeaderLink = ({ title, href }: IHeaderLink) => {
	return (
		<div className="container">
			<div className="flex justify-between mb-16 flex-col lg:flex-row gap-y-8">
				<div className="w-full md:max-w-lg">
					<h1 className="xl:text-4xl text-3xl text-gray-900 font-bold drop-shadow text-center md:text-left">
						{title}
					</h1>
				</div>
				<div className="text-center md:text-left">
					<Link
						href={href}
						className="bg-gradient-to-r from-indigo-400 to-indigo-600 font-semibold text-sm text-white px-8 py-3 rounded-full"
					>
						Ürünlere Git
					</Link>
				</div>
			</div>
		</div>
	);
};
