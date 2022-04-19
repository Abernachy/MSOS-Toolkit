import React from 'react'
import { routes } from '../src/utils/routes.jsx'
import RouteContainer from '../src/components/RouteContainer/RouteContainer.jsx'
import RouteItems from '../src/components/RouteItems/RouteItems'
import MobileModal from '../src/components/MobileModal/MobileModal'

const rendertest = () => {
	const serviceRoutes = routes.navLinks[1]
	const servicesHeading = routes.navLinks[1].name
	const allRoutes = routes.navLinks

	return (
		<div>
			<h1>Testing out the RouteItems design</h1>
			<RouteContainer
				heading={servicesHeading}
				route={serviceRoutes.path}
				subRoutes={serviceRoutes.subRoutes}
			/>

			<h3>Stuff stuff and more stuff</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
				optio, nobis, voluptate cum officia quae expedita tempora eligendi
				culpa molestias corrupti aliquam tempore. Doloremque, esse!
			</p>
		</div>
	)
}

export default rendertest
