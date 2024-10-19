import Image from "next/image";

import { LinkIcon } from "lucide-react";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import Link from "next/link";
export default function Features4() {
  const projects = [
    {
      name: "Planetaria",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: { href: "http://planetaria.tech", label: "planetaria.tech" },
      logo: "🌐",
    },
    {
      name: "Animaginary",
      description:
        "High performance web animation library, hand-written in optimized WASM.",
      link: { href: "#", label: "github.com" },
      logo: "🌐",
    },
    {
      name: "HelioStream",
      description:
        "Real-time video streaming library, optimized for interstellar transmission.",
      link: { href: "#", label: "github.com" },
      logo: "🌐",
    },
    {
      name: "cosmOS",
      description:
        "The operating system that powers our Planetaria space shuttles.",
      link: { href: "#", label: "github.com" },
      logo: "🌐",
    },
    {
      name: "OpenShuttle",
      description:
        "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: { href: "#", label: "github.com" },
      logo: "🌐",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.logo}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </div>
  );
}

// Types for Polymorphic Components
type AsProp<C extends ElementType> = { as?: C };
type PolymorphicProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

// Icon Component

// Card Component
type CardProps = {
  hoverEffect?: boolean;
  className?: string;
  children: ReactNode;
};

function Card<C extends ElementType = "div">({
  as,
  hoverEffect = true,
  className,
  children,
  ...props
}: PolymorphicProps<C, CardProps>) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-start shadow-md px-5 py-2 rounded-lg hover:bg-slate-300 bg-white ",
        hoverEffect && "group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card.Link
Card.Link = function CardLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} {...props}>
      <div
        className={clsx(
          "absolute inset-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100",
          "z-0"
        )}
      />
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

// Card.Title
Card.Title = function CardTitle<C extends ElementType = "h2">({
  as,
  href,
  children,
  className,
  ...props
}: PolymorphicProps<C, { href?: string; children: ReactNode }>) {
  return (
    <h2
      className={clsx(
        "text-base font-semibold text-zinc-800 dark:text-zinc-100",
        className
      )}
      {...props}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </h2>
  );
};

// Card.Description
Card.Description = function ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};

// Card.Cta
Card.Cta = function ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mt-4 flex items-center text-sm font-medium text-teal-500",
        className
      )}
    >
      {children}
    </div>
  );
};

// Card.Eyebrow
Card.Eyebrow = function <C extends ElementType = "p">({
  as,
  decorate = false,
  children,
  className,
  ...props
}: PolymorphicProps<C, { decorate?: boolean; children: ReactNode }>) {
  return (
    <div
      className={clsx(
        "order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 ",
        decorate && "pl-3.5 relative",
        className
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 bg-zinc-200 dark:bg-zinc-500 rounded-full" />
        </span>
      )}
      {children}
    </div>
  );
};
