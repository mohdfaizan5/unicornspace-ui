"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";
import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
const CodeHighlight = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative  rounded-sm">
      <Button
        className="absolute top-2 right-2 z-10"
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      >
        {copied ?
          <ClipboardCheck />
          :
          <Clipboard />
        }
      </Button>
      <SyntaxHighlighter
        customStyle={{ borderRadius: "16px" }}
        language="javascript"
        style={vs2015}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlight;
