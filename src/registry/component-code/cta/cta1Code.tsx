export const Cta1Code = 'import Logo from "@/components/logo"; // Adjust this import if needed\r\nimport { Button } from "@/components/ui/button";\r\nimport { Circle } from "lucide-react"; // This import is not used but kept if needed for future use\r\nimport { useId } from "react";\r\n\r\n// CircleBackground component\r\nfunction CircleBackground({ width = 558, height = 558, ...props }) {\r\n  let id = useId();\r\n\r\n  return (\r\n    <svg\r\n      viewBox="0 0 558 558"\r\n      width={width}\r\n      height={height}\r\n      fill="none"\r\n      aria-hidden="true"\r\n      {...props}\r\n    >\r\n      <defs>\r\n        <linearGradient\r\n          id={id}\r\n          x1="79"\r\n          y1="16"\r\n          x2="105"\r\n          y2="237"\r\n          gradientUnits="userSpaceOnUse"\r\n        >\r\n          <stop className="fill-black text-black" />\r\n          <stop offset="1" className="text-black" stopOpacity="0" />\r\n        </linearGradient>\r\n      </defs>\r\n      <path\r\n        opacity=".2"\r\n        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"\r\n        className="text-black dark:stroke-white stroke-black"\r\n      />\r\n      <path\r\n        d="M1 279C1 125.465 125.465 1 279 1"\r\n        stroke={`url(#${id})`}\r\n        strokeLinecap="round"\r\n      />\r\n    </svg>\r\n  );\r\n}\r\n\r\n// Main Cta1 component\r\nexport default function Cta1() {\r\n  return (\r\n    <section id="cta1" className="relative h-96 overflow-hidden py-20 sm:py-28">\r\n      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">\r\n        <CircleBackground className="animate-spin-slower " />\r\n      </div>\r\n      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">\r\n        <div className="mx-auto max-w-md sm:text-center">\r\n          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">\r\n            Get your first tips today\r\n          </h2>\r\n          <p className="mt-4 text-lg ">\r\n            It takes 30 seconds to sign up. Download the app and create an\r\n            account today and we&#39;ll send you a tip guaranteed to double your\r\n            first investment.\r\n          </p>\r\n          <div className="mt-8 flex justify-center">\r\n            <Button variant={"outline"}>Get Started</Button>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </section>\r\n  );\r\n}\r\n';
