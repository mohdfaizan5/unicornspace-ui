import componentRegistry from "@/registry";
import { allComponents } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold font-passion ">All Components</h1>
      <p className="max-w-2xl text-lg  text-muted-foreground mb-8">
        {Object.keys(componentRegistry).length}+ components beautifully
        designed. Copy and paste into your apps. Open Source.
      </p>
      <p></p>
      <section className="flex gap-11 flex-wrap ">
        {allComponents.map((tool, i) => {
          if (tool.slugAsParams !== "get-started") {
            // console.log(tool);
            return (
              <Link
                key={i}
                href={tool.slug}
                className="flex flex-col items-center  rounded-xl  border bg-card p-4 text-card-foreground  shadow transition-colors hover:bg-muted/50 sm:p-7 w-96 relative space-y-2 "
              >
                <h2 className="text-xl font-bold ">{tool.title}</h2>

                {tool.image && (
                  <Image
                    className="w-fit h-fit"
                    alt=""
                    width={200}
                    height={200}
                    src={tool.image.trim()}
                  ></Image>
                )}

                <p className="opacity-90 text-sm ">{tool.description}</p>
              </Link>
            );
          }
        })}
      </section>
    </div>
  );
};

export default page;
