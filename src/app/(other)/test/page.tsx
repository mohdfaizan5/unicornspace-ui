import WorkWithUs from "@/components/work-with-us";
import TemplateGallery from "@/template-gallery";
import React from "react";

const page = () => {
  return (
    <div>
      <TemplateGallery />
      {/* <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <WorkWithUs className="md:flex-row md:max-w-5xl " />
      </div> */}
    </div>
  );
};

export default page;
