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
      description: 'This section will display at the top of the page. It is the first section viewers will see on the home page.',
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
      description: "This section will display directly below the hero  section (the main image). This is a two-column section with a heading section above it.",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "blockContent",
          description: "This text will display above all other content in this section."
        },
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
        },
      ],
    }),
    defineField({
      name: "thirdSection",
      title: "Third Section",
      type: "object",
      description: "This section will display directly below the second section. This section will display all products.",
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
      description: "This section will display directly below the third section. This is a three-column section.",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "blockContent",
          description: "This text will display above all other content in this section."
        },
        {
          name: "firstColumn",
          title: "First Column Content",
          type: "blockContent",
          description: "This is the content for the first column."
        },
        {
          name: "secondColumn",
          title: "Second Column Content",
          type: "blockContent",
          description: "This is the content for the second column."
        },
        {
          name: "thirdColumn",
          title: "Thirds Column Content",
          type: "blockContent",
          description: "This is the content for the third column."
        }
      ]
    }),
    defineField({
      name: "fifthSection",
      title: "Fifth Section",
      type: "object",
      description: "This section will display directly below the fourth section. This section will display all services.",
      fields: [
        {
          name: "content",
          title: "Content",
          type: "blockContent",
          description: "This text will display above all service cards."
        }
      ]
    }),
  ],
})
