/**
 * Global content types for the ryokan pitch engine.
 */

export type IconName =
  | 'Waves'
  | 'Utensils'
  | 'BedDouble'
  | 'Wifi'
  | 'Shield'
  | 'Clock'
  | 'Sparkles'
  | 'Star';

export interface Feature {
  title: string;
  description: string;
  /**
   * Optional icon identifier used when rendering icon-based grids.
   */
  iconName?: IconName;
  /**
   * Optional image path for bento-style layouts.
   */
  image?: string;
  imageAlt?: string;
}

export interface PricingItem {
  label: string;
  value: string;
  detail?: string;
}

export interface PricingSection {
  title: string;
  note?: string;
  items: PricingItem[];
}

export interface Review {
  quote: string;
  author: string;
  /**
   * Optional title or role for the reviewer (e.g., publication or guest note).
   */
  title?: string;
  /**
   * Optional source indicator (e.g., Google, Booking.com).
   */
  source?: string;
}

export interface ReviewsSection {
  title: string;
  items: Review[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
  backgroundImage: string;
}

export interface IntroContent {
  heading: string;
  body: string;
  image: string;
}

export interface LocationContent {
  address: string;
  googleMapsUrl: string;
  image: string;
}

export interface FooterContent {
  copyright: string;
  contactEmail: string;
  phoneNumber: string;
}

export interface RyokanConfig {
  ryokanName: string;
  domain: string;
  bookingUrl: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  hero: HeroContent;
  intro: IntroContent;
  features: Feature[];
  pricing?: PricingSection;
  reviews?: ReviewsSection;
  location: LocationContent;
  footer: FooterContent;
}
