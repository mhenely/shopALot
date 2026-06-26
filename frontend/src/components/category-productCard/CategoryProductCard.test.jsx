import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'

import CategoryProductCard from './CategoryProductCard'
import cartItemsReducer from '../../features/cart/cartItems'
import authReducer from '../../features/auth/authSlice'

const product = {
  id: '1',
  name: 'Carbonara',
  price: 20,
  imageUrl: ['https://example.com/carbonara.jpg'],
}

const renderCard = () => {
  const store = configureStore({
    reducer: { cartItems: cartItemsReducer, auth: authReducer },
  })
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CategoryProductCard product={product} category="cooking" />
      </MemoryRouter>
    </Provider>
  )
  return store
}

describe('CategoryProductCard', () => {
  beforeEach(() => {
    localStorage.clear() // guest cart lives in localStorage
  })

  it('renders the product name and price', () => {
    renderCard()
    expect(screen.getByText('Carbonara')).toBeInTheDocument()
    expect(screen.getByText('$20.00')).toBeInTheDocument()
  })

  it('renders the product image with the name as alt text', () => {
    renderCard()
    const img = screen.getByAltText('Carbonara')
    expect(img).toHaveAttribute('src', 'https://example.com/carbonara.jpg')
  })

  it('adds the product to the cart (guest) when "add to cart" is clicked', async () => {
    const store = renderCard()
    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }))
    await waitFor(() => expect(store.getState().cartItems.items).toHaveLength(1))
    expect(store.getState().cartItems.items[0]).toMatchObject({ id: '1', quantity: 1 })
  })
})
