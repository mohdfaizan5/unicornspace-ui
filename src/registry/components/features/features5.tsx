"use client";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useId } from "react";

// Define types for GridPattern props
interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x: string | number;
  y?: number; // Optional with default value
  squares?: [number, number][]; // Array of coordinate pairs
}

// GridPattern component with type annotations
function GridPattern({
  width,
  height,
  x,
  y = 0, // Default value
  squares = [], // Default empty array
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares.length > 0 && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY]) => (
            <rect
              key={`${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
              strokeWidth={0}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Define the resource data structure type
interface Resource {
  href: string;
  name: string;
  description: string;
  icon: string;
  pattern: Omit<GridPatternProps, "width" | "height" | "x">; // Pattern props without redundant fields
}

// Resources data array
const resources: Resource[] = [
  {
    href: "/contacts",
    name: "Contacts",
    description:
      "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
    icon: "🌐",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: "/conversations",
    name: "Conversations",
    description:
      "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
    icon: "🌐",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: "/messages",
    name: "Messages",
    description:
      "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
    icon: "🌐",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: "/groups",
    name: "Groups",
    description:
      "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
    icon: "🌐",
    pattern: { y: 22, squares: [[0, 1]] },
  },
];

// ResourcePattern component
interface ResourcePatternProps {
  width: number;
  height: number;
  x: string | number;
  mouseX: any;
  mouseY: any;
  pattern: Omit<GridPatternProps, "width" | "height" | "x">;
}

function ResourcePattern({
  width,
  height,
  x,
  mouseX,
  mouseY,
  pattern,
}: ResourcePatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={width}
          height={height}
          x={x}
          {...pattern}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
        />
      </div>
      <motion.div
        // TODO: fix this for react 19 and framer motion
        // @ts-ignore
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        // TODO: fix this for react 19 and nextjs 15
        // @ts-ignore
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={width}
          height={height}
          x={x}
          {...pattern}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
        />
      </motion.div>
    </div>
  );
}

// Resource component
interface ResourceProps {
  resource: Resource;
}

function Resource({ resource }: ResourceProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern
        width={72} // Define width explicitly
        height={56} // Define height explicitly
        x="50%" // Define x explicitly
        pattern={resource.pattern} // Pass only the pattern properties
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>{resource.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  );
}

// Resources component
export default function Features5() {
  return (
    <div className="my-16 xl:max-w-none">
      <h2 className="text-3xl" id="resources">
        Resources
      </h2>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  );
}

/*

import logoLaravel from 'public/images/components/laravel.svg'
import logoMirage from 'public/images/components/mirage.svg'
import logoStatamic from 'public/images/components/statamic.svg'
import logoStaticKit from 'public/images/components/statickit.svg'
import logoTransistor from 'public/images/components/transistor.svg'
import logoTuple from 'public/images/components/tuple.svg'
import Image from 'next/image'

const sponsors = [
  { name: 'Transistor', logo: logoTransistor },
  { name: 'Tuple', logo: logoTuple },
  { name: 'StaticKit', logo: logoStaticKit },
  { name: 'Mirage', logo: logoMirage },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Statamic', logo: logoStatamic },
]

export default function Features5() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  )}
*/
