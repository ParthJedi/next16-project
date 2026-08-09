import { prisma } from '@/db/prisma';
import { convertToJsonObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
// import { Product } from '@/types';

// get latest products
export async function getLatestProducts() {
	try {
		const products = (
			await prisma.product.findMany({
				take: LATEST_PRODUCTS_LIMIT,
				orderBy: {
					createdAt: 'desc'
				}
			})
		)?.map((product) => ({
			...product,
			price: parseFloat(product.price.toString()),
			rating: parseFloat(product.rating.toString())
		}));
		return convertToJsonObject(products);
	} catch (error) {
		console.error(error);
	}
}

//  get single product by it's slug
export async function getProductBySlug(slug: string) {
	return await prisma.product.findFirst({
		where: { slug: slug }
	});
}
