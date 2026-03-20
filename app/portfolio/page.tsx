import PortfolioContent from "./portfolioContent";
import { client } from "@/sanity/lib/client";
import { PORTFOIO_QUERY } from "@/sanity/lib/queries";

export default async function PortfolioPage() {
  const projects = await client.fetch(PORTFOIO_QUERY, {}, { next: { revalidate: 60 } });

  const featuredProjects = projects.filter((p: any) => p.featured);
  const moreProjects = projects.filter((p: any) => !p.featured);

  return (
    <PortfolioContent
      featuredProjects={featuredProjects}
      moreProjects={moreProjects}
    />
  );
}