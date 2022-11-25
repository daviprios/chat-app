import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import styles from './index.module.css'

import MessageSend from '../../../api/events/emit/MessageSend'
import MessageRecieve from '../../../api/events/on/MessageRecieve'

import Ballon from './Ballon'
import InfoBallon from './InfoBallon'

const Chat = () => {
	const [messages, setMessages] = useState<{ message: string, senderName: string, timestamp: number }[]>(() => JSON.parse(localStorage.getItem('messages') ?? '[]'))
	const [message, setMessage] = useState('')
	const [lastMessageTime, setLastMessageTime] = useState(() => Number(localStorage.getItem('lastTime')) || 0)

	const [toScroll, setToScroll] = useState(true)
	const ref = useRef<HTMLUListElement>(null)

	const sendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		
		if(!message) return

		if(ref.current) ref.current.scrollTop = ref.current.scrollHeight
		MessageSend(message)
		setMessage('')
	}

	MessageRecieve((message, username, timestamp) => {
		setMessages(prev => {
			prev.push({message, senderName: username, timestamp})
			return [...prev]
		})
	})

	useEffect(() => {
		if(messages.length > 0) {
			const lastDate = new Date(lastMessageTime)
			const currentDate = new Date(messages[messages.length - 1].timestamp)
			if(lastDate.getFullYear() !== currentDate.getFullYear() ||
				lastDate.getMonth() !== currentDate.getMonth() ||
				lastDate.getDate() !== currentDate.getDate()
			) {
				const lastMessage = messages.pop()!
				messages.push({ message: Intl.DateTimeFormat().format(new Date()), senderName: 'admin', timestamp: Date.now() })
				messages.push(lastMessage)
				setLastMessageTime(messages[messages.length - 1].timestamp)
				setMessages([...messages])
			}
		}
	}, [messages, lastMessageTime])

	useLayoutEffect(() => {
		if (ref.current && toScroll)
			ref.current.scrollTop = ref.current.scrollHeight
	}, [messages])

	useEffect(() => {
		localStorage.setItem('messages', JSON.stringify(messages))
		localStorage.setItem('lastTime', String(lastMessageTime))
	}, [messages])

	return (
		<section className={styles.chat}>
			<div>
				<ul ref={ref} onScroll={() => setToScroll(ref.current ?
						ref.current.scrollTop - Math.abs(ref.current.scrollHeight - ref.current.clientHeight) < 10
						: false)}>
					<InfoBallon>
						You entered in the room
					</InfoBallon>
					{messages.map((message) => {
						return  message.senderName === 'admin'
						? (
							<InfoBallon key={JSON.stringify({ message })}>
								{message.message}
							</InfoBallon>
						) : (
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
