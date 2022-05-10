import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'
import { routes } from '../../utils/routes'

const Layout = ({ children }) => {
	return (
		<>
			<div className={style.layoutContainer}>
				<Nav navLinks={routes.navLinks} />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
