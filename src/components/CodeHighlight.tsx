"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./ui/button";
const CodeHighlight = ({ code }: { code: string }) => {
  return (
    <div className="relative  rounded-sm">
      <Button
        className="absolute top-0 right-0 z-10"
        variant={"outline"}
        onClick={() => {
          navigator.clipboard.writeText(code);
        }}
      >
        Copy
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
