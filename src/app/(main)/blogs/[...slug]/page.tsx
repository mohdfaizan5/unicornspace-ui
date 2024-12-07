import { CallToAction } from "@/components/call-to-action";
import { Mdx } from "@/components/mdx-component";
import { allBlogs } from "contentlayer/generated";
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

// for making the file generate during build time
// export async function generateStaticParams() {
//   return allBlogs.map((blog) => {
//     return {
//       params: {
//         slug: blog.slug.split("/").join(","),
//       },
//     };
//   });
// }

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlogFromParams(props: { params: { slug: string } }) {
  let params = props.params;
  let slug = params.slug;

  // converting it into a way to use it further

  slug = `/blogs/${slug.toString().split(",").join("/")}`;

  const blog = allBlogs.find((blog) => {
    return blog.slug === slug;
  });

  if (!blog) {
    return null;
  }

  return blog;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // console.log("slug", params);
  const slug = await params;

  const blog = await getBlogFromParams({ params: { slug: slug.slug } });

  if (!blog) {
    notFound();
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

        <Mdx code={blog.body.code} />
      </div>
      <div>
        <CallToAction className="mt-10 md:sticky md:top-0 md:overflow-hidden" />
      </div>
    </main>
  );
}
