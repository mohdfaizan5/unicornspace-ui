import { allGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-component";
import { notFound } from "next/navigation";

// export const generateStaticParams = async () => {
//   const slug = params.slug?.join("/") || ""

//   console.log("⚡from generateStaticParams");
//   // console.log();
//   return allGuides.map((guides) => ({ slug: guides._raw.flattenedPath }));
// };

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const guide = allGuides.find(
//     (guide) => guide._raw.flattenedPath === params.slug
//   );
//   if (!guide) throw new Error(`Post not found for slug: ${params.slug}`);
//   return { title: guide.title };
// };

type GuidePageProps = {
  params: {
    slug: string;
  };
};

async function getGuideFromParams({ params }: GuidePageProps) {
  console.log("✅⚡from getGuideFromParams");
  // console.log("slug", allGuides[0].slug);
  // console.log("slugAsParams", allGuides[0].slugAsParams);

  
  let slug = params.slug;

  // converting it into a way to use it further
  slug = `/guides/${slug.toString().split(",").join("/")}`;

  // const guide = allGuides.find((guide) => guide.slug === slug);
  const guide = allGuides.find((guide) => {
    console.log("-", guide.slug);
    return guide.slug === slug;
  });

  // console.log(guide);
  if (!guide) {
    return null;
  }

  return guide;
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  console.log("✅from PostLayout");
  console.log("slug ", params);

  const guide = await getGuideFromParams({ params });

  if (!guide) {
    notFound();
  }
  console.log("guides url", guide?.slug);

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
