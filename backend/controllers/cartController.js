const cartController = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ShopItem = require('../models/shopItem')


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}


// if item not already in cart
cartController.post('/', async (request, response, next) => {

  // check for valid token
  if (!request.token || !request.decodedToken) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const body = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }

  // add the item to the correct user's cart
  const user = await User.findById(body.userId)

  // copy and update cart
  // update user with updated cart
  // return cart
  
})

// if item already in cart and quantity does not === 1
cartController.patch('/', (request, response, next) => {

})


// if item already in cart and want to clear from cart
cartController.delete('/', (request, response, next) => {

  // 
})

