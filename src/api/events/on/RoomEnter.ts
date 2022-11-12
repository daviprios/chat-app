import connection from "../../connection";

export default (callback: (users: string[]) => void) => {
  connection.on('room-enter', (users: string[]) => {
    callback(users)
  })
}