import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/Cards/ProductCard';
import MainLayout from '@/components/Layouts/MainLayout';
import Section from '@/components/Section/Section';

export default function Products() {
	return (
		<MainLayout>
			<Breadcrumb
				title="Ürünler"
				items={[
					{ title: 'Anasayfa', href: '/' },
					{ title: 'Ürünler', href: '/products' },
				]}
			/>
			<main className="h-full min-h-screen bg-gradient-to-r from-white to-indigo-50">
				<Section spacing>
					<Section.Header aligment="left" title="Ürünlerimiz" />
					<Section.Body>
						<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							<ProductCard
								title="Headine"
								description="Please add your content here. Keep it short and simple. And smile :)"
								image="/static/images/product.webp"
								href="/product"
							/>
							<ProductCard
								title="Headine"
								description="Please add your content here. Keep it short and simple. And smile :)"
								image="/static/images/product.webp"
								href="/product"
							/>
							<ProductCard
								title="Headine"
								description="Please add your content here. Keep it short and simple. And smile :)"
								image="/static/images/product.webp"
								href="/product"
							/>
							<ProductCard
								title="Headine"
								description="Please add your content here. Keep it short and simple. And smile :)"
								image="/static/images/product.webp"
								href="/product"
							/>
							<ProductCard
								title="Headine"
								description="Please add your content here. Keep it short and simple. And smile :)"
								image="/static/images/product.webp"
								href="/product"
							/>
						</div>
					</Section.Body>
				</Section>
			</main>
		</MainLayout>
	);
}
