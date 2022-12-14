import styles from './index.module.css'

const Ballon = (props: { children: string, senderName: string, timestamp: Date, isMe?: boolean }) => {
  return (
    <p className={`${styles.ballon} ${props.isMe ? styles.me : ''}`}>
      <span className={styles.name}>{props.senderName}</span>
      <span className={styles.message}>{props.children}</span>
      <span className={styles.datetime}>{Intl.DateTimeFormat('pt-BR', { timeStyle: 'medium' }).format(props.timestamp)}</span>
    </p>
  )
}

export default Ballon