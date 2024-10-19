import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import React from "react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { Testimonials3 } from "@/registry/components/testimonials/testimonials3";
import { Features3 } from "@/registry/components/features/features3";

const page = () => {
  return (
    <div className="selection:bg-primary/20">
      <HeroSection />
      {/* <Testimonials /> */}
      <Features3 />
      <Faq />
      <Card className="flex z-10 items-center gap-10 h-40 mb-10 md:w-[500px] mx-auto group">
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
      <section className="relative min-h-[80vh]">
        <Testimonials3 />
        <Image
          src={"/images/padding-section-1.svg"}
          width={1920}
          className="absolute w-screen bottom-10 dark:opacity-60 right-0"
          height={600}
          alt=""
        />
      </section>
    </div>
  );
};

export default page;
