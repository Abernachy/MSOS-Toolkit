import { useState } from 'react'
import style from './styles/servicesMain.module.css'

const eagleServices = () => {
	return (
		<div>
			<section className={style.topBlock}>
				<h1 className={style.topHeader}>EAGLES</h1>
				<section className={style.mainBody}>
					<p>
						Expeditionary Air Ground Liaison Elements (EAGLES) can provide
						a number of services advertised below
					</p>
					<section className={style.serviceDescriptionContainer}>
						<p>
							EAGLES can pre-inspect your unit's paperwork before your
							Joint-Inspection so that they can find any issues before the
							Joint Inspectors find them.
						</p>
						<p>ImagePlaceholder</p>
					</section>
					<section className={style.serviceDescriptionContainer}>
						<p>
							EAGLES can pre-inspect your units equipment to ensure they
							are in compliance with the DTR Part 3 to ensure your assets
							get to where they need to go and your unit can complete it's
							mission.
						</p>
						<p>ImagePlaceholder</p>
					</section>
				</section>
				<section className={style.bottomBlock}>
					<p>Request an EAGLE team</p>
				</section>
			</section>
		</div>
	)
}

export default eagleServices
