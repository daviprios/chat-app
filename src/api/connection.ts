import { io } from 'socket.io-client'

const apiUrl = import.meta.env.API_URL ?? 'http://localhost:8000'

export default io(apiUrl)
