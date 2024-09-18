import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import TechStackIcons from "./tech-stack-icons";

const HeroSection = () => {
  return (
    <section className="min-h-screen ">
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center z-10 bg-transparent">
        <div className="absolute  inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center font-passion font-bold">
        Build faster, smarter, and more efficiently.
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 font-extralight mb-6 mt-5 md:max-w-[600px] md:text-center font-medium">
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
        <TechStackIcons />

      </main>
    </section>
  );
};

export default HeroSection;
