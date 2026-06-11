const shopItemRouter = require('express').Router()
const ShopItem = require('../models/shopItem')

const shopData = require('../utils/shopData')

const categoryIds = {
  cooking: '66c4b467f952366ad8a3b9e3',
  "national parks": '66c4b467f952366ad8a3b9e4',
  sailing: '66c4b467f952366ad8a3b9e5',
  soccer: '66c4b467f952366ad8a3b9e6',
  traveling: '66c4b467f952366ad8a3b9e7'
}


shopItemRouter.post('/', async (request, response, next) => {

  const { name, category, price, imageUrl, features } = request.body;

  const newShopItem = new ShopItem({
    name, category, imageUrl, price, features
  })

  // FOR INSERTING ALL SHOP DATA INTO DB
  // const newShopItems = shopData.map(category => {
  //   const newItems = category.items.map(({ name, imageUrl, price, category, features}) => {
  //     const cat = category.toLowerCase()
  //     return {
  //       name, price, imageUrl, features, category: categoryIds[cat]
  //     }
  //   })
  //   return newItems
  // }).flat()


  try {
    // FOR INSERTING ALL SHOP DATA INTO DB
    // const savedShopItems = ShopItem.insertMany(newShopItems)
    // response.status(200).json(savedShopItems)
    const savedShopItem = newShopItem.save()
    response.status(200).json(savedShopItem)
  }
  catch (error) {
    next(error)
  }

})

shopItemRouter.get('/', async (request, response, next) => {

  try {
    const shopItems = await ShopItem.find({}).populate('category', {
      title: 1
    })
    return response.status(201).json(shopItems)
  }
  catch (error) {
    next(error)
  }
})

module.exports = shopItemRouter