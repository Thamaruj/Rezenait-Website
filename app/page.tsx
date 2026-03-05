import { client } from "@/sanity/lib/client";
import { HOME_REVIEWS_QUERY } from "@/sanity/lib/queries";
import Hero from "../components/home/hero";
import Services from "@/components/home/services"
import Reviews from "@/components/home/reviews"
import SucessStories from "@/components/home/sucessStories"
import Industries from "@/components/home/industries"
import Differentiation from "@/components/home/differentiation"
import BottomCTA from "@/components/home/bottomCTA";
import OurApproach from "@/components/home/approach"


export default async function Home() {
  
// 1. Fetch data from the CMS
  const data = await client.fetch(HOME_REVIEWS_QUERY);
  const reviews = data?.featuredReviews || []; 

  return (

    <div className=""> 
        <Hero />
        <Services/>
        <OurApproach/>
        <SucessStories/>
        <Industries/>
        <Reviews reviews={reviews}/>
        <Differentiation/> 
        <BottomCTA/>
    </div>
  );
}