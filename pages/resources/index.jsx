//next imports
import Link from 'next/link'
//css
import style from './styles/globalResources.module.css'
//component imports
import ResourceContainer from '../../src/components/ResourceContainer/ResourceContainer'
import Card from '../../src/components/Card/Card'

const { topHeader, mainBody, lineDivider, resourcesSection, headerBlock } =
	style

const index = () => {
	return (
		<div>
			<section className={topHeader}>
				<h1>621 MSOS Resources</h1>
			</section>
			<section className={mainBody}>
				<p>
					Whether you are a 621 MSOS customer, an EAGLE member, an AMLO, or
					a future member of the squadron (welcome), resources are provided
					below for your benefit at no cost. If you feel a resource should
					be added to any of these, please do not hesitate to reach out to
					us.
				</p>
				<div className={lineDivider} />
			</section>
			<section
				className={resourcesSection}
				style={{ textAlign: 'center' }}>
				<div>
					<div className={headerBlock}>
						<h2>Customer Resources</h2>
					</div>
					<ResourceContainer>
						<Card
							name='Customer Resources'
							path='./resources/customer-resources'
							img='/imgs/airTranspulling.webp'
							description='Resources for customers'
						/>
					</ResourceContainer>
				</div>
				<div>
					<div className={headerBlock}>
						<h2>Squadron Member Resources</h2>
					</div>
					<ResourceContainer>
						<Card
							name='AMLO Resources'
							path='./resources/amlo-resources'
							img='/imgs/AMLO.webp'
							description=' 621 MSOS resources for AMLOs'
						/>
						<Card
							name='EAGLE Resources'
							path='./resources/eagle-resources'
							img='/imgs/lemon.jpg'
							description=' 621 MSOS resources for EAGLEs'
						/>
						<Card
							name='Newcomer Resources'
							path='/resources/newcomer-resources'
							img='/imgs/JBMDL-Welcome.webp'
							description='Resources for new and upcoming squadron members'
						/>
					</ResourceContainer>
				</div>
			</section>
		</div>
	)
}

export default index
