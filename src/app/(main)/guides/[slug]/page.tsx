import { Mdx } from "@/components/mdx-component";
import { DashboardTableOfContents } from "@/components/toc";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTableOfContents } from "@/lib/toc";
import { ParamsAsSlug } from "@/types";
import { allGuides } from "contentlayer/generated";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: ParamsAsSlug }) {
  const slug = (await params).slug;
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

async function getGuideFromParams(slug: string) {
  const fullSlug = `/guides/${slug}`;
  const guide = allGuides.find((guide) => guide.slug === fullSlug);
  return guide;
}
