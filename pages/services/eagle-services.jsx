import { useState } from 'react'
import style from './styles/servicesMain.module.css'
import Image from 'next/future/image'
import jaiImg from '../../public/imgs/inspection2.jpg'

const css = { wdith: '100%', height: 'auto' }

const eagleServices = () => {
	return (
		<div>
			<div>
				<h1 className={style.topHeader}>EAGLES</h1>
			</div>
			<section className={style.mainBody}>
				<p className={style.eagleDescription}>
					Expeditionary Air Ground Liaison Elements (EAGLES) can provide a
					number of services advertised below
				</p>
				<div className={style.lineDivider} />

				<div className={style.servicesMainContainer}>
					<div className={style.serviceContainer}>
						<p className={style.serviceDescription}>
							EAGLES can pre-inspect your unit's paperwork before your
							Joint-Inspection so that they can find any issues before the
							Joint Inspectors find them.
						</p>
						<div className={style.imageContainer}>
							<Image
								className={style.serviceImage}
								src={jaiImg}
								alt='Checking equipment'
								// width={500}
								// height={500}
							/>
						</div>
					</div>
					<div className={style.serviceContainer}>
						<p className={style.serviceDescription}>
							EAGLES can pre-inspect your units equipment to ensure they
							are in compliance with the DTR Part 3 to ensure your assets
							get to where they need to go and your unit can complete it's
							mission.
						</p>
						<div className={style.imageContainer}>
							<Image
								className={style.serviceImage}
								src={jaiImg}
								alt='Checking equipment'
							/>
						</div>
					</div>
					<button className={style.btn}>Request an EAGLE Team</button>
				</div>
			</section>
		</div>
	)
}

export default eagleServices
