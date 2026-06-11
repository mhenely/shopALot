require('dotenv').config()
const { test, before, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const User = require('../models/user')
const Category = require('../models/category')
const ShopItem = require('../models/shopItem')

const api = supertest(app)

let itemId
let itemId2

before(async () => {
  // Connect to a dedicated test database (dbName overrides whatever DB the URI
  // points at) so tests never touch the seeded application data.
  await mongoose.connect(process.env.TEST_MONGODB_URI, { dbName: 'shopalot_test' })
})

after(async () => {
  await mongoose.disconnect()
})

beforeEach(async () => {
  await User.deleteMany({})
  await Category.deleteMany({})
  await ShopItem.deleteMany({})

  const category = await Category.create({ title: 'cooking', imageSrc: '', shopItems: [] })
  const items = await ShopItem.insertMany([
    { name: 'Carbonara', price: 20, imageUrl: ['a.jpg'], category: category._id, features: { title: 't', items: [] } },
    { name: 'Pizza', price: 15, imageUrl: ['b.jpg'], category: category._id, features: { title: 't', items: [] } },
  ])
  itemId = items[0]._id.toString()
  itemId2 = items[1]._id.toString()
  category.shopItems = items.map((i) => i._id)
  await category.save()
})

describe('users & auth', () => {
  test('POST /users creates a user', async () => {
    const res = await api.post('/users')
      .send({ username: 'alice', name: 'Alice', password: 'secret123' })
      .expect(201)
    assert.strictEqual(res.body.username, 'alice')
    assert.strictEqual(res.body.passwordHash, undefined) // never leaked
    const users = await User.find({})
    assert.strictEqual(users.length, 1)
  })

  test('POST /users rejects a username shorter than 4 chars', async () => {
    await api.post('/users').send({ username: 'bob', name: 'Bob', password: 'secret123' }).expect(400)
    const users = await User.find({})
    assert.strictEqual(users.length, 0)
  })

  test('POST /login with correct credentials returns a token', async () => {
    await api.post('/users').send({ username: 'bobby', name: 'Bobby', password: 'secret123' }).expect(201)
    const res = await api.post('/login').send({ username: 'bobby', password: 'secret123' }).expect(200)
    assert.ok(res.body.token)
    assert.strictEqual(res.body.username, 'bobby')
  })

  test('POST /login with wrong password is rejected (auth-bypass regression)', async () => {
    await api.post('/users').send({ username: 'carol', name: 'Carol', password: 'secret123' }).expect(201)
    await api.post('/login').send({ username: 'carol', password: 'WRONG' }).expect(401)
  })

  test('POST /login with unknown user is rejected', async () => {
    await api.post('/login').send({ username: 'nobody', password: 'secret123' }).expect(401)
  })
})

describe('catalog', () => {
  test('GET /shopItems returns the seeded items', async () => {
    const res = await api.get('/shopItems').expect(200)
    assert.strictEqual(res.body.length, 2)
  })

  test('GET /category returns categories with populated items', async () => {
    const res = await api.get('/category').expect(200)
    assert.strictEqual(res.body.length, 1)
    assert.strictEqual(res.body[0].shopItems.length, 2)
  })
})

describe('cart (requires auth)', () => {
  let token

  beforeEach(async () => {
    await api.post('/users').send({ username: 'dave', name: 'Dave', password: 'secret123' })
    const res = await api.post('/login').send({ username: 'dave', password: 'secret123' })
    token = res.body.token
  })

  const auth = () => ({ Authorization: `Bearer ${token}` })

  test('rejects requests without a token', async () => {
    await api.post('/cart').send({ itemId }).expect(401)
  })

  test('POST /cart adds an item (quantity 1, populated)', async () => {
    const res = await api.post('/cart').set(auth()).send({ itemId }).expect(200)
    assert.strictEqual(res.body.length, 1)
    assert.strictEqual(res.body[0].quantity, 1)
    assert.strictEqual(res.body[0].item.name, 'Carbonara')
  })

  test('POST /cart twice increments quantity', async () => {
    await api.post('/cart').set(auth()).send({ itemId })
    const res = await api.post('/cart').set(auth()).send({ itemId, quantity: 2 }).expect(200)
    assert.strictEqual(res.body[0].quantity, 3)
  })

  test('PATCH /cart sets quantity; quantity 0 removes the line', async () => {
    await api.post('/cart').set(auth()).send({ itemId })
    let res = await api.patch('/cart').set(auth()).send({ itemId, quantity: 5 }).expect(200)
    assert.strictEqual(res.body[0].quantity, 5)
    res = await api.patch('/cart').set(auth()).send({ itemId, quantity: 0 }).expect(200)
    assert.strictEqual(res.body.length, 0)
  })

  test('DELETE /cart/:itemId removes one line; DELETE /cart clears the cart', async () => {
    await api.post('/cart').set(auth()).send({ itemId })
    await api.post('/cart').set(auth()).send({ itemId: itemId2 })
    let res = await api.delete(`/cart/${itemId}`).set(auth()).expect(200)
    assert.strictEqual(res.body.length, 1)
    assert.strictEqual(res.body[0].item.id, itemId2)
    res = await api.delete('/cart').set(auth()).expect(200)
    assert.strictEqual(res.body.length, 0)
  })
})
