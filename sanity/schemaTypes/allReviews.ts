import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'All Customer Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role & Company',
      description: 'e.g., CEO at TechCorp',
      type: 'string',
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Customer Image',
      type: 'image',
      options: { hotspot: true }, // Allows you to crop the image in Sanity!
    }),
  ],
})