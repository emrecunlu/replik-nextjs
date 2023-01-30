import Breadcrumb from '@/components/Breadcrumb';
import MainLayout from '@/components/Layouts/MainLayout';
import Section from '@/components/Section/Section';

export default function KurumsalDetail() {
	return (
		<MainLayout>
			<Breadcrumb
				title="Kurumsal İçerik"
				items={[
					{
						title: 'Anasayfa',
						href: '/',
					},
					{
						title: 'Kurumsal',
						href: '/kurumsal',
					},
					{
						title: 'Kurumsal İçerik',
						href: '/kurumsal/icerik',
					},
				]}
			/>
			<main className="h-full min-h-screen">
				<Section spacing>
					<Section.Body>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Repellendus molestiae ipsa repellat incidunt perferendis in nam
							quo molestias accusamus, similique cumque quod quis obcaecati
							autem numquam delectus saepe asperiores architecto!
						</p>
					</Section.Body>
				</Section>
			</main>
		</MainLayout>
	);
}
