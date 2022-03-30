import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import navStyles from './Nav.module.css'
import { navLinks } from '../../utils/linkdata'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState('off')
	const [screenWidth, setScreenWidth] = useState(0)

	const toggleNav = () => {
		if (toggleMenu == 'off') {
			setToggleMenu('on')
		} else {
			setToggleMenu('off')
		}
		console.log(toggleMenu)
	}

	useEffect(() => {
		const changedWidth = () => {
			setScreenWidth(window.innerWidth)
		}
		window.addEventListener('resize', changedWidth)

		return () => {
			window.removeEventListener('resize', changedWidth)
		}
	}, [])

	if (screenWidth < 500) {
		return (
			<header>
				<nav className={navStyles.mobileNav}>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<button className={navStyles.hamBtn} onClick={toggleNav}>
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

	return (
		<header>
			<nav className={navStyles.deskNav}>
				<ul>
					{navLinks.map((link, index) => {
						return (
							// <li className='listItem'>
							<Link href={link.path} key={link.index}>
								{link.name}
							</Link>
							// </li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
