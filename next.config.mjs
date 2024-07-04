import MDX from "@next/mdx";
const withMDX = MDX();
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withContentlayer(withMDX(nextConfig));
