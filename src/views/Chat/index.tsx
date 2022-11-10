import { useState } from 'react'
import Ballon from './Ballon'
import styles from './index.module.css'

interface Message {
  senderName: string,
  timestamp: Date,
  message: string
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message: 'Mensagem',
      senderName: 'Me',
      timestamp: new Date()
    },
    {
      message: 'Mensagem',
      senderName: 'Me',
      timestamp: new Date()
    },
    {
      message: 'Mensagem',
      senderName: 'Me',
      timestamp: new Date()
    },
    {
      message: 'Mensagem',
      senderName: 'Me',
      timestamp: new Date()
    },
    {
      message: 'Mensagem',
      senderName: 'Me',
      timestamp: new Date()
    },
  ])

  return (
    <section className={styles.chat}>
      <div>
        <ul>
          {messages.map((message) => {
            return (
              <Ballon senderName={message.senderName} timestamp={message.timestamp}>
                {message.message}
              </Ballon>
            )
          })}
        </ul>
        <form>
          <input/>
          <button>Enviar {'>'}</button>
        </form>
      </div>
    </section>
  )
}

export default Chat