import { useEffect } from "react";
import connection from "../../connection";

export default (callback: (message: string, username: string, timestamp: number) => void) => {
  const eventName = 'message-recieve'
  useEffect(() => {
    connection.on(eventName, callback)
    return () => { connection.removeListener(eventName, callback) }
  }, [])
}