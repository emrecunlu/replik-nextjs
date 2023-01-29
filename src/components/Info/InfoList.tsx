import { FaInfo } from 'react-icons/fa';
import InfoCard, { Props as InfoProps } from '../Cards/InfoCard';

export default function InfoList() {
	const infoList: InfoProps[] = [
		{
			title: 'Design Concept',
			description:
				'Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
			icon: <FaInfo size={14} color="#ffff" />,
		},
		{
			title: 'Design Concept',
			description:
				'Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
			icon: <FaInfo size={14} color="#ffff" />,
		},
		{
			title: 'Design Concept',
			description:
				'Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve semper.',
			icon: <FaInfo size={14} color="#ffff" />,
		},
	];

	return (
		<div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8">
			{infoList.map((info: InfoProps, index: number) => (
				<InfoCard
					title={info.title}
					description={info.description}
					icon={info.icon}
				/>
			))}
		</div>
	);
}
