import type { StructureBuilder } from 'sanity/structure'
import {
  CogIcon,
  DocumentsIcon,
  TagIcon,
  UsersIcon,
  ComposeIcon,
  StarIcon,
  HelpCircleIcon,
  ImagesIcon,
} from '@sanity/icons'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings — singleton: opens the document directly
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(S.documentTypeList('page').title('Pages')),

      // Services
      S.listItem()
        .title('Services')
        .icon(TagIcon)
        .child(S.documentTypeList('service').title('Services')),

      // Team
      S.listItem()
        .title('Team')
        .icon(UsersIcon)
        .child(
          S.documentTypeList('teamMember')
            .title('Team Members')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),

      S.divider(),

      // Blog
      S.listItem()
        .title('Blog')
        .icon(ComposeIcon)
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),

      // Testimonials
      S.listItem()
        .title('Testimonials')
        .icon(StarIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),

      // FAQs
      S.listItem()
        .title('FAQs')
        .icon(HelpCircleIcon)
        .child(
          S.documentTypeList('faq')
            .title('FAQs')
            .defaultOrdering([{ field: 'order', direction: 'asc' }]),
        ),

      // Treatment Gallery
      S.listItem()
        .title('Treatment Gallery')
        .icon(ImagesIcon)
        .child(
          S.documentTypeList('galleryPost')
            .title('Gallery Posts')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
        ),
    ])
