//Main Imports
import { useState, useContext } from 'react'
import Link from 'next/link'

// CSS Import
import styles from './RouteContainer.module.css'

// component imports
import RouteItems from '../RouteItems/RouteItems'
import Context from '../../utils/context/Context'

const RouteContainer = ({ heading, subRoutes = null, route }) => {
	const [mobileDropDowns, setMobileDropDowns] = useState('closed')
	const { toggleModal, setToggleModal } = useContext(Context)
	const dropdownHandler = () => {
		if (mobileDropDowns === 'closed') {
			setMobileDropDowns('open')
		} else {
			setMobileDropDowns('closed')
		}
	}

	return (
		<div className={styles.routeContainer}>
			<div className={styles.desktopContainer}>
				<Link href={route}>
					<a>
						<h2 className={styles.routeHeading}>{heading}</h2>
					</a>
				</Link>

				<div className={styles.line} />
				<ul className={styles.list}>
					{/* Optional chaining (?.), this way, if we return something
							with no routes, it wont crash due to routes being undefined */}
					{subRoutes?.map((item, index) => (
						<li key={index}>
							<RouteItems
								name={item.name}
								description={item.description}
								path={item.path}
							/>
						</li>
					))}
				</ul>
			</div>
			{/* Mobile Design */}
			<div className={styles.mobileContainer}>
				<div className={styles.mobileHeader}>
					<Link href={route}>
						<a>
							<h2
								className={styles.routeHeading}
								onClick={() => setToggleModal(false)}>
								{heading}
							</h2>
						</a>
					</Link>
					{subRoutes ? (
						<button
							className={styles.dropDownBtn}
							onClick={dropdownHandler}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className={styles.dropDownSvg}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>
					) : null}
				</div>
				{mobileDropDowns == 'open' ? (
					<div className={styles.mobileItems}>
						<ul>
							{/* Optional chaining (?.), this way, if we return something
							with no routes, it wont crash due to routes being undefined */}
							{subRoutes?.map((item, index) => (
								<li key={index}>
									<RouteItems name={item.name} path={item.path} />
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default RouteContainer

/*

2 choices here,
We build the container with the routes in there so that...`
.map(routes => {
  build and style the item here and the styles of the individual items are part of the container 

  This locks the container to only the styling we give it, but we don't have to build a separate component


})

We build the container with the items themselves their own separate component. 

This allows more flexibility with the container in case I want to style it differently based on the components 

.map(routes => {
<Resource name={routes.name}
          descr={routes.desc}
          />
})

*/
