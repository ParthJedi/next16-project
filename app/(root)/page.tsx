import ProductList from '@/components/shared/products/product-list';
import { getLatestProducts } from '@/lib/actions/productActions';
import { Product } from '@/types';

const Homepage = async () => {
	const latestProducts = await getLatestProducts();
	return (
		<>
			<h1>Homepage</h1>
			<ProductList
				data={latestProducts as unknown as Product[]}
				title='Featured Products'
			/>
		</>
	);
};

export default Homepage;
