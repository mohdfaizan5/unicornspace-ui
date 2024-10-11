export type NavigationProps = {
  title: string;
  href?: string;
  links: {
    title: string;
    href: string;
    isPublished?: boolean;
    label?: string;
  }[];
};

export const navigation: NavigationProps[] = [
  {
    title: "Introduction",
    href: "/components/get-started",
    links: [
      { title: "Getting started", href: "/components/get-started" },
      // { title: "Installation", href: "/docs/installation", isPublished: false },
    ],
  },
  {
    title: "Components",
    href: "/components",
    links: [
      {
        title: "Hero section",
        href: "/components/hero-section",
        label: "Updated",
      },
      {
        title: "Features",
        href: "/components/features",
        label: "Just Arrived🔥",
      },
      {
        title: "Pricing",
        href: "/components/pricing",
      },
      { title: "Testimonials", href: "/components/testimonials" },
      { title: "Others", href: "/components/other" },
      // { title: "Faq", href: "/components/faq" },
    ],
  },
  {
    title: "Tools",
    href: "/tools",
    links: [
      {
        title: "Glass Morphism generator",
        href: "/tools/glass-morphism",
        label: "New",
      },
      { title: "Readme generator", href: "/tools/readme-generator" },
      { title: "Shadcn Theme generator", href: "/tools/color-theme-generator" },
      { title: "Fonts in Use", href: "/tools/fonts-in-use" },
      { title: "Color palette", href: "/tools/color-palettes" },
      {
        title: "Color converter",
        href: "/tools/color-convertor",
        label: "Updated",
      },
      {
        title: "Gradient Generator",
        href: "/tools/bg-generator",
      },
      {
        title: "Color contrast checker",
        href: "/tools/contrast-checker",
      },
      {
        title: "Resources",
        href: "/tools/resources",
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
    links: [
      { title: "Next Auth", href: "/guides/nextauth-v5" },
      { title: "Razorpay nextjs", href: "/guides/razorpay-nextjs14" },
      // { title: "Stripe", href: "/guides/stripe" },
      { title: "Prisma Basics", href: "/guides/prisma" },
      // { title: "Prisma Advanced", href: "/guides/prisma-advanced" },
      // { title: "Typescript Basics", href: "/guides/typescript-50" },
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
