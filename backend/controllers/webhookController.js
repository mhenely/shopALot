const Stripe = require('stripe')
const logger = require('../utils/logger')
const { sendOrderConfirmation } = require('../utils/email')

// Lazy singleton so importing this module never requires a key (see checkoutController).
let stripe
const getStripe = () => {
  if (!stripe) stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  return stripe
}

// Stripe webhook. Mounted with express.raw() (NOT express.json()) because the raw
// request body is required to verify the signature. On a completed checkout we send
// the confirmation email (with resume attached).
const stripeWebhook = async (request, response) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return response.status(503).send('webhook not configured')
  }

  const signature = request.headers['stripe-signature']

  let event
  try {
    event = getStripe().webhooks.constructEvent(
      request.body, // raw Buffer
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    logger.error('Stripe webhook signature verification failed:', error.message)
    return response.status(400).send(`Webhook Error: ${error.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const to = session.customer_details?.email

    try {
      const lineItems = await getStripe().checkout.sessions.listLineItems(session.id, { limit: 100 })
      const items = lineItems.data.map((li) => ({
        name: li.description,
        quantity: li.quantity,
        price: (li.amount_total / 100 / li.quantity).toFixed(2),
      }))
      const total = (session.amount_total / 100).toFixed(2)

      if (to) {
        await sendOrderConfirmation({ to, items, total })
        logger.info('order confirmation email sent to', to)
      }
    } catch (error) {
      // Don't fail the webhook over an email problem — Stripe would keep retrying.
      logger.error('failed to send order confirmation:', error.message)
    }
  }

  response.json({ received: true })
}

module.exports = { stripeWebhook }
