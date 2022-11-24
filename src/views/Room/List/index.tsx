import { useCallback, useEffect, useState } from 'react'
import RoomList from '../../../api/events/emit/RoomList'
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

	RoomList((users) => {
		setPeople(new Set(users))
	})
	RoomEnter((users) => {
		setPeople(new Set(users))
	})
	RoomExit((username) => {
		setPeople(people => {
			people.delete(username)
			return new Set(people)
		})
	})

	return (
		<section className={styles.list}>
			<ul>
				{peopleList().map((person) => {
					return <Person key={person}>{person}</Person>
				})}
			</ul>
		</section>
	)
}

export default List
