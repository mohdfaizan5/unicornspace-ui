import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const Component = defineCollection({
  name: "Component",
  directory: "/content/components",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    isPublished: z.boolean().optional().default(false),
    priority: z.number().optional().default(3),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      slug: document.title
        .trim() // Remove leading/trailing spaces
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Remove consecutive hyphens
        .replace(/^-+|-+$/g, ""), // Remove leading/trailing hyphens,
      mdx,
    };
  },
});


const coursesChapter = defineCollection({
  name: "courses",
  directory: "content/courses/",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    published: z.boolean().optional().default(false),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      ...document,
      mdx,
      slug: document.slug.trim().replace(/\.md$/, ""),
      // options,
    };
  },
});

// const Guide = defineCollection({
//   name: "Guide",
//   directory: "/content/guides",
//   include: "**/*.mdx",
//   schema: (z) => ({
//     title: z.string(),
//     description: z.string().optional(),
//     isPublished: z.boolean().optional().default(false),
//     tags: z.string().optional(),
//     author: z.string().optional(),
//     thumbnail: z.string().optional(),
//   }),
//   transform: async (document, context) => {
//     const mdx = await compileMDX(context, document);
//     return {
//       ...document,
//       slug: document.title
//         .toLowerCase()
//         .trim() // Remove leading/trailing spaces
//         .toLowerCase()
//         .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
//         .replace(/\s+/g, "-") // Replace spaces with hyphens
//         .replace(/-+/g, "-") // Remove consecutive hyphens
//         .replace(/^-+|-+$/g, ""), // Remove leading/trailing hyphens,

//       mdx,
//     };
//   },
// });
// const Blog = defineCollection({
//   name: "Blog",
//   directory: "/content/blogs",
//   include: "**/*.mdx",
//   schema: (z) => ({
//     title: z.string(),
//     description: z.string().optional(),
//     isPublished: z.boolean().optional().default(false),
//     author: z.string().optional(),
//     tags: z.string().optional(),
//   }),
//   transform: async (document, context) => {
//     const mdx = await compileMDX(context, document);
//     return {
//       ...document,
//       slug: document.title
//         .toLowerCase()
//         .trim() // Remove leading/trailing spaces
//         .toLowerCase()
//         .replace(/[^a-z0-9\s-]/g, "") // Remove special characters except spaces and hyphens
//         .replace(/\s+/g, "-") // Replace spaces with hyphens
//         .replace(/-+/g, "-") // Remove consecutive hyphens
//         .replace(/^-+|-+$/g, ""), // Remove leading/trailing hyphens,

//       mdx,
//     };
//   },
// });

export default defineConfig({
  collections: [
    Component,
    coursesChapter
    //  Blog, Guide
  ],
});
