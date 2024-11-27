import ResourceCard from "@/components/tools/resource-card";
import resourceData from "@/data/resources.json";
// https://buttons.ibelick.com/
// https://ui.ibelick.com/
// https://animation.ibelick.com/
// https://ibelick.com/
// https://nivo.rocks/calendar/

/*
https://colourcontrast.cc/?background=ffffff&foreground=222222
https://www.fontpair.co/
https://femmebot.github.io/google-type/
https://www.magicpattern.design/tools/grid-background-pattern-generator
https://remixicon.com/
https://screely.com/editor
https://screenshot-beautifier.vercel.app/
https://screenzy.io/#
https://typ.io/
https://www.magicpattern.design/tools
https://webcode.tools/open-graph-generator/video-movie
https://www.softr.io/tools/svg-shape-generator
https://www.softr.io/tools/svg-wave-generator
https://app.haikei.app/
https://coolors.co/palette/d0e7fa-1f242c-0b436e-197ecd-676f74-eef5ff
https://designvault.io/
https://mobbin.com/
https://flowbite.com/
https://storyset.com/illustration/events/rafiki
https://wweb.dev/resources/animated-css-background-generator


*/ 

const resources = [
  {
    category: "logo",
    description: "logo maker",
    link: "https://www.logoshaper.co/",
    title: "Logo Shaper",
  },
  {
    category: "bg generator",
    description: "A collection of backgrounds",
    link: "https://bg.ibelick.com/",
    title: "Background Generator",
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-extension.vercel.app/",
    title: "Shadcn Form Builder",
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://shadcn-form-build.vercel.app/playground",
    title: "Shadcn Extension",
  },
  {
    category: "UI",
    description: "A collection of free resources for designers.",
    link: "https://ui.ibelick.com/",
    title: "UI Resources",
  },
  {
    category: "Chrome Extension",
    description: "Change colors in realtime for shadcn",
    link: "https://www.cssvariables.com/",
    title: "css Variables editor - Not working",
  },
  {
    category: "resources",
    description: "A collection of all shadcn resources",
    link: "https://github.com/birobirobiro/awesome-shadcn-ui",
    title: "Awesome Shadcn UI",
  },
  {
    category: "components",
    description: "A collection of all shadcn resources",
    link: "https://ui-8dy8ykf4h-shadcn-pro.vercel.app/blocks",
    title: "Shadcn old block",
  },
];

const page = () => {
  return (
    <div className="">
      <main className="grid grid-cols-1 md:grid-cols-3">
        {resources.map((resource, i) => (
          <ResourceCard
            key={i}
            category={resource.category}
            description={resource.description}
            title={resource.title}
            link={resource.link}
          />
        ))}
      </main>
    </div>
  );
};

export default page;
