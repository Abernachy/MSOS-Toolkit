import Link from 'next/link'
import styles from './Footer.module.css'
// import { navLinks } from '../utils/linkdata'

const Footer = () => {
	return (
		<footer className={styles.footy}>
			I'm a hot sexy footer bar , I need links and whatever else
			<ul>
				<li>Billy</li>
				<li>Billy</li>
				<li>Billy</li>
			</ul>
		</footer>
	)
}

export default Footer
