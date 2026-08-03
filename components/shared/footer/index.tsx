import { APP_NAME } from '@/lib/constants';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='w-full px-4 py-2 border-t'>
			<div className='wrapper flex-center gap-2'>
				&copy;{currentYear} {APP_NAME}. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
