import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { convertToJsonObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';
// import { Product } from '@/types';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// get latest products
export async function getLatestProducts() {
	const prisma = new PrismaClient({ adapter });
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
