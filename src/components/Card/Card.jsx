import React from 'react'
import style from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ name, path, img, requireCac, description }) => {
	return (
		<div className={style.entityContainer}>
			<Link href={path}>
				<div className={style.cardContainer}>
					<section className={style.cardImage}>
						<Image
							src={img}
							alt='The Law'
							layout='responsive'
							width={5000}
							height={2815}
							quality={100}
						/>
						<div className={style.descriptionContainer}>
							<p className={style.cardDescription}>{description}</p>
						</div>
					</section>
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
