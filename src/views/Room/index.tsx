import styles from './index.module.css'

import Chat from './Chat'
import Header from './Header'
import List from './List'
import Logo from './Logo'

const Room = () => {
	return (
		<main className={styles.app}>
			<Logo />
			<Header />
			<List />
			<Chat />
		</main>
	)
}

export default Room
