import { useEffect } from "react";
import connection from "../../connection";

export default (callback: (message: string) => void) => {
	const eventName = 'not-logged'
	useEffect(() => {
		connection.on(eventName, callback)
		return () => { connection.removeListener(eventName, callback) }
	}, [])
}