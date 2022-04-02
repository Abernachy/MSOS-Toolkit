import styles from './RouteItems'

const RouteItems = (name, description, path) => {
	return (
		<section className={styles.sectionContainer}>
			<a href={path}>
				<div className={styles.itemContainer}>
					<h3 className={styles.itemName}>{name}</h3>
					<p className={styles.itemDescription}>{description} </p>
				</div>
			</a>
		</section>
	)
}

export default RouteItems
