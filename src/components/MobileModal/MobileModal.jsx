//Main Imports
import React from 'react'

// css import
import styles from './MobileModal.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'

const MobileModal = ({ setToggleModal, navLinks }) => {
	/* This will be the mobile modal for mobile Navigation. navLinks object/state is passed down and the links will be .mapped() to routeContainer components */

	return (
		<>
			<div className={styles.centered}>
				<div className={styles.modal}>
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
					<button
						className={styles.closeBtn}
						onClick={() => setToggleModal(false)}>
						Close me
					</button>
				</div>
			</div>
		</>
	)
}

export default MobileModal
