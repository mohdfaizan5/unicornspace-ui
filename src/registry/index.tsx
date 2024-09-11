// componentRegistry file is used to register all the components that are used in the project.
import CallOutSection from "./components/CallOut";
import HeroSection from "./components/HeroSections/HeroSection";
import AnimatedText from "./components/TextAppearOnScroll.tsx";
import { registrySchema } from "./schema";


const componentRegistry: registrySchema = {
  "HeroSection": {
    component: HeroSection,
    code: `import React from "react";
import Link from "next/link";
import Navbar from "@/registry/components/Navbar1";
import { Button } from "@/components/ui/button";
import { Badge } from "../../../components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center">
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center">
          Build before its too late,{" "}
          <span className="text-primary ">effectively</span> and
          <span className="text-primary "> effortlessly</span>
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 font-extralight mb-6 mt-5 md:max-w-[600px] md:text-center">
          Meet IndieToolkit, the project-juggling tool for all indie hackers.
          Focus on building, not managing and tracking what is left. Free for
          individuals.
        </p>
        <Link href={""}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here {"->"}
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default HeroSection;
`
  },
  "animated-text": {
    component: CallOutSection,
    code: `"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function AnimatedText({ text }: any) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={"flex flex-wrap font-medium text-3xl"}>
      {words.map((word: string, i: number) => {
        const start = i / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={"relative mr-3"}>
      <span className={"absolute opacity-20"}>{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
export default AnimatedText;
`,
  },
}


export default componentRegistry;
