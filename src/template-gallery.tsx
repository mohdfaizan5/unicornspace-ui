"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./components/ui/badge";
import Image from "next/image";

const categories = [
  { name: "Starter", color: "text-purple-400 border-purple-400/20" },
  { name: "Ecommerce", color: "text-green-400 border-green-400/20" },
  { name: "Blog", color: "text-orange-400 border-orange-400/20" },
  { name: "AI", color: "text-blue-400 border-blue-400/20" },
  { name: "Portfolio", color: "text-violet-400 border-violet-400/20" },
  { name: "SaaS", color: "text-emerald-400 border-emerald-400/20" },
  { name: "Multi-tenant App", color: "text-amber-400 border-amber-400/20" },
];

const templates = [
  {
    title: "Next.js Commerce",
    description:
      "An all-in-one starter kit for high-performance ecommerce sites.",
    image: "./placeholder.svg?height=400&width=300",
  },
  {
    title: "Image Gallery Starter",
    description: "An image gallery built with Next.js and Cloudinary.",
    image: "./placeholder.svg?height=400&width=300",
  },
  {
    title: "Next.js Boilerplate",
    description: "A Next.js starter from create-next-app.",
    image: "./placeholder.svg?height=400&width=300",
  },
];

export default function TemplateGallery() {
  return (
    <div className="flex w-[1100px] mx-auto py-10">
      <div className="mb-16 sm:max-w-[50vw]">
        <ul className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Badge
                className={`  rounded-full border bg-black/50 backdrop-blur-sm 
                    ${category.color} hover:bg-white/10 transition-colors`}
              >
                {category.name}
              </Badge>
            </li>
          ))}
        </ul>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Build like the best
          </h1>
          <p className="text-lg max-w-[500px] text-gray-400">
            Jumpstart your Next.js development with pre-built solutions from
            Vercel and our community.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="group border-white/20 hover:border-white"
          >
            Deploy a Template on Vercel
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>

      <div className="grid sm:max-[50vw] lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] hidden lg:block">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              // className={
              //   "absolute w-[300px] rounded-xl overflow-hidden border bg-background"
              // }
              initial={{
                x: 100 * index,
                y: 50 * index,
                rotate: 5 * index,
                opacity: 0,
              }}
              animate={{
                x: 100 * index,
                y: 50 * index,
                rotate: 5 * index,
                opacity: 1,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative group cursor-pointer">
                <Image
                  height={320}
                  width={400}
                  src={template.image}
                  alt={template.title}
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 space-y-2">
                    <h3 className="text-xl font-semibold">{template.title}</h3>
                    <p className="text-sm text-gray-300">
                      {template.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
