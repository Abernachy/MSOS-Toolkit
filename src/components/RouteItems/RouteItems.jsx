import Link from 'next/link'
import styles from './RouteItems.module.css'

const RouteItems = ({ name, description, path }) => {
	return (
		// This is basically the individual route item
		<div>
			<div className={styles.desktopSectionContainer}>
				<Link href={path}>
					<a>
						<div className={styles.itemContainer}>
							<h3 className={styles.itemName}>{name}</h3>
							<p className={styles.itemDescription}>{description} </p>
						</div>
					</a>
				</Link>
			</div>
			<div className={styles.mobileSectionContainer}></div>
		</div>
	)
}

export default RouteItems
