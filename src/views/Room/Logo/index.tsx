import { Link } from 'react-router-dom'

import styles from './index.module.css'

import RoomExit from '../../../api/events/emit/RoomExit'

const Logo = () => {
	return (
		<figure className={styles.logo}>
			<Link to={'/'} onClick={() => {
				RoomExit()
			}}>Back to Lobby</Link>
		</figure>
	)
}

export default Logo
