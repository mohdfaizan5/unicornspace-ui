import { getBlogFromSlug, getBlogsFromPayload } from "@/actions";
import MdxPayload from "@/components/mdx-payload";
import { Badge } from "@/components/ui/badge";
import { toSlug } from "@/lib/utils";
import { notFound } from "next/navigation";

// Next.js will invalidate the cache when a request comes in, at most once every 60 seconds.
export const revalidate = 86400; // 1 day

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths



export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await props.params;
  // TODO: make sure to handle the case where the blog is not found and it's not working
  const blog = await getBlogFromSlug(slug.slug[0]);

  if (!blog) {
    notFound();
  }

  return (
    <main className="relative flex flex-col md:flex-row justify-between items-start">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative w-full md:max-w-3xl md:sticky md:top-0 mx-auto px-4 prose dark:prose-invert">
        {/* Gradient BG + Title */}
        <div className="relative w-full mt-4 py-4 min-h-48 rounded-lg overflow-hidden">
          {/* <div className="absolute inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" /> */}
          <h1 className="text-3xl md:text-5xl font-bold mt-4 px-2 text-white">{blog.title}</h1>
          <p className="text-lg text-neutral-500 pb-4 mb-4 px-2">{blog.description}</p>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 py-1">
            {blog.tags && blog.tags.split(",").map((tag: string) => (
              <Badge variant={"default"} key={tag}>{tag}</Badge>
            ))}
          </div>
        )}

        {/* Content */}
        {blog.content && <MdxPayload data={blog.content} />}
      </div>
    </main>

  );
}


// for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params
  const blog = await getBlogFromSlug(slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "Blog not found",
    };
  }
  return {
    title: blog.title,
    description: blog.description,
  };
}

async function getBlogs() {
  const data = await getBlogsFromPayload()
  return data
}

export async function generateStaticParams() {
  "for making the file generate during build time"

  const params = (await getBlogs()).docs
    .map((blog) => {
      return {
        params: {
          slug: toSlug(blog.title),
        },
      };
    });
  return params;

}