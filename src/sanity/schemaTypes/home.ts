import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'blockContent',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'heroButton',
      title: 'Hero Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: "sliderText",
      title: "Slider Text",
      type: "blockContent",
    }),
    defineField({
      name: "sliderStats",
      title: "Slider Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading"
            },
            {
              name: "text",
              type: "string",
              title: "Text"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "slider",
      title: "Image Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image"
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
    defineField({
      name: "productsText",
      title: "Products Text",
      type: "blockContent",
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "blockContent",
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: "servicesText",
      title: "Services Text",
      type: "blockContent",
    }),
    defineField({
      name: "contactText",
      title: "Contact Text",
      type: "blockContent",
    }),
  ],
})
