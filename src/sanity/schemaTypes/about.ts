import { defineField, defineType } from 'sanity'
import { MasterDetailIcon } from "@sanity/icons"

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'blockContent',
    }),
  ],
})
