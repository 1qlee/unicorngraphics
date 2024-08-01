import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'
import icon from './icon'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
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
          description: "This text will display on the bottom left side of the hero section. Please do NOT use black or gray colored text."
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
        },
        {
          name: "gridContent",
          title: "Grid Content",
          type: "object",
          description: "This will display below the two-column section. This is a grid that will expand to as many columns as items inputted.",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    icon,
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
            }
          ]
        }
      ],
    }),
    defineField({
      name: "secondSection",
      title: "Second Section",
      type: "object",
      description: "This section will display directly below the first section. This is a visually centered section.",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "blockContent",
          description: "This text will display above all other content in this section. The text will be aligned in the center."
        },
        {
          name: "slider",
          title: "Client Images",
          description: "Best to use images that are 2:1 ratio (width is greater than height).",
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
        },
      ],
    }),
    defineField({
      name: "thirdSection",
      title: "Third Section",
      type: "object",
      description: "This section will display all products. To edit products, go to the 'Product Pages' tab in the sidebar.",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "blockContent",
          description: "This text will display above all product cards."
        }
      ]
    }),
    defineField({
      name: "fourthSection",
      title: "Fourth Section",
      type: "object",
      description: "This is a two-column section.",
      fields: [
        {
          name: "content",
          title: "Left Side Content",
          type: "blockContent",
          description: "This text will display on the left-side column."
        },
        {
          name: "grid",
          title: "Grid Content",
          description: "This content should be a 2x2 grid, but can expand to accommodate more items. It will display on the right-side column.",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                icon,
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
        },
      ]
    }),
    defineField({
      name: "fifthSection",
      title: "Fifth Section",
      type: "object",
      description: "This section will display all services. To edit services, go to the 'Service Pages' tab in the sidebar.",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "blockContent",
          description: "This text will display above all service cards."
        }
      ]
    }),
    defineField({
      name: "sixthSection",
      title: "Sixth Section",
      type: "object",
      description: "This section will display directly below the fourth section. This section will display all services.",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "blockContent",
          description: "This text will display above all other content in this section."
        },
      ]
    }),
  ],
})
