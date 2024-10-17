import { allGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-component";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/call-to-action";
import Image from "next/image";

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

  return (
    <main className=" flex items-start md:justify-between prose dark:prose-invert">
      <div className="max-w-96 md:max-w-2xl md:sticky md:top-0 md:overflow-hidden">
        <h1 className="text-4xl font-bold">{guide.title}</h1>
        <p className="text-lg text-neutral-500">{guide.description}</p>
        {guide.thumbnail && (
          <Image
            className=" md:min-w-96 max-w-96 md:max-w-xl py-2"
            src={`/images/guides/${guide.thumbnail}`}
            width={720}
            height={320}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${guide.title}`}
          />
        )}
        <Mdx code={guide.body.code} />
      </div>
      <CallToAction className="hidden md:block mt-10 md:sticky md:top-0 md:overflow-hidden" />
    </main>
  );
};

export default PostLayout;
