import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().error('A name is required.'),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. "Senior Stylist", "Founder & Director".',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'figure',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'portableText',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      description: 'A personal quote displayed as a blockquote on the team page.',
      validation: (rule) => rule.max(270).warning('Keep the quote under 270 characters for best results on the team page.'),
    }),
    defineField({
      name: 'specialisms',
      title: 'Specialisms',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Treatment specialisms shown as tag pills (distinct from qualifications).',
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of certifications, degrees, or qualifications.',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo.image',
    },
  },
})
