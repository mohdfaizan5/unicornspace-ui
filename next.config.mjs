import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.awwwards.com',        
      },
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
  },

};


export default withContentlayer(nextConfig);
