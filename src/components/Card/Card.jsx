import { useState } from 'react'
import style from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ name, path, img, requireCac = false, description }) => {
	const [showDescription, setShowDescription] = useState(false)

	const toggleDescription = () => {
		setShowDescription(true)
	}

	const hideDescription = () => {
		setShowDescription(false)
	}

	return (
		<>
			<Link href={path} passHref>
				<div
					className={style.cardContainer}
					onMouseLeave={hideDescription}>
					<section className={style.imageBlock}>
						{showDescription ? (
							<p
								className={style.cardDescription}
								onMouseEnter={toggleDescription}>
								{description}
							</p>
						) : null}
						<div
							className={style.imageContainer}
							onMouseEnter={toggleDescription}>
							<Image
								src={img}
								alt='The Law'
								layout='responsive'
								width={1920}
								height={1080}
								quality={100}
								sizes={'100vw'}
								className={style.cardImage}
							/>
						</div>
					</section>

					<section className={style.cardInfoBlock}>
						<div>
							<h3 className={style.cardName}>{name}</h3>
						</div>

						{requireCac ? (
							<div>
								<p className={style.requiresCacBox}>CAC Required</p>
							</div>
						) : null}
					</section>

					<section className={style.buttonSection}>
						<Link href={path} passhref>
							<button className={style.resourceButton}>
								VIEW RESOURCE
							</button>
						</Link>
					</section>
				</div>
			</Link>
		</>
	)
}

export default Card
