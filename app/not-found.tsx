'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen gap-3'>
			<Image
				src={'/images/logo.svg'}
				alt={`${APP_NAME} logo`}
				width={200}
				height={200}
				priority
			/>
			<div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
				<h1 className='text-3xl font-bold mb-4'>Not Found</h1>
				<p className='text-destructive mb-4'>Could not find requested page</p>
				<Button variant='outline' onClick={() => (window.location.href = '/')}>
					Go to Homepage
				</Button>
			</div>
		</div>
	);
};

export default NotFoundPage;
