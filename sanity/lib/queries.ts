import { defineQuery } from "next-sanity";

export const HOME_REVIEWS_QUERY = defineQuery(`
  *[_type == "homePage"][0]{
    featuredReviews[]->{
      _id,
      name,
      role,
      reviewText,
      "imageUrl": image.asset->url
    }
  }
`);