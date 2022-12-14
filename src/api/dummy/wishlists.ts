const wishlist: Array<any> = [
  {
    id: 1,
    name: "Grand Villa",
    carpetArea: 1500,
    configuration: 3,
    furnishingStatus: "Fully Furnished",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia doloribus quas ea corporis. Libero architecto fuga quas, doloribus quam eos impedit dolores cumque numquam reiciendis aliquam fugiat quos vero?",
    floorPlan: "/UrbanaAssets/floor-plan.jpg",
    brochure: "/doc",
    image: "/SampleHouses/house1.jpg",
    image360: "/Apartments360/a1.jpeg",
    location: "Lords More",
    price: "42,00,000",
    addressLine1: "32 Lords More",
    addressLine2: "Kolkata, West Bengal",
    seller: {
      id: 1,
      firstName: "Devjeet",
      lastName: "Roy",
      address: "123/A RMC Lane, Kolkata: 700078",
      gender: "Male",
      profilePic: "/UrbanaAssets/User-Male.jpg",
      profileRating: 8.9,
    },
    city: "Kolkata",
    state: "West bengal",
    comments: [
      {
        name: "Avi Sen",
        text: "Wonderful house in a nice location. Looking forward to visit the site next week",
        rate: 4,
      },
      {
        name: "Jyoita Paul",
        text: "Slightly overpriced. Overall a nice residence.",
        rate: 3,
      },
    ],
    createdAt: "21 Aug, 2022",
    visited: false,
  },
  {
    id: 2,
    name: "Galaxy Villa",
    carpetArea: 1800,
    configuration: 4,
    furnishingStatus: "Fully Furnished",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia doloribus quas ea corporis. Libero architecto fuga quas, doloribus quam eos impedit dolores cumque numquam reiciendis aliquam fugiat quos vero?",
    floorPlan: "/UrbanaAssets/floor-plan.jpg",
    brochure: "/doc",
    image: "/SampleHouses/house2.jpg",
    image360: "/Apartments360/a2.jpeg",
    location: "Lakewood Estate",
    price: "95,00,000",
    addressLine1: "67/A Lakewood Estate Complex",
    addressLine2: "Bangalore, Karnataka",
    seller: {
      id: 2,
      firstName: "Joy",
      lastName: "Saha",
      address: "19/C James Lane, Bangalore: 300078",
      gender: "Male",
      profilePic: "/UrbanaAssets/User-Male.jpg",
      profileRating: 9.3,
    },
    city: "Bangalore",
    state: "Karnataka",
    comments: [
      {
        name: "Avi Sen",
        text: "Wonderful house in a nice location. Looking forward to visit the site next week",
        rate: 4,
      },
      {
        name: "Jyoita Paul",
        text: "Slightly overpriced. Overall a nice residence.",
        rate: 3,
      },
    ],
    createdAt: "23 Aug, 2022",
    visited: true,
  },
  {
    id: 3,
    name: "High Towers Villa",
    carpetArea: 1200,
    configuration: 3,
    furnishingStatus: "Semi furnished",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia doloribus quas ea corporis. Libero architecto fuga quas, doloribus quam eos impedit dolores cumque numquam reiciendis aliquam fugiat quos vero?",
    floorPlan: "/UrbanaAssets/floor-plan.jpg",
    brochure: "/doc",
    image: "/SampleHouses/house3.jpg",
    image360: "/Apartments360/a3.jpeg",
    location: "Mandevilla Gardens",
    price: "1,20,00,000",
    addressLine1: "12 G.P. Lane",
    addressLine2: "Puri, Orissa",
    seller: {
      id: 3,
      firstName: "Meghna",
      lastName: "Adhikary",
      address: "134 CM Lane, Orissa: 500078",
      gender: "Female",
      profilePic: "/UrbanaAssets/User-Female.jpg",
      profileRating: 8.3,
    },
    city: "Puri",
    state: "Orissa",
    comments: [
      {
        name: "Avi Sen",
        text: "Wonderful house in a nice location. Looking forward to visit the site next week",
        rate: 4,
      },
      {
        name: "Jyoita Paul",
        text: "Slightly overpriced. Overall a nice residence.",
        rate: 3,
      },
    ],
    createdAt: "23 Aug, 2022",
    visited: false,
  },
];

export default wishlist;
