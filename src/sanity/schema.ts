import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import page from './schemaTypes/page'
import home from './schemaTypes/home'
import contact from './schemaTypes/contact'
import about from './schemaTypes/about'
import settings from './schemaTypes/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, contact, about, page, post, author, category, blockContent, settings],
}
