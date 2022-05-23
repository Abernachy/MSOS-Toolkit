import React from 'react'
import style from '../styles/tests.module.css'

const animationtest = () => {
	function stuff(event) {
		const height = window.innerHeight
		const width = window.innerWidth

		// create angles of (-20, -20)
		const yAxisDegree = (event.pagey / width) * 40 - 20
		const xAxisDegree = (event.pageY / height) * -1 * 40 + 20
	}
	return (
		<div>
			<div className={style.demo}>
				<div className={style.perspective_container}>
					<div class={style.card}></div>
				</div>
			</div>
		</div>
	)
}

export default animationtest
