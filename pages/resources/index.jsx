//next imports
import Link from 'next/link'
//css
import style from './styles/resourcesMain.module.css'
//component imports
import ResourceContainer from '../../src/components/ResourceContainer/ResourceContainer'
import Card from '../../src/components/Card/Card'

const index = () => {
	return (
		<div className={style.resourceContainer}>
			<section className={style.resourceHeader}>
				<h1>RESOURCES</h1>
			</section>
			<section className={style.mainBody}>
				<p>
					Whether you are a 621 MSOS customer, an EAGLE member, an AMLO, or
					a future member of the squadron (welcome) resources are provided
					below at no cost to you.
				</p>
				<div className={style.lineDivider} />
				<section className={style.resourceList}>
					<section className={style.resources}>
						<h3>Customer Resources</h3>
						<Card
							name='Customer Resources'
							path='./resources/customer-resources'
							img='/imgs/airTranspulling.webp'
							description='Resources for customers'
						/>
					</section>
					<section className={style.resources}>
						<h3>Squadron Member Resources</h3>
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
					</section>
					<section className={style.resources}>
						<h3>Newcomer Resources</h3>

						<Card
							name='Newcomer Resources'
							path='/resources/newcomer-resources'
							img='/imgs/JBMDL-Welcome.webp'
							description='Resources for new and upcoming squadron members'
						/>
					</section>
				</section>
			</section>
		</div>
	)
}

export default index
