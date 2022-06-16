import React from 'react'
import Card from '../src/components/Card/Card'
import ResourceContainer from '../src/components/ResourceContainer/ResourceContainer'
import { customerResources } from '../src/utils/resources/customerResources'
import { resourceBuilder } from '../src/utils/functions/utilityFunctions'

const rendertest = () => {
	return (
		<div>
			{/* <ResourceContainer>
				{customerResources.map(
					({ name, path, img, requireCac, description }, index) => (
						<Card
							key={index}
							name={name}
							path={path}
							img={img}
							requireCac={requireCac}
							description={description}
						/>
					)
				)}
			</ResourceContainer> */}
		</div>
	)
}

export default rendertest
