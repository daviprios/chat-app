import connection from "../../connection";

export default (callback: (message: string) => void) => connection.on('not-logged', () => {
	callback('cannot complete action')
})