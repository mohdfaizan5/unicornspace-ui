import { getBlogsFromPayload } from '@/actions';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toSlug } from '@/lib/utils';
// import { allBlogs } from 'content-collections';
import Link from 'next/link';

; // Next.js will invalidate the cache when a request comes in, at most once every 60sec * 60 min * 24 hrs.
export const revalidate = 86400 // 1 day


export default async function Page() {
  // TODO: add meta data for SEO
  // const blogs = allBlogs
  const blogs2 = await getBlogsFromPayload()
  console.log("✅✅✅✅✅✅", blogs2);

  return (
    <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold font-passion ">Blogs</h1>
      <p className="max-w-2xl   text-muted-foreground mb-8">
        Informative articles, tech trends and development tips. Stay updated and inspired on your journey!
      </p>
      <main className="flex flex-col w-full gap-2 max-w-2xl mx-auto">
        {blogs2.docs.map((blog, i) => {
          if (blog.isPublished) return (
            <Card key={i} className="max-w-2xl  overflow-hidden border-[0.5] border-zinc-800 bg-primary/5" >
              <Link href={`/blogs/${toSlug(blog.title)}`}>
                <CardHeader className="p-0 overflow-hidden">
                  {/* {blog.thumbnail && (
                <Image
                  src={`/images/guides/${blog.thumbnail}`}
                  width={320}
                  height={120}
                  // public\images\guides\Authjs part 1.png
                  alt={`\images\guides\${blog.title}`}
                  />
                  )} */}
                </CardHeader>
                <CardContent className="relative mt-4 pb-4">
                  <div className="absolute top-0 z-[-2] h-32 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">s</div>
                  {/* <div className="absolute top-0 z-[-2] h-32 w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-lg w-full "> */}

                  <CardTitle className="pb-1"> {blog.title}</CardTitle>
                  {/* </div> */}
                  <CardDescription> {blog.description}</CardDescription>
                </CardContent>
                <CardFooter className="py-2 pb-4 flex gap-1 flex-wrap px-5">
                  {blog.tags &&
                    blog.tags.split(",").map((tag, idx) => (
                      <Badge
                        className="font-normal text-xs"
                        variant="default"
                        key={idx}
                      >
                        #{tag.trim()}
                      </Badge>
                    ))}
                </CardFooter>
              </Link>
            </Card>);
        })}
      </main>
    </div>
  )
}
