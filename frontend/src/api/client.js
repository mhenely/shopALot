import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const client = axios.create({ baseURL })

// Key under which the logged-in user ({ token, username, name }) is stored.
export const USER_STORAGE_KEY = 'shopalot-user'

// Attach the JWT from localStorage to every request, when present.
client.interceptors.request.use((config) => {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY)
    const token = stored ? JSON.parse(stored).token : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch {
    // ignore malformed storage; request just goes out unauthenticated
  }
  return config
})

export default client
