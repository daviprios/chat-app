import { useCallback, useEffect, useState } from 'react'
import RoomEnter from '../../../api/events/on/RoomEnter'
import RoomExit from '../../../api/events/on/RoomExit'
import styles from './index.module.css'

import Person from './Person'

const List = () => {
	const [people, setPeople] = useState<Set<string>>(new Set())

	const peopleList = useCallback(() => {
		let usernameList: string[] = []
		people.forEach((username) => {
			usernameList.push(username)
		})
		return usernameList
	}, [people])

	useEffect(() => {
		RoomEnter((users) => {
			setPeople(new Set(users))
		})
		RoomExit((username) => {
			people.delete(username)
			setPeople(people => new Set(people))
		})
	}, [])

	return (
		<aside className={styles.list}>
			<ul>
				{peopleList().map((person) => {
					return <Person key={person}>{person}</Person>
				})}
			</ul>
		</aside>
	)
}

export default List
