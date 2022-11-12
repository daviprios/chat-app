import connection from "../../connection";

export default (callback: (username: string) => void) => {
  connection.on('room-exit', (username: string) => {
    callback(username)
  })
}