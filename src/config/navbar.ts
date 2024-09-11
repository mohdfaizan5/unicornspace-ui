export type NavigationProps = {
  title: string;
  links: { title: string; href: string; isPublished?: boolean }[];
};

export const navigation: NavigationProps[] = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/" },
      { title: "Installation", href: "/docs/installation", isPublished: true },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Hero section", href: "/components/hero/hero" },
      {
        title: "Header",
        href: "/components/header/header",
      },
      { title: "Footer", href: "/docs/basics-of-time-travel" },
      {
        title: "Pricing",
        href: "/docs/introduction-to-string-theory",
      },
      { title: "Image Slider", href: "/docs/the-butterfly-effect" },
    ],
  },
  {
    title: "Tools",
    links: [
      { title: "Glass Morphism generator", href: "/tools/glass-morphism" },
      { title: "Readme generator", href: "/tools/readme-generator" },
      { title: "Shadcn Theme generator", href: "/tools/color-theme-generator" },
      { title: "Fonts in Use", href: "/tools/fonts-in-use" },
      { title: "Color palette", href: "/tools/colors-palattes" },
      {
        title: "Color converter",
        href: "/tools/color-convertor",
      },
      {
        title: "Color contrast checker",
        href: "/tools/contrast-checker",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      { title: "Next Auth", href: "/guides/nextauth-v5" },
      { title: "Razorpay nextjs", href: "/guides/razorpay-nextjs14" },
      { title: "Stripe", href: "/guides/stripe" },
      { title: "Prisma Basics", href: "/guides/prisma" },
      { title: "Prisma Advanced", href: "/guides/prisma-advanced" },
      { title: "Typescript Basics", href: "/guides/typescript-50" },
      { title: "MDX", href: "/guides/mdx-nextjs14" },
      { title: "Upload images", href: "/guides/uploadthing" },
      { title: "All about Fonts in Nextjs", href: "/guides/all-about-fonts" },
      {
        title: "Pnpm vs Npm vs Bun vs Yarn",
        href: "/guides/npm-vs-pnpm-vs-bun-vs-yarn",
      },
    ],
  },
];
