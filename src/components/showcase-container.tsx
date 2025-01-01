import React from "react";

function ShowcaseContainer() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="text-4xl font-bold font-passion ">ShowCase</h1>
        <p className="text-foreground/75 ">
          Companies choose UniornSpace UI for creating impactful, easy-to-build
          landing pages.
        </p>
      </div>
      <div className="grid grid-cols-12 grid-row-12 gap-4 mx-20 h-[500px] mt-10">
        <div className="border p-4 rounded-lg shadow col-span-4 row-span-6">
          <h2 className="text-lg font-semibold">AI Chatbot Template</h2>
          <p className="text-sm text-muted-foreground">
            A full-featured, hackable Next.js AI chatbot built by Vercel
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow col-span-4 row-span-12">
          <h2 className="text-lg font-semibold">Stripe</h2>
          <p className="text-sm text-muted-foreground">
            Architecting a live look at reliability: Stripes viral Black Friday
            site
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow col-span-4 row-span-6">
          <h2 className="text-lg font-semibold">
            From monolith to micro-frontend solution
          </h2>
          <p className="text-sm text-muted-foreground">
            Chick-fil-As transformation to a micro-frontend architecture
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow col-span-4 row-span-6">
          <h2 className="text-lg font-semibold">Sonos</h2>
          <p className="text-sm text-muted-foreground">
            Developing at the speed of sound: How Sonos amplified their DevEx
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow col-span-4 row-span-6">
          {/* <img src="path-to-commerce-template-image" alt="Commerce Template" className="mb-4"> */}
          <h2 className="text-lg font-semibold">Commerce Template</h2>
          <p className="text-sm text-muted-foreground">
            Starter kit for high-performance commerce with Shopify
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseContainer;
