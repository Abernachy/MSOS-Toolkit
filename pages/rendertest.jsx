import React from 'react'
import Card from '../src/components/Card/Card'
import FlexContainer from '../src/components/FlexContainer/FlexContainer'
import { userResources } from '../src/utils/resources/userResources'

const rendertest = () => {
	return (
		<div>
			<FlexContainer>
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
			</FlexContainer>
		</div>
	)
}

export default rendertest
