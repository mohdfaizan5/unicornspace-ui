import { getBlogsFromPayload, getGuidesFromPayload } from "@/actions";
import { navigation } from "@/config/navbar";
import { allComponents } from "content-collections";
import type { MetadataRoute } from "next";

const WEBSITE_URL = "https://ui.unicorn-space.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blogs
  const allBlogs = await getBlogsFromPayload();

  const blogs: MetadataRoute.Sitemap = allBlogs.docs
    .filter((blog) => blog.isPublished)
    .map((blog) => ({
      url: `${WEBSITE_URL}/blogs/${blog.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    }));

  // Guides
  const allGuides = await getGuidesFromPayload();
  const guides: MetadataRoute.Sitemap = allGuides.docs
    .filter((guide) => guide.isPublished)
    .map((guide) => ({
      url: `${WEBSITE_URL}/guides/${guide.main?.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // Components
  const components: MetadataRoute.Sitemap = allComponents
    .filter((component) => component.isPublished)
    .map((component) => ({
      url: `${WEBSITE_URL}/components/${component.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  // Tools
  const tools_temp = navigation.find((nav) => nav.title === "Tools");
  const tools: MetadataRoute.Sitemap =
    tools_temp?.links.map((tool) => ({
      url: `${WEBSITE_URL}${tool.href}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    })) || [];

  // Other static pages
  const otherPages: MetadataRoute.Sitemap = [
    "/components/getting-started",
    "/blogs",
    "/components",
    "/guides",
    "/tools",
  ].map((page) => ({
    url: `${WEBSITE_URL}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Final sitemap
  const finalSitemap: MetadataRoute.Sitemap = [
    {
      url: `${WEBSITE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...otherPages,
    ...guides,
    ...tools,
    ...blogs,
    ...components,
  ];

  return finalSitemap;
}
