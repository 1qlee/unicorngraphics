import { defineField, defineType } from "sanity"

export default defineType({
  name: "page",
  title: "Page",
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
      description: "The slug is the URL path for this page. e.g. www.unicorngraphics.com/slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: rule => rule.required().error("Required to generate a URL."),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "The type of page this is. This will determine how the page is displayed and what links to it.",
      options: {
        list: ["product", "service"],
        layout: "radio",
      }
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "A short descriptor text that is displayed alongside certain links to this page.",
      initialValue: "This is some dummy text.",
      validation: rule => [
        rule.required()
      ],
    }),
  ],
})
