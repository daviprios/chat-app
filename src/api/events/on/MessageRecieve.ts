import connection from "../../connection";

export default (callback: (message: string, username: string, timestamp: number) => void) => {
  connection.on('message-recieve', (message: string, username: string, timestamp: number) => {
    callback(message, username, timestamp)
  })
}