import componentRegistry from "@/registry";
import { allComponents } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const filteredComponents = allComponents.filter((component) => {
    if (component.isPublished && component.slugAsParams !== "get-started") {
      return component;
    }
  });

  // console.log(filteredComponents);
  return (
    <div>
      <h1 className="text-4xl font-bold font-passion ">All Components</h1>
      <p className="max-w-2xl text-base  text-muted-foreground mb-8">
        {Object.keys(componentRegistry).length}+ components beautifully
        designed. Copy and paste into your apps. Open Source.
      </p>
      <p></p>
      <section className="flex gap-11 flex-wrap ">
        {filteredComponents.map((tool, i) => {
          // console.log(tool);
          return (
            <Link
              key={i}
              href={tool.slug}
              className="flex flex-col items-center  rounded-xl  border bg-card p-4 text-card-foreground  shadow transition-colors hover:bg-muted/50 sm:p-7 w-96 relative space-y-2 "
            >
              <h2 className="text-xl mb-2 font-bold ">{tool.title}</h2>
              <div className="flex gap-4">
                {tool.image && (
                  <Image
                    className="w-fit h-fit  dark:bg-[hsl(240,3%,14%,1)] bg-[hsl(240,3%,14%,.1)] rounded-lg"
                    alt=""
                    width={120}
                    height={120}
                    src={tool.image.trim()}
                  />
                )}

                <p className="opacity-90 text-sm ">{tool.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default page;
