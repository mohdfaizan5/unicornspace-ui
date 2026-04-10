import { blog } from '@/lib/source';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blog.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight">{page.data.title}</h1>
      {page.data.description ? (
        <p className="mt-2 text-muted-foreground">{page.data.description}</p>
      ) : null}
      <div className="mt-8">
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(blog, page),
          })}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return blog.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blog.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
