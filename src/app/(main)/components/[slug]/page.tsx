import { Mdx } from "@/components/mdx-component";
import { ParamsAsSlug } from "@/types";
import { allComponents, allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

const getGuideFromParams = async ({ slug }: { slug: string }) => {
  const parsedSlug = `/components/${slug.toString().split(",").join("/")}`;
  const component = allComponents.find(
    (component) => component.slug === parsedSlug
  );
  if (!component) {
    return null;
  }
  return component;
};

// COMMENTING BELOW TO SEE WHY IT'S CREATING 500 ERROR (check finally)
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
  const component = await getComponentData(slug);
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const guide = await getComponentData(slug);
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
}

const getComponentData = async (slug: string) => {
  return allComponents.find((guide) => guide.slug === `/components/${slug}`);
};
