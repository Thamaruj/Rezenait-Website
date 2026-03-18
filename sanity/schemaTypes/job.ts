import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Job Category',
      type: 'string',
      description: 'Ex: Engineering, AI, Marketing',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ex: Remote, Colombo ',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      description: 'Turn this off to hide the role from the careers page when filled.',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List the qualifications, skills, or experience required for the role as simple bullet points.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  // ✅ Preview configuration
  preview: {
    select: {
      title: 'title',
      category: 'category',
      type: 'type',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, category, type, isActive } = selection
      return {
        title: title,
        subtitle: `${category || 'No category'} • ${type || 'No type'} • ${isActive ? 'Active' : 'Inactive'}`,
      }
    },
  },
})