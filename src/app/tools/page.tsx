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
      <h1 className="text-4xl font-bold font-passion text-center mb-8">
        All tools
      </h1>
      <section className="flex gap-3 flex-wrap">
        {tools.map(
          (tool, i) =>
            tool.isPublished && (
              <Link
                key={i}
                href={tool.url}
                className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10 w-96 relative"
              >
                <h2 className="text-lg font-bold">{tool.name}</h2>
                <p className="opacity-90 text-sm">{tool.description}</p>
                {/* <p className="opacity-90 text-sm">{}</p> */}
                {tool.beta && (
                  <span className="absolute top-0 right-0 bg-accent dark:text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                    Beta
                  </span>
                )}
              </Link>
            )
        )}
      </section>
    </div>
  );
};

export default page;
