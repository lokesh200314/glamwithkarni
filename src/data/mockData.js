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
    image: client5Img,
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
    image: client8Img,
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
    image: client10Img,
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
    image: client11Img,
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
    image: client9Img,
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
    image: client6Img,
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
    image: client7Img,
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
    image: client4Img,
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
    id: "slide-real-client-8",
    serviceId: "bridal-muhurtham",
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
    serviceId: "bridal-muhurtham",
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
    serviceId: "bridal-muhurtham",
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
    serviceId: "bridal-muhurtham",
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
    serviceId: "reception-glam-women",
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
  }
];
