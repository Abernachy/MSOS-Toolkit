//Main Imports
import React, { useContext } from 'react'

// css import
import styles from './MobileModal.module.css'

// Component Imports
import RouteContainer from '../RouteContainer/RouteContainer'
import Context from '../../utils/context/Context'

const MobileModal = ({ navLinks }) => {
	const { toggleModal, setToggleModal } = useContext(Context)
	/* This will be the mobile modal for mobile Navigation. navLinks object/state is passed down and the links will be .mapped() to routeContainer components */

	return (
		<div className={styles.overlay}>
			<div className={styles.modalContainer}>
				<ul className={styles.navItems}>
					{navLinks.map((item, index) => (
						<li key={index}>
							<RouteContainer
								onClick={() => setToggleModal(false)}
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
	)
}

export default MobileModal
