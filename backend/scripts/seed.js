// Seed the database from utils/shopData.js.
// DESTRUCTIVE: wipes the Category and ShopItem collections, then recreates them
// with proper two-way references (category.shopItems <-> shopItem.category).
// Usage: npm run seed
require('dotenv').config()
const mongoose = require('mongoose')
const Category = require('../models/category')
const ShopItem = require('../models/shopItem')
const SHOP_DATA = require('../utils/shopData')

// imageSrc per category. Cosmetic only — the storefront resolves its own category
// art via frontend/src/utils/categoryImages.js. Add real URLs here if you use it.
const categoryImages = {
  sports: '',
  food: '',
  travel: '',
  hobbies: '',
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
      subcategory: item.subcategory,
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
