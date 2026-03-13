import { client } from "@/sanity/lib/client";
import BlogContent from "./blogContent";
import { BLOG_QUERY } from "@/sanity/lib/queries";


export default async function BlogPage() {
  const blogs = await client.fetch(BLOG_QUERY, {}, { next: { revalidate: 60 } });
  
  // Extract unique categories for the filter bar
  const categories = Array.from(new Set(blogs.map((b: any) => b.mainCategory)));

  return <BlogContent initialBlogs={blogs} categories={categories} />;
}