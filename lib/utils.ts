import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// name conflict handler
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// convert prisma object into JSON object
export function convertToJsonObject<T>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
	const [intPart, deciPart] = num.toString().split('.');
	return deciPart ? `${intPart}.${deciPart.padEnd(2, '0')}` : `${intPart}.00`;
}
