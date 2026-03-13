import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),

    defineField({
      name: "isFeatured",
      title: "Featured Article?",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
    }),

    defineField({
      name: "readTime",
      title: "Read Time (e.g. 7 min)",
      type: "string",
    }),

    defineField({
      name: "mainCategory",
      title: "Main Category (Corner Label)",
      type: "string",
    }),

    defineField({
      name: "topics",
      title: "Topics (Pill Tags)",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "intro",
      title: "Short Intro",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "content",
      title: "Full Article Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date & Time",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      featured: "isFeatured",
      media: "image",
    },
  },
});

