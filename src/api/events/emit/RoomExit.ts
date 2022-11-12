import connection from "../../connection"

export default () => {
  connection.emit('room-exit')
}