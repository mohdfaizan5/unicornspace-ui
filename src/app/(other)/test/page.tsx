import HeroSection5 from "@/registry/components/hero-sections/hero-section5";

import { ConversionSection } from "./conversion-section";
// import HeroSection10 from "../../../registry/components/hero-sections/hero-section10";
import Testimonials6 from "../../../registry/components/testimonials/testimonials6";
import HeroSection11 from "@/registry/components/hero-sections/hero-section11";

const page = () => {
  return (
    <div>
      <main className="font-inter flex min-h-screen flex-col items-center justify-between">
        {/* <Navbar /> */}
        {/* <HeroSection />
        <Features /> */}
        {/* <HeroSection11 /> */}

        <Testimonials6 />

        {/* <ConversionSection /> ❌ */}
        {/* <NotesSharing /> ❌ */}
      </main>
      {/* <TemplateGallery /> */}
      {/* <Checklist /> */}
      {/* <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <WorkWithUs className="md:flex-row md:max-w-5xl " />
      </div> */}
    </div>
  );
};

export default page;
