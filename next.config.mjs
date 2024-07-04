import MDX from "@next/mdx";
const withMDX = MDX();
// const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["lh3.googleusercontent.com"],
  // },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
// module.exports = withMDX(nextConfig)
