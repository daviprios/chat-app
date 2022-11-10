import { io } from 'socket.io-client'

const apiUrl = 'http://localhost:8000'

export default io(apiUrl, {
	query: {
		room: location.pathname,
	},
})
