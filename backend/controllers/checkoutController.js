const checkoutRouter = require('express').Router()
const Stripe = require('stripe')
const ShopItem = require('../models/shopItem')

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

// Lazy singleton: constructing Stripe requires a key, but we don't want importing
// this module (which app.js does) to fail when no key is configured (e.g. in tests/CI).
let stripe
const getStripe = () => {
  if (!stripe) stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  return stripe
}

// POST /checkout/create-session
// body: { items: [{ itemId, quantity }] }
// Creates a Stripe Checkout Session and returns its hosted URL. Prices are looked
// up from the database — never trusted from the client — so the amount can't be tampered with.
checkoutRouter.post('/create-session', async (request, response, next) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return response.status(503).json({ error: 'payments are not configured' })
  }

  const { items } = request.body
  if (!Array.isArray(items) || items.length === 0) {
    return response.status(400).json({ error: 'cart is empty' })
  }

  try {
    const lineItems = []
    for (const { itemId, quantity } of items) {
      const product = await ShopItem.findById(itemId)
      if (!product) {
        return response.status(404).json({ error: `shop item ${itemId} not found` })
      }
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            images: Array.isArray(product.imageUrl) ? product.imageUrl.slice(0, 1) : [],
          },
          unit_amount: Math.round(product.price * 100), // dollars -> cents
        },
        quantity: Math.max(1, Number(quantity) || 1),
      })
    }

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${FRONTEND_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/checkout`,
    })

    response.status(200).json({ url: session.url })
  }
  catch (error) {
    next(error)
  }
})

module.exports = checkoutRouter
