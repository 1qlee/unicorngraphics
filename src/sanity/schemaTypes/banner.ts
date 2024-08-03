import { defineField, defineType } from 'sanity'
import { BlockquoteIcon } from '@sanity/icons'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: "This section will appear as the last section on the home page, product pages, and service pages."
    }),
  ]
})