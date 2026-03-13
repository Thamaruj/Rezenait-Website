import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Our Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position / Job Title",
      type: "string",
    }),
    defineField({
      name: "experience",
      title: "Experience ",
      type: "string", // Use 'string' for "5+ Years" or 'number' if you only want a digit
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // Allows you to crop the image directly in Sanity
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Important for SEO and accessibility.",
        },
      ],
    }),
  ],
  // This part makes the Studio list look nice by showing the name and image in the sidebar
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});