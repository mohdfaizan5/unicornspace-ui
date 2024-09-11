"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type RevealTextOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

function RevealTextOnScroll({ children, className }: RevealTextOnScrollProps) {
  const container = useRef(null);
  const text = children as string;
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={container}
      className={`flex flex-wrap font-medium text-3xl ${className}`}
    >
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
export default RevealTextOnScroll;
