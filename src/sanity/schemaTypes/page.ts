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
      name: 'infoText',
      title: 'Information Text',
      type: 'blockContent',
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "This image will be used in thumbnails, avatars, and hero.",
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "This will determine how the page is displayed and what links to it.",
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
      initialValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus ipsum est, at gravida tellus molestie a.",
      validation: rule => [
        rule.required()
      ],
    }),
    defineField({
      name: "imageGrid",
      title: "Image Grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "title",
              type: "string",
              title: "Title",
              description: "This text will display when users hover over the image."
            },
            {
              name: "alt",
              type: "string",
              title: "Alt text",
              description: "This text will display when the image fails to load."
            }
          ]
        }
      ]
    }),
  ],
})
