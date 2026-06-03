// Schema types matching Sanity document/object definitions

import type { SanityImage, SanitySlug, SanityReference, SanityBlock } from './sanity';

export interface SEO {
  title?: string;
  description?: string;
  ogImage?: SanityImage;
}

export interface Figure {
  image: SanityImage;
  alt: string;
  caption?: string;
}

export interface Link {
  text?: string;
  url?: string;
  internal?: SanityReference;
  openInNewTab?: boolean;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube';
  url: string;
}

export interface OpeningHours {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
}

export interface Hero {
  eyebrow?: string;
  heading: string;
  tagline?: string;
  image?: Figure;
  cta?: {
    text?: string;
    url?: string;
  };
}

export interface CTA {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export interface SiteSettings {
  siteName: string;
  logo?: SanityImage;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  openingHours?: OpeningHours[];
  socialLinks?: SocialLink[];
  defaultSeo?: SEO;
}

export interface Page {
  _id: string;
  title: string;
  slug: SanitySlug;
  hero?: Hero;
  body?: SanityBlock[];
  seo?: SEO;
}

export interface TreatmentSection {
  _key: string;
  heading: string;
  body?: SanityBlock[];
  image?: Figure;
}

export interface Service {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  image?: Figure;
  treatmentSections?: TreatmentSection[];
  body?: SanityBlock[];
  price?: string;
  duration?: string;
  featured?: boolean;
  seo?: SEO;
}

export interface TeamMember {
  _id: string;
  name: string;
  role?: string;
  photo?: Figure;
  bio?: SanityBlock[];
  quote?: string;
  specialisms?: string[];
  qualifications?: string[];
  order?: number;
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  rating?: number;
  service?: SanityReference & { title?: string };
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  body?: SanityBlock[];
  excerpt?: string;
  coverImage?: Figure;
  publishedAt: string;
  categories?: string[];
  seo?: SEO;
}

export interface FAQ {
  _id: string;
  question: string;
  answer?: SanityBlock[];
  category?: string;
  service?: SanityReference;
  order?: number;
}
