// Category art for the home hero, imported so Vite bundles + hashes them.
// Keyed by category title (lowercase, matching the API). These are temporary
// stand-ins reusing existing assets — swap in real images per category.
import sports from '../assets/soccer.jpeg'
import food from '../assets/food.jpeg'
import travel from '../assets/travel.png'
import hobbies from '../assets/sailing.jpeg'
import readingRecords from '../assets/parks.webp'

const categoryImages = {
  sports,
  food,
  'travel related': travel,
  hobbies,
  'reading & records': readingRecords,
}

export default categoryImages
