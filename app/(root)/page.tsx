import ProductList from '@/components/shared/products/product-list';
import { getLatestProducts } from '@/lib/actions/productActions';

const Homepage = async () => {
	const latestProducts = await getLatestProducts();
	return (
		<>
			<h1>Homepage</h1>
			<ProductList data={latestProducts} title='Featured Products' />
		</>
	);
};

export default Homepage;
