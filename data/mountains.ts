export const mountainData = [
  {
    id: 1,
    name: 'Mount Rainier',
    location: 'Washington, USA',
    elevation: '4,392m',
    imageUrl: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
    difficulty: 4,
    duration: '1-3 days',
    description: 'The highest mountain in Washington state and the Cascade Range, Mount Rainier is an active stratovolcano that offers challenging climbing routes and spectacular views.',
    trails: [
      { name: 'Wonderland Trail', length: '150km', difficulty: 4 },
      { name: 'Skyline Trail', length: '9.0km', difficulty: 3 },
      { name: 'Burroughs Mountain Trail', length: '7.2km', difficulty: 3 }
    ]
  },
  {
    id: 2,
    name: 'Mount Hood',
    location: 'Oregon, USA',
    elevation: '3,429m',
    imageUrl: 'https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg',
    difficulty: 3,
    duration: '6-10h',
    description: 'Oregon\'s highest peak and a potentially active stratovolcano. A popular destination for hiking, skiing and mountaineering, with several routes varying in difficulty.',
    trails: [
      { name: 'Timberline Trail', length: '64km', difficulty: 4 },
      { name: 'Cooper Spur Trail', length: '13km', difficulty: 3 },
      { name: 'Top Spur Trail', length: '8.0km', difficulty: 2 }
    ]
  },
  {
    id: 3,
    name: 'Half Dome',
    location: 'California, USA',
    elevation: '2,694m',
    imageUrl: 'https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg',
    difficulty: 5,
    duration: '10-14h',
    description: 'A distinct rock formation in Yosemite National Park. The hike to the summit is challenging, requiring cables to climb the steep granite dome. Permits are required.',
    trails: [
      { name: 'Half Dome Trail', length: '23km', difficulty: 5 },
      { name: 'John Muir Trail', length: '340km', difficulty: 4 },
      { name: 'Mist Trail', length: '11.2km', difficulty: 3 }
    ]
  },
  {
    id: 4,
    name: 'Mount Whitney',
    location: 'California, USA',
    elevation: '4,421m',
    imageUrl: 'https://images.pexels.com/photos/164025/pexels-photo-164025.jpeg',
    difficulty: 3,
    duration: '1-2 days',
    description: 'The highest summit in the contiguous United States, located in the Sierra Nevada mountains. The main route is non-technical but challenging due to elevation gain.',
    trails: [
      { name: 'Mount Whitney Trail', length: '35km', difficulty: 3 },
      { name: 'Mountaineer\'s Route', length: '19km', difficulty: 4 },
      { name: 'High Sierra Trail', length: '115km', difficulty: 4 }
    ]
  },
  {
    id: 5,
    name: 'Longs Peak',
    location: 'Colorado, USA',
    elevation: '4,346m',
    imageUrl: 'https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg',
    difficulty: 4,
    duration: '10-16h',
    description: 'The highest peak in Rocky Mountain National Park. The standard Keyhole Route involves rock scrambling and exposure to steep dropoffs. Start early to avoid afternoon storms.',
    trails: [
      { name: 'Keyhole Route', length: '23km', difficulty: 4 },
      { name: 'Loft Route', length: '20km', difficulty: 5 },
      { name: 'Boulder Field Trail', length: '19km', difficulty: 3 }
    ]
  },
  {
    id: 6,
    name: 'Mount St. Helens',
    location: 'Washington, USA',
    elevation: '2,550m',
    imageUrl: 'https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg',
    difficulty: 3,
    duration: '8-12h',
    description: 'An active stratovolcano in the Cascade Range, famous for its 1980 eruption. The climb to the rim offers views of the crater and surrounding landscapes.',
    trails: [
      { name: 'Monitor Ridge Route', length: '16km', difficulty: 3 },
      { name: 'Worm Flows Route', length: '19km', difficulty: 3 },
      { name: 'Loowit Trail', length: '50km', difficulty: 4 }
    ]
  }
];

export const popularMountains = [
  {
    id: 1,
    name: 'Mount Rainier',
    location: 'Washington, USA',
    elevation: '4,392',
    imageUrl: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
    difficulty: 4,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Mount Hood',
    location: 'Oregon, USA',
    elevation: '3,429',
    imageUrl: 'https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg',
    difficulty: 3,
    rating: 4.6
  },
  {
    id: 3,
    name: 'Half Dome',
    location: 'California, USA',
    elevation: '2,694',
    imageUrl: 'https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg',
    difficulty: 5,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Mount Whitney',
    location: 'California, USA',
    elevation: '4,421',
    imageUrl: 'https://images.pexels.com/photos/164025/pexels-photo-164025.jpeg',
    difficulty: 3,
    rating: 4.7
  },
  {
    id: 5,
    name: 'Longs Peak',
    location: 'Colorado, USA',
    elevation: '4,346',
    imageUrl: 'https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg',
    difficulty: 4,
    rating: 4.5
  }
];

export const beginnerMountains = [
  {
    id: 1,
    name: 'Mount Si',
    location: 'Washington, USA',
    elevation: '1,234',
    duration: '4-5h',
    imageUrl: 'https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg',
    difficulty: 2,
    description: 'A popular hiking destination near Seattle with well-maintained trails, making it perfect for beginners looking to build endurance.'
  },
  {
    id: 2,
    name: 'Pilot Butte',
    location: 'Oregon, USA',
    elevation: '146',
    duration: '1-2h',
    imageUrl: 'https://images.pexels.com/photos/2516423/pexels-photo-2516423.jpeg',
    difficulty: 1,
    description: 'An extinct volcano with an easy paved path, offering panoramic views of Bend and the Cascade Range from its summit.'
  },
  {
    id: 3,
    name: 'Mount Tamalpais',
    location: 'California, USA',
    elevation: '784',
    duration: '3-4h',
    imageUrl: 'https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg',
    difficulty: 2,
    description: 'Features gentle slopes and beautiful views of San Francisco Bay. Multiple trail options for different skill levels.'
  }
];
