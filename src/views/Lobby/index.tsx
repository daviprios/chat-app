import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.sass'

import RoomEnterEmit from '@/api/events/emit/RoomEnter'
import InputText from '@/components/Form/InputText'

const Lobby = () => {
	const navigate = useNavigate()

	const [room, setRoom] = useState('')
	const [nickname, setNickname] = useState('')

	const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		RoomEnterEmit(room, nickname)
		navigate(`/${room}?nickname=${nickname}`)
	}

	return (
		<main className={styles.lobby}>
			<form onSubmit={submit}>
				<label>
					<span>Nickname</span>
					<InputText getValue={nickname => setNickname(nickname)}/>
				</label>
				<label>
					<span>Room</span>
					<InputText getValue={room => setRoom(room)}/>
				</label>
				<button type='submit'>Enter</button>
			</form>
		</main>
	)
}

export default Lobby
