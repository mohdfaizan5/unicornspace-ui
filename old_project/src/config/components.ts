// type eachComponent = {
//   title: string;
//   href: string;
//   items: eachComponent[];
// };

// type componentsSidebar = {
//   title: string;
//   items: eachComponent[];
// };

export type ComponentItem = {
  title: string;
  href: string;
  items: ComponentItem[];
};

export type ComponentSection = {
  title: string;
  items: ComponentItem[];
};

export type componentsSidebar = ComponentSection[];

export const componentsSidebarData: componentsSidebar = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Installation",
        href: "/docs/installation",
        items: [],
      },

      {
        title: "Typography",
        href: "/docs/components/typography",
        items: [],
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
        items: [],
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Hero Section",
        href: "/components/hero-sections",
        items: [],
      },
      {
        title: "Pricing Section",
        href: "/components/pricing",
        items: [],
      },
      {
        title: "FAQ section",
        href: "/components/faq",
        items: [],
      },
      {
        title: "Features section",
        href: "/components/features",
        items: [],
      },
      {
        title: "Testimonials section",
        href: "/components/testimonials",
        items: [],
      },
      {
        title: "Forms section",
        href: "/components/forms",
        items: [],
      },
      {
        title: "Footer section",
        href: "/components/footer",
        items: [],
      },
    ],
  },
];
