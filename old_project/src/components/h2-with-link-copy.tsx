import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { Link2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import CopyButton from "./copy-button";
import reactNodeToString from "react-node-to-string";

const H2WithLinkCopy = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const id = reactNodeToString(children)
    .trim()
    // .replaceAll(".", "")
    .replace(/\s+/g, "-")
    .replace("[!-/:-@[-`{-~]", "")
    .toLowerCase();
  return (
    <h2
      id={id}
      className={cn(
        "mt-10 scroll-m-20 group text-3xl font-semibold tracking-tight first:mt-0s",
        className
      )}
      {...props}
    >
      {children}
      {/* <CopyButton
        className="group-hover:inline-flex hidden transition-all duration-150 ease-in"
        text={`https://ui.unicorn-space.com/${pathname}#${id}`}
      >
        <Link2 className="" />
      </CopyButton> */}
    </h2>
  );
};

export default H2WithLinkCopy;
