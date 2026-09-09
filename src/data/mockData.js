import client1Img from '../assets/clients/karni-client-1.jpg';
import client2Img from '../assets/clients/karni-client-2.jpg';
import client3Img from '../assets/clients/karni-client-3.jpg';
import client4Img from '../assets/clients/karni-client-4.jpg';
import client5Img from '../assets/clients/karni-client-5.jpg';
import client6Img from '../assets/clients/karni-client-6.jpg';
import client7Img from '../assets/clients/karni-client-7.jpg';
import client8Img from '../assets/clients/karni-client-8.jpg';
import client9Img from '../assets/clients/karni-client-9.jpg';
import client10Img from '../assets/clients/karni-client-10.jpg';
import client11Img from '../assets/clients/karni-client-11.jpg';
import groomMakeoverImg from '../assets/clients/groom-makeover.jpg';



export const ARTIST_INFO = {
  name: "Karni",
  brandName: "glamwithKarni_makeover",
  displayTagline: "Bridal & Groom Makeovers, Saree & Dhoti Draping & Hairdo Artistry",
  experienceYears: 9,
  makeoversCount: 850,
  googleRating: 4.9,
  reviewsCount: 310,
  phone: "+91 81223 03766",
  whatsappNumber: "918122303766",
  gpayNumber: "8190030368",
  gpayName: "KARNIKA B",
  advanceAmount: "₹6,000",
  advanceNote: "Mandatory to block the date",
  email: "glamwithkarni@gmail.com",
  instagramHandle: "@glamwithKarni_makeover",
  studioAddress: "No 18, Somasundaram Avenue, Sakthi Nagar, Porur, Chennai, Tamil Nadu",
  workingHours: "Monday - Sunday: 5:00 AM - 9:30 PM (IST)",
  serviceAreas: [
    "Doorstep & Venue Travel Anywhere (Home, Mandapam & Resorts)",
    "Chennai, All Over Tamil Nadu & South India",
    "Destination Weddings & Outstations Worldwide"
  ],
  bookingPolicy: [
    "Date will be blocked only after advance payment",
    "Advance amount (₹6,000) is non-refundable",
    "Travelling charges to be borne by client",
    "No last-minute discounts",
    "Balance payment must be paid immediately after makeup (Cash / GPay)",
    "Late payments are not accepted"
  ],
  importantNotes: [
    "Jewellery & Flower COMPLIMENTARY with all bridal packages",
    "Advanced / designer jewellery models will be charged extra",
    "Real / fresh flowers will be charged extra based on type, quantity & design"
  ]
};

export const SERVICES_DATA = [
  {
    id: "silver-package",
    title: "Silver Package — Classic Elegance Bridal Look",
    category: "Bridal Packages",
    targetAudience: "Women",
    tagline: "Professional Non-HD/HD bridal makeup with HUDA Beauty & NARS, fresh lashes & lenses with complimentary jewellery and flowers",
    priceDisplay: "₹12,000",
    priceValue: 12000,
    duration: "3 - 3.5 Hours",
    isPopular: false,
    complimentaryJewelleryAndFlower: true,
    badgeText: "Classic Elegance",
    image: client5Img,
    features: [
      "Professional Non-HD/HD Bridal Makeup",
      "Premium International Brands (HUDA Beauty / NARS)",
      "Fresh Eye Lashes Included",
      "Fresh Eye Lenses Included",
      "Basic Hair Styling (Curls / Straight)",
      "Hair Accessories, Hair Pins & Safety Pins",
      "Saree Draping Assistance",
      "✨ JEWELLERY & FLOWER COMPLIMENTARY"
    ],
    recommendedFor: "Morning Muhurtham, Classic Traditional Weddings, Simple Receptions & Engagements",
    productsUsed: ["HUDA Beauty", "NARS", "MAC Studio Fix", "Urban Decay"]
  },
  {
    id: "gold-package",
    title: "Gold Package — UV Radiant Bridal Glow",
    category: "Bridal Packages",
    targetAudience: "Women",
    tagline: "UV Finish Dewy/Glam makeup with NARS & Charlotte Tilbury, hair extensions & complimentary jewellery and flowers",
    priceDisplay: "₹14,000",
    priceValue: 14000,
    duration: "3.5 - 4 Hours",
    isPopular: true,
    complimentaryJewelleryAndFlower: true,
    badgeText: "Most Popular",
    image: client1Img,
    features: [
      "UV Finish Makeup (Dewy / Glam Finish)",
      "Premium Luxury Products (NARS / Charlotte Tilbury)",
      "Fresh Eye Lashes Included",
      "Fresh Eye Lenses Included",
      "Hair Crimping & Hair Accessories",
      "Hair Pins & Safety Pins",
      "Savuri / Curls / Straight Extensions Included",
      "Saree Draping Assistance",
      "✨ JEWELLERY & FLOWER COMPLIMENTARY"
    ],
    recommendedFor: "Grand Muhurtham, High-Humidity Stage Rituals, Sacred Homam Fires & Evening Reception",
    productsUsed: ["NARS", "Charlotte Tilbury", "Huda Beauty", "Dior Backstage"]
  },
  {
    id: "platinum-package",
    title: "Platinum Package — Luxury Glass Skin Bridal Transformation",
    category: "Bridal Packages",
    targetAudience: "Women",
    tagline: "Premium Glossy HD makeup, Exclusive Glass Skin Prep ritual, premium extensions & complimentary jewellery and flowers",
    priceDisplay: "₹16,000",
    priceValue: 16000,
    duration: "4 - 4.5 Hours",
    isPopular: true,
    complimentaryJewelleryAndFlower: true,
    badgeText: "Luxury Glass Skin",
    image: client7Img,
    features: [
      "Premium Glossy HD Bridal Makeup",
      "Luxury Brands (Charlotte Tilbury / NARS)",
      "✨ Exclusive Glass Skin Prep Ritual: Hydrating Facial Mask Treatment",
      "Deep Moisture & Glow Boost for Flawless Bridal Finish",
      "Fresh Eye Lashes & Fresh Eye Lenses Included",
      "Hair Crimping & Premium Hair Accessories",
      "Hair Extensions / Savuri / Curls / Straight Extensions Included",
      "Hair Pins & Safety Pins",
      "Saree / Lehenga Draping Assistance",
      "✨ JEWELLERY & FLOWER COMPLIMENTARY"
    ],
    recommendedFor: "Ultra-Luxury Bridal Makeovers, 4K Cinema Photography, Grand Banquets & Ballrooms",
    productsUsed: ["Charlotte Tilbury Flawless Filter", "NARS Luxury HD", "Dior Backstage", "Fenty Beauty"]
  },
  {
    id: "groom-makeup",
    title: "Groom Makeup — Simple, Elegant & Camera Ready",
    category: "Groom (Men)",
    targetAudience: "Men",
    tagline: "Simple, elegant & camera-ready grooming for men: anti-shine matte finish, skin tone evening, beard sculpting & hair styling",
    priceDisplay: "₹2,000",
    priceValue: 2000,
    duration: "45 Mins - 1 Hour",
    isPopular: true,
    complimentaryJewelleryAndFlower: false,
    badgeText: "Groom Special",
    image: groomMakeoverImg,
    features: [
      "Simple, Elegant & Camera Ready Natural Makeup",
      "Skin Tone Evening & Dark Circle Concealing (Zero ash/white cast)",
      "Anti-Shine T-Zone Mattifying Base for Stage Lighting",
      "Beard Grooming, Trimming & Edge Shaping",
      "Structured Groom Hair Styling (Matte Pomade / High Hold)",
      "Pattu Veshti (Dhoti) / Sherwani / Suit Lapel Pinning Assistance"
    ],
    recommendedFor: "Grooms for Muhurtham, Reception, Sangeet, Engagement & Pre-Wedding Shoots",
    productsUsed: ["Kryolan Anti-Shine", "MAC Prep+Prime", "Schwarzkopf Osis+", "Tom Ford for Men"]
  },
  {
    id: "saree-dhoti-draping",
    title: "Professional Saree Draping & Dhoti Styling",
    category: "Draping & Styling",
    targetAudience: "Men & Women",
    tagline: "Master-level pleating, 9-yards Madisar (Iyer & Iyengar), Lehenga and Men's Pattu Veshti draping",
    priceDisplay: "₹2,500",
    priceValue: 2500,
    duration: "45 Mins",
    isPopular: false,
    complimentaryJewelleryAndFlower: false,
    image: client11Img,
    features: [
      "Traditional Kanchipuram Silk Saree crisp Box Pleating & Ironing",
      "Authentic 9-Yards Madisar Draping (Both Iyer & Iyengar styles)",
      "Men's Traditional Pattu Veshti (Panchakacham / Dhoti) & Angavastram",
      "Lehenga Dupatta Styling & Double-Dupatta Pinning",
      "Secure Micro-Pinning (Zero slipping during walking or rituals)"
    ],
    recommendedFor: "Brides, Grooms & Wedding Hosts seeking master traditional draping",
    productsUsed: ["Steam Ironing", "Anti-tear Fabric Safety Fasteners", "Zero-Damage Hidden Pins"]
  },
  {
    id: "hairdo-and-styling",
    title: "Bridal & Event Hairdo Artistry",
    category: "Draping & Styling",
    targetAudience: "Men & Women",
    tagline: "Intricate jasmine Jadai, floral architecture, cascading open curls & modern textured updos",
    priceDisplay: "₹3,500",
    priceValue: 3500,
    duration: "1 - 1.5 Hours",
    isPopular: false,
    complimentaryJewelleryAndFlower: false,
    image: client9Img,
    features: [
      "Traditional South Indian Braided Jadai with Antique Setting",
      "Fresh Madurai Malli (Jasmine) & Floral Veni Fitting",
      "Bouncy Hollywood Waves or Textured Low Reception Bun",
      "Hair Prep with Heat Protectant & Long-Hold Humidity Shield Spray",
      "Men's Hair texturizing, volume blow-dry & pomade hold"
    ],
    recommendedFor: "Brides, Grooms & Wedding Guests seeking bespoke hair architecture",
    productsUsed: ["Dyson Supersonic", "Osis+ Schwarzkopf", "Bed Head TIGI", "Moroccanoil"]
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-real-client-8",
    title: "Gramophone Heritage Muhurtham (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Traditional Wedding Hall, Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: client8Img,
    technique: "Maroon Silk Saree Draping + Vintage Gramophone Setup + Gold Oddiyanam",
    description: "Real client makeover by Karni featuring a rich maroon silk saree, traditional gold temple necklaces, waist belt, and elegant seating next to a vintage brass gramophone table.",
    tags: ["Real Client Work", "Gramophone Heritage", "Maroon Silk", "Muhurtham Bride"]
  },
  {
    id: "gal-real-client-9",
    title: "Beige Sequin Saree & Long Open Hair Curls (Real Client)",
    clientName: "Real Karni Client",
    weddingVenue: "Grand Reception Hall, Chennai",
    category: "Hair & Hairdo",
    gender: "Women",
    image: client9Img,
    technique: "Cascading Open Wave Hairdo + Dewy Soft Glam Base + Sequin Saree Draping",
    description: "Real client featuring a delicate cream/beige sequined saree, dewy radiant makeup, and a full cascading open-hair wavy hairstyle.",
    tags: ["Real Client Work", "Long Curls", "Hair Architecture", "Party Glam"]
  },
  {
    id: "gal-real-client-10",
    title: "Bridal Kundan Jewellery & Eye Artistry Close-Up (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Luxury Hotel Banquets, Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: client10Img,
    technique: "Top-Angle Jewelry Fixing + Shimmer Eye Art + Crimson Velvet Embroidered Blouse",
    description: "High-angle top detail shot showing Karni's intricate Kundan & pink stone jewellery arrangement, embroidered crimson blouse, and delicate eye makeup.",
    tags: ["Real Client Work", "Kundan Jewelry", "Eye Makeup", "Bridal Close-Up"]
  },
  {
    id: "gal-real-client-11",
    title: "Outdoor Sunlit Kanchipuram Silk Saree Draping (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Green Park Resort & Gardens, Chennai",
    category: "Saree & Dhoti Draping",
    gender: "Women",
    image: client11Img,
    technique: "Green & Orange Silk Saree Box-Pleating + Floral Red Hair Bun + Sunlit HD Skin",
    description: "Real client standing in natural garden sunlight showcasing Karni's box-pleating for a green & orange Kanchipuram silk saree with red floral hair accessory.",
    tags: ["Real Client Work", "Outdoor Garden", "Kanchipuram Silk", "Saree Pleating"]
  },
  {
    id: "gal-real-client-4",
    title: "Emerald & Floral Braided Jadai Muhurtham (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Mayor Ramanathan Chettiar Hall (MRC), Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: client4Img,
    technique: "Floral Braided Hair Architecture + Emerald Nethi Chutti + HD Sweatproof Base",
    description: "Real client makeover by Karni featuring handcrafted pink veni floral braid, emerald antique headpiece, and long-wear HD skin finish for sacred mandapam rituals.",
    tags: ["Real Client Work", "Floral Jadai", "Emerald Jewelry", "Muhurtham Bride"]
  },
  {
    id: "gal-real-client-5",
    title: "Royal South Indian Temple Jewellery HD Glam (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "The Leela Palace Banquets, Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: client5Img,
    technique: "Ultra HD Base + Layered Gold Temple Necklaces + Crisp Eyeliner & Nath Setting",
    description: "Real client displaying grand traditional South Indian bridal beauty with multi-layered Lakshmi gold necklaces, nose pin setting, and camera-ready skin glow.",
    tags: ["Real Client Work", "Temple Gold", "HD Glam", "Bridal Look"]
  },
  {
    id: "gal-real-client-6",
    title: "Modern Bronze Sheer Saree & Wave Styling (Real Client)",
    clientName: "Real Karni Client",
    weddingVenue: "Taj Coromandel Banquets, Chennai",
    category: "Saree & Dhoti Draping",
    gender: "Women",
    image: client6Img,
    technique: "Contemporary Sheer Saree Pinning + Metallic Draping + Hollywood Wave Curls",
    description: "Real client styled in an elegant shimmering brown saree with modern waist pleating, paired with soft romantic hair waves for an evening sangeet.",
    tags: ["Real Client Work", "Sheer Saree", "Modern Draping", "Sangeet Glam"]
  },
  {
    id: "gal-real-client-7",
    title: "Smokey Shimmer Eye Artistry & Glass Skin (Real Client)",
    clientName: "Real Karni Client",
    weddingVenue: "ITC Grand Chola, Guindy, Chennai",
    category: "Reception",
    gender: "Women",
    image: client7Img,
    technique: "Shimmer Cut Crease + Sculpted Brow Contours + Glossy Lip Architecture",
    description: "High-definition close-up of Karni's signature reception makeup: seamless skin blending, subtle metallic eyeshadow, and sculpted features.",
    tags: ["Real Client Work", "Eye Artistry", "Glass Skin", "Reception Glam"]
  },
  {
    id: "gal-real-client-1",
    title: "Signature Emerald & Gold Muhurtham Makeover (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Grand Wedding Mandapam, Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: client1Img,
    technique: "Ultra HD Sweat-Proof Base + Emerald Diamond Jewelry Setting + Winged Kohl",
    description: "Real client makeover crafted by Karni featuring flawless radiant HD skin, winged eyeliner, nath nose chain attachment, and emerald diamond jewellery setting.",
    tags: ["Real Client Work", "Emerald Jewelry", "HD Skin", "Muhurtham Bride"]
  },
  {
    id: "gal-real-client-2",
    title: "Gold Kanchipuram Silk Saree & Royal Draping (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Royal Wedding Hall, Chennai",
    category: "Saree & Dhoti Draping",
    gender: "Women",
    image: client2Img,
    technique: "Silk Saree Box-Pleating + Crimson Velvet Blouse Styling + Oddiyanam Setting",
    description: "Real client showcasing Karni's signature saree box-pleating technique with a rich golden Kanchipuram silk saree, red velvet embroidered blouse, and traditional waist belt.",
    tags: ["Real Client Work", "Saree Pleating", "Kanchipuram Silk", "Oddiyanam"]
  },
  {
    id: "gal-real-client-3",
    title: "Royal Velvet Dupatta Veil & Bridal Hairdo (Real Client)",
    clientName: "Real Karni Bride",
    weddingVenue: "Leela Palace Banquets, Chennai",
    category: "Reception",
    gender: "Women",
    image: client3Img,
    technique: "Embellished Velvet Veil Fixing + Luminous Glow Base + Bridal Hairdo",
    description: "Real client featuring a crimson embroidered velvet dupatta veil, elegant side-profile finish, emerald jewellery setting, and romantic bridal hairdo.",
    tags: ["Real Client Work", "Velvet Veil", "Bridal Hairdo", "Reception Glam"]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    clientName: "Divya & Ashwin",
    weddingDate: "January 2026",
    venue: "Mayor Ramanathan Chettiar Hall, Chennai",
    rating: 5,
    lookType: "Muhurtham + Reception Couple Package",
    review: "Karni (@glamwithKarni_makeover) is a pure magician! Both Ashwin and I booked her for our MRC wedding. My Muhurtham HD makeup and traditional 9-yards Madisar draping were so comfortable and lasted all morning through the homam. Ashwin loved how natural his grooming looked on camera. 10/10 recommend Karni!",
    avatar: client1Img,
    weddingImage: client5Img
  },
  {
    id: "test-2",
    clientName: "Dr. Swathi & Siddharth",
    weddingDate: "November 2025",
    venue: "The Leela Palace, Chennai",
    rating: 5,
    lookType: "Airbrush Reception + Groom Makeover",
    review: "Booking Karni for my Leela Palace reception was the best decision! Her hairdo styling with Hollywood waves turned out so elegant, and her saree draping pleats were razor sharp. She also groomed Siddharth's hair and beard seamlessly. Her calm energy made the getting-ready process so joyous.",
    avatar: client7Img,
    weddingImage: client6Img
  },
  {
    id: "test-3",
    clientName: "Shruti Raghavan",
    weddingDate: "December 2025",
    venue: "Rani Meyyammai Hall, Egmore",
    rating: 5,
    lookType: "Traditional Madisar & Jadai Hairdo",
    review: "Karni's expertise in Madisar draping and traditional South Indian Jadai setting is second to none in Chennai. My grandmother and mother were so impressed by how neatly the saree was pleated. Her makeup didn't sweat off or oxidise even after 8 hours of intense wedding rituals.",
    avatar: client9Img,
    weddingImage: client11Img
  },
  {
    id: "test-4",
    clientName: "Karthik & Meenakshi",
    weddingDate: "February 2026",
    venue: "Green Meadows Resort, ECR Chennai",
    rating: 5,
    lookType: "Groom Grooming + Haldi Saree Draping",
    review: "As a groom, I was worried about looking powdery on stage, but Karni gave me such a clean, natural matte finish. She also draped my silk Dhoti with perfection. For Meenakshi, the floral braid and dewy makeup were gorgeous. Karni is truly versatile with both men and women!",
    avatar: client10Img,
    weddingImage: client8Img
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: client5Img,
    caption: "The grace of traditional Kanchipuram silk on our radiant bride at MRC Chennai ✨ Dewy HD skin & perfect pleat draping by @glamwithKarni_makeover #glamwithkarni_makeover #ChennaiBride #MuhurthamLook #SareeDraping",
    likes: 2180,
    comments: 114,
    date: "1 day ago",
    isVideo: false,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-2",
    imageUrl: client8Img,
    caption: "Heritage Gramophone Muhurtham Makeover! 👑 Camera-ready matte skin, golden saree pleats & antique jewelry setting. #glamwithKarni_makeover #HeritageBride #SareeDraping",
    likes: 1940,
    comments: 98,
    date: "3 days ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-3",
    imageUrl: client6Img,
    caption: "Reception glamour & Hollywood waves hairdo for Swathi at @theleelapalacechennai 💫 Rose-gold cut crease glam! #glamwithKarni_makeover #HairdoArtist #AirbrushMakeup",
    likes: 2840,
    comments: 156,
    date: "5 days ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-4",
    imageUrl: client11Img,
    caption: "Traditional Kanchipuram silk saree draping with fresh floral hair bun in natural sunlight 🌸 #glamwithKarni_makeover #SareeDraping #BridalHairdoChennai",
    likes: 3410,
    comments: 242,
    date: "1 week ago",
    isVideo: false,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-5",
    imageUrl: client4Img,
    caption: "Hair architecture breakdown: Antique temple Jadai with fresh floral layering. #glamwithKarni_makeover #BridalHairdo #JasmineVeni",
    likes: 2260,
    comments: 89,
    date: "2 weeks ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-6",
    imageUrl: client9Img,
    caption: "Radiant open hair waves & sequin saree glam! 🌼 Vibrant, sweat-proof makeover by @glamwithKarni_makeover #glamwithkarni_makeover #PartyGlam",
    likes: 1980,
    comments: 73,
    date: "3 weeks ago",
    isVideo: false,
    postUrl: "https://instagram.com"
  }
];

export const CHENNAI_AREAS = [
  "Anna Nagar",
  "T. Nagar",
  "Adyar",
  "Besant Nagar",
  "Mylapore",
  "ECR (East Coast Road)",
  "OMR (Old Mahabalipuram Road)",
  "Nungambakkam",
  "Alwarpet",
  "Velachery",
  "Kilpauk",
  "Egmore",
  "Kotturpuram",
  "Perungudi",
  "Mahabalipuram Beach Resorts",
  "Kanchipuram & Other Outstations"
];

export const FAQ_DATA = [
  {
    question: "What are Karni's bridal makeover packages and pricing?",
    answer: "Karni offers three signature bridal tiers: Silver Package at ₹12,000/- (Classic Elegance Bridal Look with HUDA/NARS & lashes/lenses), Gold Package at ₹14,000/- (UV Radiant Bridal Glow with UV Finish & NARS/Charlotte Tilbury), and Platinum Package at ₹16,000/- (Luxury Glass Skin Bridal Transformation with hydrating facial mask ritual & Charlotte Tilbury). All bridal packages include complimentary jewellery and flowers!"
  },
  {
    question: "Do you offer Groom (Men's) makeup and grooming?",
    answer: "Yes! Groom Makeup is available at ₹2,000/-. It features simple, elegant, and camera-ready grooming including anti-shine matte finish, skin tone evening, beard sculpting, hair styling, and silk dhoti / suit styling assistance."
  },
  {
    question: "Is jewellery and hair flowers included in the bridal packages?",
    answer: "Yes! Jewellery and flowers are COMPLIMENTARY with all bridal packages (Silver, Gold, and Platinum). Please note that advanced/designer jewellery models will be charged extra, and real/fresh flowers are charged based on type, quantity, and design."
  },
  {
    question: "What is the advance booking and payment policy?",
    answer: "An advance payment of ₹6,000/- (GPay: 8190030368 — Karnika B) is mandatory to block your date. The advance amount is non-refundable. Travelling charges are borne by the client. Balance payment must be settled immediately after the makeover via Cash or GPay."
  },
  {
    question: "Do you provide Saree Draping & Men's Dhoti styling separately?",
    answer: "Yes, standalone Professional Saree Draping & Dhoti Styling is available at ₹2,500/-, including Kanchipuram silk saree box pleating, 9-yards Madisar (Iyer & Iyengar), and Men's Pattu Veshti (Panchakacham/Dhoti) styling."
  }
];

export const HERO_SLIDER_DATA = [
  {
    id: "slide-real-client-8",
    serviceId: "silver-package",
    category: "Heritage Gramophone Bride",
    styleName: "Vintage Gramophone Heritage Muhurtham",
    client: "Real Karni Bride",
    venue: "Traditional Mandapam, Chennai",
    image: client8Img,
    headline: "Maroon Silk Saree, Vintage Gramophone & Golden Oddiyanam",
    technique: "Real Client Work • Heritage Studio Setup • HD Base",
    badge: "✨ Real Client Work",
    tags: ["Gramophone Heritage", "Maroon Silk", "Real Bride"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-9",
    serviceId: "hairdo-and-styling",
    category: "Beige Sequin & Long Hairdo",
    styleName: "Cascading Open Curls & Dewy Sequin Glam",
    client: "Real Karni Client",
    venue: "Grand Reception, Chennai",
    image: client9Img,
    headline: "Long Dark Cascading Curls & Sequin Saree Draping",
    technique: "Real Client Work • Hair Architecture • Soft Glam Base",
    badge: "✨ Real Client Work",
    tags: ["Long Curls", "Sequin Saree", "Party Glam"],
    palette: "from-stone-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-10",
    serviceId: "gold-package",
    category: "Kundan Jewellery & Eye Art",
    styleName: "Kundan Jewellery & Eye Artistry Detail",
    client: "Real Karni Bride",
    venue: "Luxury Hotel Banquets, Chennai",
    image: client10Img,
    headline: "High-Angle Kundan Necklaces, Red Embroidery & Eye Shimmer",
    technique: "Real Client Work • Kundan Fixing • Shimmer Eye Art",
    badge: "✨ Real Client Work",
    tags: ["Kundan Jewelry", "Eye Shimmer", "Bridal Close-Up"],
    palette: "from-rose-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-11",
    serviceId: "saree-dhoti-draping",
    category: "Outdoor Silk Saree Draping",
    styleName: "Outdoor Sunlit Kanchipuram Silk Saree Draping",
    client: "Real Karni Bride",
    venue: "Green Park Resort, Chennai",
    image: client11Img,
    headline: "Sunlit Green & Orange Silk Saree & Floral Red Hair Bun",
    technique: "Real Client Work • Saree Box-Pleating • Floral Bun",
    badge: "✨ Real Client Work",
    tags: ["Outdoor Garden", "Kanchipuram Silk", "Saree Pleating"],
    palette: "from-emerald-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-4",
    serviceId: "platinum-package",
    category: "Floral Braid & Jadai",
    styleName: "Emerald & Floral Braided Jadai Muhurtham",
    client: "Real Karni Bride",
    venue: "MRC Hall, Chennai",
    image: client4Img,
    headline: "Intricate Pink Floral Braid & Emerald Jewellery Setting",
    technique: "Real Client Work • Floral Hair Architecture • HD Base",
    badge: "✨ Real Client Work",
    tags: ["Floral Braid", "Emerald Setting", "Real Bride"],
    palette: "from-emerald-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-5",
    serviceId: "platinum-package",
    category: "Royal Temple Bride",
    styleName: "Grand Temple Gold Jewellery & HD Bridal Glam",
    client: "Real Karni Bride",
    venue: "Leela Palace, Chennai",
    image: client5Img,
    headline: "Radiant Smile, Layered Temple Gold & Flawless HD Skin",
    technique: "Real Client Work • Layered Gold Necklaces • Winged Kohl",
    badge: "✨ Real Client Work",
    tags: ["Temple Gold", "HD Glam", "Grand Muhurtham"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-6",
    serviceId: "saree-dhoti-draping",
    category: "Modern Sheer Draping",
    styleName: "Bronze Metallic Sheer Saree & Wave Styling",
    client: "Real Karni Client",
    venue: "Taj Coromandel, Chennai",
    image: client6Img,
    headline: "Chic Sheer Metallic Saree Draping & Bouncy Hair Waves",
    technique: "Real Client Work • Modern Saree Pleating • Party Hairdo",
    badge: "✨ Real Client Work",
    tags: ["Sheer Saree", "Party Draping", "Sangeet Glam"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-7",
    serviceId: "platinum-package",
    category: "Glass Skin & Eye Art",
    styleName: "Shimmer Cut-Crease & Glass Skin Close-Up",
    client: "Real Karni Client",
    venue: "ITC Grand Chola, Chennai",
    image: client7Img,
    headline: "Precision Eye Makeup, Sculpted Brows & Luminous Glow",
    technique: "Real Client Work • Shimmer Eyes • Glossy Lip Finish",
    badge: "✨ Real Client Work",
    tags: ["Shimmer Eyes", "Glass Skin", "Close-Up Glam"],
    palette: "from-rose-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-1",
    serviceId: "gold-package",
    category: "Real Bride Transformation",
    styleName: "Signature Emerald & Gold Muhurtham Makeover",
    client: "Real Karni Client",
    venue: "Wedding Mandapam, Chennai",
    image: client1Img,
    headline: "Radiant HD Skin, Emerald Elegance & Winged Kohl Artistry",
    technique: "Real Client Work • HD Sweatproof Base • Classic Nath & Jewelry Setting",
    badge: "✨ Real Client Work",
    tags: ["Real Client", "Emerald Jewelry", "HD Makeup"],
    palette: "from-emerald-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-2",
    serviceId: "saree-dhoti-draping",
    category: "Silk Saree Draping",
    styleName: "Golden Kanchipuram Saree & Oddiyanam Styling",
    client: "Real Karni Client",
    venue: "Royal Wedding Venue, Chennai",
    image: client2Img,
    headline: "Flawless Silk Saree Pleating & Layered Emerald Ornaments",
    technique: "Real Client Work • Velvet Embroidered Blouse • Crisp Box-Pleating",
    badge: "✨ Real Client Work",
    tags: ["Kanchipuram Silk", "Oddiyanam Setting", "Real Bride"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-real-client-3",
    serviceId: "platinum-package",
    category: "Bridal Veil & Hairdo",
    styleName: "Royal Velvet Dupatta & Bridal Hairdo Artistry",
    client: "Real Karni Client",
    venue: "Grand Reception, Chennai",
    image: client3Img,
    headline: "Graceful Bridal Veil Pinning & Radiant Shimmer Glow",
    technique: "Real Client Work • Embellished Veil Fixing • 16-Hour Glow Base",
    badge: "✨ Real Client Work",
    tags: ["Bridal Veil", "Royal Velvet", "Hair Architecture"],
    palette: "from-rose-950/80 via-black/40 to-transparent"
  }
];
