import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'

import Chat from './Chat'
import Header from './Header'
import List from './List'
import Logo from './Logo'

import RoomEnterEmit from '../../api/events/emit/RoomEnter'

const Room = () => {
	const navigator = useNavigate()

	useEffect(() => {
		const nicknameFullString = location.search
		.substring(1, location.search.length)
		.split('&')
		.map((query) => query.split('='))
		.find(item => item[0] === 'nickname')
		
		const nickname = nicknameFullString ? nicknameFullString[1] : null
		const room = location.pathname.split('/')[1]
		
		if(!room || !nickname) return navigator(`${location.pathname}${location.search}`)
		
		RoomEnterEmit(room, nickname)
	}, [])

	return (
		<main className={styles.app}>
			<aside className={styles.aside}>
				<Logo />
				<List />
			</aside>
			<main className={styles.main}>
				<Header />
				<Chat />
			</main>
		</main>
	)
}

export default Room
