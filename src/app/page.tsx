import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import React from "react";
import { Icons } from "@/components/icons";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <Faq />
      <Card className="flex items-center gap-10 h-40 mb-10 md:w-[500px] mx-auto group">
        <section className="p-2 relative w-40 h-full transition-all duration-1000">
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl  p-2 size-16 items-center flex justify-center  absolute top-12 -rotate-6  left-7 group-hover:-rotate-12 transition-all duration-300">
            <Icons.typescript className="size-11" />
          </div>
          <div className="rounded-lg border  bg-card text-card-foreground  drop-shadow-xl p-2 size-16 items-center flex justify-center  absolute top-10 z-10 left-20 group-hover:scale-105 transition-all duration-300">
            <Icons.nextjs className="  size-11" />
          </div>
          <div className="rounded-lg  border bg-card text-card-foreground  drop-shadow-xl p-2 size-16 items-center flex justify-center  absolute top-12 rotate-6 left-32 group-hover:rotate-12 transition-all duration-300">
            <Icons.TailwindCSS className=" size-11" />
          </div>
        </section>
        <CardContent>
          <h1 className=" font-bold font-passion text-base max-w-72 text-center">
            Sync all your favorite tools and libraries in one place.
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
