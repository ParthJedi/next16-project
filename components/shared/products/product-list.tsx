import ProductCard from './product-card';
import { Product } from '@/db/sample-data';

const ProductList = ({
	data,
	title
}: {
	data: Product[] | undefined;
	title?: string;
}) => {
	return (
		<div className='my-10'>
			{title && <h2 className='h2-bold mb-4'>{title}</h2>}
			{data && data.length === 0 ? (
				<p>No products found.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{data &&
						data.map((product) => (
							<ProductCard key={product.slug} product={product} />
						))}
				</div>
			)}
		</div>
	);
};

export default ProductList;
