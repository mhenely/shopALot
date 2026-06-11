import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const client = axios.create({ baseURL })

// Key under which the logged-in user ({ token, username, name }) is stored.
export const USER_STORAGE_KEY = 'shopalot-user'

export const loadUser = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
  } catch {
    return null
  }
}

export const saveUser = (user) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

export const clearUser = () => {
  localStorage.removeItem(USER_STORAGE_KEY)
}

// Demo-account credentials are kept client-side so the "Your demo account" panel
// can show them again (to return from another device / after logout). These are
// throwaway accounts with no real data, so storing them locally is acceptable.
export const DEMO_CREDS_KEY = 'shopalot-demo-creds'

export const loadDemoCreds = () => {
  try {
    return JSON.parse(localStorage.getItem(DEMO_CREDS_KEY))
  } catch {
    return null
  }
}

export const saveDemoCreds = (creds) => {
  localStorage.setItem(DEMO_CREDS_KEY, JSON.stringify(creds))
}

export const clearDemoCreds = () => {
  localStorage.removeItem(DEMO_CREDS_KEY)
}

// Attach the JWT from localStorage to every request, when present.
client.interceptors.request.use((config) => {
  const user = loadUser()
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default client
