import styles from './LazyShow.module.css'
import { motion } from 'framer-motion'
const LazyShow = ({ children }) => {
	return (
		<motion.div
			className={styles.lazyDiv}
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}>
			{children}
		</motion.div>
	)
}

export default LazyShow
