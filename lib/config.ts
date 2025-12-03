import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  // 1. Identity & Branding
  ryokanName: "Kyoto Garden Ryokan Yachiyo",
  verticalText: "京都 南禅寺 八千代",
  location: {
    sectionLabel: "LOCATION",
    headline: "A Sanctuary in Higashiyama",
    description: "Located steps from the historic Nanzen-ji Temple, Yachiyo offers a quiet retreat surrounded by Kyoto's most scenic heritage sites.",
    mapImage: "/images/map_bg.jpg",
    mapImageAlt: "Map showing the location of Kyoto Garden Ryokan Yachiyo near Nanzen-ji Temple in Higashiyama, Kyoto",
    pinPosition: {
      top: "45%",
      leftMobile: "50%",
      leftDesktop: "50%",
    },
  },

  // 2. Hero Section
  hero: {
    headline: "The Garden Sanctuary of Nanzen-ji.",
    subheadline: "Established 1915. A historic masterpiece where the legendary Shakkei garden becomes your private horizon.",
    ctaText: "Check Availability",
    // Hotlink to their current engine to minimize friction
    bookingUrl: "https://reserve.489ban.net/client/ryokan-yachiyo/4/plan",
  },

  // 3. Features (Bento Grid)
  features: [
    {
      title: "The Seiryu-tei Garden",
      description: "Designed by the legendary Jihei Ogawa. A living masterpiece that changes with the seasons, viewable directly from your tatami room.",
      imagePath: "/images/hero 1.jpg", 
    },
    {
      title: "Kyoto Kaiseki Cuisine",
      description: "Famous for our Yudofu (Hot Tofu) and seasonal kaiseki, served in the privacy of your room or overlooking the gardens.",
      imagePath: "/images/food 1.jpg",
    },
    {
      title: "Historic Architecture",
      description: "A Registered Tangible Cultural Property. Experience the silence and shadow of traditional Sukiya-zukuri design.",
      imagePath: "/images/room 1.jpg",
    },
  ],

  // 4. Contact / Footer
  contact: {
    address: "34 Nanzenji Fukuji-cho, Sakyo-ku, Kyoto 606-8435",
    phone: "+81-75-771-4148",
    email: "info@ryokan-yachiyo.com",
    instagram: "https://www.instagram.com/kyoto_yachiyo", 
  },
};
