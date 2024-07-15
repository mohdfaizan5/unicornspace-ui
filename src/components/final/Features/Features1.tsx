import React from "react";
import { Card } from "@/components/ui/card";
import { BsSpeedometer } from "react-icons/bs";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

const featuresData = [
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <IoCloudDownloadSharp size={50} />,
  },
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <BsSpeedometer size={50} />,
  },
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <AiTwotoneSafetyCertificate size={50} />,
  },
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <BsSpeedometer size={50} />,
  },
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <BsSpeedometer size={50} />,
  },
  {
    title: "Nextjs 13",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
    logo: <BsSpeedometer size={50} />,
  },
];

const Features = () => {
  return (
    <section className="flex items-center flex-col my-16">
      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Features
      </h2>
      <p className="text-center mt-2 mb-5 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Taxonomy also includes a blog and a full-featured documentation site
        built.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {featuresData.map((feature) => (
          <Card className="p-7 py-8 w-96 md:w-80" key={feature.title}>
            <div className={"text-primary"}>{feature.logo}</div>
            <h3 className="text-xl mt-3 mb-1 font-medium">{feature.title}</h3>
            <p className="text-xs">{feature.description}</p>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default Features;
