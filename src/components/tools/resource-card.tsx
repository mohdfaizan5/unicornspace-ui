"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
type ResourceCardType = {
  title: string;
  description: string;
  image: string;
  category: string;
};

function ResourceCard({
  title,
  description,
  image,
  category,
}: ResourceCardType) {
  return (
    <>
      <Card className="w-96 h-72 md:mt-[50px] md:shadow-md rounded-none">
        <CardHeader className="p-0">
          <Image height={500} width={500} alt="" src={image} />
        </CardHeader>

        <CardContent className="flex flex-col gap-1 items-start">
          <Badge variant={"outline"} className="text-[10px] mx-auto">
            {category}
          </Badge>
          <h2 className="text-[16px] font-bold font-grotesk leading-6 mt-2 text-center">
            {title}
          </h2>
          <p>{description}</p>
          <div className="w-full flex items-center justify-between">
            <Button className="w-full" variant={"default"}>
              Visit
            </Button>
            {/* <CustomBtn1 /> */}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

const CustomBtn1 = () => {
  return (
    <button className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
      <div className="-rotate-45 transition duration-300 group-hover:rotate-0">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-200"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  );
};
export default ResourceCard;
