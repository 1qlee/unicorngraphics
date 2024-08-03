import { defineField, defineType } from 'sanity'
import { MasterDetailIcon } from "@sanity/icons"

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      description: 'This section will display at the top of the page. It is the first section viewers will see on the page.',
      fields: [
        {
          name: 'heroContent',
          title: 'Hero Content',
          type: 'blockContent',
          description: "This text will display in the center of the hero section. Please do NOT use black or gray colored text."
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          description: 'This is the background image for the hero section. It will have a black overlay to make the text more readable.',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: "This text will display instead of an image when the image fails to load."
            }
          ]
        }
      ]
    }),
    defineField({
      name: "firstSection",
      title: "First Section",
      type: "object",
      description: "This section will display directly below the hero  section (the main image). This is a two-column section.",
      fields: [
        {
          name: "leftContent",
          type: "blockContent",
          title: "Left Side Content",
          description: "This will display on the left half of the section."
        },
        {
          name: "rightContent",
          type: "blockContent",
          title: "Right Side Content",
          description: "This will display on the right half of the section."
        }
      ]
    }),
    defineField({
      name: "secondSection",
      title: "Second Section",
      type: "object",
      description: "This section will display directly below the first  section. This is a multi-column section for displaying images with two images per row.",
      fields: [
        {
          title: "Images",
          name: "images",
          type: "array",
          description: "Images will display with two images per row. Please use at least two images.",
          of: [
            {
              type: "image",
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                  description: "This text will display when you hover the image."
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: "This text will display when the image fails to load."
                }
              ]
            }
          ]
        },
      ]
    }),
    defineField({
      name: "thirdSection",
      title: "Third Section",
      type: "object",
      description: "This is a two-column section.",
      fields: [
        {
          name: "leftContent",
          type: "blockContent",
          title: "Left Side Content",
          description: "This will display on the left half of the section."
        },
        {
          name: "rightContent",
          type: "blockContent",
          title: "Right Side Content",
          description: "This will display on the right half of the section."
        }
      ]
    }),
  ],
})
