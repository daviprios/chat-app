import { useEffect } from "react";
import connection from "../../connection";

export default (callback: (message: string, username: string, timestamp: number) => void) => {
  useEffect(() => {
    connection.on('message-recieve', callback)
    return () => {
      connection.removeListener('message-recieve', callback)
    }
  }, [])
}