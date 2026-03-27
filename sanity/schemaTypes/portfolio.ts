// sanity/schemas/project.ts
import { defineField, defineType } from "sanity";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 100 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      description: "Toggle on to show in the Featured Projects section (large cards).",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first within each section.",
      type: "number",
      initialValue: 99,
    }),
    defineField({
      name: "badge",
      title: "Badge Label",
      description: 'e.g. "AI/ML Integration", "FinTech", "Healthcare"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tech Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      description: "1–2 sentences shown on the card.",
      type: "text",
      rows: 3,
      validation: (R) => R.required().max(280),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      description: "Shown at the top of the modal.",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
      media: "image",
    },
  },
});
