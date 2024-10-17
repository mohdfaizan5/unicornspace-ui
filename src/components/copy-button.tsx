"use client";
import React from "react";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className={cn("px-2", className)}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => setCopied(false), 2000);
        // console.log("copied", props.children)
      }}
    >
      {copied ? (
        <Check className="text-green-700" size={16} />
      ) : (
        <Clipboard size={16} />
      )}
    </Button>
  );
};

export default CopyButton;
