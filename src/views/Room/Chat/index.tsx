import { useLayoutEffect, useRef, useState } from 'react'

import styles from './index.module.css'

import MessageSend from '../../../api/events/emit/MessageSend'
import MessageRecieve from '../../../api/events/on/MessageRecieve'

import Ballon from './Ballon'

const Chat = () => {
	const [messages, setMessages] = useState<{ message: string, senderName: string, timestamp: number }[]>([])
	const [message, setMessage] = useState('')

	const [toScroll, setToScroll] = useState(true)
	const ref = useRef<HTMLUListElement>(null)

	const sendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		
		if(!message) return

		MessageSend(message)
		setMessage('')
	}

	MessageRecieve((message, username, timestamp) => {
		setMessages(prev => {
			prev.push({message, senderName: username, timestamp})
			return [...prev]
		})
	})

	useLayoutEffect(() => {
 		if (ref.current && toScroll) ref.current.scrollTop = ref.current.scrollHeight
	}, [messages])

	return (
		<section className={styles.chat}>
			<div>
				<ul ref={ref} onScroll={() => setToScroll(ref.current ? ref.current.scrollTop === ref.current.scrollHeight - ref.current.clientHeight : false)}>
					{messages.map((message) => {
						return (
							<Ballon
								key={JSON.stringify({ message })}
								senderName={message.senderName}
								timestamp={new Date(message.timestamp)}
								isMe={location.search.search(`nickname=${message.senderName}`) > 0}
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
