const mongoose = require('mongoose')
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

mongoose.set('strictQuery', false)

logger.info('connecting to MONGODB')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MONGODB')
  })
  .catch((error) => {
    logger.error('error connecting to MONGODB', error.message)
  })

app.listen(config.PORT, () => {
  logger.info(`Server running on PORT: ${config.PORT}`)
})
