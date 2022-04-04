// CSS Import
import styles from './RouteContainer.module.css'

// component imports
import RouteItems from '../RouteItems/RouteItems'

const RouteContainer = ({ heading, routes }) => {
	return (
		/*
    This component will take an array of routes and act as a container for them.

    This way I can have a sweet route thingy to show subroutes when the user highlights a Nav item 
    Also this is for Desktop view.  The mobile version will utilize a modal style design with a different component
    */
		<div className={styles.RouteContainer}>
			<h2>{heading}</h2>

			<div className={styles.line} />
			<ul className={styles.list}>
				{routes.map((item, index) => (
					<li key={index}>
						<RouteItems
							name={item.name}
							description={item.description}
							path={item.path}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RouteContainer

/*

2 choices here,
We build the container with the routes in there so that...`
.map(routes => {
  build and style the item here and the styles of the individual items are part of the container 

  This locks the container to only the styling we give it, but we don't have to build a separate component


})

We build the container with the items themselves their own separate component. 

This allows more flexibility with the container in case I want to style it differently based on the components 

.map(routes => {
<Resource name={routes.name}
          descr={routes.desc}
          />
})

*/
