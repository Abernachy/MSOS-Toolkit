import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// CSS Imports
import navStyles from './Nav.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'
import MobileModal from '../MobileModal/MobileModal'

//context Import
import Context from '../../utils/context/Context'

const Navbar = ({ navLinks }) => {
	const [toggleModal, setToggleModal] = useState(false)
	const [subMenuId, setSubMenuId] = useState(0)

	const showSubMenu = (index) => {
		setSubMenuId(index)
	}

	const hideSubMenu = () => {
		setSubMenuId(null)
	}

	const mobileNavHandler = (toggleModal) => {
		setToggleModal(!toggleModal)
	}

	return (
		<header>
			<nav className={navStyles.Nav}>
				<ul className={navStyles.deskItems}>
					{navLinks.map((item, index) => (
						<li key={index}>
							<div
								onClick={hideSubMenu}
								onMouseEnter={() => showSubMenu(index)}
								onMouseLeave={hideSubMenu}>
								<Link href={item.path}>
									<a>{item.name}</a>
								</Link>
								{item.subRoutes && subMenuId == index ? (
									<RouteContainer
										onMouseLeave={hideSubMenu}
										className={navStyles.routeContainer}
										heading={item.name}
										route={item.path}
										subRoutes={item.subRoutes}
									/>
								) : null}
							</div>
						</li>
					))}
				</ul>
				<Context.Provider value={{ toggleModal, setToggleModal }}>
					<div className={navStyles.mobileNav}>
						<ul className={navStyles.mobileItems}>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li className={navStyles.lastItem}>
								<button
									className={navStyles.hamBtn}
									onClick={() => mobileNavHandler(toggleModal)}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className={navStyles.hamSvg}
										fill='none'
										viewBox='3 0 20 20'
										stroke='currentColor'
										strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								</button>
								{toggleModal && <MobileModal navLinks={navLinks} />}
							</li>
						</ul>
					</div>
				</Context.Provider>
			</nav>
		</header>
	)
}

export default Navbar
