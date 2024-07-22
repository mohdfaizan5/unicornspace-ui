import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    CallOut: ({ children }) => (
      <div className="bg-red-500 py-5">{children}</div>
    ),
    code: ({ className, ...props }) => (
      <code
        className={
          "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
        }
        {...props}
      />
    ),
    ...components,
  };
}
