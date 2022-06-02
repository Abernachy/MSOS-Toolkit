//next imports
import Link from 'next/link'
//css
import style from './styles/resourcesMain.module.css'
//component imports
import FlexContainer from '../../src/components/FlexContainer/FlexContainer'
import Card from '../../src/components/Card/Card'

const index = () => {
	return (
		<FlexContainer>
			<div className={style.resourceContainer}>
				<section>
					<h1>RESOURCES</h1>
				</section>
				<section>
					<p>
						Whether you are a 621 MSOS customer, an EAGLE member, an AMLO,
						or a future member of the squadron (welcome) resources are
						provided below at no cost to you.
					</p>
					<ul className={style.resourceList}>
						<li>
							<h3>Customer Resources</h3>
							<Card
								name='Customer Resources'
								path='./resources/user-resources'
								img='/imgs/airTranspulling.webp'
								description='Resources for customers'
							/>
						</li>
						<li>
							<h3>621 MSOS Member Resources</h3>
							<FlexContainer>
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
							</FlexContainer>
						</li>
						<li>
							<h3>Newcomer Resources</h3>
							<Card
								name='Newcomer Resources'
								path='./resources/newcomer-resources'
								img='/imgs/JBMDL-Welcome.webp'
								description='Resources for new and upcoming squadron members'
							/>
						</li>
					</ul>
				</section>
			</div>
		</FlexContainer>
	)
}

export default index
