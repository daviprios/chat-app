import styles from './index.module.css'

const Person = (props: { children: string }) => {
	return <li className={styles.person}>{props.children}</li>
}

export default Person
