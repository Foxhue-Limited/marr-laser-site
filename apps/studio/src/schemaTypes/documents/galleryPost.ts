import { defineType, defineField } from 'sanity'

const TREATMENT_CATEGORIES = [
  { title: 'Laser Treatments', value: 'laser-treatments' },
  { title: 'Skin Treatments', value: 'skin-treatments' },
  { title: 'Aesthetic Treatments', value: 'aesthetic-treatments' },
  { title: 'Semi-Permanent Makeup', value: 'pmu-treatments' },
  { title: 'CACI Treatments', value: 'caci-treatments' },
]

export default defineType({
  name: 'galleryPost',
  title: 'Gallery Post',
  type: 'document',
  fields: [
    defineField({
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Image', value: 'single' },
          { title: 'Before & After', value: 'beforeAfter' },
        ],
        layout: 'radio',
      },
      initialValue: 'single',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'figure',
      hidden: ({ document }) => document?.postType !== 'single',
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'figure',
      hidden: ({ document }) => document?.postType !== 'beforeAfter',
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'figure',
      hidden: ({ document }) => document?.postType !== 'beforeAfter',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2,
      description: 'Short description shown below the image(s). Max 200 characters.',
      validation: (rule) => rule.required().max(200).error('Caption is required and must be under 200 characters.'),
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment Category',
      type: 'string',
      options: {
        list: TREATMENT_CATEGORIES,
      },
      validation: (rule) => rule.required().error('Please select a treatment category.'),
    }),
    defineField({
      name: 'consentGiven',
      title: 'Patient Consent Given',
      type: 'boolean',
      description: 'Confirm that written consent has been obtained from the patient before publishing.',
      initialValue: false,
      validation: (rule) => rule.custom((value) => {
        if (value !== true) return 'Patient consent must be confirmed before publishing.'
        return true
      }),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Manual Order',
      type: 'number',
      description: 'Optional. Lower numbers appear first. Leave blank to order by date.',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      postType: 'postType',
      treatment: 'treatment',
      image: 'image.image',
      beforeImage: 'beforeImage.image',
      publishedAt: 'publishedAt',
    },
    prepare({ postType, treatment, image, beforeImage, publishedAt }) {
      const label = TREATMENT_CATEGORIES.find((c) => c.value === treatment)?.title ?? treatment ?? 'No category'
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('en-GB') : ''
      return {
        title: `${postType === 'beforeAfter' ? 'Before & After' : 'Single'} — ${label}`,
        subtitle: date,
        media: image ?? beforeImage,
      }
    },
  },
})
