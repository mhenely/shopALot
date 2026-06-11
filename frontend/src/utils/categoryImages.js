// Curated hero images for each category, imported so Vite bundles + hashes them
// (works in production, unlike the raw src/assets paths). Keyed by category title
// (lowercase, matching the API). Category data itself comes from the API.
import cooking from '../assets/food.jpeg'
import nationalParks from '../assets/parks.webp'
import sailing from '../assets/sailing.jpeg'
import soccer from '../assets/soccer.jpeg'
import traveling from '../assets/travel.png'

const categoryImages = {
  cooking,
  'national parks': nationalParks,
  sailing,
  soccer,
  traveling,
}

export default categoryImages
