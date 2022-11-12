import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

import RoomEnterEmit from '../../api/events/emit/RoomEnter'
import RoomEnterSuccess from '../../api/events/on/RoomEnterSuccess'

const Lobby = () => {
	const navigate = useNavigate()

	const [room, setRoom] = useState('')
	const [nickname, setNickname] = useState('')

	const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		RoomEnterEmit(room, nickname)
	}
	
	useEffect(() => {
		RoomEnterSuccess(() => {
			navigate(`/${room}?nickname=${nickname}`)
		})
	}, [room, nickname])

	return (
		<main className={styles.lobby}>
			<form onSubmit={submit}>
				<label>
					Nickname
					<input
						type={'text'}
						value={nickname}
						onChange={(e) => setNickname(e.currentTarget.value)}
					/>
				</label>
				<label>
					Room
					<input
						type={'text'}
						value={room}
						onChange={(e) => setRoom(e.currentTarget.value)}
					/>
				</label>
				<button type='submit'>Enter</button>
			</form>
		</main>
	)
}

export default Lobby
