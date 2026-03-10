import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page Customer Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Home Page Customer Reviews',
      readOnly: true, // Just for internal organization
    }),
    defineField({
      name: 'featuredReviews',
      title: 'Featured Customer Reviews',
      description: 'Add reviews here. You can drag and drop them to change the order they appear on the website!',
      type: 'array',
      // This is the magic part: an array of references pointing to your 'review' documents
      of: [{ type: 'reference', to: [{ type: 'review' }] }], 
    }),
  ],
})