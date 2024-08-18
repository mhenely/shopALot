const SHOP_DATA = [
  {
    title: 'National Parks',
    items: [
      {
        id: 1,
        name: 'Yellowstone',
        imageUrl: [
          'https://i.ibb.co/xsh7HSr/yellowstone1.jpg',
          'https://i.ibb.co/J5hDZN7/yellowstone2.jpg', 
          'https://i.ibb.co/JtjjwFC/yellowstone3.jpg'
        ],
        price: 250,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 2,
        name: 'Grand Canyon',
        imageUrl: [
          'https://i.ibb.co/QXKz0b1/grand-canyon1.jpg',
          'https://i.ibb.co/G75GRBz/grand-canyon2.jpg', 
          'https://i.ibb.co/Q8QkZgp/grand-canyon3.jpg'
        ],
        price: 150,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 3,
        name: 'Biscayne',
        imageUrl: [
          'https://i.ibb.co/nrbtgDs/biscayne1.webp',
          'https://i.ibb.co/T0Tnbvf/biscayne2.jpg', 
          'https://i.ibb.co/pyJg5BM/biscayne3.jpg'
        ],
        price: 235,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 4,
        name: 'Crater Lake',
        imageUrl: [
          'https://i.ibb.co/5hJMzjg/craterlake1.webp',
          'https://i.ibb.co/2WZ19g6/craterlake2.webp', 
          'https://i.ibb.co/8zfS5Jf/craterlake3.jpg'
        ],
        price: 220,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 5,
        name: 'Cuyahoga',
        imageUrl: [
          'https://i.ibb.co/9qhRPvk/cuyahoga1.webp',
          'https://i.ibb.co/4FdxQRM/cuyahoga2.webp', 
          'https://i.ibb.co/8zCw0hS/cuyahoga3.jpg'
        ],
        price: 220,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 6,
        name: 'Death Valley',
        imageUrl: [
          'https://i.ibb.co/9g6DD9J/death-Valley1.webp',
          'https://i.ibb.co/yfPxjpy/deathvalley2.webp', 
          'https://i.ibb.co/BTZWVVG/deathvalley3.webp'
        ],
        price: 140,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 7,
        name: 'Denali',
        imageUrl: [
          'https://i.ibb.co/KjpqX4b/deanli1.webp',
          'https://i.ibb.co/1qJtDTX/deanli3.jpg', 
          'https://i.ibb.co/qBJGSHt/denali2.jpg'
        ],
        price: 350,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 8,
        name: 'Dry Tortuga',
        imageUrl: [
          'https://i.ibb.co/L0DtLy6/dry2.jpg',
          'https://i.ibb.co/x26mRP0/dry3.jpg', 
          'https://i.ibb.co/mhcXvnM/dryt1.jpg'
        ],
        price: 320,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 9,
        name: 'Acadia',
        imageUrl: [
          'https://i.ibb.co/ScxbR4r/acadia1.jpg',
          'https://i.ibb.co/pxZXn5s/acadia2.jpg', 
          'https://i.ibb.co/sK7bKTg/acadia3.webp'
        ],
        price: 175,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 10,
        name: 'Redwood',
        imageUrl: [
          'https://i.ibb.co/xDJGHrw/redwood1.jpg',
          'https://i.ibb.co/phKVVLN/redwood2.jpg', 
          'https://i.ibb.co/5kqWDLF/redwood3.jpg'
        ],
        price: 155,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 11,
        name: 'Rocky Mountain',
        imageUrl: [
          'https://i.ibb.co/hF1PXj0/rocky1.jpg',
          'https://i.ibb.co/rbwVX6L/rocky2.webp', 
          'https://i.ibb.co/KbDx2mt/rocky3.jpg'
        ],
        price: 190,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 12,
        name: 'Saguaro',
        imageUrl: [
          'https://i.ibb.co/MphptZ8/saguaro1.jpg',
          'https://i.ibb.co/2SfVnJ8/saguaro2.jpg', 
          'https://i.ibb.co/GkG5L40/saguaro3.jpg'
        ],
        price: 165,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
    ],
  },
  {
    title: 'Sailing',
    items: [
      {
        id: 13,
        name: 'Greece',
        imageUrl: [
          'https://i.ibb.co/Jmc3jTx/greece3.jpg',
          'https://i.ibb.co/R2BxDz3/greece2.webp', 
          'https://i.ibb.co/CWPfKBT/greece2.jpg'
        ],
        price: 250,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 14,
        name: 'British Virgin Islands',
        imageUrl: [
          'https://i.ibb.co/BzmJw8Q/bvi1.jpg',
          'https://i.ibb.co/7RHvHvw/bvi2.webp', 
          'https://i.ibb.co/QcdRV9P/bvi3.jpg'
        ],
        price: 490,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 15,
        name: 'Hawaii',
        imageUrl: [
          'https://i.ibb.co/2FQ1RbS/hawai1.png',
          'https://i.ibb.co/s6THxzL/hawaii2.jpg', 
          'https://i.ibb.co/wBy46dL/hawaii3.jpg'
        ],
        price: 510,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 16,
        name: 'Philippines',
        imageUrl: [
          'https://i.ibb.co/6ybtfnC/phil1.jpg',
          'https://i.ibb.co/M19VCtr/phili2.webp', 
          'https://i.ibb.co/YR5LM37/phili3.jpg'
        ],
        price: 300,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 17,
        name: 'Australia',
        imageUrl: [
          'https://i.ibb.co/kQDkSxZ/aus1.jpg',
          'https://i.ibb.co/JcNs3cR/aus2.jpg', 
          'https://i.ibb.co/dcWCrf8/aus3.webp'
        ],
        price: 560,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 18,
        name: 'France',
        imageUrl: [
          'https://i.ibb.co/LdggGjs/france1.jpg',
          'https://i.ibb.co/zJWWGx1/france2.jpg', 
          'https://i.ibb.co/kmR0b4c/france3.webp'
        ],
        price: 510,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 19,
        name: 'South Africa',
        imageUrl: [
          'https://i.ibb.co/syBnqH2/south1.jpg',
          'https://i.ibb.co/42LWS8R/south2.jpg', 
          'https://i.ibb.co/wSbRw4D/south3.jpg'
        ],
        price: 480,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 20,
        name: 'Brazil',
        imageUrl: [
          'https://i.ibb.co/HYXvDwG/brazil1.jpg',
          'https://i.ibb.co/w7tGFmr/brazil2.jpg', 
          'https://i.ibb.co/PF07wZt/brazil3.jpg'
        ],
        price: 390,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
    ],
  },
  {
    title: 'Soccer',
    items: [
      {
        id: 21,
        name: 'Liverpool at Anfield',
        imageUrl: [
          'https://i.ibb.co/98sC88N/anfield1.jpg',
          'https://i.ibb.co/y0xw92s/anfield2.jpg', 
          'https://i.ibb.co/8xh2ksq/anfield3.jpg'
        ],
        price: 125,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 22,
        name: 'Barcelona at Camp Nou',
        imageUrl: [
          'https://i.ibb.co/4jnHP8V/barca1.webp',
          'https://i.ibb.co/MR1yhWD/barca2.jpg', 
          'https://i.ibb.co/K9PQzF4/barca3.webp'
        ],
        price: 130,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 23,
        name: 'Dortmund at Wastfalenstadion',
        imageUrl: [
          'https://i.ibb.co/ySvGYSN/dort1.jpg',
          'https://i.ibb.co/zJRYbCc/dort2.jpg', 
          'https://i.ibb.co/djvwH8t/dort3.jpg'
        ],
        price: 90,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 24,
        name: 'Brazil at Maracanã',
        imageUrl: [
          'https://i.ibb.co/dpbNQT0/mara1.jpg',
          'https://i.ibb.co/M8mZ3nd/mara2.webp', 
          'https://i.ibb.co/94JgwVK/mara3.webp'
        ],
        price: 165,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 25,
        name: 'Real Madrid at Santiago Bernabéu',
        imageUrl: [
          'https://i.ibb.co/qrGmxQF/madrid1.jpg',
          'https://i.ibb.co/J7xRb52/madrid2.jpg', 
          'https://i.ibb.co/GRbpnvF/madrid3.jpg'
        ],
        price: 185,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 26,
        name: 'England at Wembley',
        imageUrl: [
          'https://i.ibb.co/fMYBHby/wemb1.png',
          'https://i.ibb.co/Pgg39YS/wemb2.jpg', 
          'https://i.ibb.co/j8jRBGw/wemb3.jpg'
        ],
        price: 235,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 27,
        name: 'Mexico at La Azteca',
        imageUrl: [
          'https://i.ibb.co/SDTwtnt/azteca1.jpg',
          'https://i.ibb.co/gJzKpg6/azteca2.png', 
          'https://i.ibb.co/b6zVW4B/azteca3.jpg'
        ],
        price: 100,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 28,
        name: 'Bayern Munich at Allianz',
        imageUrl: [
          'https://i.ibb.co/XZ2mZC3/bayern1.jpg',
          'https://i.ibb.co/1T98JZk/bayern2.webp', 
          'https://i.ibb.co/F7yrwrg/bayern3.jpg'
        ],
        price: 125,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
    ],
  },
  {
    title: 'Traveling',
    items: [
      {
        id: 29,
        name: 'Paris',
        imageUrl: [
          'https://i.ibb.co/5W2F6gd/paris1.jpg',
          'https://i.ibb.co/HpWv57X/paris2.jpg', 
          'https://i.ibb.co/T0vMqqM/paris3.jpg'
        ],
        price: 425,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 30,
        name: 'Sydney',
        imageUrl: [
          'https://i.ibb.co/m0cDJLb/sydney1.jpg',
          'https://i.ibb.co/nLbxf2H/sydney2.webp', 
          'https://i.ibb.co/k0yfRtW/sydney3.jpg'
        ],
        price: 420,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 31,
        name: 'Rome',
        imageUrl: [
          'https://i.ibb.co/J5Zk3br/rome1.jpg',
          'https://i.ibb.co/HKVm4n9/rome2.jpg', 
          'https://i.ibb.co/g4hw27r/rome3.webp'
        ],
        price: 380,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 32,
        name: 'British Virgin Islands',
        imageUrl: [
          'https://i.ibb.co/gv02QRp/bvi1.png',
          'https://i.ibb.co/MkY4cXc/bvi2.webp', 
          'https://i.ibb.co/cx6g3m5/bvi3.jpg'
        ],
        price: 360,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 33,
        name: 'Porto',
        imageUrl: [
          'https://i.ibb.co/JKtnQQ1/porto1.webp',
          'https://i.ibb.co/GHK9Y76/porto2.webp', 
          'https://i.ibb.co/9W6NzQ5/porto3.jpg'
        ],
        price: 275,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 34,
        name: 'Berlin',
        imageUrl: [
          'https://i.ibb.co/cCHPcbs/berlin1.jpg',
          'https://i.ibb.co/W2zX1X7/berlin2.jpg', 
          'https://i.ibb.co/V26j4V5/berlin3.jpg'
        ],
        price: 315,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 35,
        name: 'Maui',
        imageUrl: [
          'https://i.ibb.co/2vcQCfw/maui1.jpg',
          'https://i.ibb.co/CmCcR0N/maui2.webp', 
          'https://i.ibb.co/R2VG59m/maui3.jpg'
        ],
        price: 500,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 36,
        name: 'Beijing',
        imageUrl: [
          'https://i.ibb.co/Z8bqdjp/beijing1.webp',
          'https://i.ibb.co/8N2dM6c/beijing2.jpg', 
          'https://i.ibb.co/NWxTmvM/beijing3.jpg'
        ],
        price: 550,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
    ],
  },
  {
    title: 'Cooking',
    items: [
      {
        id: 37,
        name: 'Carbonara',
        imageUrl: [
          'https://i.ibb.co/0QVNLCZ/carb1.webp', 
          'https://i.ibb.co/k8wV2s9/carb2.webp', 
          'https://i.ibb.co/2YGvs4c/carb3.jpg'
        ],
        price: 15,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 38,
        name: 'Amatriciana',
        imageUrl: [
          'https://i.ibb.co/dgP6F0N/ama1.jpg', 
          'https://i.ibb.co/YT2tBGZ/ama3.jpg', 
          'https://i.ibb.co/vPX4yt8/guan1.jpg'
        ],        
        price: 15,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 39,
        name: 'Steak',
        imageUrl: [
          'https://i.ibb.co/GHkDjyq/steak1.jpg', 
          'https://i.ibb.co/Js0sNKd/steak2.jpg', 
          'https://i.ibb.co/8B1CYV1/steak3.jpg'
        ],        
        price: 45,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 40,
        name: 'Tartiflette',
        imageUrl: [
          'https://i.ibb.co/PZc3q98/tart1.jpg', 
          'https://i.ibb.co/FBPgS9L/tart2.jpg', 
          'https://i.ibb.co/8D8CDF0/tart3.jpg'
        ],        
        price: 25,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 41,
        name: 'Lasagna',
        imageUrl: [
          'https://i.ibb.co/gJyhsXV/lasa1.jpg', 
          'https://i.ibb.co/khHqJgh/lasa2.jpg', 
          'https://i.ibb.co/2KFsSHX/lasa3.webp'
        ],        
        price: 20,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 42,
        name: 'Chicken Piccata',
        imageUrl: [
          'https://i.ibb.co/7R80r0v/picc1.webp', 
          'https://i.ibb.co/1s3w0FM/picc2.jpg', 
          'https://i.ibb.co/ftzjNQz/picc3.jpg'
        ],        
        price: 20,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 43,
        name: 'Lamb',
        imageUrl: [
          'https://i.ibb.co/C7GXwP0/lamb1.jpg', 
          'https://i.ibb.co/MZXBZGz/lamb2.jpg', 
          'https://i.ibb.co/RgtHLtw/lamb3.webp'
        ],        
        price: 35,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
      {
        id: 44,
        name: 'Fried Chicken',
        imageUrl: [
          'https://i.ibb.co/0cWFMCx/kfc1.jpg', 
          'https://i.ibb.co/hVYv9fQ/kfc2.jpg', 
          'https://i.ibb.co/qjZ3J8m/kfc3.webp'
        ],        
        price: 20,
        features: {
          title: 'Elegant Simplicity',
          items: [
            {
              name: 'Origin',
              description:
                'It is believed to have originated in the Lazio region and is synonymous with the city of Rome.',
            },
            { name: 'Description', 
              description: 'Carbonara is a creamy pasta dish made with fatty cured pork.' },
            {
              name: 'Ingredients',
              description:
                'The traditional preparation of Carbonara is made with: pasta (spaghetti is the most popular), guanciale, raw eggs, pecorino romano, and black pepper.',
            },
          ]
        }
      },
    ],
  },
];

export default SHOP_DATA;