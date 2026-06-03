import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'treatmentSection',
  title: 'Treatment Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required().error('A heading is required for each treatment section.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
      description: 'Full description of this treatment. A "Learn More" toggle appears automatically for longer text.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'figure',
      description: 'Image displayed alongside this treatment section.',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image.image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled section',
        media,
      }
    },
  },
})
