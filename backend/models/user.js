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
  ]
})

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