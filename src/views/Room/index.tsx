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
		const nickname = location.search
			.substring(1, location.search.length - 1)
			.split('&')
			.map((query) => query.split('='))
			.find(item => item[0] === 'nickname')
		const room = location.pathname
			.split('/')[1]

		console.log(room, nickname)
		if(!room || !nickname || !nickname[1]) {
			console.log('return')
			return navigator(`${location.pathname}${location.search}`)
		}
		
		RoomEnterEmit(room[1], nickname[1])
	}, [])

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
