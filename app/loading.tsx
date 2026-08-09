import Image from 'next/image';
import loader from '@/resources/assets/loader.gif';

const LoadingPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				width: '100vw'
			}}
		>
			<Image
				src={loader}
				alt='Loading...'
				style={{ width: 'auto', height: 'auto' }}
				loading='eager'
			/>
		</div>
	);
};

export default LoadingPage;
