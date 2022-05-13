//Main Imports
import React, { useContext } from 'react'

// css import
import styles from './MobileModal.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'

//PRovider Import
import { useToggleMobileNavContext } from '../SiteProvider/SiteProvider'

const MobileModal = ({ navLinks }) => {
	const { updateNavMenuState } = useToggleMobileNavContext()

	return (
		<div className={styles.overlay}>
			<div className={styles.modalContainer}>
				<ul className={styles.navItems}>
					{navLinks.map((item, index) => (
						<li key={index}>
							<RouteContainer
								heading={item.name}
								subRoutes={item.subRoutes}
								route={item.path}
							/>
						</li>
					))}
				</ul>
			</div>
			<div
				//Creates an area under the mobile nav menu that the use can click and it will close the menu
				className={styles.outsideMobileMenu}
				onClick={updateNavMenuState}></div>
		</div>
	)
}

export default MobileModal
