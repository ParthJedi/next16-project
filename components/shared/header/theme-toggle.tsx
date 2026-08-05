'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuContent,
	DropdownMenuCheckboxItem
} from '../../ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sun, Moon, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const handleMounting = (newValue: boolean) => {
			setMounted(newValue);
		};
		handleMounting(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='focus-visible: ring-0 focus-visible: ring-offset-0'
				>
					{theme === 'system' ? (
						<SunMoon className='w-5 h-5' />
					) : theme === 'dark' ? (
						<Moon className='w-5 h-5' />
					) : (
						<Sun className='w-5 h-5' />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Theme</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					onClick={() => setTheme('system')}
					className='w-full justify-start'
					checked={theme === 'system'}
				>
					System
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onClick={() => setTheme('light')}
					className='w-full justify-start'
					checked={theme === 'light'}
				>
					Light
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					onClick={() => setTheme('dark')}
					className='w-full justify-start'
					checked={theme === 'dark'}
				>
					Dark
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ThemeToggle;
