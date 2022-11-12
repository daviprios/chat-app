import connection from "../../connection"

export default (room: string, username: string) => {
  connection.emit('room-enter', room, username)
}