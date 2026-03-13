import { client } from "@/sanity/lib/client";
import { TEAM_QUERY } from "@/sanity/lib/queries";
import AboutPageContent from "./aboutContent"; // Ensure the filename is exactly aboutContent.tsx

export default async function AboutPage() {
  // 1. Fetch the data directly using the client and query we defined
  // We add { next: { revalidate: 60 } } so your team updates every minute
  const team = await client.fetch(TEAM_QUERY, {}, { next: { revalidate: 60 } });

  // 2. Pass the fetched data to your Client Component
  return <AboutPageContent team={team} />;
}