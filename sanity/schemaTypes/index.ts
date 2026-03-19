import { type SchemaTypeDefinition } from 'sanity'
import job from './job' 
import review from './allReviews'
import homePage from './homePageReview'
import homepageSuccessStories from './successStoryHome'
import allSucessStories from './successStories'
import teamMembers from "./ourTeam"
import blogs from './blog'
import { portfolio } from './portfolio'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs,job,review,homePage,allSucessStories,homepageSuccessStories,teamMembers,portfolio],
}
