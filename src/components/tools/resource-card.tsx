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
      <Card className="w-80 rounded-lg md:shadow-md group">
        <CardContent className=" p-6 flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full items-center">
            <h3 className="flex items-center gap-1 text-lg font-bold font-grotesk leading-6 mt-2 line-clamp-1 ">
              {title}
              {isFavorite && (
                <Star className="text-amber-400 fill-amber-500" size={16} />
              )}
            </h3>

            {/* <CircleArrowOutUpRight size={16}/> */}
          </div>
          <p className="font-normal text-sm text-[#888888] line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between w-full">
            <Badge variant={"secondary"} className="text-[10px]">
              {category}
            </Badge>
            <Button size={"sm"} className="p-1  border rounded-full">
              Visit
              <MoveUpRight
                size={14}
                className="group-hover:rotate-45 transition-all duration-200 group-hover:translate-x-2"
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
    </Link>
  );
}

const CustomBtn1 = () => {
  return (
    <button className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
      <div className="-rotate-45 transition duration-300 group-hover:rotate-0">
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
