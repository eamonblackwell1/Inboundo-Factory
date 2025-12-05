import { RyokanConfig } from "@/lib/types";

export const config: RyokanConfig = {
  ryokanName: "Ryokan Shimizu",
  domain: "kyoto-shimizu.net",
  bookingUrl: "https://www.booking.com/hotel/jp/ryokan-shimizu.html",

  meta: {
    title: "Ryokan Shimizu | The Authentic Standard",
    description: "A family-run ryokan in the heart of Shimogyo. Traditional hospitality, transparent value.",
    ogImage: "/images/shimizu hero.jpg",
  },

  hero: {
    title: "Kyoto, Unrushed",
    subtitle: "A traditional sanctuary, just 7 minutes from the center of the modern city.",
    cta: "Book the Quiet",
    backgroundImage: "/images/shimizu hero.jpg",
  },

  intro: {
    heading: "The Real Deal.",
    body: "While others chase luxury trends, Ryokan Shimizu remains grounded. We offer the classic Kyoto experience—Tatami floors, Futon bedding, and deep soaking tubs—at a price that respects your journey.",
    image: "/images/shimizu room.jpg",
  },

  features: [
    {
      title: "Private Onsen",
      description: "Reservable family baths for total privacy.",
      image: "/images/Shimizu Onsen.jpg",
    },
    {
      title: "Seasonal Cuisine",
      description: "Seasonal home-cooked morning meals.",
      image: "/images/shimizu food.jpg",
    },
    {
      title: "Tatami Living",
      description: "Authentic reed flooring and futons.",
      image: "/images/shimizu room.jpg",
    },
  ],

  reviews: {
    title: "Verified Guest Voices",
    items: [
      {
        quote:
          "Quiet, spotless, and genuinely welcoming. The private bath slots were the highlight after a long day in Kyoto.",
        author: "Elena R.",
        title: "Architect & frequent Kyoto visitor",
        source: "Booking.com",
      },
      {
        quote:
          "Feels like staying with attentive friends rather than a hotel. Traditional rooms, great location, and clear guidance in English.",
        author: "James T.",
        title: "Singapore",
        source: "Google Reviews",
      },
      {
        quote:
          "Fair rates, honest hospitality. The team kept luggage, arranged taxis, and the futons were surprisingly plush.",
        author: "Mariko S.",
        title: "Tokyo",
        source: "Direct Guest",
      },
    ],
  },

  pricing: {
    title: "Rates",
    note: "All prices include tax. Payment via Cash or Credit Card.",
    items: [
      { label: "Standard Room (Low Season)", value: "¥5,000 / night", detail: "Dec - Feb" },
      { label: "Standard Room (High Season)", value: "¥6,000 / night", detail: "Mar - Nov" },
      { label: "Traditional Breakfast", value: "¥1,000", detail: "Per person, reservation required" },
      { label: "Bicycle Rental", value: "¥700 / day", detail: "Explore the city freely" },
      { label: "Parking", value: "¥1,000 / night", detail: "Reservation required" },
    ],
  },

  location: {
    address: "644 Kagiyacho, Shimogyo-ku, Kyoto",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.412356894264!2d135.7562143763076!3d34.9963059728163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108906917633f%3A0x6b165681611737a4!2sRyokan%20Shimizu!5e0!3m2!1sen!2sjp!4v1709605000000!5m2!1sen!2sjp",
    image: "/images/shimizu food.jpg",
  },

  footer: {
    copyright: "© 2025 Ryokan Shimizu",
    contactEmail: "info@kyoto-shimizu.net",
    phoneNumber: "+81-75-371-5538",
  },
};
