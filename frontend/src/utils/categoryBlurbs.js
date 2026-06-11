// Short, personal one-liners shown under each category on the home page.
// Keyed by category title (lowercase, matching the API). Edit these freely —
// any category without an entry falls back to the generic line below.
const categoryBlurbs = {
  'national parks': 'Trails, granite, and the quiet at altitude. Prints and gear from the places worth the climb.',
  traveling: 'Stamps in the passport and the long way home. Pieces for people who pack light and go far.',
  cooking: 'Slow Sundays and a well-seasoned pan. The good knives, boards, and odds-and-ends I actually use.',
  sailing: 'Wind, tiller, and a forecast worth trusting. For the days the water does the talking.',
  soccer: 'Saturday match days and a worn-in pair of boots. Kit for the beautiful game.',
}

const FALLBACK = 'A handful of pieces from one of my favorite things.'

export const getBlurb = (title) => categoryBlurbs[title?.toLowerCase()] || FALLBACK

export default categoryBlurbs
