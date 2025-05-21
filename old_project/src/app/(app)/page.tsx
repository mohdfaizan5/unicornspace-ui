import Faq from "@/components/faq";
import HeroSection from "@/components/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";
import WorkWithUs from "@/components/work-with-us";
import Features3 from "@/registry/components/features/features3";
import Testimonials3 from "@/registry/components/testimonials/testimonials3";
import { Product, WithContext, WebSite } from "schema-dts";
import Features6 from "@/registry/components/features/features6";

const page = () => {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UnicornSpaceUI",
    image: "https://ui.unicorn-space.com/icon.png",
    description:
      "the library for all your daily tool for all Nextjs and Web Development. Focus on getting things done, not re-inventin again and again.",
  };
  return (
    <div className="selection:bg-primary/20 ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <Features6 />
      <section className="mx-auto px-5 max-w-2xl sm:text-center relative py-10">
        <Icons.CrownHappy className="dark:fill-white text-white animate-pulse" />
        <h2 className="text-3xl font-medium tracking-tight ">
          Now is the time to build your dream startup.
        </h2>
        <p className="mt-2  text-foreground/60">
          With typical workflow benefits, you have to start your project right
          away. With UnicornSpaceUI, it’s never too late to build your nest egg.
        </p>
      </section>
      {/* <Features3 /> */}
      <div className="relative min-h-[70vh]  overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[320px] w-[320px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(253,54,110,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(253,54,110,.15),rgba(255,255,255,0))]"></div>

        <WorkWithUs className="md:flex-row md:max-w-5xl " />
      </div>{" "}
      <Faq />
      {/* TODO: Recreate these styles. */}
      {/* <section className="flex flex-col items-center justify-center px-5">
        <Card className="flex flex-col w-full justify-center max-w-xl z-10 items-center gap-10  mb-10 lg:w-[500px] mx-5 group">
          <section className="flex items-center justify-center relative w-40 h-32 transition-all duration-1000 ">
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
            <h3 className=" font-bold font-passion text-base max-w-72 text-center">
              Create Startups 500% Faster With This Shadcn Tool.
            </h3>
          </CardContent>
        </Card>
      </section> */}
      <section className="relative min-h-[80vh]">
        <Testimonials3 />
        <Image
          src={"/images/padding-section-1.svg"}
          width={1920}
          className="absolute w-screen bottom-10 dark:opacity-60 right-0"
          height={600}
          alt="a gradient effect for website aesthetics"
        />
      </section>
    </div>
  );
};

export default page;
