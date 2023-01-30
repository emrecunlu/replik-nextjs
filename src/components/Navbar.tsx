import type { INavbarItem } from '@/models/NavbarModel';
import { items as navbarItems } from '@/models/NavbarModel';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="absolute w-full z-20 h-24 flex items-center">
			<div className="container flex items-center justify-between">
				<Link href="/">
					<Image
						src="/static/images/site_logo.svg"
						width={120}
						height={30}
						alt="Navbar Logo"
					/>
				</Link>
				<ul className="md:flex items-center gap-x-10 hidden">
					{navbarItems.map((item: INavbarItem, index: number) => (
						<li key={index}>
							<Link
								className="text-white font-semibold text-sm tracking-wide hover:text-white/70 transition-all"
								href={item.to}
							>
								{item.title.toUpperCase()}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
