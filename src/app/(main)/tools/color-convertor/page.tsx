import ColorConverter from "@/components/tools/color-converter";
import EnhancedUniversalColorConverter from "@/components/tools/rgb-hex-hsl-converter";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <EnhancedUniversalColorConverter /> */}
      <ColorConverter />
      <section className="relative h-screen">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          hi
        </div>
      </section>
    </div>
  );
};

export default page;
