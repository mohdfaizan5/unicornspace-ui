import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/guides/", "/blogs/", "/components/", "/preview/"],
        disallow: ["/_next/", "/public/", "/api/", '/all-you-need-to-know-about-fonts', "/all-you-need-to-know-about-seo-for-developers"],
      },
    ],
    sitemap: "https://ui.unicorn-space.com/sitemap.xml",
  };
}
