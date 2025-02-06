import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/public/", "/api/"],
      },
    ],
    sitemap: "https://ui.unicorn-space.com/sitemap.xml",
  };
}
