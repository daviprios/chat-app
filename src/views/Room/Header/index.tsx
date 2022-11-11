import styles from './index.module.css'

const Header = () => {
	return <div className={styles.header}>{location.pathname.split('/')[1]}</div>
}

export default Header
