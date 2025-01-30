import { Mdx } from "@/components/mdx-component";
import { ParamsAsSlug } from "@/types";
import { allComponents, allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const allComponentSlugs = allComponents
    .filter((component) => component.isPublished)
    .map((guide) => guide.slug);

  const parsed = allComponentSlugs.map((slug) => ({
    slug: slug,
  }));

  return parsed;
};

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
