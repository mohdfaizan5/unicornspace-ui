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

export const toolsSidebarData: componentsSidebar = [
  {
    title: "Tools",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Color Generator",
        href: "/tools/color-theme-generator",
        items: [],
      },

      {
        title: "Fonts in use",
        href: "/tools/fonts-in-use",
        items: [],
      },
      {
        title: "Color Palettes",
        href: "/tools/colors-palettes",
        items: [],
      },
      {
        title: "Readme Generator",
        href: "/tools/readme-generator",
        items: [],
      },
      {
        title: "Resources",
        href: "/tools/resources",
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
