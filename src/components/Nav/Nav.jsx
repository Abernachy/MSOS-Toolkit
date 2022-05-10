import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// CSS Imports
import navStyles from './Nav.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'
import MobileModal from '../MobileModal/MobileModal'

// Provider Import
import { useToggleMobileNavContext } from '../SiteProvider/SiteProvider'

const Navbar = ({ navLinks }) => {
	const [subMenuId, setSubMenuId] = useState(0)
	const { navMenuState, updateNavMenuState } = useToggleMobileNavContext()

	const showSubMenu = (index) => {
		setSubMenuId(index)
	}

	const hideSubMenu = () => {
		setSubMenuId(null)
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

				<div className={navStyles.mobileNav}>
					<ul className={navStyles.mobileItems}>
						<li className={navStyles.lastItem}>
							<button
								className={navStyles.hamBtn}
								onClick={updateNavMenuState}>
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
							{navMenuState && <MobileModal navLinks={navLinks} />}
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
