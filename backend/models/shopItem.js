const mongoose = require('mongoose')

// {
//   id: 48,
//   category: 'cooking',
//   name: 'Fried Chicken',
//   imageUrl: [
//     'https://i.ibb.co/0cWFMCx/kfc1.jpg', 
//     'https://i.ibb.co/hVYv9fQ/kfc2.jpg', 
//     'https://i.ibb.co/qjZ3J8m/kfc3.webp'
//   ],        
//   price: 20,
//   features: {
//     title: 'Elegant Simplicity',
//     items: [
//       {
//         name: 'Origin',
//         description:
//           'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
//       },
//       { name: 'Description', 
//         description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
//       {
//         name: 'Ingredients',
//         description:
//           'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
//       },
//     ]
//   }
// },

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