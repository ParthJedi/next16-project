import ProductList from '@/components/shared/products/product-list';
import sampleData from '@/db/sample-data';

const Homepage = () => {
	return (
		<>
			<h1>Homepage</h1>
			<ProductList data={sampleData.products} title='Featured Products' />
		</>
	);
};

export default Homepage;
