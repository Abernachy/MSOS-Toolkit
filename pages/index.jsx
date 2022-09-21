import Head from 'next/head'
import Image from 'next/image'

import msosHero from '../public/imgs/MSOSHero1.jpg'
import Riley1 from '../public/imgs/Riley1.jpg'
import Riley2 from '../public/imgs/Riley2.jpg'
import Riley3 from '../public/imgs/Riley3.jpg'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<div>
				<div className={styles.heroContainer}>
					<Image
						src={msosHero}
						className={styles.heroImage}
						alt='MSOS doing the thing'
					/>

					<section className={styles.heroText}>
						<h1> 621 Mission Support Operations Squadron </h1>
						<p>Moving the Joint Force since 1964 </p>
					</section>
				</div>
			</div>
			<div className={styles.mainContainer}>
				<section className={styles.splitContainer}>
					<div className={styles.textContainer}>
						<h3>Big movement coming and don't know what to do?</h3>
						<p>
							Our EAGLE Team services will give you the training you need
							to prepare for your unit's next big move.{' '}
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src={Riley1}
							layout='responsive'
							alt='stuff is happening'
							objectPosition='center'
						/>
					</div>
				</section>
				<div>
					<section className={styles.splitContainer}>
						<div className={styles.imageContainer}>
							<Image
								src={Riley1}
								layout='responsive'
								alt='stuff is happening'
								objectFit='fill'
								objectPosition='right'
							/>
						</div>
						<div className={styles.textContainer}>
							<h3>Is your cargo ready for tomorrow's deployment?</h3>
							<p>
								Rest easy knowing our team of professionals will help find
								and resolve any and all cargo problems before the Joint
								Inspectors even show up{' '}
							</p>
						</div>
					</section>
				</div>
				<section className={styles.splitContainer}>
					<div className={styles.textContainer}>
						<h3>
							Is your Hazardous Declaration paperwork correct? Does it even
							exist?
						</h3>
						<p>
							Our EAGLE Team experts will look through all of your
							documentation to ensure its problem free and ready for the
							Joint Inspection
						</p>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src={Riley2}
							layout='responsive'
							alt='stuff is happening'
							objectFit='responsive'
						/>
					</div>
				</section>
				<section className={styles.splitContainer}>
					<div className={styles.imageContainer}>
						<Image
							src={Riley3}
							layout='responsive'
							alt='stuff is happening'
							objectFit='fill'
						/>
					</div>
					<div className={styles.textContainer}>
						<h3>Need a cargo plane and don't know where to start?</h3>
						<p>
							Our Air Mobility Liaison Officers are experts of their
							aircraft and are placed with your unit so you can get faster
							with less problems.{' '}
						</p>
					</div>
				</section>
				<section className={styles.splitContainer}>
					<div className={styles.textContainer}>
						<h3>How is your Communication Security?</h3>
						<p>
							Our Communication experts will inspect and povide asisstance
							with your Comm Security needs. Don't lose sleep wondering if
							your unit is within Gov't regulations.{' '}
						</p>
					</div>
				</section>
			</div>
		</div>
	)
}
