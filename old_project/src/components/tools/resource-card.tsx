import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
  CircleArrowOutDownRight,
  CircleArrowOutUpRight,
  MoveUpRight,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import { SlScreenDesktop } from "react-icons/sl";
import { AiOutlineFontSize } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaIcons } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

type ResourceCardType = {
  title: string;
  description: string;
  link: string;
  category: string;
  isFavorite?: boolean;
};

function ResourceCard({
  title,
  description,
  // image,
  link,
  category,
  isFavorite,
}: ResourceCardType) {
  return (
    <Link href={link} target="_blank">
      <Card className="w-80 border-[0.4px] pt-0 dark:border-zinc-700 border-zinc-100  xl:w-[310px] dark:hover:bg-zinc-900  bg-[#EFEEF0] dark:bg-[#222125] hover:bg-zinc-200 hover:transition-all hover:delay-75 hover:duration-150 rounded-lg md:shadow-md group">
        <CardContent className=" p-6 flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-start">

              {isFavorite && (
                <Icons.star className=" size-4 mt-1 mr-1 " />
                // <Star className="text-amber-400 fill-amber-500" size={16} />
              )}
              <h3 className="flex items-center gap-1 text-lg font-bold font-grotesk leading-6 line-clamp-1 ">
                {title}
              </h3>
            </div>

            {/* <CircleArrowOutUpRight size={16}/> */}
          </div>
          <p className="font-normal text-sm text-[#888888] line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between w-full">
            <Badge variant={"secondary"} className={cn("text-[10px] dark:text-black", category == "UI" ? "bg-red-100" : category == "Typography" ? "bg-zinc-100" : category == "assets" ? "bg-orange-100" : category == "icons" ? "bg-indigo-100" : category == "tools" ? "bg-amber-100" : category == "inspiration" ? "bg-green-100" : category == "resources" ? "bg-cyan-100" : "dark:text-white")} >
              <span className="mr-1">
                {category == "UI" ? <SlScreenDesktop /> : category == "Typography" ? <AiOutlineFontSize /> : category == "assets" ? <AiOutlineFontSize /> : category == "icons" ? <FaIcons /> : category == "tools" ? <BsTools /> : category == "inspiration" ? <FcIdea /> : category == "resources" ? <GrResources /> : ""}
              </span>
              {category}
            </Badge>
            <Button size={"sm"} className=" text-xs  border rounded-full">
              Visit
              <MoveUpRight
                size={14}
                className="rotate-45 ml-1 group-hover:rotate-12 transition-all duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
          {/* <div className="w-full flex items-center justify-between">
            <Button className="w-full" variant={"default"}>
              Visit
            </Button> 
          </div>
            */}
          {/* <CustomBtn1 /> */}
        </CardContent>
      </Card>
    </Link >
  );
}

const CustomBtn1 = () => {
  return (
    <button className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
      <div className="-rotate-45 transition duration-100 group-hover:rotate-0">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-200"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  );
};
export default ResourceCard;
