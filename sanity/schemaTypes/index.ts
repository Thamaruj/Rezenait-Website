import { type SchemaTypeDefinition } from 'sanity'
import post from './post' // 1. Import your post schema
import job from './job' 
import review from './allReviews'
import homePage from './homePageReview'
import homepageSuccessStories from './successStoryHome'
import allSucessStories from './successStories'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,job,review,homePage,allSucessStories,homepageSuccessStories],
}
