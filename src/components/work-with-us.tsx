import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WorkWithUs = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-8 items-center justify-between max-w-4xl my-10",
        className
      )}
    >
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-4xl text-center text-pretty">
          How we enable next-gen projects succeed
        </h2>
      </div>
      <div className="flex gap-4">
        <Link href={"/guides"}>
          <Button className="font-semibold tracking-wide" size={"default"}>
            {/* More case studies */}
            More Guides
          </Button>
        </Link>
        <Link href={"/components"}>
          <Button
            className="font-semibold px-5 tracking-wide"
            size={"default"}
            variant={"outline"}
          >
            {/* Wall of love */}
            Expore Components
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkWithUs;
