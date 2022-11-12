import connection from "../../connection";

export default (message: string) => {
  connection.emit('message-send', message)
}