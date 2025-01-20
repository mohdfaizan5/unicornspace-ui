"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";

const CopyButton = ({
  text,
  className,
  children,
  variant,
}: {
  text: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  children?: ReactNode;
}) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      size={"icon"}
      variant={variant ? variant : "outline"}
      className={cn("px-2", className)}
      onClick={() => {
        setCopied(true);
        navigator.clipboard.writeText(text);
        setTimeout(() => setCopied(false), 2000);
        // console.log("copied", props.children)
      }}
    >
      {copied ? (
        <Check className="text-green-700 ease-in-out" size={16} />
      ) : (
        <>{children ? children : <Clipboard size={16} />}</>
      )}
    </Button>
  );
};

export default CopyButton;
