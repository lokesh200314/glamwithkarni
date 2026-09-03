import client1Img from '../assets/clients/karni-client-1.jpg';
import client2Img from '../assets/clients/karni-client-2.jpg';
import client3Img from '../assets/clients/karni-client-3.jpg';

export const ARTIST_INFO = {
  name: "Karni",
  brandName: "glamwithKarni_makeover",
  displayTagline: "Bridal, Groom Makeovers, Saree Draping & Hairdo Artistry (Doorstep Travel Anywhere)",
  experienceYears: 9,
  makeoversCount: 850,
  googleRating: 4.9,
  reviewsCount: 310,
  phone: "+91 81223 03766",
  whatsappNumber: "918122303766",
  email: "glamwithkarni@gmail.com",
  instagramHandle: "@glamwithKarni_makeover",
  studioAddress: "No 18, Somasundaram Avenue, Sakthi Nagar, Porur, Chennai, Tamil Nadu",
  workingHours: "Monday - Sunday: 5:00 AM - 9:30 PM (IST)",
  serviceAreas: [
    "Doorstep & Venue Travel Anywhere (Home, Mandapam & Resorts)",
    "Chennai, All Over Tamil Nadu & South India",
    "Destination Weddings & Outstations Worldwide"
  ]
};

export const SERVICES_DATA = [
  {
    id: "bridal-muhurtham",
    title: "Bridal South Indian Muhurtham Makeover",
    category: "Bridal (Women)",
    targetAudience: "Women",
    tagline: "Flawless waterproof HD skin, traditional winged kohl, authentic jewellery setting & Madisar/Silk Saree draping",
    priceDisplay: "₹22,000",
    duration: "3.5 - 4 Hours",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    features: [
      "Ultra HD Sweat-Proof Foundation for high-humidity & sacred homam fires",
      "Traditional Winged Eyeliner & Smudgeproof Kohl Detailing",
      "Traditional South Indian Braided Jadai or Classic Floral Ringlet Bun",
      "Fresh Madurai Jasmine (Malli) / Veni & Floral Architecture Attachment",
      "Silk Saree Draping / 9-Yards Madisar (Iyer & Iyengar) Box-Pleating",
      "Complete Temple Jewellery, Nethi Chutti, Matha Patti & Surya/Chandra Setting",
      "Luxury Mini Touch-Up Kit (Lip shade vial, Blotting Film, Extra Pins)"
    ],
    recommendedFor: "Morning Muhurtham, Traditional Tamil, Telugu, Kannada & Brahmin weddings",
    productsUsed: ["Charlotte Tilbury Flawless Filter", "MAC Studio Fix", "Huda Beauty HD Powder", "NARS Radiant Creamy", "Urban Decay All Nighter"]
  },
  {
    id: "groom-hd-makeover",
    title: "Groom Royal HD Grooming & Styling",
    category: "Groom (Men)",
    targetAudience: "Men",
    tagline: "Natural HD camera-ready grooming, beard sculpting, structured hair styling & Dhoti/Sherwani draping",
    priceDisplay: "₹10,500",
    duration: "1.5 - 2 Hours",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    features: [
      "Natural HD Skin Prep & Mattifying Base (Zero cakey look, perfectly skin-matched)",
      "Dark circle correction, blemish concealing & high-definition camera tone-evening",
      "Beard trimming, crisp edge definition, beard balm & conditioning",
      "Groom Hairstyling (Textured Pompadour, Classic Side-Part, Matte volume hold)",
      "Traditional Silk Dhoti (Pattu Veshti & Angavastram) / Sherwani & Kurta Draping",
      "Turban / Safa / Pattu Shawl fixing & Brooch alignment",
      "Sweat-resistant matte fixing spray for long stage reception photo sessions"
    ],
    recommendedFor: "Grooms for Muhurtham, Reception, Engagement, Sangeet & Pre-wedding shoots",
    productsUsed: ["Tom Ford For Men", "MAC Prep+Prime", "Kryolan Mattifying Gel", "Schwarzkopf Osis+", "Fenty Beauty Invisimatte"]
  },
  {
    id: "couple-muhurtham-reception",
    title: "Couple Signature Muhurtham & Reception Package",
    category: "Couple Combos",
    targetAudience: "Both / Couples",
    tagline: "Complete coordinated beauty and styling for both Bride & Groom across wedding rituals",
    priceDisplay: "₹48,000",
    duration: "Full Day Care",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    features: [
      "Both Morning Muhurtham & Evening Reception complete makeovers for Bride",
      "Complete Muhurtham & Reception grooming and styling for Groom",
      "Pre-wedding in-studio skin consultation & look-matching trial session for couple",
      "2 Distinct Hairstyles for Bride (Traditional Braid with Jadai + Reception Waves/Bun)",
      "Multiple Saree & Lehenga Drapings for Bride + Dhoti & Suit styling for Groom",
      "Complimentary makeover for Mother of Bride or Groom (1 Person)",
      "Dedicated Assistant on-site for instant stage photo touch-ups"
    ],
    recommendedFor: "Couples wanting seamless, stress-free coordinated styling from dawn to midnight",
    productsUsed: ["Dior Backstage", "Charlotte Tilbury", "MAC Pro Longwear", "NARS", "Tom Ford"]
  },
  {
    id: "saree-dhoti-draping",
    title: "Professional Saree Draping & Dhoti Styling",
    category: "Draping & Saree",
    targetAudience: "Both / Couples",
    tagline: "Master-level pleating, 9-yards Madisar, Lehenga & Dhoti draping for men and women",
    priceDisplay: "₹2,500 - ₹5,500",
    duration: "45 Mins - 1 Hour",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop",
    features: [
      "Traditional Kanchipuram Silk Saree crisp Box Pleating & Ironing",
      "Authentic 9-Yards Madisar Draping (Both Iyer & Iyengar styles with utmost comfort)",
      "Modern Bollywood, Mermaid, Gujarati & Indo-Western Saree draping styles",
      "Lehenga Dupatta styling, double-dupatta pin-up & can-can silhouette setting",
      "Men's Traditional Pattu Veshti (Panchakacham / 8-yards Dhoti) draping",
      "Angavastram, Royal Stole & Sherwani Dupatta draping for grooms",
      "Micro-pinning technique ensuring zero slipping during walking or dancing"
    ],
    recommendedFor: "Brides, Grooms, Mothers, Sisters & wedding guests seeking flawless traditional draping",
    productsUsed: ["Steam Ironing", "Anti-tear Fabric Safety Fasteners", "Zero-Damage Hidden Pins"]
  },
  {
    id: "hairdo-and-styling",
    title: "Bridal & Party Hairdo Artistry",
    category: "Hairdo & Styling",
    targetAudience: "Both / Couples",
    tagline: "Intricate jasmine Jadai, contemporary textured buns, Hollywood glam waves & Men's styling",
    priceDisplay: "₹4,500 - ₹8,500",
    duration: "1 - 1.5 Hours",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    features: [
      "Traditional South Indian Braided Jadai with antique billai & fresh poola jada",
      "Fresh Madurai Malli (Jasmine), Rose petals, Baby's Breath & Orchids weaving",
      "Modern Textured Low Buns, Donut Buns & Messy French Chignons",
      "Bouncy Hollywood Waves & Half-Up Waterfall Braids with hair extensions",
      "Men's Hair texturizing, volume blow-dry, pomade hold & gray blending",
      "Hair prep with heat protectant, anti-frizz humidity shield & 18-hour hold spray"
    ],
    recommendedFor: "Brides, Bridesmaids, Grooms & party guests looking for bespoke hair architecture",
    productsUsed: ["Dyson Supersonic", "Osis+ Schwarzkopf", "Bed Head TIGI", "L'Oreal Professionnel", "Moroccanoil"]
  },
  {
    id: "reception-glam-women",
    title: "Grand Evening Reception & Cocktail Glam",
    category: "Bridal (Women)",
    targetAudience: "Women",
    tagline: "Luminous glass skin with sculpted contours and statement shimmer eye art",
    priceDisplay: "₹24,000",
    duration: "3 - 3.5 Hours",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    features: [
      "Airbrush / Micro-Mist HD Base for 16-hour photo-ready glow",
      "Cut-Crease Champagne / Rose Gold Shimmer Eye Glam",
      "Hollywood Waves, Textured Half-Updo, or Modern Textured Bun",
      "Custom Silk Eyelash Clusters & Lens Fitting",
      "Lehenga / Evening Gown Draping & Dupatta Pinning",
      "Collarbone & Décolletage Body Shimmer Contouring",
      "Deluxe Touch-up Kit with custom lip color vial"
    ],
    recommendedFor: "Evening Reception, Sangeet Cocktail, Grand Ballrooms & Hotel Banquets",
    productsUsed: ["Dior Backstage", "Charlotte Tilbury Pillow Talk", "Tarte Shape Tape", "Anastasia Beverly Hills", "Fenty Beauty"]
  },
  {
    id: "engagement-haldi",
    title: "Engagement, Haldi & Sangeet (Men & Women)",
    category: "Pre-Wedding & Party",
    targetAudience: "Both / Couples",
    tagline: "Dewy sun-kissed glow, breezy boho braids, floral adornments and vibrant groom styling",
    priceDisplay: "₹16,000",
    duration: "2.5 - 3 Hours",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    features: [
      "Water-resistant dewy glow makeup that survives turmeric & tears of joy",
      "Soft Glam Smokey or Peachy Monochrome look for Bride",
      "Natural beard & skin grooming for Groom",
      "Floral Jewelry Setting & Botanical Hair Artistry",
      "Half-Saree / Anarkali / Kurta Draping and Styling",
      "Custom Eyelash Enhancement & Hair Styling"
    ],
    recommendedFor: "Engagement ceremonies, Haldi mornings, Mehendi parties, Pre-wedding shoots",
    productsUsed: ["Rare Beauty Liquid Blush", "NARS Sheer Glow", "Benefit Cosmetics", "Too Faced Born This Way"]
  },
  {
    id: "family-party-entourage",
    title: "Family Entourage & Bridesmaids/Groomsmen Glam",
    category: "Pre-Wedding & Party",
    targetAudience: "Both / Couples",
    tagline: "Refined, camera-ready elegance for mothers, sisters, fathers, and wedding party members",
    priceDisplay: "₹6,000 / person",
    duration: "1.5 Hours / person",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    features: [
      "HD Base matching skin undertone perfectly (Zero ashy or white-cast)",
      "Soft Glam Eyes & Long-Wear Lip Application for Women",
      "Clean skin tone correction & beard/hair styling for Men",
      "Hairstyling (Classic Bun, Blowout Curls, or Braids)",
      "Saree Draping / Dhoti / Kurta Pleating & Pinning",
      "Bindi & Fresh Flower Placement"
    ],
    recommendedFor: "Mother of Bride/Groom, Sister of Bride, Bridesmaids, Groomsmen, Wedding Guests",
    productsUsed: ["MAC Studio Sculpt", "Kryolan HD", "Maybelline Superstay", "L'Oreal Paris Pro"]
  }
];

export const GALLERY_DATA = [
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
  },
  {
    id: "gal-1",
    title: "Royal Crimson & Gold Muhurtham Makeover",
    clientName: "Divya Krishnan",
    weddingVenue: "Mayor Ramanathan Chettiar Hall (MRC), Chennai",
    category: "Muhurtham",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop",
    technique: "Ultra HD Sweat-Proof Base + Smudgeproof Winged Kohl + Saree Draping",
    description: "Divya wore an heirloom Kanchipuram silk saree with antique Lakshmi temple jewellery. Karni crafted a radiant brow arch, sweat-proof HD skin, and authentic Madisar pleating that survived 6 hours of sacred homam rituals.",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    tags: ["Kanchipuram Silk", "Temple Jewelry", "HD Makeup", "Traditional Braid"]
  },
  {
    id: "gal-groom-1",
    title: "Royal Groom Muhurtham & Dhoti Styling",
    clientName: "Karthik Subramanian",
    weddingVenue: "Mayor Ramanathan Chettiar Hall (MRC), Chennai",
    category: "Groom & Men",
    gender: "Men",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop",
    technique: "High Definition Skin Evening + Precision Beard Edge + Pattu Veshti Draping",
    description: "Karthik wanted a subtle, non-cakey finish for high-definition wedding videography. Karni groomed his beard with clean contours, balanced under-eye tone, styled his hair with matte volume, and draped his silk Panchakacham veshti with knife-edge pleats.",
    tags: ["Groom HD", "Beard Sculpting", "Pattu Veshti", "South Indian Groom"]
  },
  {
    id: "gal-2",
    title: "Champagne Shimmer Grand Reception",
    clientName: "Swathi Sundar",
    weddingVenue: "The Leela Palace, Chennai",
    category: "Reception",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=900&auto=format&fit=crop",
    technique: "Airbrush Glow + Rose-Gold Cut Crease Glam + Hollywood Waves",
    description: "For Swathi's sea-facing reception at Leela Palace, Karni curated a glass-skin airbrush look with subtle champagne micro-glitter and loose romantic Hollywood waves.",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    tags: ["Airbrush Base", "Modern Waves", "Cocktail Glam", "Glass Skin"]
  },
  {
    id: "gal-draping-1",
    title: "Authentic 9-Yards Madisar Saree Draping",
    clientName: "Shruti Raghavan",
    weddingVenue: "Rani Meyyammai Hall, Egmore, Chennai",
    category: "Saree & Dhoti Draping",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=900&auto=format&fit=crop",
    technique: "Iyer Madisar Box-Pleating + Zero-Slip Pinning",
    description: "Flawless traditional 9-yards Madisar draping with structured pleats that stayed 100% secure through seated mantras, homam rounds, and Oonjal swings.",
    tags: ["Madisar Draping", "9-Yards Saree", "Iyer Wedding", "Box Pleats"]
  },
  {
    id: "gal-hair-1",
    title: "Heirloom Jadai & Fresh Jasmine Hair Architecture",
    clientName: "Harini Balaji",
    weddingVenue: "Sri Shankara Hall, T. Nagar, Chennai",
    category: "Hair & Hairdo",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    technique: "Intricate Madurai Malli Veni + Antique Billaijadai",
    description: "Traditional South Indian hair architecture integrating genuine antique gold Jadai ornaments with three tiers of fragrant fresh Madurai malli and rose veni.",
    tags: ["Bridal Hairdo", "Jasmine Veni", "Antique Jadai", "Hair Architecture"]
  },
  {
    id: "gal-groom-2",
    title: "Contemporary Groom Tuxedo & Sangeet Styling",
    clientName: "Aditya Mohan",
    weddingVenue: "Taj Coromandel, Chennai",
    category: "Groom & Men",
    gender: "Men",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
    technique: "Sweat-Proof Mattifying Skin Base + Modern Pompadour Styling",
    description: "Sleek and polished grooming for Aditya's reception cocktail. Mattified T-zone, styled pompadour with 12-hour humidity hold, and custom pocket square/lapel pinning.",
    tags: ["Groom Hairdo", "Reception Groom", "Matte Grooming", "Men's Styling"]
  },
  {
    id: "gal-3",
    title: "Sunlit Haldi Radiant Glow (Couple)",
    clientName: "Meenakshi & Rahul",
    weddingVenue: "Green Meadows Resort, ECR Chennai",
    category: "Engagement & Haldi",
    gender: "Couple",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    technique: "Dewy Tint + Coral Monochrome Blush + Groom Skin Care",
    description: "Fresh, luminous base accented with floral headpieces for Meenakshi and natural tone-evening for Rahul under open-air lawn sunlight.",
    tags: ["Haldi Glow", "Boho Flowers", "Couple Look", "Outdoor Lawn"]
  },
  {
    id: "gal-4",
    title: "Pastel Lavender Sangeet Makeover & Textured Braid",
    clientName: "Aishwarya Varma",
    weddingVenue: "Taj Coromandel, Nungambakkam, Chennai",
    category: "Hair & Hairdo",
    gender: "Women",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
    technique: "Smokey Mauve Eyes + Pull-Through Floral Braid",
    description: "A contemporary party look featuring soft smokey lavender tones and an expansive French pull-through braid interwoven with baby's breath blossoms.",
    tags: ["Sangeet Glam", "Textured Braid", "Hairdo", "Glossy Lips"]
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
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    weddingImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "test-2",
    clientName: "Dr. Swathi & Siddharth",
    weddingDate: "November 2025",
    venue: "The Leela Palace, Chennai",
    rating: 5,
    lookType: "Airbrush Reception + Groom Makeover",
    review: "Booking Karni for my Leela Palace reception was the best decision! Her hairdo styling with Hollywood waves turned out so elegant, and her saree draping pleats were razor sharp. She also groomed Siddharth's hair and beard seamlessly. Her calm energy made the getting-ready process so joyous.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    weddingImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "test-3",
    clientName: "Shruti Raghavan",
    weddingDate: "December 2025",
    venue: "Rani Meyyammai Hall, Egmore",
    rating: 5,
    lookType: "Traditional Madisar & Jadai Hairdo",
    review: "Karni's expertise in Madisar draping and traditional South Indian Jadai setting is second to none in Chennai. My grandmother and mother were so impressed by how neatly the saree was pleated. Her makeup didn't sweat off or oxidise even after 8 hours of intense wedding rituals.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    weddingImage: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "test-4",
    clientName: "Karthik & Meenakshi",
    weddingDate: "February 2026",
    venue: "Green Meadows Resort, ECR Chennai",
    rating: 5,
    lookType: "Groom Grooming + Haldi Saree Draping",
    review: "As a groom, I was worried about looking powdery on stage, but Karni gave me such a clean, natural matte finish. She also draped my silk Dhoti with perfection. For Meenakshi, the floral braid and dewy makeup were gorgeous. Karni is truly versatile with both men and women!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    weddingImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400&auto=format&fit=crop"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    caption: "The grace of traditional Kanchipuram silk on our radiant bride Divya at MRC Chennai ✨ Dewy HD skin & perfect pleat draping by @glamwithKarni_makeover #glamwithkarni_makeover #ChennaiBride #MuhurthamLook #SareeDraping",
    likes: 2180,
    comments: 114,
    date: "1 day ago",
    isVideo: false,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    caption: "Groom Makeover & Pattu Dhoti styling for Karthik! 🤵 Camera-ready matte skin & crisp beard contours. #glamwithKarni_makeover #GroomMakeover #MenGroomingChennai #DhotiStyling",
    likes: 1940,
    comments: 98,
    date: "3 days ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    caption: "Reception glamour & Hollywood waves hairdo for Swathi at @theleelapalacechennai 💫 Rose-gold cut crease glam! #glamwithKarni_makeover #HairdoArtist #AirbrushMakeup",
    likes: 2840,
    comments: 156,
    date: "5 days ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop",
    caption: "Traditional 9-yards Madisar draping with fresh Madurai mallipoo 🌸 Seamless box pleats that stay secure all day. #glamwithKarni_makeover #MadisarDraping #BridalHairdoChennai",
    likes: 3410,
    comments: 242,
    date: "1 week ago",
    isVideo: false,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-5",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    caption: "Hair architecture breakdown: Antique temple Jadai with fresh floral layering. #glamwithKarni_makeover #BridalHairdo #JasmineVeni",
    likes: 2260,
    comments: 89,
    date: "2 weeks ago",
    isVideo: true,
    postUrl: "https://instagram.com"
  },
  {
    id: "ig-6",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
    caption: "Couple goals at ECR lawn Haldi! 🌼 Vibrant, sweat-proof makeover for both bride & groom. #glamwithKarni_makeover #CoupleMakeover #HaldiGlow",
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
    question: "What services does Karni (@glamwithKarni_makeover) provide?",
    answer: "Karni provides end-to-end luxury beauty and styling services for BOTH men and women. This includes South Indian Bridal Muhurtham & Reception HD/Airbrush makeup, Groom HD Makeovers & beard grooming, Traditional Saree Draping (including 9-yards Madisar), Groom Dhoti & Pattu Veshti draping, and customized Hairdo & Hair Architecture (Bridal Jadai, fresh jasmine flowers, modern textured updos, Hollywood waves, and men's hair styling)."
  },
  {
    question: "Do you do makeovers and styling for both Men and Women?",
    answer: "Yes! Karni specializes in both Bridal (Women) and Groom (Men) makeovers, as well as couple combo packages and complete wedding family party entourage (bridesmaids, groomsmen, mothers, and fathers)."
  },
  {
    question: "Do you provide Saree Draping & 9-Yards Madisar / Men's Dhoti styling separately?",
    answer: "Yes, we offer specialized standalone and add-on Draping services for Kanchipuram silk sarees, Iyer & Iyengar 9-yards Madisar, Lehengas, and Men's Traditional Silk Pattu Veshti (Dhoti) / Angavastram with pre-box-pleating and iron finish."
  },
  {
    question: "Do you travel to marriage halls, resorts, and home venues anywhere?",
    answer: "Yes! Wherever you are located, Karni & team travel directly to your wedding mandapam, banquet hall, hotel resort, or home residence. We bring professional high-lumen studio ring lights, complete bridal/groom makeup kits, and specialized saree/dhoti steaming and pleating gear."
  },
  {
    question: "How far in advance should we book for our wedding muhurtham?",
    answer: "Because auspicious Tamil Muhurtham dates fill up very quickly, we recommend booking 4 to 8 months in advance. Couple packages and prime morning muhurtham slots get reserved first."
  }
];

export const HERO_SLIDER_DATA = [
  {
    id: "slide-real-client-1",
    serviceId: "bridal-muhurtham",
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
    serviceId: "reception-glam-women",
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
  },
  {
    id: "slide-muhurtham",
    serviceId: "bridal-muhurtham",
    category: "Muhurtham Bride",
    styleName: "Traditional South Indian Muhurtham Bride",
    client: "Divya Krishnan",
    venue: "MRC Hall, Chennai",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    headline: "Temple Gold, Kanchipuram Silk & Flawless HD Skin",
    technique: "16-Hour Sweatproof HD Base • Winged Kohl • Saree Box-Pleating",
    badge: "Most Requested in Chennai",
    tags: ["Sweatproof HD", "Temple Gold", "Silk Draping"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-reception",
    serviceId: "reception-glam-women",
    category: "Reception Glam",
    styleName: "Grand Evening Reception & Glass Skin",
    client: "Swathi Sundar",
    venue: "The Leela Palace, Chennai",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
    headline: "Airbrush Radiance & Hollywood Glam Waves",
    technique: "Rose-Gold Shimmer Eyes • Sculpted Contours • Silk Lashes",
    badge: "Luxury Evening Look",
    tags: ["Airbrush Glow", "Hollywood Waves", "Glass Skin"],
    palette: "from-stone-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-groom",
    serviceId: "groom-hd-makeover",
    category: "Groom Styling",
    styleName: "Royal Groom HD Grooming & Dhoti Draping",
    client: "Karthik Subramanian",
    venue: "Mayor Ramanathan Chettiar Hall, Chennai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    headline: "Camera-Ready Matte Finish & Beard Sculpting",
    technique: "Anti-Shine Base • Textured Hair Volume • Pattu Veshti Draping",
    badge: "Men's HD Artistry",
    tags: ["Groom HD", "Beard Contours", "Pattu Veshti"],
    palette: "from-zinc-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-madisar",
    serviceId: "saree-dhoti-draping",
    category: "Madisar Draping",
    styleName: "Authentic 9-Yards Madisar Draping (Iyer & Iyengar)",
    client: "Shruti Raghavan",
    venue: "Rani Meyyammai Hall, Egmore",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop",
    headline: "Razor-Sharp Box Pleats & Homam-Safe Pinning",
    technique: "Zero-Slip Pinning • 9-Yards Koorai Saree • All-Day Comfort",
    badge: "Traditional Heritage",
    tags: ["9-Yards Madisar", "Box Pleating", "Zero Slip"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-hairdo",
    serviceId: "hairdo-and-styling",
    category: "Bridal Hairdo",
    styleName: "Antique Jadai & Fresh Madurai Jasmine Architecture",
    client: "Harini Balaji",
    venue: "Sri Shankara Hall, T. Nagar",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    headline: "Poola Jada, Fragrant Malli Veni & Braid Artistry",
    technique: "Gold Billai Alignment • Fresh Jasmine Layers • Humidity Shield",
    badge: "Signature Hair Architecture",
    tags: ["Jasmine Veni", "Antique Billai", "Braided Jadai"],
    palette: "from-stone-950/80 via-black/40 to-transparent"
  },
  {
    id: "slide-haldi",
    serviceId: "engagement-haldi",
    category: "Haldi & Sangeet",
    styleName: "Sun-Kissed Haldi Radiant Glow (Bride & Groom)",
    client: "Meenakshi & Rahul",
    venue: "Green Meadows Resort, ECR Chennai",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
    headline: "Vibrant Turmeric-Resistant Tint & Floral Styling",
    technique: "Dewy Skin Prep • Floral Jewelry Fitting • Breezy Boho Braid",
    badge: "Outdoor & Resort Weddings",
    tags: ["Haldi Glow", "Boho Flowers", "Water Resistant"],
    palette: "from-amber-950/80 via-black/40 to-transparent"
  }
];

