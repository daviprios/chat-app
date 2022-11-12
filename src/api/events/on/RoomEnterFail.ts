import connection from "../../connection";

export default (callback: () => void) => {
  connection.on('room-enter-fail', () => {
    callback()
  })
}