const mongoose = require('mongoose')
const config = require('./utils/config') // loads dotenv — must come before ./app so its
const app = require('./app')             // modules see env vars at import time (local dev)
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
