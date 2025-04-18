"use server";
import componentRegistry from "@/registry";
import { notFound } from "next/navigation";
import { ImSpinner } from "react-icons/im";
import React from "react";
import BackButton from "@/components/back-button";
import { allComponents } from "content-collections";

const getGuideFromParams = async ({
  params,
}: {
  params: Promise<{ block: string }>;
}) => {
  // console.log("✅⚡from getGuideFromParams");
  let { block } = await params;

  block = `/components/${block.toString().split(",").join("/")}`;
  const component = allComponents.find((component) => {
    // console.log("✅⚡from getGuideFromParams", component.slug, block);
    if (component.slug === block)
      return component;
  });
  if (!component) {
    return null;
  }
  return component;
};

export async function generateStaticParams() {
  return allComponents.map((component) => {
    return {
      params: {
        slug: component.slug.split("/").join(","),
      },
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ block: string }>;
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
  params: Promise<{ block: string }>;
}) => {
  const slug = await params;

  const ComponentToRender = componentRegistry[slug.block];

  if (!ComponentToRender) {
    return notFound();
  }
  return (
    <div className="w-full mx-autopy-8 px-8 min-h-[90dvh]">
      <BackButton className="m-2" />
      <React.Suspense
        fallback={
          <div className="flex items-center text-sm text-muted-foreground">
            <ImSpinner className="mr-2 size-4 animate-spin" />
            Loading...
          </div>
        }
      >
        <div className=" scale-[85%] ">
          <h1>{slug.block} Preview</h1>
          <ComponentToRender.component />
        </div>
      </React.Suspense>
    </div>
  );
};

export default ComponentPage;
