import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/resources/assets/styles/globals.css';
// import '@/public/images/logo.svg';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Ecommerce',
	description: 'Ecommerce app to buy merchandise'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
