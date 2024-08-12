import { ScrollArea } from "@/components/ui/scroll-area";
import { toolsSidebarData } from "@/config/tools";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start overflow-x-hidden md:gap-12 ">
      <aside className=" ml-2 hidden h-[calc(100vh-3.5rem)] md:block w-96">
        <ScrollArea className="h-full py-6 px-5 pr-6 lg:py-8">
          {toolsSidebarData.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <h4 className="mb-1 rounded-md px-2 py-1  font-semibold">
                {item.title}
              </h4>
              {item.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="rounded-md text-sm border border-transparent px-2 pl-3 py-1 hover:underline opacity-90 text-sm"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </ScrollArea>
      </aside>
      <div className="p-8">{children}</div>
    </div>
  );
}
