import style from './FlexContainer.module.css'
const GridContainer = ({ children }) => {
	return (
		// Using this for placing resources in
		<div className={style.FlexContainer}>{children}</div>
	)
}

export default GridContainer
