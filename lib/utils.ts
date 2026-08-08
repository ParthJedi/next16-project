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
