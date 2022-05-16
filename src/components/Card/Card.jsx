import { useState } from 'react'
import style from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ name, path, img, requireCac, description }) => {
	const [showDescription, setShowDescription] = useState(false)

	const toggleDescription = () => {
		setShowDescription(true)
	}

	const hideDescription = () => {
		setShowDescription(false)
	}

	return (
		<div className={style.entityContainer}>
			<Link href={path}>
				<div className={style.cardContainer}>
					<div
						className={style.imageContainer}
						onMouseEnter={toggleDescription}
						onMouseLeave={hideDescription}>
						<Image
							src={img}
							alt='The Law'
							layout='responsive'
							width={5000}
							height={2815}
							quality={100}
							sizes={'100vw'}
						/>
					</div>

					{showDescription ? (
						<div>
							<p
								className={style.cardDescription}
								onMouseEnter={toggleDescription}>
								{description}
							</p>
						</div>
					) : null}

					<section className={style.cardInfo}>
						<div>
							<h3 className={style.cardName}>{name}</h3>
						</div>

						{requireCac ? (
							<div>
								<p className={style.requiresCacBox}>CAC Required</p>
							</div>
						) : null}
					</section>
				</div>
			</Link>
		</div>
	)
}

export default Card
