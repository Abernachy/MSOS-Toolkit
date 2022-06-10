import { useMemo, useState } from 'react'
import style from './styles/globalResources.module.css'
import Card from '../../src/components/Card/Card'
import ResourceContainer from '../../src/components/ResourceContainer/ResourceContainer'

import { resourceBuilder } from '../../src/utils/functions/utilityFunctions'
import { eagleResources } from '../../src/utils/resources/eagleResources'

const EagleResources = () => {
	const [userAssets, setUserAssets] = useState(eagleResources)

	const stuff = useMemo(
		() => resourceBuilder(userAssets, 'type'),
		[userAssets]
	)
	const [eagleResourcesList, setEagleResourcesList] = useState(stuff)

	return (
		<div>
			<section className={style.topHeader}>
				<h1>EAGLE Resources</h1>
			</section>
			<section className={style.mainBody}>
				<p>
					Below are resources for our valued 621 MSOS EAGLEs. If you
					believe a resource is missing that should be added, please do not
					hesitate to reach out to us.
				</p>
				<div className={style.lineDivider} />
			</section>
			<section className={style.resourcesSection}>
				{eagleResourcesList.map((item, index) => (
					<div className={style.resourcesContainer} key={index}>
						<section className={style.headerBlock}>
							<h2>{item.resourceType}</h2>
							<h2>Total Resources: {item.resourcesList.length}</h2>
						</section>

						<ResourceContainer>
							{item.resourcesList.map(
								(
									{ name, type, path, img, requireCac, description },
									index
								) => (
									<Card
										key={index}
										name={name}
										type={type}
										path={path}
										img={img}
										requireCac={requireCac}
										description={description}
									/>
								)
							)}
						</ResourceContainer>
					</div>
				))}
			</section>
		</div>
	)
}

export default EagleResources
