import { useState } from 'react'
import Ballon from './Ballon'
import styles from './index.module.css'

interface Message {
	senderName: string
	timestamp: Date
	message: string
}

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
		{
			message: 'Mensagem',
			senderName: 'Me',
			timestamp: new Date(),
		},
	])

	const [message, setMessage] = useState('')

	const sendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
	}

	return (
		<section className={styles.chat}>
			<div>
				<ul>
					{messages.map((message) => {
						return (
							<Ballon
								senderName={message.senderName}
								timestamp={message.timestamp}
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
