import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const TechStackIcons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("py-4", className)}>
      <TooltipProvider>
        <div className="flex-row gap-6 mx-auto flex w-full items-start justify-center">
          <Tooltip>
            <TooltipTrigger>
              <Icons.React />
            </TooltipTrigger>
            <TooltipContent side="bottom">React</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Icons.TailwindCSS />
            </TooltipTrigger>
            <TooltipContent side="bottom">TailwindCSS</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Icons.framerMotion />
            </TooltipTrigger>
            <TooltipContent side="bottom">Framer Motion</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Icons.typescript />
            </TooltipTrigger>
            <TooltipContent side="bottom">TypeScript</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Icons.shadCn />
            </TooltipTrigger>
            <TooltipContent side="bottom">ShadCn</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default TechStackIcons;
