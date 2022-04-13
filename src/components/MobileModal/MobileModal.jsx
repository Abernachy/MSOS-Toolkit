import React from 'react'

// css import
import styles from './MobileModal.module.css'

const MobileModal = ({ setIsOpen }) => {
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Dialog</h5>
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setIsOpen(false)}>
						<h5>He Dead</h5>
					</button>
				</div>
			</div>
		</>
	)
}

export default MobileModal
