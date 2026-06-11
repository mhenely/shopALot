const demoRouter = require('express').Router()
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

// Demo accounts auto-expire after this long (MongoDB TTL on demoExpiresAt).
const DEMO_TTL_DAYS = 7

const randomHex = (bytes) => crypto.randomBytes(bytes).toString('hex')

// Provision a throwaway demo account and return a token plus the plaintext
// credentials (shown to the visitor once so they can return later). No real
// personal data is collected; the account self-deletes via the TTL index.
demoRouter.post('/demo', async (request, response, next) => {
  try {
    const password = `${randomHex(2)}-${randomHex(2)}` // e.g. "a4f2-9bd1"
    const passwordHash = await bcrypt.hash(password, 10)
    const expiresAt = new Date(Date.now() + DEMO_TTL_DAYS * 24 * 60 * 60 * 1000)

    let savedUser
    for (let attempt = 0; attempt < 5; attempt++) {
      const user = new User({
        username: `demo-${randomHex(3)}@shopalot.test`,
        name: 'Demo Shopper',
        passwordHash,
        isDemo: true,
        demoExpiresAt: expiresAt,
      })
      try {
        savedUser = await user.save()
        break
      } catch (error) {
        // Retry only on a duplicate-username collision; otherwise surface it.
        if (error.code === 11000 && attempt < 4) continue
        throw error
      }
    }

    const token = jwt.sign(
      { username: savedUser.username, id: savedUser._id },
      process.env.SECRET,
      { expiresIn: 60 * 60 }
    )

    response.status(201).json({
      token,
      username: savedUser.username,
      name: savedUser.name,
      password,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = demoRouter
