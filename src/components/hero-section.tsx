import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "./ui/badge";
import TechStackIcons from "./tech-stack-icons";
import { Icons } from "./icons";

const HeroSection = () => {
  return (
    <section className="h-[90dvh] relative px-5 md:px-10 py-16 pb-30 sm:flex sm:flex-col items-center z-10 bg-transparent">
      <div className="absolute  inset-0 -z-50 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <span className="relative inline-block overflow-hidden rounded-full p-[1px] opacity-0  [--slidein-delay:300ms]  blur-lg animate-slidein">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl">
          🚀 UI for Startups and SAAS
        </div>
      </span>
      {/* <Badge className="opacity-0  [--slidein-delay:300ms]  blur-lg animate-slidein">
        🚀UI for Startups and SAAS
      </Badge> */}
      <h1 className="text-5xl mt-6 sm:text-6xl sm:w-2/3 sm:text-center font-passion font-bold  blur-lg opacity-0 [--slidein-delay:300ms] animate-slidein">
        {/* Build faster, smarter, and more efficiently. */}
        Create Web Startups 300% Faster With UnicornSpaceUI
      </h1>
      <p className="text-lg sm:text-[18px] blur-lg opacity-0 mb-6 mt-5 md:max-w-[600px] md:text-center font-medium  [--slidein-delay:400ms] animate-slidein text-foreground/75 z-10">
        Meet UnicornSpaceUI, the library for all your daily tool for all Nextjs
        and Web Development. Focus on getting things done, not re-inventing
        again and again.
      </p>
      <Link
        href={"/components"}
        className=" blur-lg opacity-0 [--slidein-delay:500ms] animate-slidein "
      >
        <button className="group flex transition-transform duration-300  items-center justify-center w-[350px]  h-12 px-10 select-none rounded-lg hover:bg-gradient-to-b hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-600  text-base leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
          <span className="flex mx-auto items-center group-active:[transform:translate3d(0,1px,0)]">
            Start Here{" "}
            <FiArrowRight className="transition-transform group-hover:translate-x-[6px] ml-1" />
          </span>
        </button>
      </Link>
      <div className="hidden md:block">
        <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-36 md:left-36  blurblur-lg1px] -rotate-6 scale-105">
          <Icons.React className="" />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-36 md:right-36 rotate-6">
          <Icons.TailwindCSS className="" />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-80 md:left-72 scale-105 -rotate-12">
          <Icons.framerMotion className="" />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-80  blurblur-lg1px] md:right-72 rotate-12">
          <Icons.shadCn className="" />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute bottom-5   blurblur-lg1px] -z-10">
          <Icons.typescript className="" />
        </div>
      </div>
      <TechStackIcons className="md:hidden items-start" />
    </section>
  );
};

export default HeroSection;
