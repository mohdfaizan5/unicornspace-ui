"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideNav = [
  { title: "Hero Section", path: "/components/hero-sections" },
  { title: "Pricing Section", path: "/components/pricing" },
  { title: "FAQ section", path: "/components/faq" },
  { title: "Features section", path: "/components/button" },
  { title: "Testimonials", path: "/components/testimonials" },
  { title: "Forms", path: "/components/forms" },
  { title: "Footer", path: "/components/footer" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 w-screen overflow-x-hidden">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r">
        <ScrollArea className="h-full py-6 px-5 pr-6 lg:py-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            Components
          </h4>
          {sideNav.map((item) => (
            <Link
              key={`${item}`}
              href={item.path}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",

                pathname === item.path
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <span className="ml-2 rounded-md  px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.title}
              </span>
            </Link>
          ))}
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
