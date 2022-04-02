import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Head from 'next/head'
import layoutStyle from './Layout.module.css'
import { routes } from '../../utils/routes'

const Layout = ({ children }) => {
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
			<Nav navLinks={routes.navLinks} />

			<div className={layoutStyle.container}>
				<main>{children}</main>

				<Footer />
			</div>
		</>
	)
}

export default Layout
