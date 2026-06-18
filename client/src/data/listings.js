export const listings = [
  {
    id: 1,
    title: "3 Bedroom Duplex",
    price: 45000000,
    bedrooms: 3,
    bathrooms: 2,
    location: "Lekki Phase 1, Lagos",
    badge: "For Sale",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
    size: "180 sqm",
    parking: 2,
    description: `Spacious and fully detached duplex in a serene gated estate. Features 24/7 power supply, borehole water, and CCTV security. Close to schools, shopping malls, and major expressways. Perfect for a family looking for comfort and security in one of Lagos finest neighborhoods.`,
    amenities: ["24hr Power", "Borehole", "Security", "Parking", "CCTV", "Tarred Road"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    ],
    agent: {
      name: "Chibuzor Ezeokoli",
      phone: "08012345678",
      whatsapp: "08012345678",
      verified: true,
      totalListings: 12
    }
  },
  {
    id: 2,
    title: "2 Bedroom Flat",
    price: 2500000,
    bedrooms: 2,
    bathrooms: 2,
    location: "Victoria Island, Lagos",
    badge: "For Rent",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400",
    size: "75 sqm",
    parking: 1,
    description: "A comfortable 2 bedroom flat close to commercial amenities.",
    amenities: ["24hr Power", "Security"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
    ],
    agent: {
      name: "Chinedu Eze",
      phone: "08098765432",
      whatsapp: "08098765432",
      verified: false,
      totalListings: 4
    }
  },
  {
    id: 3,
    title: "4 Bedroom Semi-Detached",
    price: 32000000,
    bedrooms: 4,
    bathrooms: 3,
    location: "Ikeja GRA, Lagos",
    badge: "Hot Deal",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400",
    size: "220 sqm",
    parking: 2,
    description: "Elegant semi-detached home in Ikeja GRA with a modern kitchen, landscaped garden, and reliable utilities.",
    amenities: ["24hr Power", "Borehole", "Security", "Garden", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
    ],
    agent: {
      name: "Tunde Balogun",
      phone: "08023456789",
      whatsapp: "08023456789",
      verified: true,
      totalListings: 18
    }
  },
  {
    id: 4,
    title: "1 Bedroom Studio",
    price: 1200000,
    bedrooms: 1,
    bathrooms: 1,
    location: "Yaba, Lagos",
    badge: "For Rent",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
    size: "45 sqm",
    parking: 0,
    description: "Modern studio apartment in Yaba, ideal for young professionals and students close to tech hubs.",
    amenities: ["High Speed Internet", "Security", "Laundry"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
    ],
    agent: {
      name: "Aisha Musa",
      phone: "08034567890",
      whatsapp: "08034567890",
      verified: false,
      totalListings: 7
    }
  },
  {
    id: 5,
    title: "Land Plot Near Lekki Toll Gate",
    price: 8500000,
    location: "Lekki Toll Gate, Lagos",
    badge: "Land",
    type: "land",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
    size: "500 sqm",
    description: "Large fenced plot suitable for development, located close to major commercial districts and highway access.",
    amenities: ["Good Road Access", "Title Document", "Survey Plan"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
    ],
    agent: {
      name: "Fatima Bello",
      phone: "08045678901",
      whatsapp: "08045678901",
      verified: true,
      totalListings: 10
    }
  },
  {
    id: 6,
    title: "Executive Office Space",
    price: 18000000,
    bedrooms: 0,
    bathrooms: 2,
    location: "Victoria Island, Lagos",
    badge: "For Rent",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    size: "150 sqm",
    parking: 3,
    description: "Premium office space in Victoria Island with open plan layout, meeting rooms, and executive finishes.",
    amenities: ["Power Backup", "Reception", "Parking", "Security"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
    ],
    agent: {
      name: "Olufemi Johnson",
      phone: "08056789012",
      whatsapp: "08056789012",
      verified: true,
      totalListings: 9
    }
  },
  {
    id: 7,
    title: "Luxury 5 Bedroom Mansion",
    price: 120000000,
    bedrooms: 5,
    bathrooms: 6,
    location: "Banana Island, Lagos",
    badge: "For Sale",
    type: "house",
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400",
    size: "520 sqm",
    parking: 4,
    description: "A luxury mansion with private pool, home theater, and premium finishes, located in exclusive Banana Island.",
    amenities: ["Swimming Pool", "Guest House", "Security", "CCTV", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
    ],
    agent: {
      name: "Yemi Akindele",
      phone: "08067890123",
      whatsapp: "08067890123",
      verified: true,
      totalListings: 22
    }
  },
  {
    id: 8,
    title: "Commercial Land for Development",
    price: 27000000,
    location: "Ojodu Berger, Lagos",
    badge: "Land",
    type: "land",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    size: "1000 sqm",
    description: "Prime commercial land with easy access to major roads and nearby amenities, perfect for retail or office development.",
    amenities: ["Title Document", "Gate Access", "Premium Location"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
    ],
    agent: {
      name: "Chinelo Okoro",
      phone: "08078901234",
      whatsapp: "08078901234",
      verified: false,
      totalListings: 11
    }
  }
]
