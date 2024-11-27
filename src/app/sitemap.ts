import { navigation } from "@/config/navbar";
import { allBlogs, allGuides } from "contentlayer/generated";
import type { MetadataRoute } from "next";

const WEBSITE_URL = "https://ui.unicorn-space.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = allBlogs.map((blog) => {
    return {
      url: `${WEBSITE_URL}${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    };
  });
  const guides: MetadataRoute.Sitemap = allGuides.map((guide) => {
    return {
      url: `${WEBSITE_URL}${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
  const components: MetadataRoute.Sitemap = allGuides.map((component) => {
    return {
      url: `${WEBSITE_URL}${component.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    };
  });

  let tools_temp = navigation.find((nav) => nav.title === "Tools");

  let tools;
  if (tools_temp) {
    tools = tools_temp.links.map((tools) => {
      return {
        url: `${WEBSITE_URL}${tools.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      };
    });
  }

  const otherPages = [
    "/components/get-started",
    // "/about",
    "/showcase",
    "/changelog",
    "/blog",
    "/components",
    "/guides",
    "/tools",
  ];

  return [
    {
      url: `${WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...otherPages.map((page) => {
      return {
        url: `${WEBSITE_URL}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      };
    }),

    ...components,
    ...guides,
    // @ts-ignore
    ...tools,
    ...blogs,
  ];
}
