export type toolItem = {
  title: string;
  href: string;
  items: toolItem[];
};

export type ComponentSection = {
  title: string;
  items: toolItem[];
};

export type componentsSidebar = ComponentSection[];

export const guidesSidebarData: componentsSidebar = [
  {
    title: "Guides",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      // {
      //   title: "Stripe 101",
      //   href: "/tools/color-theme-generator",
      //   items: [],
      // },

      // {
      //   title: "Lucia Auth",
      //   href: "/tools/fonts-in-use",
      //   items: [],
      // },
      // {
      //   title: "Framer motion",
      //   href: "/tools/colors-palettes",
      //   items: [],
      // },
      // {
      //   title: "TypeScript Cheatsheet",
      //   href: "/tools/readme-generator",
      //   items: [],
      // },
      // {
      //   title: "SAAS 50 Cheatsheet",
      //   href: "/tools/readme-generator",
      //   items: [],
      // },
      // {
      //   title: "Resources",
      //   href: "/tools/resources",
      //   items: [],
      // },
      {
        title: "All you need to know about fonts",
        href: "/guides/all-about-fonts",
        items: [],
      },
      {
        title: "PNPM vs NPM vs Bun vs Yarn",
        href: "/guides/npm-vs-pnpm-vs-bun-vs-yarn",
        items: [],
      },
      {
        title: "Other",
        href: "/tools/colors-palettes",
        items: [],
      },
    ],
  },
];
