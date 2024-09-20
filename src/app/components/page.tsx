import { allComponents } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

const tools = [
  {
    name: "Color Theme generator",
    description: "Generate Shadcn color themes",
    url: "/tools/color-theme-generator",
    isPublished: true,
    beta: true,
  },
  {
    name: "Color contrast checker",
    description: "Check the contrast between two colors",
    url: "/tools/contrast-checker",
    isPublished: true,
    beta: true,
  },

  {
    name: "Fonts in Use",
    description: "Check out great some font combinations in use",
    url: "/tools/fonts-in-use",
    isPublished: true,
    beta: false,
  },

  {
    name: "Readme generator",
    description: "Generate a readme file for your project",
    url: "/tools/readme-generator",
    isPublished: true,
    beta: true,
  },
  {
    name: "Other tool",
    description: "Other tool description",
    url: "/tools/other",
    isPublished: true,
    beta: true,
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold font-passion ">
        All Components
      </h1>
      <p className="max-w-2xl text-lg  text-muted-foreground mb-8">
        Beautifully designed. Copy and paste into your apps. Open Source.
      </p>
      <section className="flex gap-3 flex-wrap">
        {allComponents.map((tool, i) => (
          <Link key={i}
            href={tool.slug}
            className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10 w-96 relative"
          >
            <h2 className="text-lg font-bold">{tool.title}</h2>
            <p className="opacity-90 text-sm">{tool.description}</p>
            {/* <p className="opacity-90 text-sm">{}</p> */}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default page;