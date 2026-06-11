const mongoose = require('mongoose')

// {
//   id: 5,
//   title: "traveling",
//   imageSrc: 'src/assets/travel.png',
//   route: 'categories/traveling'
// },

const categorySchema = new mongoose.Schema({
  title: String,
  imageSrc: String,
  shopItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ShopItem'
    }
  ]
})

categorySchema.set('toJSON', {
  transform: (document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString(),
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Category', categorySchema);