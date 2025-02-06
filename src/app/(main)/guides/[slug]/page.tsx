import { notFound } from "next/navigation";
import Image from "next/image";
import { Mdx } from "@/components/mdx-component";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardTableOfContents } from "@/components/toc";
import { getTableOfContents } from "@/lib/toc";

// Use dynamic import for content
import { allGuides } from "contentlayer/generated";
import { ParamsAsSlug } from "@/types";

async function getGuideFromParams(slug: string) {
  try {
    // const fullSlug = `/guides/${slug.split(",").join("/")}`;
    const fullSlug = `/guides/${slug}`;
    const guide = allGuides.find((guide) => guide.slug === fullSlug);
    return guide || null;
  } catch (error) {
    console.error("Error in getGuideFromParams:", error);
    return null;
  }
}

export async function generateMetadata(props: { params: ParamsAsSlug }) {
  const params = await props.params;

  const slug = params.slug;
  // console.log("🚀 ~ file: page.tsx ~ line 116 ~ generateMetadata ~ slug", slug);
  const guide = await getGuideFromParams(slug);

  if (!guide) {
    return {
      title: "Guide not found",
      description: "The requested guide could not be found.",
    };
  }

  return {
    title: guide.title,
    description: guide.description,
  };
}
// export async function generateStaticParams() {
//   return allGuides.map((guide) => {
//     // Remove the leading "/guides/" and split the remaining path
//     const slugParts = guide.slug.replace(/^\/guides\//, "").split("/");

//     return {
//       // Return an object with the slug as an array
//       slug: slugParts,
//     };
//   });
// }

export default async function Page(props: { params: ParamsAsSlug }) {
  const params = await props.params;
  const slug = params.slug;
  const guide = await getGuideFromParams(slug);

  if (!guide) {
    notFound();
  }

  const toc = await getTableOfContents(guide.body.raw);

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
        <section className="pt-4 h-full max-w-[280px] ml-2 hidden xl:block">
          <ScrollArea className="h-[calc(100vh-4rem)] pb-10 text-sm">
            {toc && <DashboardTableOfContents toc={toc} />}
          </ScrollArea>
        </section>
      </div>
    </main>
  );
}
