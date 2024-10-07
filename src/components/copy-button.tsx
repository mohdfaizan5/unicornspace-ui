"use client";
import React from "react";
import { Button } from "./ui/button";
import { Check, Clipboard } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="size-8 absolute top-1 right-1"
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
