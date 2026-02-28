import { type SchemaTypeDefinition } from 'sanity'
import post from './post' // 1. Import your post schema
import job from './job' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,job],
}
