import Footer from '../Footer';
import Navbar from '../Navbar';
import Section from '../Section/Section';

interface IProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
	return (
		<>
			<Navbar />
			{children}
			<Section className="py-32 relative bg-gray-900" id="footer">
				<Footer />
			</Section>
		</>
	);
}
