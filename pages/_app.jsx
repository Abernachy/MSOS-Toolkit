import Layout from '../src/components/Layout/Layout.jsx'
import Head from 'next/head'

import '../styles/globals.css'
import { SiteProvider } from '../src/components/SiteProvider/SiteProvider.jsx'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>621 MSOS</title>
				<meta
					name='keywords'
					content=' 621 MSOS , 621 Mission Support Operations Squadron, MSOS Toolkit'
					key='keywords'
				/>
				<meta
					name='description'
					content='621 MSOS Toolkit'
					key='description'
				/>
				<meta name='author' content='Michael Mason' key='author' />
				<meta
					name='viewport'
					content='width=device-width , initial-scale=1.0'
					key='viewport'
				/>
			</Head>
			<SiteProvider>
				<Layout style={{ scrollBehavior: 'smooth' }}>
					<Component {...pageProps} />
				</Layout>
			</SiteProvider>

		</>
	)
}

export default MyApp
