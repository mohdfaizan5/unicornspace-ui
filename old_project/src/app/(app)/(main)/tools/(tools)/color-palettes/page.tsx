import ColorsCard from "@/components/tools/colors-card";
import colorsData from "@/data/colorsPalettes.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palettes",
  description:
    "Discover the newest hand-picked palettes for your websites. Get inspiration for your design and art projects.",
};

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-passion ">Color Palettes</h1>
      <p className="max-w-2xl text-md text-muted-foreground mb-8">
        Discover the newest hand-picked palettes for your websites. Get
        inspiration for your design and art projects.
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-auto mt-7 md:mt-0 justify-center gap-x-10 gap-y-10" >
        {colorsData.palettes.map((colors, i) => (
          <ColorsCard
            key={i}
            colors={colors}
          />
        ))}
      </div>
    </>
  );
};

export default page;
