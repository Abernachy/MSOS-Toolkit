import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import navStyles from './Nav.module.css'

const Navbar = ({ navLinks }) => {
	const [toggleMenu, setToggleMenu] = useState('off')

	const toggleNav = () => {
		if (toggleMenu == 'off') {
			setToggleMenu('on')
		} else {
			setToggleMenu('off')
		}
		console.log(toggleMenu)
	}

	return (
		<header>
			<nav className={navStyles.Nav}>
				<ul className={navStyles.deskItems}>
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
				<ul className={navStyles.mobileItems}>
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

export default Navbar

// if (screenWidth < 500) {
// 	return (
// 		<header>
// 			<nav className={navStyles.mobileNav}>
// 				<ul className={navStyles.mobileItems}>
// 					<li>
// 						<Link href='/'>Home</Link>
// 					</li>
// 					<li>
// 						<button className={navStyles.hamBtn} onClick={toggleNav}>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className={navStyles.hamSvg}
// 								viewBox='0 0 20 20'
// 								fill='currentColor'>
// 								<path
// 									fillRule='evenodd'
// 									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
// 									clipRule='evenodd'
// 								/>
// 							</svg>
// 						</button>
// 					</li>
// 				</ul>
// 			</nav>
// 		</header>
// 	)
// }
