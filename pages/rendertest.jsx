import React from 'react'
import { routes } from '../src/utils/routes.jsx'
import RouteContainer from '../src/components/RouteContainer/RouteContainer.jsx'

const rendertest = () => {
	const serviceRoutes = routes.navLinks[1].subRoutes
	const servicesHeading = routes.navLinks[1].name

	return (
		<div>
			<h1>Testing out the RouteItems design</h1>
			<RouteContainer heading={servicesHeading} routes={serviceRoutes} />
		</div>
	)
}

export default rendertest
