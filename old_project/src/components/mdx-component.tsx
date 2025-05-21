// @ts-nocheck
"use client";

import * as React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";
import ComponentPreview from "@/components/component-preview";
import { cn } from "@/lib/utils";
import HeroSection from "@/components/hero-section";
import { Callout } from "./call-out";
import CopyButton from "./copy-button";
import "@/styles/mdx.css";
import MermaidDiagram from "./mermaid-diagram";
import WorkWithUs from "./work-with-us";
import reactNodeToString from "react-node-to-string";
import { Button } from "./ui/button";
import Link from "next/link";
import { Copy, Link2 } from "lucide-react";
import { useRouter } from "next/navigation";
import H2WithLinkCopy from "./h2-with-link-copy";

type componentsProps = {
  className: string;
};
const extractTextContent = (node: any): string => {
  if (typeof node === "string") {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(extractTextContent).join("");
  }
  if (typeof node === "object" && node !== null) {
    if (node.props && node.props.children) {
      return extractTextContent(node.props.children);
    }
  }
  return "";
};

export const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-4 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  // h2: H2WithLinkCopy,
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight tight ",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 max-w-2xl",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("mt-4 rounded-2xl overflow-hidden border", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  // pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  //   const codeContent = extractTextContent(children);

  //   return (
  //     <div className="relative">
  //       <pre {...props} className="overflow-x-auto p-4 rounded-lg bg-gray-800">
  //         {children}
  //       </pre>
  //       {codeContent && <CopyButton content={codeContent} />}
  //     </div>
  //   );
  // },
  // code: ({
  //   children,
  //   className,
  //   ...props
  // }: React.HTMLAttributes<HTMLElement>) => (
  //   <code className={`${className} font-mono text-sm`} {...props}>
  //     {children}
  //   </code>
  // ),
  pre: ({ className, ...props }) => {
    // console.log("🔥🔥🔥", props);
    // console.log()

    return (
      <div className="relative max-w-2xl mb-2">
        {/* <div dangerouslySetInnerHTML={{ __html: props.children }} /> */}
        <CopyButton
          text={reactNodeToString(props.children)}
          className="absolute right-1 top-1 z-50"
        />
        <pre
          className={cn(
            "mb-4 overflow-x-auto rounded-lg  bg-black py-4",
            props.className
          )}
          {...props}
        />
        {/* <CopyButton className="absolute right-2 top-2" text={"codeContent"} /> */}
      </div>
    );
  },

  code: ({ className, ...props }) => {
    const codeElement = React.Children.toArray(props.children).find(
      (child) => React.isValidElement(child) && child.type === "code"
    ) as React.ReactElement<any> | undefined;

    const codeContent = codeElement?.props.children;
    // console.log("🔥🔥🔥", props);
    return (
      <code
        className={cn(
          "relative rounded  px-[0.6rem] py-[0.2rem] font-mono text-sm",
          className
        )}
        {...props}
      />
    );
  },
  Image,
  ComponentPreview,
  HeroSection,
  Callout,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Diagram: MermaidDiagram,
  WorkWithUs,
  Link,
  Button,
};

interface MdxProps {
  code: string;
  className?: string;
}

export function Mdx({ code, className }: MdxProps) {
  const Component = useMDXComponent(code);
  // const [config] = useConfig()
  // const Component = useMDXComponent(code, {
  //   style: config.style,
  // })

  return (
    <div className={cn("mdx", className)}>
      <Component components={components} />
    </div>
  );
}
