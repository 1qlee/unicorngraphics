import { defineType } from "sanity";
import { ButtonIcon } from '@radix-ui/react-icons'
import icon from "./icon";

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: ButtonIcon,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'The text that will display on the button.',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'The URL the button will link to.'
    },
    icon
  ]
})