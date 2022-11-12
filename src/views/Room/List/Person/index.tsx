import styles from './index.module.css'

const Person = (props: { children: string }) => {
	return <div className={styles.person}>{props.children}</div>
}

export default Person
