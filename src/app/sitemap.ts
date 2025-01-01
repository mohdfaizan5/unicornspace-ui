import { navigation } from "@/config/navbar";
import { allBlogs, allComponents, allGuides } from "contentlayer/generated";
import type { MetadataRoute } from "next";

const WEBSITE_URL = "https://ui.unicorn-space.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = allBlogs
    .filter((blog) => {
      if (blog.isPublished) return blog;
    })
    .map((blog) => ({
      url: `${WEBSITE_URL}${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    }));
  const guides: MetadataRoute.Sitemap = allGuides
    .filter((guide) => guide.isPublished)
    .map((guide) => {
      return {
        url: `${WEBSITE_URL}${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    });

  // console.log("--------", guides);
  const components: MetadataRoute.Sitemap = allComponents
    .filter((component) => component.isPublished)
    .map((component) => {
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
    // "/showcase",
    // "/changelog",
    "/blogs",
    "/components",
    "/guides",
    "/tools",
  ];

  const finalSitemap = [
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

    ...guides,
    // @ts-ignore
    ...tools,
    ...blogs,
    ...components,
  ];
  // console.log(finalSitemap.length);
  return finalSitemap;
}
