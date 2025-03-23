import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.awwwards.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withContentCollections(nextConfig);
// export default nextConfig;
