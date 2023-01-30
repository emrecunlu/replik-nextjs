import Link from 'next/link';
import Image from 'next/image';
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillLinkedin,
} from 'react-icons/ai';

export default function Footer() {
	return (
		<footer>
			<div className="container relative z-10">
				<div className="flex gap-x-16 xl:flex-row flex-col gap-y-16">
					<div className="flex-1 flex gap-x-16 md:flex-row flex-col gap-y-16">
						<div className="flex flex-col flex-[2]">
							<div className="h-16">
								<Link href="/">
									<Image
										src="/static/images/site_logo.svg"
										width={120}
										height={30}
										alt="Navbar Logo"
									/>
								</Link>
							</div>
							<span className="text-gray-200 leading-relaxed text-sm">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
								suscipit, corrupti nam eveniet facilis ex, voluptate aut facere
								placeat, illum quam. Eaque corrupti architecto distinctio
								laborum? Quod omnis iure consequatur.
							</span>
							<ul className="mt-6 flex items-center gap-x-6">
								<li>
									<Link href="/youtube">
										<AiFillFacebook
											size={24}
											className="fill-gray-200 hover:fill-gray-100 transition-all"
										/>
									</Link>
								</li>
								<li>
									<Link href="/youtube">
										<AiFillInstagram
											size={24}
											className="fill-gray-200 hover:fill-gray-100 transition-all"
										/>
									</Link>
								</li>
								<li>
									<Link href="/youtube">
										<AiFillLinkedin
											size={24}
											className="fill-gray-200 hover:fill-gray-100 transition-all"
										/>
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex-[2]">
							<div className="h-16">
								<h1 className="text-gray-50 tracking-wide font-semibold">
									ÇALIŞMA SAATLERİ
								</h1>
							</div>
							<span className="mb-4 block text-gray-200 text-sm font-medium">
								Hafta içi 09:00 - 17:00
							</span>
							<span className="text-gray-200 leading-relaxed text-sm font-medium">
								ERTUĞRUL MAH. NECMETTİN OĞUZ CAD. NO:1 A BLOK K:2 D:5 TORBALI
								İZMİR
							</span>
						</div>
					</div>
					<div className="flex-1 flex gap-x-16 md:flex-row flex-col gap-y-16">
						<div className="flex-1">
							<div className="h-16">
								<h1 className="text-gray-50 tracking-wide font-semibold">
									KURUMSAL
								</h1>
							</div>
						</div>
						<div className="flex-1">
							<div className="h-16">
								<h1 className="text-gray-50 tracking-wide font-semibold">
									HİZMETLERİMİZ
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="w-full h-80 bg-cover bg-centerg bg-no-repeat left-0  absolute bottom-0 opacity-5"
				style={{
					backgroundImage: 'url("/static/images/wave.svg")',
				}}
			></div>
		</footer>
	);
}
