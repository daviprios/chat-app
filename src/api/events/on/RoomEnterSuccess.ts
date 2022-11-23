import { useEffect } from "react";
import connection from "../../connection";

export default (callback: (username: string) => void) => {
  const eventName = 'room-enter-success'
  useEffect(() => {
    connection.on(eventName, callback)
    return () => { connection.removeListener(eventName, callback) }
  }, [])
}