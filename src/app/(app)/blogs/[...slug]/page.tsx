import { getBlogFromSlug, getBlogsFromPayload } from "@/actions";
import { CallToAction } from "@/components/call-to-action";
import { Mdx } from "@/components/mdx-component";
import MdxPayload from "@/components/mdx-payload";
import { toSlug } from "@/lib/utils";
// import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";

// for SEO
// export async function generateMetaData({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const blog = await getBlogFromParams({ params });
//   if (!blog) {
//     return {
//       title: "Blog not found",
//       description: "Blog not found",
//     };
//   }

//   return {
//     title: blog.title,
//     description: blog.description,
//   };
// }

const getBlogs = async () => {
  const data = await getBlogsFromPayload()
  return data
}



// for making the file generate during build time
export async function generateStaticParams() {
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

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// async function getBlogFromParams(props: { params: { slug: string } }) {
//   let params = props.params;
//   let slug = params.slug;

//   // converting it into a way to use it further

//   slug = `/blogs/${slug.toString().split(",").join("/")}`;

//   const blog = allBlogs.find((blog) => {
//     return blog.slug === slug;
//   });

//   if (!blog) {
//     return null;
//   }

//   return blog;
// }

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // console.log("slug", params);
  const slug = await params;
  // TODO: make sure to handle the case where the blog is not found and it's not working
  console.log("slug", slug.slug);
  const blog = await getBlogFromSlug(slug.slug[0]);

  if (!blog) {
    notFound();
  }
  // const html = convertLexicalToHTML({ data })

  // console.log(blog.slug);

  return (
    <main className="flex flex-col md:flex-row justify-between   items-start prose dark:prose-invert">
      <div className="max-w-96 md:max-w-3xl md:sticky md:top-0 md:overflow-hidden mx-auto">
        <div className="relative w-full px-4 h-44 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <h1 className="text-2xl md:text-5xl  max-w-2xl font-bold mt-4 ">{blog.title}</h1>
            <p className="text-lg text-neutral-500 border-b pb-4 mb-4">{blog.description}</p>
          </div>
        </div>
        {/* {guide.thumbnail && (
          <Image
            className=" md:min-w-96 max-w-96 md:max-w-xl py-2"
            src={`/images/guides/${guide.thumbnail}`}
            width={720}
            height={320}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${guide.title}`}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        */}

        {/* <Mdx code={blog.mdx} /> */}
        {blog.content && <MdxPayload data={blog.content} />}
      </div>
      {/* <div>
        <CallToAction className="mt-10 md:sticky md:top-0 md:overflow-hidden" />
      </div> */}
    </main>
  );
}
