import client from './client'

// items: [{ itemId, quantity }] -> { url } (the Stripe hosted checkout URL)
export const createCheckoutSession = (items) =>
  client.post('/checkout/create-session', { items }).then((response) => response.data)
