import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import navStyles from './Nav.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'

const Navbar = ({ navLinks }) => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [subMenuId, setSubMenuId] = useState(0)

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
								onMouseEnter={() => showSubMenu(index)}
								onMouseLeave={() => hideSubMenu()}>
								<Link href={item.path}>
									<a>{item.name}</a>
								</Link>
								{item.subRoutes && subMenuId == index ? (
									<RouteContainer
										onMouseLeave={() => setSubMenuId(null)}
										className={navStyles.routeContainer}
										heading={item.name}
										routes={item.subRoutes}
									/>
								) : null}
							</div>
						</li>
					))}
				</ul>

				<ul className={navStyles.mobileItems}>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<button className={navStyles.hamBtn}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className={navStyles.hamSvg}
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
