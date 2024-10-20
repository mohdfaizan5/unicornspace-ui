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
      { title: "Getting started🔂", href: "/components/get-started" },
      // { title: "Installation", href: "/docs/installation", isPublished: false },
    ],
  },
  {
    title: "Components",
    href: "/components",
    links: [
      {
        title: "Hero section✅",
        href: "/components/hero-section",
        label: "Updated",
      },
      {
        title: "Navbar✅",
        href: "/components/navbar",
        // label: "Updated",
      },
      {
        title: "Features✅",
        href: "/components/features",
        label: "Just Arrived🔥",
      },
      {
        title: "Pricing✅",
        href: "/components/pricing",
      },
      { title: "Testimonials ✅", href: "/components/testimonials" },
      { title: "Others 🔁", href: "/components/other" },
      { title: "Faq✅", href: "/components/faq" },
      { title: "Footers✅", href: "/components/footer" },
      // { title: "Cards❌", href: "/components/cards" },
      { title: "CTA's & Sections❌", href: "/components/cta-and-sections" },
      { title: "Ecommerce❌", href: "/components/ecommerce" },
      // { title: "Minimal", href: "/components/ecommerce" },
      // { title: "Dialog⌛", href: "/components/dialog" },
      { title: "News Letter❌", href: "/components/news-letter" },
      { title: "Cards ❌", href: "/components/cards" },
    ],
  },
  {
    title: "Tools",
    href: "/tools",
    links: [
      {
        title: "Glass Morphism generator🔁",
        href: "/tools/glass-morphism",
        label: "New",
      },
      { title: "Readme generator🔁", href: "/tools/readme-generator" },
      // { title: "Shadcn Theme generator", href: "/tools/color-theme-generator" },
      { title: "Shadcn Themes🔁", href: "/tools/shadcn-color-themes" },
      { title: "Fonts in Use🔁", href: "/tools/fonts-in-use" },
      { title: "Color palettes🔁", href: "/tools/color-palettes" },
      {
        title: "Color converter",
        href: "/tools/color-convertor",
        label: "Updated",
      },
      {
        title: "Gradient Generator",
        href: "/tools/bg-generator",
      },
      // {
      //   title: "Color contrast checker",
      //   href: "/tools/contrast-checker",
      // label: "for V4"
      // },
      {
        title: "Resources❌",
        href: "/tools/resources",
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
    links: [
      { title: "Next Auth", href: "/guides/nextauth-v5", label: "Updated" },
      { title: "Razorpay nextjs", href: "/guides/razorpay-nextjs14" },
      // { title: "Stripe", href: "/guides/stripe" },
      { title: "Prisma Basics", href: "/guides/prisma", label: "New!" },
      // { title: "Prisma Advanced(Faizan)", href: "/guides/prisma-advanced" },
      // { title: "Typescript Basics(Akshy)", href: "/guides/typescript-50" },
      // {
      //   title: "ContentLayer & MDX❌ (Tahir)",
      //   href: "/guides/contentlayer-mdx-nextjs14",
      // },
      { title: "UploadThing (Tahir)", href: "/guides/uploadthing" },
      {
        title: "SEO - The Fundamentals",
        href: "/guides/seo-the-fundamentals",
      },
      // { title: "SEO - Getting Hands dirty❌", href: "/guides/uploadthing" },
      // {
      //   title: "Project Development Checklist❌",
      //   href: "/guides/project-development-checklist",
      // },
      // { title: "Design Principles (5)(Faizan)", href: "/guides/design-priciples" },
      // { title: "UI UX", href: "/guides/uploadthing" },
      // { title: "Best Layouts", href: "/guides/uploadthing" },
      // { title: "All about Fonts in Nextjs", href: "/guides/all-about-fonts" },
      // {
      //   title: "Pnpm vs Npm vs Bun vs Yarn",
      //   href: "/guides/npm-vs-pnpm-vs-bun-vs-yarn",
      // },
    ],
  },
  // {
  //   title: "Blogs",
  //   href: "/blogs",
  //   links: [
  //     {
  //       title: "CSS",
  //       href: "/blogs/css"
  //     },
  //     {
  //       title: "All you need to know about fonts",
  //       href: "/blogs/all-about-fonts"
  //     },
  //     {
  //       title: "All about SEO for developers",
  //       href: "/blogs/all-about-SEO-for-developers"
  //     },
  //     {
  //       title: "Npm vs Pnpm vs Bun vs Yarn",
  //       href: "/blogs/npm-vs-pnpm-vs-bun-vs-yarn"
  //     },
  //   ]
  // },
];
