const express = require('express')
const app = express()
const cors = require('cors')

const middleware = require('./utils/middleware')
const categoryRouter = require('./controllers/categoryController')
const shopItemRouter = require('./controllers/shopItemController')
const userRouter = require('./controllers/userController')
const loginRouter = require('./controllers/loginController')
const cartRouter = require('./controllers/cartController')
const checkoutRouter = require('./controllers/checkoutController')
const { stripeWebhook } = require('./controllers/webhookController')

app.use(cors());

// Stripe webhook needs the RAW body for signature verification, so it must be
// registered BEFORE express.json() parses the body.
app.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook)

app.use(express.json())
if (process.env.NODE_ENV !== 'test') {
  app.use(middleware.requestLogger)
}
app.use(middleware.tokenExtractor)

app.use('/login', loginRouter)
app.use('/users', userRouter)
app.use('/category', categoryRouter)
app.use('/shopItems', shopItemRouter)
app.use('/cart', cartRouter)
app.use('/checkout', checkoutRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app
