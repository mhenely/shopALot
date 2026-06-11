import client from './client'

// Returns { token, username, name } on success.
export const login = (credentials) =>
  client.post('/login', credentials).then((response) => response.data)

// Creates a user. Backend expects { username, name, password }.
export const register = (newUser) =>
  client.post('/users', newUser).then((response) => response.data)

// Provisions a throwaway demo account. Returns { token, username, name, password }.
export const demoLogin = () =>
  client.post('/auth/demo').then((response) => response.data)
