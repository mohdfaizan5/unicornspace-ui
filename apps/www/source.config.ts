import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  "type": "doc",
  dir: "content/blogs"
})

export const components = defineCollections({
  "type": "doc",
  dir: "content/components",
})


export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
