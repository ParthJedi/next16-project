import { ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='w-full px-4 py-2 border-b'>
			<div className='wrapper flex-between'>
				<div className='flex-start'>
					<Link href='/' className='flex-start gap-2 flex-row'>
						<Image
							src='/images/logo.svg'
							alt={`${APP_NAME} logo`}
							height={48}
							width={48}
							priority={true}
						/>
						<span className='hidden lg:block font-bold text-2xl ml-3'>
							{APP_NAME}
						</span>
					</Link>
				</div>
				<div className='flex flex-end space-x-3'>
					<Button asChild variant='ghost'>
						<Link href='/cart' className='flex items-center'>
							<ShoppingCart />
						</Link>
					</Button>
					<Button asChild variant='ghost'>
						<Link href='/login'>
							<UserIcon />
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
