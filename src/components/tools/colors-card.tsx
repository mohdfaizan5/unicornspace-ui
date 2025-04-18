"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type ColorsCardType = {

  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
  }
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ColorsCard(props: ColorsCardType) {
  const [copied, setCopied] = useState(false);

  // const handleClick = () => {
  //   navigator.clipboard.writeText(`${colors.map((color) => color)}`);
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 2000);
  // };
  const { colors } = props;
  return (
    <Card className="w-full m-2 md:shadow-md rounded-none ">
      <WebDesign colors={colors} />
      <TooltipProvider>
        <CardHeader className="p-0 w-full flex">
          <div className="flex">
            {Object.values(colors).map((color, i) => {
              // const finalColor = `bg-[${color}]`.toLowerCase();
              // console.log(finalColor);
              return (
                <Tooltip key={i}>
                  <TooltipTrigger
                    onClick={() => {
                      navigator.clipboard.writeText(color);
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                    className="w-full"
                  >
                    <div
                      style={{ backgroundColor: `${color}` }}
                      key={i}
                      className={`w-full h-20 border`}
                    ></div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{color}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </CardHeader>
      </TooltipProvider>

      {/* <CardContent className="flex flex-col gap-1 items-start">
        <h2 className="text-[16px] font-bold font-grotesk leading-6 mt-2 text-center">
          {title}
        </h2>
        <p>{description}</p>
        <div className="w-full flex flex-col gap-3 items-center justify-between">
          <Button onClick={handleClick} className="w-full" variant={"default"}>
            {copied ? "Copied ✅" : "Copy"}
          </Button>
        </div>
      </CardContent> */}
    </Card>
  );
}

export default ColorsCard;


const WebDesign = ({ colors }: ColorsCardType) => {
  const { primary, secondary, background, foreground } = colors;
  const colorsStyle = {
    primary: `text-[${primary}]`,
    background: `bg-[${background}]`,
  }
  return (
    <div className={`px-4 py-8 w-80  mx-auto text-center bg-[${background}] `} style={{
      backgroundColor: background,
      color: foreground,
    }}>
      <h1 className="max-w-4xl mx-auto text-xl font-medium tracking-tight font-display " style={{
        color: primary,
      }}>
        Accounting{' '}
        <span className={`relative  whitespace-nowrap`} style={{
          color: primary,
        }}>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for small businesses.
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-sm tracking-tight text-slate-700 dark:text-muted-foreground ">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don’t get audited.
      </p>
      <div className="flex justify-center mt-10 gap-x-6 scale-75">
        <Button >Get 6 months free</Button>
        <Button
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="flex-none w-3 h-3 fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>

    </div>
  );
}