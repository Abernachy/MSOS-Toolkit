import React from 'react'
import Card from '../src/components/Card/Card'
import { userResources } from '../src/utils/resources/userResources'

const rendertest = () => {
	const { name, path, img, requireCac, description } = userResources[0]
	{
		console.log(`${img} vs '/imgs/alawone.jpg'`)
	}
	return (
		<div>
			<Card
				name={name}
				path={path}
				img={img}
				requireCac={requireCac}
				description={description}
			/>
		</div>
	)
}

export default rendertest
