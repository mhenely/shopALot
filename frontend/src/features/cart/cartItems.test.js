import { describe, it, expect } from 'vitest'
import { localIncrement, localDecrement, localRemove, flattenServerCart } from './cartItems'

const product = (id, extra = {}) => ({ id, name: `Item ${id}`, price: 10, imageUrl: ['x.jpg'], ...extra })

describe('localIncrement', () => {
  it('adds a new item with quantity 1', () => {
    const result = localIncrement([], product('a'))
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({ id: 'a', quantity: 1 })
  })

  it('increments quantity of an existing item', () => {
    const start = [{ ...product('a'), quantity: 2 }]
    const result = localIncrement(start, product('a'))
    expect(result).toHaveLength(1)
    expect(result[0].quantity).toBe(3)
  })

  it('does not mutate the original array', () => {
    const start = [{ ...product('a'), quantity: 1 }]
    localIncrement(start, product('a'))
    expect(start[0].quantity).toBe(1)
  })
})

describe('localDecrement', () => {
  it('decrements quantity when above 1', () => {
    const start = [{ ...product('a'), quantity: 3 }]
    expect(localDecrement(start, 'a')[0].quantity).toBe(2)
  })

  it('removes the item when quantity hits 0', () => {
    const start = [{ ...product('a'), quantity: 1 }]
    expect(localDecrement(start, 'a')).toHaveLength(0)
  })

  it('leaves the cart unchanged for an unknown id', () => {
    const start = [{ ...product('a'), quantity: 1 }]
    expect(localDecrement(start, 'zzz')).toHaveLength(1)
  })
})

describe('localRemove', () => {
  it('removes only the matching item', () => {
    const start = [{ ...product('a'), quantity: 1 }, { ...product('b'), quantity: 2 }]
    const result = localRemove(start, 'a')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('b')
  })
})

describe('flattenServerCart', () => {
  it('flattens server lines and reduces category to its title', () => {
    const lines = [
      { quantity: 2, item: { id: 'a', name: 'Carbonara', price: 20, imageUrl: ['x.jpg'], category: { id: 'c1', title: 'cooking' } } },
    ]
    const result = flattenServerCart(lines)
    expect(result[0]).toMatchObject({ id: 'a', name: 'Carbonara', quantity: 2, category: 'cooking' })
  })

  it('falls back to the raw category when not populated', () => {
    const lines = [{ quantity: 1, item: { id: 'a', name: 'X', category: 'c1' } }]
    expect(flattenServerCart(lines)[0].category).toBe('c1')
  })
})
