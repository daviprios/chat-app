import { useState } from 'react'
import styles from './index.module.css'

import Person from './Person'

const List = () => {
	const [people, setPeople] = useState<string[]>([
		'user1',
		'eu',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
		'someone',
	])

	return (
		<aside className={styles.list}>
			<ul>
				{people.map((person) => {
					return <Person>{person}</Person>
				})}
			</ul>
		</aside>
	)
}

export default List
