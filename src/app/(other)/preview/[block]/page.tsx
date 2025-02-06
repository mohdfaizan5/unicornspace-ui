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
//   console.log("✅⚡from getGuideFromParams");
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
  const slug = await params;

  const ComponentToRender = componentRegistry[slug.block];

  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }
  return (
    <div className="w-full mx-autopy-8 px-8 min-h-[90dvh]">
      <BackButton  className="m-2"/>
      <React.Suspense
        fallback={
          <div className="flex items-center text-sm text-muted-foreground">
            <ImSpinner className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }
      >
        <div className=" scale-[85%] ">
          <ComponentToRender.component />
        </div>
      </React.Suspense>
    </div>
  );
};

export default ComponentPage;
