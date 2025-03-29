import { getBlogsFromPayload } from '@/actions';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toSlug } from '@/lib/utils';
// import { allBlogs } from 'content-collections';
import Link from 'next/link';


export default async function Page() {
  // TODO: add meta data for SEO
  // const blogs = allBlogs
  const blogs2 = await getBlogsFromPayload()
  console.log("✅✅✅✅✅✅", blogs2);

  return (
    <div className="">
      <h1 className="text-4xl font-bold font-passion ">Blogs</h1>
      <p className="max-w-2xl   text-muted-foreground mb-8">
        Informative articles, tech trends and development tips. Stay updated and inspired on your journey!
      </p>
      <main className="flex flex-col w-full gap-2">
        {blogs2.docs.map((blog, i) => {
          if (blog.isPublished) return (<Card key={i} className="max-w-2xl overflow-hidden" >
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
              <CardContent className="mt-4 pb-4">
                <CardTitle className="pb-1"> {blog.title}</CardTitle>
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
