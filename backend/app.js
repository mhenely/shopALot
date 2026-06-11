const express = require('express')
const app = express()
const cors = require('cors')

const middleware = require('./utils/middleware')
const categoryRouter = require('./controllers/categoryController')
const shopItemRouter = require('./controllers/shopItemController')
const userRouter = require('./controllers/userController')
const loginRouter = require('./controllers/loginController')
const cartRouter = require('./controllers/cartController')

app.use(cors());
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


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app
