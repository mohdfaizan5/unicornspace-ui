import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

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
  dir: "content/blog"
})

export const components = defineCollections({
  "type": "doc",
  dir: "content/components",
})

export const courses = defineCollections({
  type: "doc",
  dir: "content/courses",
  
  // schema: frontmatterSchema.extend({
  //   title: z.string(),
  //   description: z.string(),
  //   date: z.date(),
  //   tags: z.array(z.string()),
  //   image: z.string().optional(),
  // }),
})


export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
});
