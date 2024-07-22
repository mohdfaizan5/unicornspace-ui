import { allGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-component";

export const generateStaticParams = async () =>
  allGuides.map((guides) => ({ slug: guides._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const guide = allGuides.find(
    (guide) => guide._raw.flattenedPath === params.slug
  );
  if (!guide) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: guide.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const guide = allGuides.find(
    (guide) => guide._raw.flattenedPath === params.slug
  );
  if (!guide) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{guide.title}</h1>
      </div>
      <Mdx code={guide.body.code} />
    </article>
  );
};

export default PostLayout;
