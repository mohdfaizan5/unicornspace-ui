import {
  blog as BlogPost,
  blocks as BlocksSource,
  components as ComponentSource,
  docs,
  courses as CourseSource,
} from '@/.source/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/components',
  source: docs.toFumadocsSource(),
});


export const blog = loader({
  // it assigns a URL to your pages
  baseUrl: '/blog',
  source: toFumadocsSource(BlogPost, []) as any,
}) as any;


export const components = loader({
  baseUrl: "/components",
  source: toFumadocsSource(ComponentSource, []) as any
}) as any


export const courses = loader({
  baseUrl: "/course",
  source: toFumadocsSource(CourseSource, []) as any
}) as any

export const blocks = loader({
  baseUrl: '/blocks',
  source: toFumadocsSource(BlocksSource, []) as any,
}) as any