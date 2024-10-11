"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { NavigationProps } from "@/config/navbar";
import { Badge } from "./ui/badge";

export function Navigation({
  navigation,
  className,
}: {
  navigation: NavigationProps[];
  className?: string;
}) {
  let router = useRouter();
  const path = usePathname();
  console.log(path);

  return (
    <nav className={clsx("text-base lg:text-sm w-full py-5", className)}>
      <ul role="list" className="space-y-9 w-full">
        {navigation.map((section) => (
          <li key={section.title}>
            {section.href ? (
              <Link href={section.href}>
                <h2 className="font-display font-medium text-black dark:text-white">
                  {section.title}
                </h2>
              </Link>
            ) : (
              <h2 className="font-display font-medium text-black dark:text-white">
                {section.title}
              </h2>
            )}
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:text-black/80 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                      link.href === path
                        ? "font-semibold text-black dark:text-white  before:bg-primary"
                        : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600  hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    )}
                  >
                    {link.title}
                    {link.label && (
                      <Badge variant={"outline"} className="ml-1 text-xs">
                        {link.label}
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
