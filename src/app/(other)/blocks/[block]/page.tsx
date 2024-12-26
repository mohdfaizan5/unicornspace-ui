"use server";
import ComponentPreview from "@/components/component-preview";
import { Mdx } from "@/components/mdx-component";
import { allComponents } from "contentlayer/generated";
import componentRegistry from "@/registry";
import { notFound } from "next/navigation";
import { ImSpinner } from "react-icons/im";
import React from "react";
import BackButton from "@/components/back-button";

// const getGuideFromParams = async ({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) => {
//   // console.log("✅⚡from getGuideFromParams");
//   let { slug } = await params;

//   slug = `/components/${slug.toString().split(",").join("/")}`;
//   const component = allComponents.find((component) => component.slug === slug);
//   if (!component) {
//     return null;
//   }
//   return component;
// };

// export async function generateStaticParams() {
//   return allComponents.map((component) => {
//     return {
//       params: {
//       slug: component.slug.split("/").join(","),
//       },
//     };
//   });
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const component = await getGuideFromParams({ params });
//   if (!component) {
//     return {
//       title: "Component not found",
//       description: "Component not found",
//     };
//   }

//   return {
//     title: component.title,
//     description: component.description,
//   };
// }

const ComponentPage = async ({
  params,
}: {
  params: Promise<{ block: string }>;
}) => {
  // const guide = await getGuideFromParams({ params });
  // if (!guide) {
  //   return notFound();
  // }
  const slug = await params;

  const ComponentToRender = componentRegistry[slug.block];

  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl py-8">
        {/* <div className="mb-8 ">
          <h1 className="text-3xl font-bold">{guide.title}</h1>
          {guide.description && (
            <div className="text-gray-500">{guide.description}</div>
          )}
        </div> */}
      </div>
      <BackButton />
      <React.Suspense
        fallback={
          <div className="flex items-center text-sm text-muted-foreground">
            <ImSpinner className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }
      >
        {/* <div className="scale-[60%] bg-background/30"> */}
        <ComponentToRender.component />
        {/* </div> */}
      </React.Suspense>
    </div>
  );
};

export default ComponentPage;
