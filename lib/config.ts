import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  // Identity
  name: "Kyoto Garden Ryokan Yachiyo",
  nameJapanese: "京都 南禅寺 八千代",
  tagline: "A historic masterpiece where the legendary Shakkei garden becomes your private horizon.",
  description: "Established 1915. Experience traditional Japanese hospitality in a Registered Tangible Cultural Property, surrounded by the legendary Seiryu-tei garden designed by Jihei Ogawa.",

  // Meta / SEO
  meta: {
    title: "Kyoto Garden Ryokan Yachiyo | Nanzen-ji Temple | Historic Ryokan",
    description: "Experience authentic Japanese hospitality at Kyoto Garden Ryokan Yachiyo. Established 1915, featuring legendary Shakkei gardens, traditional kaiseki cuisine, and historic architecture near Nanzen-ji Temple.",
  },

  // Visuals
  heroImage: "/images/Screenshot 2025-12-04 at 8.19.30 PM.png",
  heroImageAlt: "The legendary Seiryu-tei garden at Kyoto Garden Ryokan Yachiyo, a historic masterpiece near Nanzen-ji Temple",
  galleryImages: [
    "/images/hero 1.jpg",
    "/images/food 1.jpg",
    "/images/room 1.jpg",
  ],

  // Booking
  booking: {
    url: "https://reserve.489ban.net/client/ryokan-yachiyo/4/plan",
    buttonLabel: "Check Availability",
    buttonLabelMobile: "Book Now",
    priceText: "From ¥45,000 per night",
  },

  // Features / Three Pillars
  features: [
    {
      title: "The Seiryu-tei Garden",
      description: "Designed by Jihei Ogawa. A living masterpiece viewable directly from your room.",
      iconName: "Sparkles",
      image: "/images/Screenshot 2025-12-04 at 8.36.46 PM.png",
      imageAlt: "The Seiryu-tei garden at Kyoto Garden Ryokan Yachiyo, designed by legendary garden master Jihei Ogawa",
    },
    {
      title: "Kyoto Kaiseki Cuisine",
      description: "Famous for our Yudofu and seasonal Kaiseki, served in the privacy of your suite.",
      iconName: "Utensils",
      image: "/images/food 1.jpg",
      imageAlt: "Traditional Kyoto kaiseki cuisine featuring seasonal ingredients and Yudofu, served at Ryokan Yachiyo",
    },
    {
      title: "Historic Architecture",
      description: "A Registered Cultural Property featuring traditional Sukiya-zukuri design.",
      iconName: "BedDouble",
      image: "/images/archi.jpg",
      imageAlt: "Traditional tatami room with Sukiya-zukuri architecture at Kyoto Garden Ryokan Yachiyo",
    },
    {
      title: "Tatami Rooms",
      description: "Relax on woven straw mats in suites that frame the garden like a painting.",
      iconName: "Shield",
      image: "/images/room 1.jpg",
      imageAlt: "Traditional tatami room with tatami mats and garden view at Kyoto Garden Ryokan Yachiyo",
    },
  ],

  // Mobile-specific features
  featuresMobile: [
    {
      title: "The Seiryu-tei Garden",
      description: "Designed by Jihei Ogawa. A living masterpiece viewable directly from your room.",
      iconName: "Sparkles",
      image: "/images/Screenshot 2025-12-04 at 8.36.46 PM.png",
      imageAlt: "The Seiryu-tei garden at Kyoto Garden Ryokan Yachiyo, designed by legendary garden master Jihei Ogawa",
    },
    {
      title: "Kyoto Kaiseki Cuisine",
      description: "Famous for our Yudofu and seasonal Kaiseki, served in the privacy of your suite.",
      iconName: "Utensils",
      image: "/images/food 1.jpg",
      imageAlt: "Traditional Kyoto kaiseki cuisine featuring seasonal ingredients and Yudofu, served at Ryokan Yachiyo",
    },
    {
      title: "Historic Architecture",
      description: "A Registered Cultural Property featuring traditional Sukiya-zukuri design.",
      iconName: "BedDouble",
      image: "/images/archi.jpg",
      imageAlt: "Traditional tatami room with Sukiya-zukuri architecture at Kyoto Garden Ryokan Yachiyo",
    },
    {
      title: "Tatami Rooms",
      description: "Relax on woven straw mats in suites that frame the garden like a painting.",
      iconName: "Shield",
      image: "/images/room 1.jpg",
      imageAlt: "Traditional tatami room with tatami mats and garden view at Kyoto Garden Ryokan Yachiyo",
    },
  ],

  // Incentives / Trust Bar
  incentives: [
    "Free WiFi",
    "Traditional Onsen",
    "Kaiseki Dining",
    "Garden Views",
  ],

  // Testimonials
  testimonials: [
    {
      quote: "An unforgettable experience. The garden views from our room were breathtaking, and the kaiseki dinner was exceptional.",
      author: "Sarah M., Tokyo",
    },
    {
      quote: "The perfect blend of history and comfort. Waking up to the Seiryu-tei garden was like stepping into a painting.",
      author: "James L., London",
    },
    {
      quote: "Authentic Japanese hospitality at its finest. The attention to detail and serene atmosphere made our stay truly special.",
      author: "Maria K., New York",
    },
  ],

  testimonialsMobile: [
    {
      quote: "An unforgettable experience. The garden views from our room were breathtaking, and the kaiseki dinner was exceptional.",
      author: "Sarah M., Tokyo",
    },
    {
      quote: "The perfect blend of history and comfort. Waking up to the Seiryu-tei garden was like stepping into a painting.",
      author: "James L., London",
    },
  ],

  // Contact
  contact: {
    address: {
      line1: "34 Nanzenji Fukuji-cho, Sakyo-ku",
      line2: "Kyoto 606-8435, Japan",
    },
    email: "info@ryokan-yachiyo.com",
    phone: "+81-75-771-4148",
    mapsUrl: "https://maps.google.com/?q=34+Nanzenji+Fukuji-cho,+Sakyo-ku,+Kyoto+606-8435",
  },

  // Content Sections
  hero: {
    establishment: "The Garden Sanctuary of Nanzen-ji",
    headline: "The Garden Sanctuary of Nanzen-ji",
    tagline: "Established 1915. A historic masterpiece where the legendary Shakkei garden becomes your private horizon.",
    ctaLabel: "Check Availability",
  },

  intro: {
    sectionLabel: "WELCOME",
    headline: "A Legacy of",
    headlineAccent: "Timeless Elegance",
    description: "For over a century, Kyoto Garden Ryokan Yachiyo has welcomed guests to experience the essence of traditional Japanese hospitality. Nestled beside the historic Nanzen-ji Temple, our ryokan offers a rare opportunity to stay within a Registered Tangible Cultural Property, where every detail honors the craftsmanship and philosophy of Sukiya-zukuri architecture.",
    image: "/images/hero 1.jpg",
    imageAlt: "Traditional Japanese architecture and garden at Kyoto Garden Ryokan Yachiyo",
  },

  pillars: {
    sectionLabel: "EXPERIENCE",
    headline: "The Three Pillars of Yachiyo",
  },

  reflections: {
    sectionLabel: "GUEST REFLECTIONS",
    headline: "Stories from Our Visitors",
  },

  location: {
    sectionLabel: "LOCATION",
    headline: "A Sanctuary in Higashiyama",
    mapImage: "/images/map_bg.jpg",
    mapImageAlt: "Map showing the location of Kyoto Garden Ryokan Yachiyo near Nanzen-ji Temple in Higashiyama, Kyoto",
    description: "Located steps from the historic Nanzen-ji Temple, Yachiyo offers a quiet retreat surrounded by Kyoto's most scenic heritage sites.",
    pinPosition: {
      top: "45%",
      leftMobile: "50%",
      leftDesktop: "50%",
    },
  },

  footerCta: {
    sectionLabel: "RESERVE YOUR STAY",
    headline: "Begin Your Journey",
    ctaLabel: "Check Availability",
  },

  // Business Logic
  vertical: "ryokan",

  // Copyright
  copyright: "© 2024 Kyoto Garden Ryokan Yachiyo. All rights reserved.",
};
