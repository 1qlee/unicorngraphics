import { defineType, defineArrayMember, PortableTextInputProps } from 'sanity'
import { TextColorIcon, TextColorDecorator } from '../components/Decorator'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Heading 1', value: 'h1' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Normal', value: 'normal', },
        { title: 'Small', value: 'small', component: ({children}) => <small>{children}</small>},
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {
            title: 'Orange', 
            value: 'orange', 
            icon: () => <TextColorIcon color="#F76B15" />,
            component: (props) => <TextColorDecorator {...props} color="#F76B15" />
          },
          {
            title: 'Lime', 
            value: 'lime', 
            icon: () => <TextColorIcon color="#BDEE63" />,
            component: (props) => <TextColorDecorator {...props} color="#BDEE63" />

          },
          {
            title: 'Indigo', 
            value: 'Indigo', 
            icon: () => <TextColorIcon color="#3E63DD" />,
            component: (props) => <TextColorDecorator {...props} color="#3E63DD" />
          }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: "This text will display when the image fails to load."
        }
      ]
    }),
    defineArrayMember({
      type: "button",
    }),
  ],
})
