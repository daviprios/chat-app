import { useEffect } from "react";
import connection from "../../connection";

export default (callback: (users: string[]) => void) => {
  const eventName = 'room-enter'
  useEffect(() => {
    connection.on(eventName, callback)
    return () => { connection.removeListener(eventName, callback) }
  }, [])
}