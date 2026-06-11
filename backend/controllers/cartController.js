const cartRouter = require('express').Router()
const User = require('../models/user')
const ShopItem = require('../models/shopItem')

// All cart routes require a valid token. The user is derived from the token
// (set by the tokenExtractor middleware) rather than the request body, so a
// user can only ever read or modify their own cart.
cartRouter.use((request, response, next) => {
  if (!request.decodedToken || !request.decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  next()
})

// Load the requesting user, with each cart line's item populated.
const getUserWithCart = (request) =>
  User.findById(request.decodedToken.id).populate('cart.item')

// GET /cart -> the current user's populated cart
cartRouter.get('/', async (request, response, next) => {
  try {
    const user = await getUserWithCart(request)
    if (!user) {
      return response.status(404).json({ error: 'user not found' })
    }
    response.status(200).json(user.cart)
  }
  catch (error) {
    next(error)
  }
})

// POST /cart  body: { itemId, quantity? } -> add item (or increment if present)
cartRouter.post('/', async (request, response, next) => {
  const { itemId, quantity = 1 } = request.body

  try {
    const item = await ShopItem.findById(itemId)
    if (!item) {
      return response.status(404).json({ error: 'shop item not found' })
    }

    const user = await User.findById(request.decodedToken.id)
    const existingLine = user.cart.find(line => line.item.toString() === itemId)

    if (existingLine) {
      existingLine.quantity += quantity
    } else {
      user.cart.push({ item: itemId, quantity })
    }

    await user.save()
    await user.populate('cart.item')
    response.status(200).json(user.cart)
  }
  catch (error) {
    next(error)
  }
})

// PATCH /cart  body: { itemId, quantity } -> set absolute quantity (remove if <= 0)
cartRouter.patch('/', async (request, response, next) => {
  const { itemId, quantity } = request.body

  if (quantity === undefined) {
    return response.status(400).json({ error: 'quantity is required' })
  }

  try {
    const user = await User.findById(request.decodedToken.id)
    const existingLine = user.cart.find(line => line.item.toString() === itemId)

    if (!existingLine) {
      return response.status(404).json({ error: 'item not in cart' })
    }

    if (quantity <= 0) {
      user.cart = user.cart.filter(line => line.item.toString() !== itemId)
    } else {
      existingLine.quantity = quantity
    }

    await user.save()
    await user.populate('cart.item')
    response.status(200).json(user.cart)
  }
  catch (error) {
    next(error)
  }
})

// DELETE /cart/:itemId -> remove a single line from the cart
cartRouter.delete('/:itemId', async (request, response, next) => {
  const { itemId } = request.params

  try {
    const user = await User.findById(request.decodedToken.id)
    user.cart = user.cart.filter(line => line.item.toString() !== itemId)

    await user.save()
    await user.populate('cart.item')
    response.status(200).json(user.cart)
  }
  catch (error) {
    next(error)
  }
})

// DELETE /cart -> clear the entire cart
cartRouter.delete('/', async (request, response, next) => {
  try {
    const user = await User.findById(request.decodedToken.id)
    user.cart = []

    await user.save()
    response.status(200).json(user.cart)
  }
  catch (error) {
    next(error)
  }
})

module.exports = cartRouter
