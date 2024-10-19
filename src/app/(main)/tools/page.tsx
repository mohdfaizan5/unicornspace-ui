import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "@/styles/general.css";
import Image from "next/image";

const tools = [
  {
    name: "Color Theme generator",
    description: "Generate Shadcn color themes",
    url: "/tools/color-theme-generator",
    isPublished: true,
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    beta: true,
  },
  {
    name: "Color contrast checker",
    description: "Check the contrast between two colors",
    url: "/tools/contrast-checker",
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    isPublished: true,
    beta: true,
  },

  {
    name: "Fonts in Use",
    description: "Check out great some font combinations in use",
    url: "/tools/fonts-in-use",
    image: "/assets/tools/font-in-use.png",
    isPublished: true,
    beta: false,
  },

  {
    name: "Readme generator",
    description: "Generate a readme file for your project",
    url: "/tools/readme-generator",
    image: "/assets/tools/colors-palettes.png",
    isPublished: true,
    beta: true,
  },
  {
    name: "Gradient Generator",
    description: "Generate a gradient color for background",
    url: "/tools/bg-generator",
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    isPublished: true,
    beta: false,
  },
  {
    name: "Color Palette tool",
    description: "Provides the color palette for the given image",
    url: "/tools/colors-palettes",
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    isPublished: true,
    beta: true,
  },
  {
    name: "Other tool",
    description: "Other tool description",
    url: "/tools/other",
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    isPublished: true,
    beta: true,
  },
  {
    name: "Glass Morphism",
    description: "To have a glass view",
    url: "/tools/glass-morphism",
    image:
      "https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fmesh-gradients.jpg&w=1080&q=75",
    isPublished: true,
    beta: true,
  },
];

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold font-passion ">All tools</h1>
      <p className="max-w-2xl text-lg text-muted-foreground mb-8">
      Handy utilities to boost your development process. Simple to implement and open-source.
      </p>
      <section className="flex gap-8 flex-wrap mx-auto">
        {tools.length > 0 &&
          tools.map(
            (tool, i) =>
              tool.isPublished && (
                <Link href={`${tool.url}`} className="w-96">
                  <div
                    key={i}
                    className="flex flex-col items-start gap-2 rounded-xl border bg-card p-2 text-card-foreground shadow transition-colors hover:bg-muted/50 md:py-5 relative h-96"
                  >
                    <div className="h-[80%] mx-auto">
                      <Image
                        className="w-full h-[80%] object-fill mx-auto"
                        src={tool.image}
                        alt={tool.name}
                        width={300}
                        height={300}
                      />
                    </div>

                    <div key={i} className="mt-3 mx-3">
                      <h1 className="text-2xl font-bold font-passion ">
                        {tool.name}
                      </h1>
                      <p className="max-w-80 text-[13px] tracking-tight ">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
          )}
      </section>
    </div>
  );
};

export default page;
