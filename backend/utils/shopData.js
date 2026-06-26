// Seed data for the shop.
//
// Structure: each category groups items; each item carries a `subcategory`
// (the in-page filter chips — Hobbies has none) and three "facets". Each facet
// becomes one labeled detail row AND one gallery image on the product page.
//
// PLACEHOLDERS: imageUrl points at labeled placehold.co boxes ("Item · Facet")
// so you know which photo goes where — swap in real images. Descriptions are
// written; prices are playful nods (shirt numbers, founding years, landmark
// dates) — tweak freely.

const PLACE = (label) =>
  `https://placehold.co/600x720/f1e4d6/97431a?text=${encodeURIComponent(label)}`

// facets: [ [label, description], ... ] (three each). One detail + one image apiece.
const item = (name, subcategory, price, tagline, facets) => ({
  name,
  subcategory,
  price,
  imageUrl: facets.map(([label]) => PLACE(`${name} · ${label}`)),
  features: {
    title: tagline,
    items: facets.map(([label, description]) => ({ name: label, description })),
  },
})

const SHOP_DATA = [
  {
    title: 'Sports',
    items: [
      // --- Favorite Sports ---
      item('Soccer', 'Favorite Sports', 11.0, "The world's game.", [
        ['The game', 'Twenty-two players, one ball, ninety minutes — the simplest game there is and the hardest to master.'],
        ['The flow', 'No timeouts and barely a whistle; the run of play just breathes, building tension until it breaks.'],
        ['The stage', 'Every four years the World Cup turns the entire planet into a single stadium.'],
      ]),
      item('Hockey', 'Favorite Sports', 6.0, 'Chess at thirty miles an hour.', [
        ['The game', 'Five skaters and a goalie chasing a frozen rubber puck across the ice at a full sprint.'],
        ['The speed', 'The fastest team sport going — line changes on the fly, hits along the boards, shots you can barely track.'],
        ['The stage', 'Lift the Stanley Cup and your name is engraved on it forever.'],
      ]),
      item('Aussie Rules Football', 'Favorite Sports', 18.0, 'Controlled chaos on an oval.', [
        ['The game', 'Eighteen a side on a huge oval, leaping for marks and kicking through the big sticks for six.'],
        ['The chaos', "No offside and near-constant motion, with spectacular high-flying 'speccies' over packs of players."],
        ['The stage', 'The AFL Grand Final at the MCG is one of the great days on the Australian calendar.'],
      ]),
      // --- Favorite Teams ---
      item('Liverpool', 'Favorite Teams', 18.92, "You'll Never Walk Alone.", [
        ['The club', "One of England's most storied sides, founded in 1892 and built on relentless, high-pressing football."],
        ['Anfield', 'The Kop in full voice on a European night is one of the great atmospheres in sport.'],
        ['The anthem', "Scarves up for 'You'll Never Walk Alone' — the hair-on-your-neck moment before kickoff."],
      ]),
      item('Barcelona', 'Favorite Teams', 18.99, 'Més que un club.', [
        ['The club', "Catalan giants founded in 1899, famous for tiki-taka and a golden generation out of La Masia."],
        ['Camp Nou', 'Nearly 100,000 seats — the largest football stadium in Europe.'],
        ['The motto', "'Més que un club' — more than a club — ties the team to Catalan identity itself."],
      ]),
      item('Valencia', 'Favorite Teams', 19.19, 'Amunt Valencia.', [
        ['The club', "Spain's perennial third force, founded in 1919 on the Mediterranean coast."],
        ['Mestalla', 'One of the steepest, most intimidating grounds in Spain.'],
        ['Los Che', 'White shirts, orange trim, and a famously demanding home crowd.'],
      ]),
      item('Blues', 'Favorite Teams', 19.67, 'Play Gloria.', [
        ['The club', 'The St. Louis Blues, who joined the NHL in 1967 in its first big expansion.'],
        ['The barn', "A loud downtown rink where 'Gloria' became the soundtrack of a championship run."],
        ['2019', 'After 52 years, the Blues finally lifted the Stanley Cup.'],
      ]),
      item('Cubs', 'Favorite Teams', 18.76, 'Fly the W.', [
        ['The club', "The Chicago Cubs, one of baseball's oldest franchises, dating to 1876."],
        ['Wrigley Field', 'Ivy-covered brick outfield walls and a hand-turned scoreboard since 1914.'],
        ['2016', 'Broke a 108-year title drought with one of the great Game 7s ever played.'],
      ]),
      // --- Favorite Players ---
      item('Gerrard', 'Favorite Players', 8.0, 'Captain, leader, legend.', [
        ['The player', "Steven Gerrard, Liverpool's box-to-box captain and one-club icon."],
        ['The strike', 'Thunderbolt shots from distance that seemed to bend the laws of physics.'],
        ['Istanbul 2005', 'Sparked the comeback from 3–0 down to win the Champions League final.'],
      ]),
      item('Messi', 'Favorite Players', 10.0, 'The debate, settled.', [
        ['The player', "Lionel Messi, the Argentine maestro and serial Ballon d'Or winner."],
        ['The left foot', 'A low center of gravity and impossible close control that leave defenders grasping.'],
        ['2022', 'Finally lifted the World Cup, completing the one trophy he was missing.'],
      ]),
      item('Sidney Crosby', 'Favorite Players', 87.0, 'Sid the Kid.', [
        ['The player', 'Pittsburgh Penguins captain and the face of his hockey generation.'],
        ['The vision', 'Elite hockey IQ and playmaking from below the goal line.'],
        ['The Golden Goal', 'Won Olympic gold for Canada in overtime on home ice in 2010.'],
      ]),
      item('Firmino', 'Favorite Players', 9.0, 'The smiling false nine.', [
        ['The player', "Roberto Firmino, the Brazilian who made Liverpool's front three tick."],
        ['The press', "Did the selfless defensive work that powered Klopp's gegenpressing."],
        ['No-look goals', 'Famous for cheeky no-look finishes and a permanent grin.'],
      ]),
    ],
  },
  {
    title: 'Food',
    items: [
      // --- Favorite Foods ---
      item('Italian', 'Favorite Foods', 18.61, 'Rome on a plate.', [
        ['Carbonara', 'Egg yolk, pecorino, black pepper, and crisp guanciale tossed with hot pasta — glossy and rich, never creamy.'],
        ['Amatriciana', 'Guanciale, tomato, and pecorino on bucatini — the tangier, sharper cousin of carbonara, from the town of Amatrice.'],
        ['Pizza', 'Blistered Neapolitan dough with San Marzano and mozzarella, ninety seconds in a screaming wood oven.'],
      ]),
      item('Sushi', 'Favorite Foods', 22.0, 'Precision you can taste.', [
        ['Nigiri', 'A hand-pressed pillow of seasoned rice under a slice of pristine fish.'],
        ['Sashimi', "Just the fish, sliced with knife-work that's an art form of its own."],
        ['The rice', 'Shari — vinegared rice at body temperature — is the part the masters obsess over.'],
      ]),
      item('Burger', 'Favorite Foods', 12.0, 'America in a bun.', [
        ['The smash', 'A ball of beef smashed thin on a screaming flat-top for lacy, crispy edges.'],
        ['The melt', "American cheese laid on while it's hot so it pools into every crevice."],
        ['The fixings', 'Pickles, onion, and a tangy special sauce on a soft potato bun.'],
      ]),
      item('BBQ', 'Favorite Foods', 24.0, 'Low and slow.', [
        ['Brisket', 'Beef brisket smoked twelve-plus hours to a peppery bark and a pink smoke ring.'],
        ['Ribs', 'Pork ribs with just enough tug off the bone — falling apart means overcooked.'],
        ['Burnt ends', "The caramelized, twice-cooked tips of the brisket point — 'meat candy.'"],
      ]),
      item('Thai', 'Favorite Foods', 15.0, 'Sweet, sour, salty, hot.', [
        ['Pad Thai', 'Stir-fried rice noodles with tamarind, egg, peanuts, and lime — the balance is everything.'],
        ['Pad Krapao', "Holy-basil stir-fry with chilies over rice, crowned with a crispy fried egg — Thailand's true comfort food."],
        ['Green Curry', 'Coconut curry pounded from fresh green chilies and herbs, fragrant and fiery.'],
      ]),
      item('Hawaiian', 'Favorite Foods', 16.0, 'The island plate.', [
        ['Plate lunch w/ Kalua pork', 'Smoky, salt-rubbed pork cooked low and slow, with two scoops rice and mac salad.'],
        ['Poke bowl', 'Cubes of raw ahi tossed with shoyu, sesame, and sweet onion over rice.'],
        ['Spam Musubi', "Grilled Spam over rice, wrapped in nori — the islands' favorite snack."],
      ]),
      item('Mexican', 'Favorite Foods', 14.0, 'Beyond the taco truck.', [
        ['Mole Poblano', 'A deep, complex sauce of chilies, spices, and a little chocolate, simmered for hours.'],
        ['Chiles Rellenos', 'Roasted poblano stuffed with cheese, battered, and fried until golden.'],
        ['Tacos al Pastor', 'Spit-roasted marinated pork with pineapple, onion, and cilantro on a corn tortilla.'],
      ]),
      // --- Favorite Restaurants ---
      item('LeChon', 'Favorite Restaurants', 20.14, 'Pan-Latin, Portland.', [
        ['Portland, OR', 'A waterfront spot in downtown Portland.'],
        ['The kitchen', 'Pan-Latin cooking — ceviche, empanadas, plantains, and slow-roasted meats.'],
        ['Order this', 'The namesake lechón: crispy-skinned roast pork.'],
      ]),
      item('EEM', 'Favorite Restaurants', 20.19, 'Thai BBQ mashup.', [
        ['Portland, OR', 'On the north side of Portland.'],
        ['The kitchen', 'Thai food meets Texas barbecue — curries built around smoked brisket and burnt ends.'],
        ['Order this', "The brisket curry, a combination you won't find anywhere else."],
      ]),
      item("Pappy's", 'Favorite Restaurants', 20.08, 'Memphis-style smoke.', [
        ['St. Louis, MO', 'A barbecue institution in midtown St. Louis.'],
        ['The kitchen', 'Memphis-style barbecue smoked over apple and cherry wood.'],
        ['Order this', 'Dry-rub ribs — when they sell out for the day, they close.'],
      ]),
      item('Cave of Cheese', 'Favorite Restaurants', 18.6, 'Fromage on the Riviera.', [
        ['Nice, France', 'In the old town of Nice on the French Riviera.'],
        ['The kitchen', 'A cheese cellar stacked with French fromage and good wine.'],
        ['Order this', 'A board of regional cheeses with a glass of something local.'],
      ]),
      item("Imo's", 'Favorite Restaurants', 19.64, 'The Square Beyond Compare.', [
        ['St. Louis, MO', 'A St. Louis original, founded in 1964.'],
        ['The kitchen', 'St. Louis-style pizza: cracker-thin crust and gooey Provel, cut into squares.'],
        ['Order this', 'Sausage, extra Provel — and yes, you eat the corners.'],
      ]),
    ],
  },
  {
    title: 'Travel',
    items: [
      // --- Favorite Destinations ---
      item('Paris', 'Favorite Destinations', 18.89, 'The City of Light.', [
        ['The setting', 'The Seine, grand boulevards, and zinc rooftops to the horizon.'],
        ['The icon', 'The Eiffel Tower, lit and sparkling on the hour after dark.'],
        ['The table', "Café culture, fresh baguettes, and butter you'll think about for years."],
      ]),
      item('Rome', 'Favorite Destinations', 7.53, 'The Eternal City.', [
        ['The setting', 'Layers of nearly 2,800 years of history stacked street on street.'],
        ['The icon', 'The Colosseum and the Pantheon, still standing after two millennia.'],
        ['The table', 'Cacio e pepe, carbonara, and gelato eaten among the ruins.'],
      ]),
      item('Machu Picchu', 'Favorite Destinations', 14.5, 'The lost city of the Inca.', [
        ['The setting', 'An Inca citadel perched on a ridge 8,000 feet up in the Andes.'],
        ['The journey', 'Reached by the Inca Trail or a switchback climb above the Urubamba River.'],
        ['The view', 'Terraces and dry-stone walls swallowed by cloud at sunrise.'],
      ]),
      item('Sydney', 'Favorite Destinations', 19.73, 'Harbour city.', [
        ['The setting', "A sun-drenched city wrapped around one of the world's great harbors."],
        ['The icon', 'The Opera House sails beside the Harbour Bridge.'],
        ['The coast', 'Clifftop walks from Bondi to Coogee and beaches without end.'],
      ]),
      item('Hawaii', 'Favorite Destinations', 19.59, 'Aloha.', [
        ['The setting', 'Volcanic islands in the middle of the Pacific, green to the waterline.'],
        ['The water', 'Warm surf, coral reefs, and some of the best snorkeling anywhere.'],
        ['The spirit', 'The aloha way of life — unhurried, generous, welcoming.'],
      ]),
      item('BVI', 'Favorite Destinations', 16.72, "Nature's little secrets.", [
        ['The setting', 'The British Virgin Islands — dozens of green isles in clear Caribbean water.'],
        ['On the water', 'A world-class sailing ground with easy line-of-sight hops between islands.'],
        ['The stops', "The Baths' giant boulders and beach bars you can only reach by boat."],
      ]),
      item('Barcelona', 'Favorite Destinations', 19.92, "Gaudí's city.", [
        ['The setting', 'A Catalan capital where the streets run down to the Mediterranean.'],
        ['The icon', "Gaudí's Sagrada Família and the mosaic dragons of Park Güell."],
        ['The table', 'Tapas, vermut, and dinners that roll well past midnight.'],
      ]),
      // --- Goal Destinations ---
      item('Tokyo', 'Goal Destinations', 19.58, 'Neon and quiet, side by side.', [
        ['The setting', "A 24-hour megacity that's somehow also spotless and calm."],
        ['The food', 'From convenience-store snacks to the densest cluster of great restaurants on earth.'],
        ['The contrast', 'Shrines and gardens tucked between skyscrapers and neon.'],
      ]),
      item('London', 'Goal Destinations', 18.63, 'Mind the gap.', [
        ['The setting', 'A global city stitched together along the Thames.'],
        ['The icons', 'Big Ben, the Tube, red double-deckers, and centuries of history.'],
        ['The mix', 'Markets, free museums, and a pub on every corner.'],
      ]),
      item('Ireland', 'Goal Destinations', 19.22, 'Forty shades of green.', [
        ['The setting', 'Emerald hills, sea cliffs, and stone walls running to the coast.'],
        ['The drive', 'The Wild Atlantic Way and the Cliffs of Moher.'],
        ['The craic', 'Trad music and good company in warm village pubs.'],
      ]),
      item('Munich', 'Goal Destinations', 18.1, "Bavaria's heart.", [
        ['The setting', 'A handsome Bavarian city at the edge of the Alps.'],
        ['The icon', 'Oktoberfest, beer halls, and the Marienplatz glockenspiel.'],
        ['The escape', 'Day trips to fairy-tale castles and alpine lakes an hour away.'],
      ]),
      item('Buenos Aires', 'Goal Destinations', 18.16, 'The Paris of South America.', [
        ['The setting', 'Grand European avenues with unmistakable Argentine soul.'],
        ['The dance', "Tango spilling out of San Telmo's streets and milongas."],
        ['The table', 'Asado, malbec, and steak that ruins you for anywhere else.'],
      ]),
    ],
  },
  {
    title: 'Hobbies',
    items: [
      item('Soccer', '', 11.0, 'The beautiful game, up close.', [
        ['Playing', 'Still lacing up for weekend games — the fitness, the touches, the camaraderie.'],
        ['Coaching', 'Teaching the game to younger players and watching it click for them.'],
        ['Watching', 'Early-morning kickoffs, league tables, and living and dying with every match.'],
      ]),
      item('Sailing', '', 24.9, 'Wind, tiller, and a long horizon.', [
        ['On the water', 'Reading the wind and trimming sail until the boat finds its groove.'],
        ['The craft', 'Navigation, knots, and weather — something you never stop learning.'],
        ['The dream', 'The life goal: a full circumnavigation, all the way around.'],
      ]),
      item('Writing', '', 26.0, 'Filling the blank page.', [
        ['Novels', 'The slow build of a long story — character, world, and a draft that finally holds together.'],
        ['Screenplays', 'Writing in scenes and dialogue, where every line has to earn its place.'],
        ['The craft', 'Reading like a writer and rewriting until it reads easy.'],
      ]),
      item('Stand Up', '', 5.0, 'Five minutes, no net.', [
        ['Watching', 'Studying specials for timing, structure, and the perfect callback.'],
        ['Performing', 'Taking a tight five to an open mic and trusting the bit.'],
        ['The craft', 'Writing, tagging, and tightening jokes until they land.'],
      ]),
      item('Reading', '', 4.51, 'Always mid-book.', [
        ['Fiction', "Getting lost in a novel that won't let you put it down."],
        ['Nonfiction', 'History, science, and biography — learning by the chapter.'],
        ['The ritual', 'A stack on the nightstand and a few pages before sleep.'],
      ]),
      item('Hiking', '', 20.0, 'Go where the trail goes.', [
        ['The trail', 'Boots, a daypack, and a few hours moving through the trees.'],
        ['The summit', 'The payoff view that makes the climb worth it.'],
        ['The reset', 'No signal, just footsteps — the best way to clear your head.'],
      ]),
      item('Cooking', '', 35.0, 'Dinner as the hobby.', [
        ['The technique', 'Knife skills, heat control, and learning to taste as you go.'],
        ['The table', 'Feeding people — the real reason to cook.'],
        ['The everyday', 'Turning a Tuesday and a full fridge into something good.'],
      ]),
      item('Working Out', '', 45.0, 'Reps in the bank.', [
        ['The lift', 'Progressive strength work — a little more weight, a little at a time.'],
        ['Conditioning', 'Runs and intervals to keep the engine honest.'],
        ['The habit', "Showing up on the days you don't feel like it."],
      ]),
      item('Surfing', '', 30.0, 'Chasing the next wave.', [
        ['The paddle-out', 'Reading the sets and timing the lulls to get past the break.'],
        ['The wave', 'That weightless drop when you catch one just right.'],
        ['The stoke', 'Salt, sun, and the patience the ocean demands.'],
      ]),
      item('Salsa Dancing', '', 8.0, 'Quick, quick, slow.', [
        ['The basic', 'It all starts with the eight-count step — quick, quick, slow.'],
        ['The partnerwork', 'Lead and follow, turns and timing, all in the connection.'],
        ['The music', 'Clave, horns, and piano montunos that pull you onto the floor.'],
      ]),
      item('Ice Skating', '', 32.0, 'Edges and glide.', [
        ['The glide', 'Long, quiet strokes across fresh ice.'],
        ['The edges', 'Inside and outside edges — balance you feel more than think.'],
        ['The rink', 'Crisp air, cold blades, and the scrape of a clean stop.'],
      ]),
      item('Coding', '', 42.0, 'Building things that run.', [
        ['The build', 'Turning an idea into something that actually works on a screen.'],
        ['The bug', 'The hunt — and the small thrill when the fix finally clicks.'],
        ['The ship', 'Deploying it and watching real people use what you made.'],
      ]),
    ],
  },
  {
    title: 'Books & Music',
    items: [
      // --- Books (facets: author / the story / why it endures) ---
      item('The Count of Monte Cristo', 'Books', 18.44, 'Revenge, served patiently.', [
        ['Alexandre Dumas', 'The French master of adventure, who serialized the novel in 1844.'],
        ['The story', 'Wrongly imprisoned, Edmond Dantès escapes, claims a hidden fortune, and engineers an elaborate revenge.'],
        ['Why it endures', 'A 1,200-page page-turner about patience, justice, and the cost of vengeance.'],
      ]),
      item('A Place of Greater Safety', 'Books', 19.92, 'The Revolution, up close.', [
        ['Hilary Mantel', "The two-time Booker winner's sweeping novel of the French Revolution."],
        ['The story', 'Danton, Robespierre, and Desmoulins ride the Revolution from idealism to the guillotine.'],
        ['Why it endures', 'History made intimate — friendship and ambition curdling into terror.'],
      ]),
      item('The Realm of the Elderlings', 'Books', 19.95, 'Fantasy that breaks your heart.', [
        ['Robin Hobb', 'The pen name of Margaret Ogden, a master of character-driven fantasy.'],
        ['The story', 'Sixteen books following FitzChivalry Farseer — a royal bastard and reluctant assassin — and his bond with the Fool.'],
        ['Why it endures', 'Slow-burning and emotionally devastating; it rewards the long haul.'],
      ]),
      item('Lord of the Rings', 'Books', 19.54, 'Where modern fantasy begins.', [
        ['J.R.R. Tolkien', 'The Oxford philologist who invented modern fantasy, languages and all.'],
        ['The story', 'A hobbit carries a ruinous ring across Middle-earth to unmake it in the fire that forged it.'],
        ['Why it endures', 'The template every fantasy since has been measured against.'],
      ]),
      item('To Kill A Mockingbird', 'Books', 19.6, 'Conscience in a small town.', [
        ['Harper Lee', 'Her Pulitzer-winning 1960 novel, drawn from a Depression-era Alabama childhood.'],
        ['The story', 'Scout Finch watches her father defend a Black man falsely accused in the Jim Crow South.'],
        ['Why it endures', 'A clear-eyed look at conscience, prejudice, and growing up.'],
      ]),
      item('East of Eden', 'Books', 19.52, 'Thou mayest.', [
        ['John Steinbeck', 'The Nobel laureate considered this his magnum opus.'],
        ['The story', "Two families in California's Salinas Valley reenact Cain and Abel across generations."],
        ['Why it endures', "A meditation on free will captured in one word: timshel — 'thou mayest.'"],
      ]),
      item('Moby-Dick', 'Books', 18.51, 'Call me Ishmael.', [
        ['Herman Melville', 'His 1851 novel, a flop in its day, later hailed as the Great American Novel.'],
        ['The story', "Captain Ahab hunts the white whale that took his leg, dragging his crew toward obsession's end."],
        ['Why it endures', 'Part sea yarn, part encyclopedia, part fever dream.'],
      ]),
      item('One Hundred Years of Solitude', 'Books', 19.67, 'Where the miraculous is ordinary.', [
        ['Gabriel García Márquez', 'The Nobel laureate and standard-bearer of magical realism.'],
        ['The story', 'Seven generations of the Buendía family rise and fall in the mythical town of Macondo.'],
        ['Why it endures', 'The book where the magical and the everyday share a sentence.'],
      ]),
      item('The Old Man and the Sea', 'Books', 19.52, 'Destroyed, not defeated.', [
        ['Ernest Hemingway', 'His spare 1952 novella that helped win him the Nobel.'],
        ['The story', 'An aging Cuban fisherman battles a giant marlin alone, far out in the Gulf Stream.'],
        ['Why it endures', 'A short, stoic parable about struggle and dignity.'],
      ]),
      // --- Music (facets: three bands per genre) ---
      item('Celtic Punk', 'Music', 19.82, 'Whiskey, fiddles, and distortion.', [
        ['Flogging Molly', 'L.A.-via-Dublin band fronted by Dave King, mixing punk with tin whistle and fiddle.'],
        ['Dropkick Murphys', "Boston's bagpipe-punk institution behind 'I'm Shipping Up to Boston.'"],
        ['The Pogues', "The originals — Shane MacGowan's ragged poetry over Irish folk turned loud and fast."],
      ]),
      item('Classic Rock', 'Music', 19.69, 'Turn it up.', [
        ['Led Zeppelin', "Riff-heavy giants of the '70s — Page's guitar, Plant's wail, and 'Stairway.'"],
        ['The Beatles', 'The band that rewrote popular music in barely eight years.'],
        ['AC/DC', "Australia's high-voltage hard rock, built on Angus Young's schoolboy stomp."],
      ]),
      item('Island Music', 'Music', 19.77, 'Sand between your toes.', [
        ['IZ', "Israel Kamakawiwoʻole, whose ukulele 'Over the Rainbow' is pure aloha."],
        ['Bob Marley & The Wailers', 'The voice that carried reggae from Kingston to the world.'],
        ['Hapa', 'Hawaiian group blending slack-key guitar and contemporary harmonies.'],
      ]),
    ],
  },
]

module.exports = SHOP_DATA
