const mongoose = require('mongoose')

const shopItemSchema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  // Optional grouping within a category (e.g. "Liverpool", "Italian"). Powers the
  // in-page filter chips on the category page; chips stay hidden until items have one.
  subcategory: String,
  imageUrl: [String],
  price: Number,
  // features is an object with two key/value pairs
    // first is title: String
    // second is items: Array of objects
      // objects have two key/value pairs
        // first is name: String
        // second is description: String
  features: {
    title: String,
    items: [
      {
        name: String,
        description: String
      }
    ]
  }
})

shopItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('ShopItem', shopItemSchema)