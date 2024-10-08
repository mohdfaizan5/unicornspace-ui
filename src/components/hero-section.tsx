import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import TechStackIcons from "./tech-stack-icons";
import { Icons } from "./icons";

const HeroSection = () => {
  return (
    <section className="min-h-screen ">
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center z-10 bg-transparent relative">
        <div className="absolute  inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center font-passion font-bold">
          Build faster, smarter, and more efficiently.
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 mb-6 mt-5 md:max-w-[600px] md:text-center font-medium">
          Meet UnicornSpaceUI, the library for all your daily tool for all
          Nextjs and Web Development. Focus on getting things done, not
          re-inventing again and again.
        </p>
        <Link href={"/components"}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here <FiArrowUpRight />
          </Button>
        </Link>
        <div className="hidden md:block">
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-36 md:left-36 blur-[1px] -rotate-6 scale-105">
            <Icons.React className="" />
          </div>
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-36 md:right-36 rotate-6">
            <Icons.TailwindCSS className="" />
          </div>
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-80 md:left-72 scale-105 -rotate-12">
            <Icons.framerMotion className="" />
          </div>
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute md:top-80 blur-[1px] md:right-72 rotate-12">
            <Icons.shadCn className="" />
          </div>
          <div className="rounded-lg border bg-card text-card-foreground  drop-shadow-xl p-2 absolute bottom-5  blur-[1px] -z-10">
            <Icons.typescript className="" />
          </div>
        </div>
        <TechStackIcons className="md:hidden" />
      </main>
    </section>
  );
};

export default HeroSection;
