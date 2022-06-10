import style from './ResourceContainer.module.css'
const ResourceContainer = ({ children }) => {
	return (
		// Using this for placing resources in
		<div className={style.resourceContainer}>{children}</div>
	)
}

export default ResourceContainer
