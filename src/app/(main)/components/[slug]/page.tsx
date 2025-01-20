import ComponentPreview from "@/components/component-preview";
import { Mdx } from "@/components/mdx-component";
import { ParamsAsSlug } from "@/types";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";

const getGuideFromParams = async ({ slug }: { slug: string }) => {
  // console.log("✅⚡from getGuideFromParams");

  const parsedSlug = `/components/${slug.toString().split(",").join("/")}`;
  const component = allComponents.find(
    (component) => component.slug === parsedSlug
  );
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

export async function generateMetadata({ params }: { params: ParamsAsSlug }) {
  const slug = (await params).slug;
  const component = await getGuideFromParams({ slug });
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

const ComponentPage = async ({ params }: { params: ParamsAsSlug }) => {
  const slug = (await params).slug;

  const guide = await getGuideFromParams({ slug });
  if (!guide) {
    return notFound();
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl py-8">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold">{guide.title}</h1>
          {guide.description && (
            <p className="text-muted-foreground max-w-2xl">
              {guide.description}
            </p>
          )}
        </div>
        <Mdx code={guide.body.code} />
      </div>
    </div>
  );
};

export default ComponentPage;
