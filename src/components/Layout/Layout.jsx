import {createContext, useContext} from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'
import { routes } from '../../utils/routes'

import initialState from '../../utils/initialState/initialState'

const Layout = ({ children }) => {
	const SiteContext = createContext() 
	return (
		<>
		<SiteContext.Provider value={initialState}>

		
			<div className={style.layoutContainer}>
				<Nav navLinks={routes.navLinks} />
				<main>{children}</main>
				<Footer />
			</div>
			</SiteContext.Provider>
		</>
	)
}

export default Layout
