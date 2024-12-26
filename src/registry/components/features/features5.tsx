"use client";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useId } from "react";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x: string | number;
  y?: number;
  squares?: [number, number][];
}

function GridPattern({
  width,
  height,
  x,
  y = 0,
  squares = [],
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
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

interface Resource {
  href: string;
  name: string;
  description: string;
  icon: string;
  pattern: Omit<GridPatternProps, "width" | "height" | "x">;
}

const resources: Resource[] = [
  {
    href: "/contacts",
    name: "Contacts",
    description: "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
    icon: "🌐",
    pattern: { y: 16, squares: [[0, 1], [1, 3]] },
  },
  {
    href: "/conversations",
    name: "Conversations",
    description: "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
    icon: "🌐",
    pattern: { y: -6, squares: [[-1, 2], [1, 3]] },
  },
  {
    href: "/messages",
    name: "Messages",
    description: "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
    icon: "🌐",
    pattern: { y: 32, squares: [[0, 2], [1, 4]] },
  },
  {
    href: "/groups",
    name: "Groups",
    description: "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
    icon: "🌐",
    pattern: { y: 22, squares: [[0, 1]] },
  },
];

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
      <div className="absolute inset-0 rounded-2xl transition duration-300 group-hover:opacity-50">
        <GridPattern
          width={width}
          height={height}
          x={x}
          {...pattern}
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
        />
      </div>
      <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]" style={style} />
      <motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" style={style}>
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
    <div onMouseMove={onMouseMove} className="group relative flex rounded-2xl transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
      <ResourcePattern
        width={72}
        height={56}
        x="50%"
        pattern={resource.pattern}
        mouseX={mouseX}
        mouseY={mouseY}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <h3 className="mt-4 text-sm font-semibold leading-7 ">
          <Link href={resource.href}>{resource.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  );
}

export default function Features5() {
  return (
    <div className="my-16 xl:max-w-none">
      <h2 className="text-3xl" id="resources">Resources</h2>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  );
}
