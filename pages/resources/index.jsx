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
						Whether you are a 621 MSOS customer, an EAGLE member, or an
						AMLO, resources are provided below at no cost to you.
					</p>
					<ul className={style.resourceList}>
						<Link href='/resources/user-resources'>
							<li>
								<h2>Customer Resources</h2>
								<p> Resources for customer use</p>
								<Link href='/resources/user-resources'>
									<button>VIEW RESOURCES</button>
								</Link>
							</li>
						</Link>
						<Link href='./resources/eagle-resources'>
							<li>
								<h2>EAGLE Resources</h2>
								<p> Resources for EAGLE use</p>
								<Link href='./resources/eagle-resources'>
									<button>VIEW RESOURCES</button>
								</Link>
							</li>
						</Link>
						<Link href='./resources/amlo-resources'>
							<li>
								<h2>AMLO Resources</h2>
								<p> Resources for AMLO use</p>
								<Link href='./resources/amlo-resources'>
									<button>VIEW RESOURCES</button>
								</Link>
							</li>
						</Link>
					</ul>
				</section>
			</div>
		</FlexContainer>
	)
}

export default index
