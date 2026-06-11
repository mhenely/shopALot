// Seed the database from utils/shopData.js.
// DESTRUCTIVE: wipes the Category and ShopItem collections, then recreates them
// with proper two-way references (category.shopItems <-> shopItem.category).
// Usage: npm run seed
require('dotenv').config()
const mongoose = require('mongoose')
const Category = require('../models/category')
const ShopItem = require('../models/shopItem')
const SHOP_DATA = require('../utils/shopData')

// imageSrc per category (matches the values already used in the app).
const categoryImages = {
  'national parks': 'https://cdn.outsideonline.com/wp-content/uploads/2021/04/13/arches-best-time-visit_h.jpg?width=800',
  'sailing': 'src/assets/sailing.jpeg',
  'soccer': 'src/assets/soccer.jpeg',
  'traveling': 'src/assets/travel.png',
  'cooking': 'src/assets/food.jpeg',
}

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('connected to MongoDB')

  await ShopItem.deleteMany({})
  await Category.deleteMany({})
  console.log('cleared existing categories and shop items')

  let categoryCount = 0
  let itemCount = 0

  for (const group of SHOP_DATA) {
    const title = group.title.toLowerCase()

    const category = await Category.create({
      title,
      imageSrc: categoryImages[title] || '',
      shopItems: [],
    })

    const items = group.items.map((item) => ({
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      features: item.features,
      category: category._id,
    }))

    const savedItems = await ShopItem.insertMany(items)

    category.shopItems = savedItems.map((i) => i._id)
    await category.save()

    categoryCount += 1
    itemCount += savedItems.length
    console.log(`  ${title}: ${savedItems.length} items`)
  }

  console.log(`\nseeded ${categoryCount} categories and ${itemCount} items`)
  await mongoose.disconnect()
}

seed().catch(async (error) => {
  console.error('SEED ERROR:', error.message)
  try { await mongoose.disconnect() } catch {}
  process.exit(1)
})
