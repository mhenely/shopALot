// Short, personal one-liners shown under each category on the home page.
// Keyed by category title (lowercase, matching the API). Edit these freely —
// any category without an entry falls back to the generic line below.
const categoryBlurbs = {
  sports: 'The sports, teams, and players I’d never switch — kit, colors, and loyalties.',
  food: 'The dishes I crave, the spots I miss, and a lifelong carbonara habit.',
  travel: 'Places I’ve been and places I’m dreaming of — passport always ready.',
  hobbies: 'On the pitch, on the water, on the page — a little of everything I love.',
  'books & music': 'What’s on the nightstand and the turntable — the books and records I keep coming back to.',
}

const FALLBACK = 'A handful of things from one of my favorite things.'

export const getBlurb = (title) => categoryBlurbs[title?.toLowerCase()] || FALLBACK

export default categoryBlurbs
