import { useContext } from 'react'
import Link from 'next/link'
import styles from './RouteItems.module.css'
import Context from '../../utils/context/Context'

const RouteItems = ({ name, description = null, path }) => {
	const { state, updateState } = useContext(Context)

	return (
		// This is basically the individual route item
		<div>
			<div className={styles.desktopContainer}>
				<Link href={path}>
					<a className={styles.desklink}>
						<div className={styles.itemContainer}>
							<h3 className={styles.itemName}>{name}</h3>
							<p className={styles.itemDescription}>{description} </p>
						</div>
					</a>
				</Link>
			</div>
			{/* Mobile Items */}
			<div className={styles.mobileContainer}>
				<div className={styles.itemContainer}>
					<Link href={path}>
						<a>
							<h2 onClick={() => updateState(false)}>{name}</h2>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default RouteItems
