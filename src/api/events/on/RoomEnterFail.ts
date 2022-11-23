import { useEffect } from "react";
import connection from "../../connection";

export default (callback: () => void) => {
  const eventName = 'room-enter-fail'
  useEffect(() => {
    connection.on(eventName, callback)
    return () => { connection.removeListener(eventName, callback) }
  }, [])
}