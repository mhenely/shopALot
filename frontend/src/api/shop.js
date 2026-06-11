import client from './client'

// Categories come back with their shopItems populated, which matches the
// grouped { title, items } shape the UI consumes.
export const getCategories = () =>
  client.get('/category').then((response) => response.data)

export const getShopItems = () =>
  client.get('/shopItems').then((response) => response.data)
