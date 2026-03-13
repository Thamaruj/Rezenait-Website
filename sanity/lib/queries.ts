import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "HomePageSuccessStories"][0]{
    // Fetch reviews from your homePage document (assuming it's separate)
    // If reviews are in the same doc, use 'featuredReviews'
    "featuredReviews": *[_type == "homePage"][0].featuredReviews[]->{
      _id,
      name,
      role,
      reviewText,
      "imageUrl": image.asset->url
    },
    // This MUST match the name in your schema: 'featuredSuccessStories'
    "successStories": featuredSuccessStories[]->{
      _id,
      storyName,
      problem,
      solution,
      description,
      "imageUrl": image.asset->url
    }
  }
`);

export const TEAM_QUERY = defineQuery(`
  *[_type == "team"]{
    name,
    position,
    experience,
    "imageUrl": image.asset->url
  }
`);