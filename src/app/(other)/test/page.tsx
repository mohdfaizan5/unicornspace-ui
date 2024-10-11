import ComponentPreview from "@/components/component-preview";
import { Faq1 } from "@/registry/components/FAQ/faq1";
import Features2 from "@/registry/components/features/Features2";
import { Features3 } from "@/registry/components/features/features3";
import CallOutSection from "@/registry/components/others/call-out";
import { Pricing3 } from "@/registry/components/pricing/pricing3";
import SocialProof from "@/registry/components/reviews/social-proof";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[300vh] mt-20 md:px-40">
      <ComponentPreview name={"HeroSection1"} width="500px" scale={0.8} />

      {/* <Pricing3 /> */}
      {/* <SocialProof /> */}
      <CallOutSection />
      <Features3 />
      <p className="text-3xl">hi there</p>
      <main className="h-80 border w-80 mx-auto ">
        <section className="h-1/2 bg-input border-b"></section>
        <section className="h-1/2 bg-primary"></section>
      </main>
      <Faq1 />
    </div>
  );
};

export default page;
