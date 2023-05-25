import Head from 'next/head';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Metaversus</title>

				<link rel="preconnect" href="https://stijndv.com" />
				<link
					rel="stylesheet"
					href="https://stijndv.com/fonts/Eudoxus-Sans.css"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
