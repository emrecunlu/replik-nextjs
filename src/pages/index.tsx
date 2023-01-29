import CorporateList from '@/components/Corporate/CorporateList';
import HeroSection from '@/components/HeroSection';
import Info from '@/components/Info';
import InfoList from '@/components/Info/InfoList';
import MainLayout from '@/components/Layouts/MainLayout';
import Section from '@/components/Section/Section';
import ProductList from '@/components/Slider/ProductList';
import WorkList from '@/components/Works/WorkList';

export default function App() {
	return (
		<MainLayout>
			<Section id="home">
				<HeroSection />
			</Section>
			<Section
				className="bg-gradient-to-b from-white to-indigo-50"
				spacing
				id="information"
			>
				<Section.Body>
					<Info
						title="The best design for your studio website"
						description="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat."
						href="/to"
					/>
				</Section.Body>
			</Section>
			<Section
				className="bg-gradient-to-t from-white to-indigo-50"
				spacing
				id="information-rtl"
			>
				<Section.Body>
					<Info
						rtl
						title="The best design for your studio website"
						description="Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis volutpat."
						href="/to"
					/>
				</Section.Body>
			</Section>
			<Section
				className="bg-gradient-to-b from-white to-indigo-50"
				spacing
				id="corpoartes"
			>
				<Section.Header
					title="Kurumsal"
					description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ipsum expedita fugit, tempore iure iste minima? At amet quidem dolorum id veritatis hic dolores aliquam iste, unde soluta tempora accusantium."
				/>
				<Section.Body>
					<CorporateList />
				</Section.Body>
			</Section>
			<Section
				className="bg-gradient-to-t from-white to-indigo-50"
				spacing
				id="informations"
			>
				<Section.Header
					title="The best design for your studio website"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Architecto nisi inventore doloremque nulla qui magnam assumenda!
							Repellat aut dignissimos, nisi porro doloribus minima, mollitia
							suscipit soluta delectus aliquid inventore nesciunt."
					aligment="left"
				/>
				<Section.Body>
					<InfoList />
				</Section.Body>
			</Section>
			<Section
				className="bg-gradient-to-b from-white to-indigo-50"
				spacing
				id="works"
			>
				<Section.Header
					title="Hizmetlerimiz"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Architecto nisi inventore doloremque nulla qui magnam assumenda!
							Repellat aut dignissimos, nisi porro doloribus minima, mollitia
							suscipit soluta delectus aliquid inventore nesciunt."
				/>
				<Section.Body>
					<WorkList />
				</Section.Body>
			</Section>
			<Section
				className="bg-gradient-to-t from-white to-indigo-50"
				spacing
				id="products"
			>
				<Section.HeaderLink
					title="The best design for your studio website"
					href="/products"
				/>
				<Section.Body>
					<div className="lg:mr-break-out">
						<ProductList />
					</div>
				</Section.Body>
			</Section>
		</MainLayout>
	);
}
