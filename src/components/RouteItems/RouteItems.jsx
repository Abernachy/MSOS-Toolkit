import styles from './RouteItems.module.css'

const RouteItems = ({ name, description, path }) => {
	return (
		// This is basically the individual route item
		<div className={styles.sectionContainer}>
			<a href={path}>
				<div className={styles.itemContainer}>
					<h3 className={styles.itemName}>{name}</h3>
					<p className={styles.itemDescription}>{description} </p>
				</div>
			</a>
		</div>
	)
}

export default RouteItems
