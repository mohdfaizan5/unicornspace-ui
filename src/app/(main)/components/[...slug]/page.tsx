import ComponentPreview from "@/components/component-preview";
import { Mdx } from "@/components/mdx-component";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";

const getGuideFromParams = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  // console.log("✅⚡from getGuideFromParams");
  let { slug } = await params;

  slug = `/components/${slug.toString().split(",").join("/")}`;
  const component = allComponents.find((component) => component.slug === slug);
  if (!component) {
    return null;
  }
  return component;
};

// COMMENTING BELOW TO SEE WHY IT'S CREATING 500 ERROR
// export async function generateStaticParams() {
//   return allComponents.map((component) => {
//     return {
//       params: {
//       slug: component.slug.split("/").join(","),
//       },
//     };
//   });
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const component = await getGuideFromParams({ params });
  if (!component) {
    return {
      title: "Component not found",
      description: "Component not found",
    };
  }

  return {
    title: component.title,
    description: component.description,
  };
}

const ComponentPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const guide = await getGuideFromParams({ params });
  if (!guide) {
    return notFound();
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl py-8">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold">{guide.title}</h1>
          {guide.description && (
            <div className="text-gray-500">{guide.description}</div>
          )}
        </div>
        <Mdx code={guide.body.code} />
      </div>
      <div></div>
    </div>
  );
};

export default ComponentPage;
