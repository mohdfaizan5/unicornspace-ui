import ColorConverter from "@/components/tools/color-converter";
import EnhancedUniversalColorConverter from "@/components/tools/rgb-hex-hsl-converter";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <EnhancedUniversalColorConverter /> */}
      <ColorConverter />
    </div>
  );
};

export default page;
