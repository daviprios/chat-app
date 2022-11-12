import { useEffect, useState } from 'react'

import styles from './index.module.css'

import MessageSend from '../../../api/events/emit/MessageSend'
import MessageRecieve from '../../../api/events/on/MessageRecieve'

import Ballon from './Ballon'

const Chat = () => {
	const [messages, setMessages] = useState<{ message: string, senderName: string, timestamp: number }[]>([])

	const [message, setMessage] = useState('')

	const sendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		
		if(!message) return

		MessageSend(message)
		setMessage('')
	}

	useEffect(() => {
		MessageRecieve((message, username, timestamp) => {
			setMessages(prev => {
				prev.push({message, senderName: username, timestamp})
				return [...prev]
			})
		})
	}, [])

	return (
		<section className={styles.chat}>
			<div>
				<ul>
					{messages.map((message) => {
						return (
							<Ballon
								key={JSON.stringify({ message })}
								senderName={message.senderName}
								timestamp={new Date(message.timestamp)}
							>
								{message.message}
							</Ballon>
						)
					})}
				</ul>
				<form onSubmit={sendMessage}>
					<input value={message} onChange={e => setMessage(e.currentTarget.value)} />
					<button type='submit'>Enviar</button>
				</form>
			</div>
		</section>
	)
}

export default Chat
