// Seed data for the shop. Items are grouped by category; each item carries a
// `subcategory` that powers the in-page filter chips on the category page.
//
// PLACEHOLDERS: the imageUrl and the `features` text are stand-ins — swap them
// for real photos and descriptions. Prices are rough guesses; adjust freely.

const img = (name) => [`https://placehold.co/600x720/f1e4d6/97431a?text=${encodeURIComponent(name)}`]

const item = (name, subcategory, price) => ({
  name,
  subcategory,
  price,
  imageUrl: img(name),
  features: {
    title: 'About this item',
    items: [
      { name: 'Description', description: 'Add a short description here.' },
    ],
  },
})

const SHOP_DATA = [
  {
    title: 'Sports',
    items: [
      item('Liverpool Home Jersey', 'Liverpool', 90),
      item('Anfield Scarf', 'Liverpool', 25),
      item("Gerrard '05 Shirt", 'Liverpool', 110),
      item('Firmino Mug', 'Liverpool', 15),
      item('Barcelona Home Jersey', 'Barcelona', 95),
      item('Messi 10 Print', 'Barcelona', 30),
      item('Camp Nou Scarf', 'Barcelona', 25),
      item('Valencia Home Jersey', 'Valencia', 85),
      item('Mestalla Scarf', 'Valencia', 22),
      item('St. Louis Blues Jersey', 'Blues', 130),
      item('Blues Hockey Puck', 'Blues', 12),
      item('Chicago Cubs Cap', 'Cubs', 35),
    ],
  },
  {
    title: 'Food',
    items: [
      item('Spaghetti Carbonara', 'Italian', 16),
      item("Bucatini all'Amatriciana", 'Italian', 16),
      item('Margherita Pizza', 'Italian', 14),
      item('Salmon Nigiri Set', 'Sushi', 22),
      item('Spicy Tuna Roll', 'Sushi', 12),
      item('Classic Smash Burger', 'Burger', 13),
      item('Bacon Cheeseburger', 'Burger', 15),
      item('Smoked Brisket Plate', 'BBQ', 24),
      item('Pulled Pork Sandwich', 'BBQ', 14),
      item('Pad Thai', 'Thai', 15),
      item('Kalua Pork Plate', 'Hawaiian', 18),
      item('Carnitas Tacos', 'Mexican', 13),
    ],
  },
  {
    title: 'Travel Related',
    items: [
      item('Paris Print', 'Visited', 32),
      item('Rome Print', 'Visited', 32),
      item('Machu Picchu Print', 'Visited', 38),
      item('Sydney Print', 'Visited', 34),
      item('Hawaii Print', 'Visited', 30),
      item('British Virgin Islands Print', 'Visited', 36),
      item('Barcelona Print', 'Visited', 32),
      item('Tokyo Print', 'Bucket List', 34),
      item('London Print', 'Bucket List', 32),
      item('Ireland Print', 'Bucket List', 30),
      item('Munich Print', 'Bucket List', 30),
      item('Buenos Aires Print', 'Bucket List', 34),
    ],
  },
  {
    title: 'Hobbies',
    items: [
      item('Sailing Gloves', 'Outdoors', 35),
      item('Hiking Daypack', 'Outdoors', 75),
      item('Match Soccer Ball', 'Active', 40),
      item('Salsa Dance Shoes', 'Active', 60),
      item('Resistance Band Set', 'Active', 25),
      item('Mechanical Keyboard', 'Creative', 95),
      item('Leather Writing Journal', 'Creative', 30),
      item('Vinyl Record Crate', 'Creative', 45),
      item('Open-Mic Notebook', 'Creative', 12),
      item('Wireless Controller', 'At Home', 60),
      item("Chef's Knife", 'At Home', 85),
      item('Reading Lamp', 'At Home', 40),
    ],
  },
]

module.exports = SHOP_DATA
