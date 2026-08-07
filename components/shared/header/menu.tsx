import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import ThemeToggle from './theme-toggle';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';

const Menu = () => {
	return (
		<div className='flex justify-end gap-3'>
			<nav className='hidden md:flex w-full max-w-xs gap-1'>
				<ThemeToggle />
				<Button asChild variant='ghost'>
					<Link href='/cart'>
						<ShoppingCart /> Cart
					</Link>
				</Button>
				<Button asChild>
					<Link href='/login'>
						<UserIcon /> Sign In
					</Link>
				</Button>
			</nav>
			<nav className='md:hidden'>
				<Sheet>
					<SheetTrigger className='align-middle'>
						<EllipsisVertical />
					</SheetTrigger>
					<SheetContent className='flex flex-col items-start pl-3 pt-6'>
						<SheetTitle className='font-bold text-lg'>Menu</SheetTitle>
						<ThemeToggle />
						<Button asChild variant='ghost'>
							<Link href='/cart'>
								<ShoppingCart /> Cart
							</Link>
						</Button>
						<Button asChild>
							<Link href='/login'>
								<UserIcon /> Sign In
							</Link>
						</Button>
						<SheetDescription></SheetDescription>
					</SheetContent>
				</Sheet>
			</nav>
		</div>
	);
};

export default Menu;
