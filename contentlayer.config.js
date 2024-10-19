import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles"; // for code block titles

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `components/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    author: { type: "string", required: false },
    image: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    isPublished: { type: "boolean", required: true },
    tags: { type: "string", required: false },
    author: { type: "string", required: false },
    thumbnail: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    isPublished: { type: "boolean", required: true },
    tags: { type: "string", required: false },
    author: { type: "string", required: false },
    // thumbnail: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Guide, Component,Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeMdxCodeProps,
      // rehypeMermaid,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // theme: "aurora-x",
          theme: "github-dark-default",
          // theme: "vitesse-black",
          // onVisitLine(node) {
          //   // Prevent lines from collapsing in `display: grid` mode, and allow empty
          //   // lines to be copy/pasted
          //   if (node.children.length === 0) {
          //     node.children = [{ type: "text", value: " " }];
          //   }
          // },
          // onVisitHighlightedLine(node) {
          //   node.properties.className.push("line--highlighted");
          // },
          // onVisitHighlightedWord(node) {
          //   node.properties.className = ["word--highlighted"];
          // },
          // onVisitHighlightedChars(node) {
          //   node.properties.className = ["word--highlighted"];
          // },
          // Add support for file names in code blocks
          transformers: [
            {
              name: "add-file-names",
              code(code) {
                if (!code.meta) return;
                const [, filename] = code.meta.match(/file="(.+?)"/) || [];
                if (!filename) return;
                code.attributes ??= {};
                code.attributes["data-filename"] = filename;
              },
            },
          ],
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
