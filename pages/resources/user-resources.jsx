import { useMemo, useState, useEffect } from 'react'
import style from './styles/globalResources.module.css'
import Card from '../../src/components/Card/Card'
import FlexContainer from '../../src/components/FlexContainer/FlexContainer'

import { resourceBuilder } from '../../src/utils/functions/utilityFunctions'
import { userResources } from '../../src/utils/resources/userResources'

const airliftResources = () => {
	const [userAssets, setUserAssets] = useState(userResources)
	const [modifiedAssets, setModifiedAssets] = useState()
	const stuff = useMemo(
		() => resourceBuilder(userAssets, 'type'),
		[userAssets]
	)

	return (
		<div>
			<section className={style.topHeader}>
				<h1>Customer Resources</h1>
			</section>
			<section className={style.mainBody}>
				<p>This is the User resources page </p>
			</section>
			<section className={style.resourcesSection}>
				{console.log(userAssets)}
				{console.log(stuff)}
				{console.log(stuff[0])}
			</section>
		</div>
	)
}

export default airliftResources
