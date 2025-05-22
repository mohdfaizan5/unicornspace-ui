import Logo from "@/components/logo"; // Adjust this import if needed
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react"; // This import is not used but kept if needed for future use
import { useId } from "react";

// CircleBackground component
function CircleBackground({ width = 558, height = 558, ...props }) {
  let id = useId();

  return (
    <svg
      viewBox="0 0 558 558"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          x1="79"
          y1="16"
          x2="105"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="fill-black text-black" />
          <stop offset="1" className="text-black" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
        className="text-black dark:stroke-white stroke-black"
      />
      <path
        d="M1 279C1 125.465 125.465 1 279 1"
        stroke={`url(#${id})`}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Main Cta1 component
export default function Cta1() {
  return (
    <section id="cta1" className="relative h-96 overflow-hidden py-20 sm:py-28">
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground className="animate-spin-slower " />
      </div>
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Get your first tips today
          </h2>
          <p className="mt-4 text-lg ">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we&#39;ll send you a tip guaranteed to double your
            first investment.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant={"outline"}>Get Started</Button>
          </div>
        </div>
      </section>
    </section>
  );
}
