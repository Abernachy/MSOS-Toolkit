import React from 'react'
import Card from '../src/components/Card/Card'
import GridContainer from '../src/components/GridContainer/GridContainer'
import { userResources } from '../src/utils/resources/userResources'

const rendertest = () => {
	return (
		<div>
			<GridContainer>
				{userResources.map(
					({ name, path, img, requireCac, description }, index) => (
						<Card
							name={name}
							path={path}
							img={img}
							requireCac={requireCac}
							description={description}
						/>
					)
				)}
			</GridContainer>
		</div>
	)
}

export default rendertest
