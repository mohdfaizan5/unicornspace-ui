import { allGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-component";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/call-to-action";
import Image from "next/image";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";

async function getGuideFromParams(props: {
  params: Promise<{ slug: string }>;
}) {
  console.log("✅⚡from getGuideFromParams");
  // console.log("slug", allGuides[0].slug);
  // console.log("slugAsParams", allGuides[0].slugAsParams);
  let { slug } = await props.params;

  // converting it into a way to use it further
  slug = `/guides/${slug.toString().split(",").join("/")}`;

  // const guide = allGuides.find((guide) => guide.slug === slug);
  const guide = allGuides.find((guide) => {
    // console.log("-", guide.slug);
    return guide.slug === slug;
  });

  // console.log(guide);
  if (!guide) {
    return null;
  }

  return guide;
}
type Params = Promise<{ slug: string }>;
// export const generateStaticParams = async () => {
//   const slug = params.slug?.join("/") || ""

//   console.log("⚡from generateStaticParams");
//   // console.log();
//   return allGuides.map((guides) => ({ slug: guides._raw.flattenedPath }));
// };

// COMMENTING BELOW TO SEE WHY IT'S CREATING 500 ERROR
// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const guide = allGuides.find(
//     (guide) => guide._raw.flattenedPath === params.slug
//   );
//   if (!guide) throw new Error(`Post not found for slug: ${params.slug}`);
//   return { title: guide.title };
// };

// export async function generateStaticParams() {
//   return allGuides.map((guide) => {
//     return {
//       params: {
//         slug: guide.slug.split("/").join(","),
//       },
//     };
//   });
// }

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const guide = await getGuideFromParams({ params });
  if (!guide) {
    return {
      title: "Guide not found",
      description: "Guide not found",
    };
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}

type GuidePageProps = {
  params: {
    slug: string;
  };
};

const PostLayout = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  // console.log("✅from PostLayout");
  // console.log("slug ", params);

  const guide = await getGuideFromParams({ params });

  if (!guide) {
    notFound();
  }
  const toc = await getTableOfContents(guide.body.raw);

  // console.log("guides url", guide?.slug);

  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 relative">
        {/* Main Content Column */}
        <div className="w-full space-y-6">
          {/* Title and Description */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {guide.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              {guide.description}
            </p>
          </div>

          {/* Thumbnail */}
          {guide.thumbnail && (
            <div className="w-full mb-6">
              <Image
                className="w-full rounded-2xl object-cover aspect-video"
                src={`/images/guides/${guide.thumbnail}`.trim()}
                width={780}
                height={380}
                alt={guide.title}
              />
            </div>
          )}

          {/* Mobile Table of Contents */}
          <div className="xl:hidden mb-6">
            <details className="bg-accent/10 rounded-lg">
              <summary className="px-4 py-3 cursor-pointer font-semibold">
                Table of Contents
              </summary>
              <div className="p-4">
                <ScrollArea className="h-64">
                  {toc && <DashboardTableOfContents toc={toc} />}
                </ScrollArea>
              </div>
            </details>
          </div>

          {/* Main Content */}
          <Mdx
            code={guide.body.code}
            className="w-full prose dark:prose-invert max-w-none"
          />
        </div>

        {/* Sidebar Table of Contents */}

        <section className=" pt-4 h-full max-w-[280px] ml-2 hidden xl:block   ">
          <ScrollArea className="h-[calc(100vh-4rem)] pb-10 text-sm">
            {toc && <DashboardTableOfContents toc={toc} />}
          </ScrollArea>
        </section>
      </div>
    </main>
  );
};

export default PostLayout;
