import { type SchemaTypeDefinition } from 'sanity'
import post from './post' // 1. Import your post schema
import job from './job' 
import review from './review'
import homePage from './homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,job,review,homePage],
}
