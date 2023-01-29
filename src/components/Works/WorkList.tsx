import { BsBuilding } from 'react-icons/bs';
import type { Props } from '../Cards/BlobCard';
import BlobCard from '../Cards/BlobCard';

export default function WorkList() {
	return (
		<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
			<BlobCard
				icon={<BsBuilding className="fill-white" size={18} />}
				title="Kurumsal"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur iusto quis recusandae voluptatibus id culpa corrupti soluta. Enim nemo inventore omnis nobis? Mollitia rerum a sapiente iusto eaque aliquid."
				href="/kurumsal/1"
			/>
			<BlobCard
				icon={<BsBuilding className="fill-white" size={18} />}
				title="Kurumsal"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur iusto quis recusandae voluptatibus id culpa corrupti soluta. Enim nemo inventore omnis nobis? Mollitia rerum a sapiente iusto eaque aliquid."
				href="/kurumsal/1"
			/>
			<BlobCard
				icon={<BsBuilding className="fill-white" size={18} />}
				title="Kurumsal"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur iusto quis recusandae voluptatibus id culpa corrupti soluta. Enim nemo inventore omnis nobis? Mollitia rerum a sapiente iusto eaque aliquid."
				href="/kurumsal/1"
			/>
			<BlobCard
				icon={<BsBuilding className="fill-white" size={18} />}
				title="Kurumsal"
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aspernatur iusto quis recusandae voluptatibus id culpa corrupti soluta. Enim nemo inventore omnis nobis? Mollitia rerum a sapiente iusto eaque aliquid."
				href="/kurumsal/1"
			/>
		</div>
	);
}
