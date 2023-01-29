import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section id="hero">
			<div className="min-h-screen w-full bg-gradient-to-tl from-indigo-200 to-indigo-600 relative flex items-center">
				<div className="container flex items-center gap-x-32">
					<div className="container flex flex-col gap-y-12 xl:flex-1 lg:w-[70%] w-full">
						<h1 className="text-white font-bold text-3xl lg:text-4xl leading-normal text-center lg:text-left">
							Lorem ipsum dolor sit amet consectetur.
						</h1>
						<span className="text-gray-100 leading-normal text-center lg:text-left">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
							quos fugiat perspiciatis? Cumque est error in quas delectus?
							Provident amet odio cupiditate veritatis tempora tenetur. Facilis
							totam enim aperiam omnis!
						</span>
						<div className="flex lg:justify-start justify-center">
							<Link
								href="/"
								className="text-white bg-indigo-500 hover:bg-indigo-400 transition-all rounded-full font-semibold text-sm px-8 py-3"
							>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="lg:block hidden">
						<Image
							src="/static/images/500.png"
							className="w-full object-cover animate-pulse"
							width={500}
							height={500}
							alt="Hero Image"
						/>
					</div>
				</div>
				<div
					className="bg-cover bg-center w-full h-64 bg-no-repeat absolute bottom-0"
					style={{ backgroundImage: 'url("/static/images/wave-haikei.svg")' }}
				></div>
			</div>
		</section>
	);
}
