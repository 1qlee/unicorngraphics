import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'blockContent',
      description: "This content block will appear on both /contact and in the contact us pop-up."
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      description: "This content block will appear below the contact form only on /contact.",
      fields: [
        defineField({
          name: 'leftContent',
          title: 'Left Side Content',
          type: 'blockContent',
          description: "This will appear at the left side of a two-column section."
        }),
        defineField({
          name: 'middleContent',
          title: 'Middle Content',
          type: 'blockContent',
          description: "This will appear at the left side of a two-column section."
        }),
        defineField({
          name: 'rightContent',
          title: 'Right Side Content',
          type: 'blockContent',
          description: "This will appear at the right side of a two-column section."
        }),
      ]
    }),
  ],
})
