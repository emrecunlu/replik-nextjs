import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import ProductCard from '../Cards/ProductCard';

export default function ProductList() {
	return (
		<Swiper
			breakpoints={{
				300: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1280: {
					slidesPerView: 5,
				},
			}}
			spaceBetween={30}
			modules={[Autoplay]}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard
					title="Headine"
					description="Please add your content here. Keep it short and simple. And smile :)"
					image="/static/images/product.webp"
					href="/product"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
