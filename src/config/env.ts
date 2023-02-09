const API_URL = import.meta.env.VITE_API_URL

if(!API_URL) throw new Error('API_URL not found')

const env = {
  API_URL
}

export default env