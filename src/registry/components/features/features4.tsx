import React from 'react'
// TODO


const features4 = () => {
  return (
    <div>features4</div>
  )
}

export default features4

// import Image from "next/image";

// import { LinkIcon } from "lucide-react";
// import clsx from "clsx";
// import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
// import Link from "next/link";
// export default function Features4() {
//   const projects = [
//     {
//       name: "Planetaria",
//       description:
//         "Creating technology to empower civilians to explore space on their own terms.",
//       link: { href: "http://planetaria.tech", label: "planetaria.tech" },
//       logo: "🌐",
//     },
//     {
//       name: "Animaginary",
//       description:
//         "High performance web animation library, hand-written in optimized WASM.",
//       link: { href: "#", label: "github.com" },
//       logo: "🌐",
//     },
//     {
//       name: "HelioStream",
//       description:
//         "Real-time video streaming library, optimized for interstellar transmission.",
//       link: { href: "#", label: "github.com" },
//       logo: "🌐",
//     },
//     {
//       name: "cosmOS",
//       description:
//         "The operating system that powers our Planetaria space shuttles.",
//       link: { href: "#", label: "github.com" },
//       logo: "🌐",
//     },
//     {
//       name: "OpenShuttle",
//       description:
//         "The schematics for the first rocket I designed that successfully made it to orbit.",
//       link: { href: "#", label: "github.com" },
//       logo: "🌐",
//     },
//   ];

//   return (
//     <div className="flex flex-col justify-center items-center p-10 ">
//       <ul
//         role="list"
//         className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
//       >
//         {projects.map((project) => (
//           <Card as="li" key={project.name}>
//             <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//               {project.logo}
//             </div>
//             <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
//               <Card.Link href={project.link.href}>{project.name}</Card.Link>
//             </h2>
//             <Card.Description>{project.description}</Card.Description>
//             <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
//               <LinkIcon className="h-6 w-6 flex-none" />
//               <span className="ml-2">{project.link.label}</span>
//             </p>
//           </Card>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Types for Polymorphic Components
// type AsProp<C extends ElementType> = { as?: C };
// type PolymorphicProps<C extends ElementType, Props = {}> = Props &
//   AsProp<C> &
//   Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

// // Icon Component

// // Card Component
// type CardProps = {
//   hoverEffect?: boolean;
//   className?: string;
//   children: ReactNode;
// };

// function Card<C extends ElementType = "div">({
//   as,
//   hoverEffect = true,
//   className,
//   children,
//   ...props
// }: PolymorphicProps<C, CardProps>) {
//   return (
//     <div
//       className={clsx(
//         "relative flex flex-col items-start shadow-md px-5 py-2 rounded-lg hover:bg-slate-300 bg-white ",
//         hoverEffect && "group",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }

// // Card.Link
// Card.Link = function CardLink({
//   href,
//   children,
//   className,
//   ...props
// }: {
//   href: string;
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <Link href={href} {...props}>
//       <div
//         className={clsx(
//           "absolute inset-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100",
//           "z-0"
//         )}
//       />
//       <span className="relative z-10">{children}</span>
//     </Link>
//   );
// };

// // Card.Title
// Card.Title = function CardTitle<C extends ElementType = "h2">({
//   as,
//   href,
//   children,
//   className,
//   ...props
// }: PolymorphicProps<C, { href?: string; children: ReactNode }>) {
//   return (
//     <h2
//       className={clsx(
//         "text-base font-semibold text-zinc-800 dark:text-zinc-100",
//         className
//       )}
//       {...props}
//     >
//       {href ? <Card.Link href={href}>{children}</Card.Link> : children}
//     </h2>
//   );
// };

// // Card.Description
// Card.Description = function ({
//   children,
//   className,
// }: {
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <p
//       className={clsx(
//         "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// // Card.Cta
// Card.Cta = function ({
//   children,
//   className,
// }: {
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={clsx(
//         "mt-4 flex items-center text-sm font-medium text-teal-500",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// // Card.Eyebrow
// Card.Eyebrow = function <C extends ElementType = "p">({
//   as,
//   decorate = false,
//   children,
//   className,
//   ...props
// }: PolymorphicProps<C, { decorate?: boolean; children: ReactNode }>) {
//   return (
//     <div
//       className={clsx(
//         "order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 ",
//         decorate && "pl-3.5 relative",
//         className
//       )}
//       {...props}
//     >
//       {decorate && (
//         <span
//           className="absolute inset-y-0 left-0 flex items-center"
//           aria-hidden="true"
//         >
//           <span className="h-4 w-0.5 bg-zinc-200 dark:bg-zinc-500 rounded-full" />
//         </span>
//       )}
//       {children}
//     </div>
//   );
// };


// /*


// import abstractBackgroundImage from 'public/images/components/abstract-background.png'
// import discordImage from 'public/images/components/discord.svg'
// import figmaImage from 'public/images/components/figma.svg'
// import videoPlayerImage from 'public/images/components/video-player.svg'
// import Image from 'next/image'

// const resources = [
//   {
//     title: 'Figma icon templates',
//     description:
//       'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
//     image: function FigmaImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
//           <Image width={200} height={200} src={figmaImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Weekly icon teardowns',
//     description:
//       'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
//     image: function VideoPlayerImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <Image
//             className="absolute inset-0 h-full w-full object-cover"
//             src={abstractBackgroundImage}
//             alt=""
//             sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
//           />
//           <Image
//             className="relative"
//             src={videoPlayerImage}
//             alt=""
//             unoptimized
//           />
//         </div>
//       )
//     },
//   },
//   {
//     title: 'Community of icon designers',
//     description:
//       "A private Discord server where you can get help and give feedback on each others' work.",
//     image: function DiscordImage() {
//       return (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
//           <Image src={discordImage} alt="" unoptimized />
//         </div>
//       )
//     },
//   },
// ]

// export default function Features4() {
//   return (
//     <section
//       id="resources"
//       aria-labelledby="resources-title"
//       className=" mt-10"
//     >
//       <div>
//         <p className=" font-display text-3xl font-bold tracking-tight text-slate-900">
//           Tools and resources you can use to get started even faster and
//           progress even further.
//         </p>
//         <p className="mt-4 text-[15px] tracking-tight text-slate-600">
//           Design assets, icon teardowns, and a community of fellow icon
//           designers where you can ask questions, get feedback, and accelerate
//           your learning.
//         </p>
//       </div>
//       <div  className="mt-16">
//         <ol
//           role="list"
//           className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
//         >
//           {resources.map((resource) => (
//             <li
//               key={resource.title}
//               className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
//             >
//               <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
//                 <resource.image />
//               </div>
//               <div>
//                 <h3 className="text-base font-medium tracking-tight text-slate-900">
//                   {resource.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-slate-600">
//                   {resource.description}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </section>
//   )
// }

// */