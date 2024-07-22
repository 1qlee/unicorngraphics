import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import page from './schemaTypes/page'
import home from './schemaTypes/home'
import contact from './schemaTypes/contact'
import about from './schemaTypes/about'
import settings from './schemaTypes/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, contact, about, page, blockContent, settings],
}
