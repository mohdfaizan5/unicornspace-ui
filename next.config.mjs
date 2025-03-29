import { withContentCollections } from "@content-collections/next";
import { withPayload } from "@payloadcms/next/withPayload";

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

export default withContentCollections(
  // with the `withPayload` plugin
  withPayload(nextConfig)
);
// export default nextConfig;
