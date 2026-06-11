const categoryRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Category = require('../models/category')
const ShopItem = require('../models/shopItem')


// const categories = [
//   {
//     title: "cooking",
//     imageSrc: 'src/assets/food.jpeg',
//     shopItems: []
//   },
//   {
//     title: "national parks",
//     imageSrc: "https://cdn.outsideonline.com/wp-content/uploads/2021/04/13/arches-best-time-visit_h.jpg?width=800",
//     shopItems: []
//   },
//   {
//     title: "sailing",
//     imageSrc: 'src/assets/sailing.jpeg',
//     shopItems: []
//   },
//   {
//     title: "soccer",
//     imageSrc: 'src/assets/soccer.jpeg',
//     shopItems: []
//   },
//   {
//     title: "traveling",
//     imageSrc: 'src/assets/travel.png',
//     shopItems: []
//   },
// ]
categoryRouter.post('/', async (request, response, next) => {

  // search shopItems for 

  const { title, imageSrc } = request.body

  
  
  
  const newCategory = new Category({
    title, 
    imageSrc, 
    shopItems: [
      '66c4b467f952366ad8a3b9e4',
    ]
  })
  
  
  try {
    
    // FOR INSERTING ALL CATEGORIES AT ONCE
    // const savedCategories = await Category.insertMany(categories)
    // response.status(201).json(savedCategories)
    const items = await ShopItem.find({
      category: title
    })
    console.log({items})
    const savedCategory = await newCategory.save()
    response.status(201).json(savedCategory)
  }
  catch (error) {
    next(error)
  }
})

categoryRouter.get('/', async (request, response, next) => {

  // try {
  //   // this is wrong
  //   const categories = await Category.find({}).populate('shopItems')
  //   response.status(200).json(categories)
  // }
  // catch (error) {
  //   next(error)
  // }

  try {
    const blogs = await Category.find({}).populate('shopItems')
   response.status(201).json(blogs)

  } catch (error) {
    console.log({error})
  }
})



module.exports = categoryRouter