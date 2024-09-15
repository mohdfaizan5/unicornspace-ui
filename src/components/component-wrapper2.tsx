import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page
// import { cn } from "@/lib/utils";

// interface ComponentWrapperProps {
//   className?: string;
//   children: any;
// }
// const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
//   return (
//     <div
//       className={cn(
//         "max-w-screen overflow-y-hidden  h-2/3 px-5 relative flex flex-col items-center justify-center rounded-xl bg-background p-0 md:border md:px-6",
//         className,
//       )}
//     >
//       <div
//         className={cn(
//           `absolute inset-0  size-full`,
//           `bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_0.6px)]`,
//           "lab-bg [background-size:16px_16px]",
//         )}
//       />
//       {children}
//     </div>
//   );
// };

// export default ComponentWrapper;