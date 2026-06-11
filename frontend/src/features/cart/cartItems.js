import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/client";
import { logout } from "../auth/authSlice";

// Guest carts (no logged-in user) live in localStorage. Logged-in carts live on
// the server via the /cart endpoints and are the source of truth.
const GUEST_CART_KEY = 'shopalot-guest-cart';

const loadGuestCart = () => {
  try {
    return JSON.parse(localStorage.getItem(GUEST_CART_KEY)) || []
  } catch {
    return []
  }
}
const saveGuestCart = (items) => localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items))
const clearGuestCart = () => localStorage.removeItem(GUEST_CART_KEY)

const isLoggedIn = (getState) => Boolean(getState().auth.user)

// Server cart lines ({ quantity, item }) -> the flattened { ...item, quantity }
// shape the cart UI consumes. category is reduced to its title for navigation.
const flattenServerCart = (lines) =>
  lines.map((line) => ({
    ...line.item,
    category: line.item.category?.title ?? line.item.category,
    quantity: line.quantity,
  }))

// Pure guest-cart transforms (mirror the old reducer behaviour).
const localIncrement = (items, product) => {
  const existing = items.find((i) => i.id === product.id)
  if (existing) {
    return items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
  }
  return [...items, { ...product, quantity: 1 }]
}
const localDecrement = (items, id) => {
  const existing = items.find((i) => i.id === id)
  if (!existing) return items
  if (existing.quantity <= 1) return items.filter((i) => i.id !== id)
  return items.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
}
const localRemove = (items, id) => items.filter((i) => i.id !== id)

export const incrementItems = createAsyncThunk('cart/increment', async (product, { getState }) => {
  if (isLoggedIn(getState)) {
    const lines = await client.post('/cart', { itemId: product.id }).then((r) => r.data)
    return flattenServerCart(lines)
  }
  const items = localIncrement(getState().cartItems.items, product)
  saveGuestCart(items)
  return items
})

export const decrementItems = createAsyncThunk('cart/decrement', async (id, { getState }) => {
  if (isLoggedIn(getState)) {
    const current = getState().cartItems.items.find((i) => i.id === id)
    const quantity = (current?.quantity ?? 1) - 1
    const lines = await client.patch('/cart', { itemId: id, quantity }).then((r) => r.data)
    return flattenServerCart(lines)
  }
  const items = localDecrement(getState().cartItems.items, id)
  saveGuestCart(items)
  return items
})

export const removeItem = createAsyncThunk('cart/remove', async (id, { getState }) => {
  if (isLoggedIn(getState)) {
    const lines = await client.delete(`/cart/${id}`).then((r) => r.data)
    return flattenServerCart(lines)
  }
  const items = localRemove(getState().cartItems.items, id)
  saveGuestCart(items)
  return items
})

export const removeAllItems = createAsyncThunk('cart/clear', async (_, { getState }) => {
  if (isLoggedIn(getState)) {
    const lines = await client.delete('/cart').then((r) => r.data)
    return flattenServerCart(lines)
  }
  clearGuestCart()
  return []
})

// Load the server cart (on login or app mount when already authenticated).
export const loadServerCart = createAsyncThunk('cart/load', async (_, { getState }) => {
  if (!isLoggedIn(getState)) return getState().cartItems.items
  const lines = await client.get('/cart').then((r) => r.data)
  return flattenServerCart(lines)
})

// On login, push the guest cart up to the server, then load the merged cart.
export const mergeGuestCart = createAsyncThunk('cart/merge', async (_, { getState }) => {
  if (!isLoggedIn(getState)) return getState().cartItems.items
  const guestItems = loadGuestCart()
  for (const item of guestItems) {
    await client.post('/cart', { itemId: item.id, quantity: item.quantity })
  }
  clearGuestCart()
  const lines = await client.get('/cart').then((r) => r.data)
  return flattenServerCart(lines)
})

const initialState = {
  items: loadGuestCart(),
  error: null,
}

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const mutations = [
      incrementItems,
      decrementItems,
      removeItem,
      removeAllItems,
      loadServerCart,
      mergeGuestCart,
    ]
    mutations.forEach((thunk) => {
      builder.addCase(thunk.fulfilled, (state, action) => {
        state.items = action.payload
        state.error = null
      })
      builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.error.message
      })
    })
    // On logout, drop the in-memory cart back to whatever the guest cart holds.
    builder.addCase(logout, (state) => {
      state.items = loadGuestCart()
    })
  }
})

export default cartSlice.reducer
