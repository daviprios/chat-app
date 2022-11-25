import styles from './index.module.css'

const InfoBallon = (props: { children: React.ReactNode }) => {
  return (
    <p className={styles.infoBallon}>{props.children}</p>
  )
}

export default InfoBallon