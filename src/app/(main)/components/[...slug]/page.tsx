import ComponentPreview from "@/components/component-preview";
import { Mdx } from "@/components/mdx-component";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";

const getGuideFromParams = ({ params }: { params: { slug: string } }) => {
  console.log("✅⚡from getGuideFromParams");
  let slug = params.slug;
  slug = `/components/${slug.toString().split(",").join("/")}`;
  const component = allComponents.find((component) => component.slug === slug);
  if (!component) {
    return null;
  }
  return component;
};

const ComponentPage = ({ params }: any) => {
  const guide = getGuideFromParams({ params });
  if (!guide) {
    return notFound();
  }

  return (
    <div>
      <div className="mx-auto max-w-xl py-8">
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold">{guide.title}</h1>
          {
            guide.description &&

            <div className="text-gray-500">{guide.description}</div>
          }
        </div>
        <Mdx code={guide.body.code} />
      </div>
      <div></div>
    </div>
  );
};

export default ComponentPage;
