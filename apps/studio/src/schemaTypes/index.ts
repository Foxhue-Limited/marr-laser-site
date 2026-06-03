// Object types
import seo from './objects/seo'
import portableText from './objects/portableText'
import figure from './objects/figure'
import link from './objects/link'
import socialLink from './objects/socialLink'
import openingHours from './objects/openingHours'
import hero from './objects/hero'
import cta from './objects/cta'
import galleryImage from './objects/galleryImage'
import treatmentSection from './objects/treatmentSection'

// Document types
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import service from './documents/service'
import teamMember from './documents/teamMember'
import testimonial from './documents/testimonial'
import blogPost from './documents/blogPost'
import faq from './documents/faq'

export const schemaTypes = [
  // Objects (must be registered before documents that reference them)
  seo,
  portableText,
  figure,
  link,
  socialLink,
  openingHours,
  hero,
  cta,
  galleryImage,
  treatmentSection,

  // Documents
  siteSettings,
  page,
  service,
  teamMember,
  testimonial,
  blogPost,
  faq,
]
