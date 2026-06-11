const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 4
  },
  name: String,
  passwordHash: {
    type: String,
    minLength: 5,
    required: true
  },
  cart: [
    {
      quantity: Number,
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShopItem'
      }
    }
  ],
  // Auto-provisioned throwaway accounts (the public demo's "Enter the demo store").
  isDemo: {
    type: Boolean,
    default: false
  },
  // When set, MongoDB's TTL index removes the document at this time. Only demo
  // users get a value, so real accounts are never touched by the TTL.
  demoExpiresAt: Date
})

// TTL index: expire a document once demoExpiresAt has passed. Documents without
// the field (i.e. real users) are ignored by TTL and never deleted.
userSchema.index({ demoExpiresAt: 1 }, { expireAfterSeconds: 0 })

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;