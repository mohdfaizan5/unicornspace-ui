import ColorConverter from "@/components/tools/color-converter";
import EnhancedUniversalColorConverter from "@/components/tools/rgb-hex-hsl-converter";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Converter",
  description: "Convert colors between RGB, HEX, and HSL formats effortlessly for free.",
};

const page = () => {
  return (
    <div>
      {/* <EnhancedUniversalColorConverter /> */}
      <ColorConverter />
    </div>
  );
};

export default page;
