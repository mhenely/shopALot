const categoryRouter = require('express').Router()
const Category = require('../models/category')

categoryRouter.post('/', async (request, response, next) => {
  const { title, imageSrc } = request.body

  const newCategory = new Category({
    title,
    imageSrc,
    shopItems: []
  })

  try {
    const savedCategory = await newCategory.save()
    response.status(201).json(savedCategory)
  }
  catch (error) {
    next(error)
  }
})

categoryRouter.get('/', async (request, response, next) => {
  try {
    const categories = await Category.find({}).populate('shopItems')
    response.status(200).json(categories)
  }
  catch (error) {
    next(error)
  }
})

module.exports = categoryRouter
