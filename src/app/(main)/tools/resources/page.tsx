"use client";
// Todo: Think
import ResourceCard from "@/components/tools/resource-card";
import { Badge } from "@/components/ui/badge";
import { Resource, SearchParams } from "@/types";
import { useState } from "react";
import { use } from "react";
import ResourceGallery from "./resource-gallery";

/*


for resources section -> https://www.ethicaldesignresources.com/

*/

// TODO: Write a type for the resource object and make sure category a enum and isFavorite is used wisely and not overused

const page = (props: { searchParams: SearchParams }) => {
  // const searchParams = use(props.searchParams);

  // if (searchParams.filter) {
  //   console.log(searchParams.filter);
  // }
  return (
    <div className="">
      <ResourceGallery data={resourcesData}/>

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
    category: "logo",
    description: "logo maker",
    link: "https://www.logoshaper.co/",
    title: "Logo Shaper",
    isFavorite: true,
  },
  {
    category: "bg generator",
    description: "A collection of backgrounds",
    link: "https://bg.ibelick.com/",
    title: "Background Generator",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-extension.vercel.app/",
    title: "Shadcn Form Builder",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-form-build.vercel.app/playground",
    title: "Shadcn Extension",
    isFavorite: true,
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://ui.ibelick.com/",
    title: "UI Resources",
    isFavorite: true,
  },
  {
    category: "Chrome Extension",
    description: "Change colors in realtime for shadcn",
    link: "https://www.cssvariables.com/",
    title: "css Variables editor - Not working",
    isFavorite: true,
  },
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
    category: "tool",
    description: "Button design tools",
    link: "https://buttons.ibelick.com/",
    title: "Buttons by iBelick",
    isFavorite: false,
  },
  {
    category: "tool",
    description: "UI design inspirations",
    link: "https://ui.ibelick.com/",
    title: "UI by iBelick",
    isFavorite: false,
  },
  {
    category: "tool",
    description: "Animation examples and tools",
    link: "https://animation.ibelick.com/",
    title: "Animations by iBelick",
    isFavorite: false,
  },
  {
    category: "website",
    description: "iBelick's main website",
    link: "https://ibelick.com/",
    title: "iBelick",
    isFavorite: false,
  },
  {
    category: "calendar",
    description: "Interactive calendar visualization library",
    link: "https://nivo.rocks/calendar/",
    title: "Nivo Calendar",
    isFavorite: false,
  },
  {
    category: "color",
    description: "Color contrast checker",
    link: "https://colourcontrast.cc/?background=ffffff&foreground=222222",
    title: "Color Contrast Checker",
    isFavorite: false,
  },
  {
    category: "fonts",
    description: "Font pairing suggestions",
    link: "https://www.fontpair.co/",
    title: "Font Pair",
    isFavorite: false,
  },
  {
    category: "fonts",
    description: "Google Fonts typography examples",
    link: "https://femmebot.github.io/google-type/",
    title: "Google Type by Femmebot",
    isFavorite: false,
  },
  {
    category: "shapes",
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
  {
    category: "screenshots",
    description: "Tool to beautify screenshots",
    link: "https://screely.com/editor",
    title: "Screely",
    isFavorite: false,
  },
  {
    category: "screenshots",
    description: "Screenshot beautifier app",
    link: "https://screenshot-beautifier.vercel.app/",
    title: "Screenshot Beautifier",
    isFavorite: false,
  },
  {
    category: "screenshots",
    description: "Create beautiful screenshots",
    link: "https://screenzy.io/#",
    title: "Screenzy",
    isFavorite: false,
  },
  {
    category: "typography",
    description: "Typography inspiration platform",
    link: "https://typ.io/",
    title: "Typ.io",
    isFavorite: false,
  },
  {
    category: "patterns",
    description: "Various design tools",
    link: "https://www.magicpattern.design/tools",
    title: "Magic Pattern Tools",
    isFavorite: false,
  },
  {
    category: "media",
    description: "Open Graph generator for video previews",
    link: "https://webcode.tools/open-graph-generator/video-movie",
    title: "Open Graph Generator",
    isFavorite: false,
  },
  {
    category: "shapes",
    description: "SVG shape generator",
    link: "https://www.softr.io/tools/svg-shape-generator",
    title: "SVG Shape Generator",
    isFavorite: false,
  },
  {
    category: "shapes",
    description: "SVG wave generator",
    link: "https://www.softr.io/tools/svg-wave-generator",
    title: "SVG Wave Generator",
    isFavorite: false,
  },
  {
    category: "shapes",
    description: "Generative design shapes and backgrounds",
    link: "https://app.haikei.app/",
    title: "Haikei",
    isFavorite: false,
  },
  {
    category: "colors",
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
    category: "resources",
    description: "Tailwind component library",
    link: "https://flowbite.com/",
    title: "Flowbite",
    isFavorite: false,
  },
  {
    category: "illustrations",
    description: "Free illustrations for events",
    link: "https://storyset.com/illustration/events/rafiki",
    title: "Storyset Illustrations",
    isFavorite: false,
  },
  {
    category: "backgrounds",
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
