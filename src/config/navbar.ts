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
// 🔂🔁❌

export const navigation: NavigationProps[] = [
  {
    title: "Introduction",
    href: "/components/getting-started",
    links: [
      { title: "Getting started", href: "/components/getting-started" },
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
        // label: "Updated",
      },
      {
        title: "Features",
        href: "/components/features-sections",
        // label: "Just Arrived🔥",
      },
      {
        title: "Pricing",
        href: "/components/pricing",
      },
      {
        title: "Navbar",
        href: "/components/navbars",
        // label: "Updated",
      },
      { title: "Testimonials", href: "/components/testimonials" },
      { title: "Other", href: "/components/other-stuff" },
      { title: "Faq", href: "/components/faq-section" },
      { title: "Footers", href: "/components/footer-section" },
      { title: "CTA Sections", href: "/components/cta-section" },
      { title: "Ecommerce", href: "/components/ecommerce" },
    ],
  },
  {
    title: "Tools",
    href: "/tools",
    links: [
      // {
      //   title: "Glass Morphism generator",
      //   href: "/tools/glass-morphism",
      //   label: "New",
      // },
      // { title: "Readme generator", href: "/tools/readme-generator" },
      // { title: "Shadcn Theme generator", href: "/tools/color-theme-generator" },
      // { title: "Shadcn Themes", href: "/tools/shadcn-color-themes" },
      { title: "Fonts in Use", href: "/tools/fonts-in-use" },
      { title: "Color palettes", href: "/tools/color-palettes" },
      {
        title: "Color converter",
        href: "/tools/color-convertor",
      },
      // {
      //   title: "Gradient Generator",
      //   href: "/tools/bg-generator",
      // },
      // {
      //   title: "Color contrast checker",
      //   href: "/tools/contrast-checker",
      // label: "for V4"
      // },
      {
        title: "Resources",
        href: "/tools/resources",
        label: "Updated",
      },
    ],
  },
  {
    title: "Guides",
    href: "/guides",
    links: [
      { title: "Next Auth", href: "/guides/authjs-v5-in-nextjs15", label: "Updated" },
      { title: "Razorpay nextjs", href: "/guides/razorpay-in-nextjs-15-the-no-bs-way" },
      // { title: "Stripe", href: "/guides/stripe" },
      { title: "Prisma Basics", href: "/guides/prisma-orm-basics-in-nextjs-15" },
      // { title: "Prisma Advanced(Faizan)", href: "/guides/prisma-advanced" },
      { title: "Typescript Basics", href: "/guides/typescript-50" },
      // {
      //   title: "ContentLayer & MDX❌ (Tahir)",
      //   href: "/guides/contentlayer-mdx-nextjs14",
      // },
      // { title: "UploadThing", href: "/guides/uploadthing" },
      {
        title: "SEO - The Fundamentals",
        href: "/guides/seo-the-fundamentals",
        label: "New!",
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
