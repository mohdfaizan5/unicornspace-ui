import { ScrollArea } from "@/components/ui/scroll-area";
import { guidesSidebarData } from "@/config/guides";
import { allComponents } from "contentlayer/generated";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex md:px-8 items-start lg:gap-11">
      <aside className="hidden  md:block md:w-1/6">
        <ScrollArea className="h-full flex flex-col gap-4 py-6 lg:py-8">
          <h4 className="mb-1 rounded-md py-1 font-semibold">
            Components
          </h4>
          {allComponents.map((item, i) => (
            <Link
              key={i}
              href={item.slug}
              className="block rounded-md hover:underline text-muted-foreground"
            >
              {item.title}
            </Link>
          ))}
        </ScrollArea>
      </aside>
      <div className="py-8 px-5 min-w-96">{children}</div>
    </div>
  );
}
