import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'
import { routes } from '../../utils/routes'

const Layout = ({ children }) => {
	return (
		<>
			{/*The setup below is talked about on item N.1 on the odditiesYouNeedToResearch.md file */}
			<div className={style.layoutContainer}>
				<div className={style.navWrapper}>
					<Nav className={style.navBar} navLinks={routes.navLinks} />
				</div>
				<div className={style.mainWrapper}>
					<main className={style.mainBody}>{children}</main>
				</div>
				<div className={style.footerWrapper}>
					<Footer className={style.footer} />
				</div>
			</div>
		</>
	)
}

export default Layout
