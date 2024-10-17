import { cn } from "@/lib/utils";
import React from "react";

export const Step = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3
    className={cn(
      "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

export const Steps = () => {
  return <div>steps</div>;
};
({ ...props }) => (
  <div
    className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
    {...props}
  />
);
