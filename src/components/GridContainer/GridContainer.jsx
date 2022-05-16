import style from './GridContainer.module.css'
const GridContainer = ({ children }) => {
	return (
		// Using this for placing resources in
		<div className={style.GridContainer}>{children}</div>
	)
}

export default GridContainer
