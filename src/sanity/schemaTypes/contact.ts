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
      name: 'sidebarText',
      title: 'Sidebar Text',
      type: 'blockContent',
      description: "This content block will appear on adjacent to the contact form only on /contact."
    }),
  ],
})
