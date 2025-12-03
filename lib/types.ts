/**
 * Site Configuration Types
 * Defines the structure for all configurable content across the site
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

export type VerticalType = 'ryokan' | 'hotel' | 'general';

export interface Feature {
  title: string;
  description: string;
  iconName: IconName;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface ContactInfo {
  address: {
    line1: string;
    line2: string;
  };
  email: string;
  phone: string;
  mapsUrl: string;
}

export interface HeroContent {
  establishment: string;
  headline: string;
  tagline: string;
  ctaLabel: string;
}

export interface IntroContent {
  sectionLabel: string;
  headline: string;
  headlineAccent: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface LocationContent {
  sectionLabel: string;
  headline: string;
  mapImage: string;
  mapImageAlt: string;
  description: string;
  pinPosition: {
    top: string;
    leftMobile: string;
    leftDesktop: string;
  };
}

export interface FooterCta {
  sectionLabel: string;
  headline: string;
  ctaLabel: string;
}

export interface SiteConfig {
  // Identity
  name: string;
  nameJapanese: string;
  tagline: string;
  description: string;
  
  // Meta / SEO
  meta: {
    title: string;
    description: string;
  };
  
  // Visuals
  heroImage: string;
  heroImageAlt: string;
  galleryImages: string[];
  
  // Booking
  booking: {
    url: string;
    buttonLabel: string;
    buttonLabelMobile: string;
    priceText: string;
  };
  
  // Features / Three Pillars
  features: Feature[];
  
  // Mobile-specific features (subset or different arrangement)
  featuresMobile: Feature[];
  
  // Incentives / Trust Bar
  incentives: string[];
  
  // Testimonials
  testimonials: Testimonial[];
  testimonialsMobile: Testimonial[];
  
  // Contact
  contact: ContactInfo;
  
  // Content Sections
  hero: HeroContent;
  intro: IntroContent;
  pillars: {
    sectionLabel: string;
    headline: string;
  };
  reflections: {
    sectionLabel: string;
    headline: string;
  };
  location: string;
  footerCta: FooterCta;
  
  // Business Logic
  vertical: VerticalType;
  
  // Copyright
  copyright: string;
}

