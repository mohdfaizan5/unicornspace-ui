import { blog as BlogPost, components as ComponentSource, docs, courses as CourseSource } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/components',
  source: docs.toFumadocsSource(),
});


export const blog = loader({
  // it assigns a URL to your pages
  baseUrl: '/blog',
  source: createMDXSource(BlogPost),
});


export const components = loader({
  baseUrl: "/components",
  source: createMDXSource(ComponentSource)
})


export const courses = loader({
  baseUrl: "/course",
  source: createMDXSource(CourseSource)
})