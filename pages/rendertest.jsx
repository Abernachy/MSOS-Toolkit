import React from 'react'
import { routes } from '../src/utils/routes.jsx'
import RouteContainer from '../src/components/RouteContainer/RouteContainer.jsx'
import RouteItems from '../src/components/RouteItems/RouteItems'
import MobileModal from '../src/components/MobileModal/MobileModal'

const rendertest = () => {
	const serviceRoutes = routes.navLinks[1]
	const servicesHeading = routes.navLinks[1].name

	return (
		<div>
			<h1>Testing out the RouteItems design</h1>
			<RouteContainer
				heading={servicesHeading}
				route={serviceRoutes.path}
				subRoutes={serviceRoutes.subRoutes}
			/>
		</div>
	)
}

export default rendertest
