// Throwaway smoke test for the cart endpoints. Registers a temp user, logs in,
// exercises add/increment/set/remove, then deletes the temp user.
// Run with the dev server already listening on PORT. Not part of the app.
require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user')

const BASE = `http://localhost:${process.env.PORT || 3001}`
const USERNAME = `smoketest_${Date.now()}`
const PASSWORD = 'smoke-pass-123'

let passed = 0
let failed = 0
const check = (label, ok, detail = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'} - ${label}${detail ? ` (${detail})` : ''}`)
  ok ? passed++ : failed++
}

const main = async () => {
  await mongoose.connect(process.env.MONGODB_URI)

  // register
  let res = await fetch(`${BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, name: 'Smoke Test', password: PASSWORD })
  })
  check('register user -> 201', res.status === 201, `got ${res.status}`)

  // login
  res = await fetch(`${BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD })
  })
  check('login -> 200', res.status === 200, `got ${res.status}`)
  const { token } = await res.json()
  const auth = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  // login with wrong password should now be rejected (auth-bypass fix)
  res = await fetch(`${BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: 'wrong-password' })
  })
  check('login wrong password -> 401', res.status === 401, `got ${res.status}`)

  // grab a real shop item id
  res = await fetch(`${BASE}/shopItems`)
  const items = await res.json()
  const itemId = items[0].id
  const itemId2 = items[1].id

  // add item
  res = await fetch(`${BASE}/cart`, { method: 'POST', headers: auth, body: JSON.stringify({ itemId }) })
  let cart = await res.json()
  check('POST /cart add -> qty 1', res.status === 200 && cart.length === 1 && cart[0].quantity === 1, `len ${cart.length}`)
  check('cart item is populated', !!cart[0]?.item?.name, cart[0]?.item?.name)

  // add same item again -> increments
  res = await fetch(`${BASE}/cart`, { method: 'POST', headers: auth, body: JSON.stringify({ itemId, quantity: 2 }) })
  cart = await res.json()
  check('POST /cart same item -> qty 3', cart[0].quantity === 3, `qty ${cart[0]?.quantity}`)

  // set absolute quantity via PATCH
  res = await fetch(`${BASE}/cart`, { method: 'PATCH', headers: auth, body: JSON.stringify({ itemId, quantity: 5 }) })
  cart = await res.json()
  check('PATCH /cart -> qty 5', cart[0].quantity === 5, `qty ${cart[0]?.quantity}`)

  // PATCH to 0 removes the line
  res = await fetch(`${BASE}/cart`, { method: 'PATCH', headers: auth, body: JSON.stringify({ itemId, quantity: 0 }) })
  cart = await res.json()
  check('PATCH /cart qty 0 -> removed', cart.length === 0, `len ${cart.length}`)

  // add two items then delete one
  await fetch(`${BASE}/cart`, { method: 'POST', headers: auth, body: JSON.stringify({ itemId }) })
  await fetch(`${BASE}/cart`, { method: 'POST', headers: auth, body: JSON.stringify({ itemId: itemId2 }) })
  res = await fetch(`${BASE}/cart/${itemId}`, { method: 'DELETE', headers: auth })
  cart = await res.json()
  check('DELETE /cart/:id -> one left', cart.length === 1 && cart[0].item.id === itemId2, `len ${cart.length}`)

  // clear cart
  res = await fetch(`${BASE}/cart`, { method: 'DELETE', headers: auth })
  cart = await res.json()
  check('DELETE /cart -> empty', cart.length === 0, `len ${cart.length}`)

  // no-token request rejected
  res = await fetch(`${BASE}/cart`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ itemId }) })
  check('POST /cart no token -> 401', res.status === 401, `got ${res.status}`)

  // cleanup
  await User.deleteOne({ username: USERNAME })
  check('cleanup temp user', true)

  await mongoose.disconnect()
  console.log(`\n${passed} passed, ${failed} failed`)
  process.exit(failed === 0 ? 0 : 1)
}

main().catch(async (err) => {
  console.error('SMOKE TEST ERROR:', err.message)
  try { await User.deleteOne({ username: USERNAME }); await mongoose.disconnect() } catch {}
  process.exit(1)
})
