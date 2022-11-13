import connection from "../../connection"

export default (callback: (users: string[]) => void) => {
  connection.emit('room-list')
  connection.on('room-list', (users: string[]) => {
    callback(users)
  })
}