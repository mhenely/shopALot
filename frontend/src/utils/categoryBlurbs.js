// Short, personal one-liners shown under each category on the home page.
// Keyed by category title (lowercase, matching the API). Edit these freely —
// any category without an entry falls back to the generic line below.
const categoryBlurbs = {
  sports: 'Kits, scarves, and small loyalties — the clubs and colors I’d never switch.',
  food: 'Dishes worth the cleanup. The meals I cook, crave, and travel for.',
  'travel related': 'Places I’ve been and places I’m going. Prints for the perpetually restless.',
  hobbies: 'The gear behind the weekends — a little of everything I love to do.',
  'reading & records': 'What’s on the turntable and the nightstand — the records and books I keep coming back to.',
}

const FALLBACK = 'A handful of pieces from one of my favorite things.'

export const getBlurb = (title) => categoryBlurbs[title?.toLowerCase()] || FALLBACK

export default categoryBlurbs
