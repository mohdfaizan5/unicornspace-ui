import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RiNotionFill } from "react-icons/ri";
import AvatarList from "../others/avatar-list";

export default function HeroSection9() {
  const features = [
    "Courses",
    "Blogs",
    "Youtube Channels",
    "Newsletters",
    "Communities",
    "Website Builders",
    "Apps",
    "Widgets",
    "And many more...",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 ">
      <Badge
        variant={"outline"}
        className="flex gap-2 mb-4 mx-auto text-sm w-fit "
      >
        <RiNotionFill /> Notion certified
      </Badge>
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          150+ resources and tools to
          <br />
          master the world of Notion
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the powerful world of Notion and boost your Notion skills
          with this free directory. Find everything you need to become a Notion
          master.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1 flex-col">
            <AvatarList />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold">4.8</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    className="w-5 h-5 text-yellow-400 fill-current"
                    key={i}
                  />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground text-sm">
              From 733+ reviews
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="rounded-full  p-1 bg-[#006D3F]">
              <Check className="w-4 h-4 bg- " />
            </div>
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
