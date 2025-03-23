// Todo: Think
import { Resource, SearchParams } from "@/types";
import ResourceGallery from "./resource-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Webdev Resources - UnicornSpaceUI",
  description:
    "A free collection of web development resources, tools, and utilities to boost your development process. Simple to use and open-source.",
};


// TODO: Write a type for the resource object and make sure category a enum and isFavorite is used wisely and not overused

const page = (props: { searchParams: SearchParams }) => {
  // const searchParams = use(props.searchParams);

  // if (searchParams.filter) {
  //   console.log(searchParams.filter);
  // }
  return (
    <div className="">
      <ResourceGallery data={resourcesData} />

      {/* <h1 className="text-2xl font-bold">Resources</h1>
      <div className="flex flex-wrap gap-x-2 gap-y-1 py-4">
        {resources.map((resource, i) => (
          <div key={i}>
            <Badge>{resource.category}</Badge>
          </div>
        ))}
      </div>
      <main className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {resources.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            title={resource.title}
            link={resource.link}
          />
        ))}
      </main> */}
    </div>
  );
};

export default page;

const resourcesData: Resource[] = [
  {
    title: "Logo Shaper",
    link: "https://www.logoshaper.co/",
    description: "A modern logo maker with a collection of icons and shapes.",
    category: "tools",
    isFavorite: true,
  },
  {
    category: "tools",
    description: "fffuel is a collection of color tools and free SVG generators for gradients, patterns, textures, shapes & backgrounds",
    link: "https://www.fffuel.co/",
    title: "fffuel",
    isFavorite: true,
  },
  {
    category: "other",
    description: "Collection of modern, background snippets",
    link: "https://bg.ibelick.com/",
    title: "Background Generator",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-extension.vercel.app/",
    title: "Shadcn Extension",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "Create Web Startups 300% Faster With UnicornSpaceUI",
    link: "https://ui.unicorn-space.com/",
    title: "UnicornSpace UI",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "UI library for Design Engineers - 150+ free and open-source animated components and effects",
    link: "https://magicui.design",
    title: "Magic UI",
    isFavorite: false,
  },
  {
    category: "UI",
    description: "A collections of motion UI components ",
    link: "https://ui.aceternity.com/",
    title: "Aceternity UI",
    isFavorite: false,
  },
  {
    category: "assets",
    description: "Open source illustrations kit (120+ SVG illustrations)",
    link: "https://illlustrations.co/",
    title: "Illlustrations co",
    isFavorite: true,
  },
  {
    category: "icons",
    description: "https://3dicons.co/?cs",
    link: "https://3dicons.co/?cs",
    title: "3dicons",
    isFavorite: true,
  },
  {
    category: "assets",
    description: "100+ Abstract shapes with cool grainy gradient. Ready to use with any design dev project.",
    link: "https://coolshap.es/",
    title: "Coolshapes",
    isFavorite: true,
  },
  {
    category: "inspiration",
    description: "https://3dicons.co/?cs",
    link: "https://designvault.io/type/landing-page/",
    title: "Landing page collections",
    isFavorite: true,
  },
  {
    category: "inspiration",
    description: "",
    link: "https://minimal.gallery/",
    title: "minimal.gallery collections",
    isFavorite: true,
  },
  {
    category: "inspiration",
    description: "",
    link: "https://saaslandingpage.com/",
    title: "SaaS Landing page collections",
    isFavorite: true,
  },

  {
    category: "icons",
    description: "SVG Handdrawn playfull Icons",
    link: "https://popsy.co/icons",
    title: "Popsy Handdrawn icons",
    isFavorite: true,
  },

  {
    category: "inspiration",
    description: "",
    link: "https://www.twblocks.com/",
    title: "Landing page components collections",
    isFavorite: true,
  },
  {
    category: "nextjs",
    description: "Make documentations",
    link: "https://fumadocs.vercel.app/",
    title: "Fuma docs",
    isFavorite: false,
  },
  {
    category: "nextjs",
    description: "Query params manager nextjs library",
    link: "https://nuqs.47ng.com/",
    title: "Nuqs",
    isFavorite: false,
  },
  {
    category: "other",
    description: "The Ultimate Collection of CSS-only Shapes",
    link: "https://css-shape.com/",
    title: "CSS shapes",
    isFavorite: false,
  },

  {
    category: "UI",
    description: "Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.",
    link: "https://nsui.irung.me/",
    title: "Shadcn/UI Marketing Blocks",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-form-build.vercel.app/playground",
    title: "Shadcn Form Builder",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "Collection of dark mode components and effects",
    link: "https://ui.ibelick.com/",
    title: "UI Resources",
    isFavorite: true,
  },
  // {
  // ? Not working",
  //   category: "tools",
  //   description: "Change colors in realtime for shadcn",
  //   link: "https://www.cssvariables.com/",
  //   title: "css Variables editor 
  //   isFavorite: true,
  // },
  {
    category: "resources",
    description: "A collection of all shadcn resources",
    link: "https://github.com/birobirobiro/awesome-shadcn-ui",
    title: "Awesome Shadcn UI",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of all shadcn resources",
    link: "https://ui-8dy8ykf4h-shadcn-pro.vercel.app/blocks",
    title: "Shadcn old block",
    isFavorite: true,
  },
  {
    category: "tools",
    description: "collection of Tailwind CSS buttons designed to enhance your website's look",
    link: "https://buttons.ibelick.com/",
    title: "Buttons by iBelick",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "Animated cusor component built with React, TypeScript, Tailwind CSS, and Framer Motion.",
    link: "https://cursify.vercel.app/components",
    title: "Cursify",
    isFavorite: false,
  },
  {
    category: "UI",
    description: "UI library contains minimalist, subtle animated components",
    link: "https://motion-primitives.com/",
    title: "Motion Primitives",
    isFavorite: true,
  },
  {
    category: "tools",
    description: "A curated collection of animations crafted exclusively with Tailwind CSS",
    link: "https://animation.ibelick.com/",
    title: "TailwindCSS Animations - iBelick",
    isFavorite: false,
  },
  // {
  //   category: "UI",
  //   description: "iBelick's main website",
  //   link: "https://ibelick.com/",
  //   title: "iBelick",
  //   isFavorite: false,
  // },
  {
    category: "UI",
    description: "Interactive rich set of dataviz components, built on top of D3 and React.",
    link: "https://nivo.rocks",
    title: "Nivo Charts (Advanced)",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "Color contrast checker",
    link: "https://colourcontrast.cc/?background=ffffff&foreground=222222",
    title: "Color Contrast Checker",
    isFavorite: false,
  },
  {
    category: "Typography",
    description: "Type in your text to see how it looks with various fonts. Get inspired by links to websites that feature these fonts in real-world use.",
    link: "https://ui.unicorn-space.com/tools/fonts-in-use",
    title: "Fonts in Use",
    isFavorite: true,
  },
  {
    category: "Typography",
    description: "Free fonts and font pairings to use for your next design project - Font pairing suggestions",
    link: "https://www.fontpair.co/",
    title: "Font Pair",
    isFavorite: false,
  },
  {
    category: "Typography",
    description: "Google Fonts typography examples",
    link: "https://femmebot.github.io/google-type/",
    title: "Google Type by Femmebot",
    isFavorite: false,
  },
  {
    category: "other",
    description: "Grid background pattern generator",
    link: "https://www.magicpattern.design/tools/grid-background-pattern-generator",
    title: "Grid Pattern Generator",
    isFavorite: false,
  },
  {
    category: "icons",
    description: "Remix Icon library",
    link: "https://remixicon.com/",
    title: "Remix Icons",
    isFavorite: false,
  },
  // {
  //   category: "other",
  //   description: "Tool to beautify screenshots",
  //   link: "https://screely.com/editor",
  //   title: "Screely",
  //   isFavorite: false,
  // },
  //? not that much high quality
  // {
  //   category: "other",
  //   description: "Screenshot beautifier app",
  //   link: "https://screenshot-beautifier.vercel.app/",
  //   title: "Screenshot Beautifier",
  //   isFavorite: false,
  // },
  {
    category: "other",
    description: "Create beautiful screenshots",
    link: "https://screenzy.io/#",
    title: "Screenzy",
    isFavorite: false,
  },
  {
    category: "Typography",
    description: "Fonts that go together - Typography inspiration platform ",
    link: "https://typ.io/",
    title: "Typ.io",
    isFavorite: false,
  },
  {
    category: "other",
    description: "A collection of tools to enhance your design and code workflow. Perfect for developers, designers and marketers.",
    link: "https://www.magicpattern.design/tools",
    title: "Magic Pattern Tools",
    isFavorite: false,
  },
  {
    category: "other",
    description: "Open Graph generator for video previews",
    link: "https://webcode.tools/open-graph-generator/video-movie",
    title: "Open Graph Generator",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "SVG shape generator",
    link: "https://www.softr.io/tools/svg-shape-generator",
    title: "SVG Shape Generator",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "SVG wave generator",
    link: "https://www.softr.io/tools/svg-wave-generator",
    title: "SVG Wave Generator with customizations",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "Generative design shapes and backgrounds",
    link: "https://app.haikei.app/",
    title: "Haikei",
    isFavorite: false,
  },
  {
    category: "tools",
    description: "Color palette generator",
    link: "https://coolors.co/palette/d0e7fa-1f242c-0b436e-197ecd-676f74-eef5ff",
    title: "Coolors Palette",
    isFavorite: false,
  },
  {
    category: "resources",
    description: "Design resources and inspirations",
    link: "https://designvault.io/",
    title: "Design Vault",
    isFavorite: false,
  },
  {
    category: "resources",
    description: "Mobile design inspirations",
    link: "https://mobbin.com/",
    title: "Mobbin",
    isFavorite: false,
  },
  {
    category: "UI",
    description: "Tailwind blocks",
    link: "https://tailwindcss.com/plus/ui-blocks/marketing/sections/heroes",
    title: "Flowbite",
    isFavorite: false,
  },
  {
    category: "resources",
    description: "Tailwind component library",
    link: "https://flowbite.com/",
    title: "Flowbite",
    isFavorite: false,
  },
  {
    category: "assets",
    description: "Free vector illustrations (Notion style)",
    link: "https://popsy.co/illustrations",
    title: "Popsy Illustrations",
    isFavorite: true,
  },
  {
    category: "assets",
    description: "Awesome free customizable illustrations with customizations and animations",
    link: "https://storyset.com",
    title: "Storyset Illustrations",
    isFavorite: false,
  },
  {
    category: "assets",
    description: "CSS animated background generator",
    link: "https://wweb.dev/resources/animated-css-background-generator",
    title: "Animated CSS Background Generator",
    isFavorite: false,
  },
  {
    category: "UI",
    description: "Premium UI kit components",
    link: "https://originui.com/",
    title: "Origin UI",
    isFavorite: false,
  },
  {
    category: "UI",
    description: "Shadcn UI expansions",
    link: "https://shadcnui-expansions.typeart.cc/",
    title: "Shadcn UI Expansions",
    isFavorite: false,
  },
];
