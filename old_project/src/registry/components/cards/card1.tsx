import React from 'react'

const card1 = () => {
  return (
    <div>card1</div>
  )
}

export default card1
// // imports
// import Link from "next/link";
// import clsx from "clsx";
// import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

// // TODO: bad code, need to refactor


// // Types for Polymorphic Components
// type AsProp<C extends ElementType> = { as?: C };
// type PolymorphicProps<C extends ElementType, Props = {}> = Props &
//   AsProp<C> &
//   Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

// // Icon Component

// // Card Component
// type CardProps<C extends ElementType = "div"> = {
//   hoverEffect?: boolean;
//   className?: string;
//   children: ReactNode;
// };

// export function Card<C extends ElementType = "div">({
//   as,
//   hoverEffect = true,
//   className,
//   children,
//   ...props
// }: PolymorphicProps<C, CardProps<C>>) {
//   const Component = as || "div";
//   return (
//     <Component
//       className={clsx(
//         "relative flex flex-col items-start",
//         hoverEffect && "group",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </Component>
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
//   const Component = as || "h2";
//   return (
//     <Component
//       className={clsx(
//         "text-base font-semibold text-zinc-800 dark:text-zinc-100",
//         className
//       )}
//       {...props}
//     >
//       {href ? <Card.Link href={href}>{children}</Card.Link> : children}
//     </Component>
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
