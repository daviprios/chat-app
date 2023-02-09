import { io } from 'socket.io-client'
import env from '@/config/env'

const apiUrl = env.API_URL ?? 'http://localhost:8000'
export default io(apiUrl)
