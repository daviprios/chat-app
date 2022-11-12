import connection from "../../connection";

export default (callback: (username: string) => void) => {
  connection.on('room-enter-success', (username: string) => {
    callback(username)
  })
}