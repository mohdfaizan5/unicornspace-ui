import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navbar";
import { Metadata } from "next";
import Link from "next/link";
import React, { ReactNode } from "react";
import "@/styles/typography.css";
import { MoveRight, Shapes, Zap } from "lucide-react";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: "All Tools",
    template: "%s tools | UnicornSpaceUI",
  },
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
  twitter: {
    card: "summary_large_image",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}

      <section className=" mt-10">
        <h2 className="flex items-center gap-2">
          Checkout other free tools{" "}
          <Icons.curvedArrow className="dark:fill-white fill-black rotate-12 animate-pulse" />{" "}
        </h2>
        <div className="flex flex-wrap mt-5 gap-2">
          {navigation
            .filter((data) => data.title === "Tools")[0]
            .links.map((data, index) => (
              <Link href={`${data.href}`} key={index}>
                <Button variant={"outline"} className="p-8" key={index}>
                <Zap className="mr-1" size={16}/>{data.title}
                </Button>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default layout;
