import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
  {
    name: "Glass Morphism",
    description: "To have a glass view",
    url: "/tools/glass-morphism",
    isPublished: true,
    beta: true,
  },
];

const page = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold font-passion ">All tools</h1>
      <p className="max-w-2xl text-lg text-muted-foreground mb-8">
        Beautifully designed. Copy and paste into your apps. Open Source.
      </p>
      <section className="flex gap-3 flex-wrap mx-auto">
        {tools.map(
          (tool, i) =>
            tool.isPublished && (
              <div
                key={i}
                className="flex flex-col items-start gap-2 rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 md:py-12 min-w-96 relative"
              >
                <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1]">
                  {tool.name}
                </h2>
                <p className="opacity-90 text-sm">{tool.description}</p>

                <div className="space-x-3 py-2">
                  <Button size={"sm"}>
                    Browser Tool <ArrowRight size={16} />
                  </Button>
                  <Button size={"sm"} variant={"secondary"}>
                    Documentation
                  </Button>
                </div>
                {tool.beta && (
                  <span className="absolute top-0 right-0 bg-accent dark:text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                    Beta
                  </span>
                )}
              </div>
            )
        )}
      </section>
    </div>
  );
};

export default page;
