import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group relative w-80 flex flex-col gap-2 rounded-lg border p-4 text-sm bg-background",
        className
      )}
    >
      <div className="text-balance text-lg font-semibold leading-tight group-hover:underline">
        Bring Your Digital Vision to Life with Our Services
      </div>
      <div>Trusted by businesses and creatives alike.</div>
      <div>
        We design and develop stunning websites, powerful eCommerce stores, and
        professional portfolios that stand out.
        {/* Let's Build Your Dream Website Today */}
      </div>
      <Button size="sm" className="mt-2 w-fit">
        Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      <Link
        href="https://www.unicornspace.tech/"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">Deploy to Vercel</span>
      </Link>
    </div>
  );
}
