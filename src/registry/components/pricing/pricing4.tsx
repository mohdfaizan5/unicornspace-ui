import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User, Clock, DollarSign } from "lucide-react";

interface PlanProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  href: string;
  featured?: boolean;
}

interface GridPatternProps {
  x: string;
  y: string;
}

function GridPattern({ x, y }: GridPatternProps) {
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={`patterasfdnId`}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${`patternId`})`} />
    </svg>
  );
}

function Plan({
  name,
  description,
  price,
  features,
  href,
  featured,
}: PlanProps) {
  return (
    <div
      className={cn(
        "relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12",
        featured
          ? "bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground rounded-[50px] sm:shadow-lg"
          : "bg-background dark:bg-background rounded-[50px]"
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-primary-foreground/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={cn(
            "mt-7 text-lg font-semibold tracking-tight",
            featured ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "mt-2 text-lg tracking-tight",
            featured ? "text-primary-foreground/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={cn(
              "text-[1.75rem] leading-tight",
              featured ? "text-primary-foreground/80" : "text-muted-foreground"
            )}
          >
            $
          </span>
          <span
            className={cn(
              "ml-1 mt-1 text-7xl tracking-tight",
              featured ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={cn(
              "-my-2 divide-y text-base tracking-tight",
              featured
                ? "divide-primary-foreground/10 text-primary-foreground"
                : "divide-border text-foreground"
            )}
          >
            {features.map((feature) => (
              <li key={feature} className="flex py-2">
                <Check
                  className={cn(
                    "h-4 w-4 flex-none mt-1",
                    featured ? "text-primary-foreground" : "text-primary"
                  )}
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link href={href} className="mt-8">
          <Button
            className={cn(
              "w-full font-semibold",
              featured
                ? "bg-background text-foreground hover:bg-background/90 dark:bg-background dark:text-foreground dark:hover:bg-background/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            aria-label={`Get started with the ${name} plan for $${price}`}
          >
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Testimonial6() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pick your package
        </h2>
        <p className="mt-4 max-w-xl text-base tracking-tight text-muted-foreground">
          Everything Starts as a Square is available in two different packages
          so you can pick the one thats right for you.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid gap-8 rounded-[50px] sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Essential"
            description="The perfect starting point if you're on a budget."
            price={15}
            href="#"
            features={[
              "The 240-page ebook",
              "Figma icon templates",
              "Community access",
            ]}
          />
          <Plan
            featured
            name="Complete"
            description="Everything icon resource you could ever ask for."
            price={229}
            href="#"
            features={[
              "The 240-page ebook",
              "Figma icon templates",
              "Over an hour of screencasts",
              "Weekly icon teardowns",
              "Community access",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export function MetricsSection() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Trusted by thousands of teams across all industries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Active Companies */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-full bg-zinc-100">
              <User className="w-8 h-8 text-zinc-700" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">70,000+</div>
            <div className="text-zinc-600">Active Companies</div>
          </div>

          {/* Divider (visible only on desktop) */}
          <div className="hidden md:block absolute left-1/3 top-1/2 w-px h-16 bg-zinc-200 -translate-y-1/2" />

          {/* Hours Tracked */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-full bg-zinc-100">
              <Clock className="w-8 h-8 text-zinc-700" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">2 Billion</div>
            <div className="text-zinc-600">Hours Tracked</div>
          </div>

          {/* Divider (visible only on desktop) */}
          <div className="hidden md:block absolute right-1/3 top-1/2 w-px h-16 bg-zinc-200 -translate-y-1/2" />

          {/* Amount Invoiced */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-full bg-zinc-100">
              <DollarSign className="w-8 h-8 text-zinc-700" />
            </div>
            <div className="text-3xl md:text-4xl font-bold mb-2">
              $63+ Billion
            </div>
            <div className="text-zinc-600">Invoiced by Customers</div>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-6 text-lg rounded-full"
          >
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
}
