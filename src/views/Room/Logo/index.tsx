import { Link } from 'react-router-dom'
import styles from './index.module.css'

const Logo = () => {
	return (
		<figure className={styles.logo}>
			<Link to={'/'}>Back to Lobby</Link>
		</figure>
	)
}

export default Logo
