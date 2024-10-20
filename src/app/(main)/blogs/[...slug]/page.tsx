import { CallToAction } from "@/components/call-to-action";
import { Mdx } from "@/components/mdx-component";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";


type BlogPageProps = {
    params: {
        slug : string
    }
}

async function getBlogFromParams({params} : BlogPageProps){

    let slug = params.slug

    // converting it into a way to use it further
    
    slug = `/blogs/${slug.toString().split(",").join("/")}`

    const blog = allBlogs.find((blog)=> {
        return blog.slug === slug
    })

    if(!blog){
        return null
    }

    return blog
}


export default async function Page({params}: {params : {slug : string}}) {

    // console.log("slug", params);

    const blog = await getBlogFromParams({params})

    if(!blog){
        notFound()
    }

    // console.log(blog.slug);

  return (
    <main className="flex flex-col md:flex-row justify-between   items-start prose dark:prose-invert">
      <div className="max-w-96 md:max-w-2xl md:sticky md:top-0 md:overflow-hidden">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-lg text-neutral-500">{blog.description}</p>
        {/* {guide.thumbnail && (
          <Image
            className=" md:min-w-96 max-w-96 md:max-w-xl py-2"
            src={`/images/guides/${guide.thumbnail}`}
            width={720}
            height={320}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${guide.title}`}
          />
        )} */}

        <Mdx code={blog.body.code}/>
      </div>
      <div>
      <CallToAction className="mt-10 md:sticky md:top-0 md:overflow-hidden" />

      </div>
    </main>
  )
}
