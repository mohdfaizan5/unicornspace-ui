import { ScrollArea } from "@/components/ui/scroll-area";
import { toolsSidebarData } from "@/config/tools";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex items-start lg:gap-11">
      <aside className="ml-2 hidden  md:block w-[24rem]">
        <ScrollArea className="h-full py-6 px-5 pr-6 lg:py-8">
          {toolsSidebarData.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {item.title}
              </h4>
              {item.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="rounded-md text-[13px] border border-transparent px-2 pl-3 py-1 hover:underline  text-muted-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </ScrollArea>
      </aside>
      <div className="py-8 px-5 min-w-96 md:ml-28">{children}</div>
    </div>
    // <div className="md:flex items-start lg:gap-11">
    //   <aside className=" ml-2 hidden h-[calc(100vh-3.5rem)] md:block w-96">
    //     <ScrollArea className="h-full py-6 px-5 pr-6 lg:py-8">
    //       {toolsSidebarData.map((item, i) => (
    //         <div className="flex flex-col" key={i}>
    //           <h4 className="mb-1 rounded-md px-2 py-1  font-semibold">
    //             {item.title}
    //           </h4>
    //           {item.items.map((item, i) => (
    //             <Link
    //               key={i}
    //               href={item.href}
    //               className="rounded-md text-sm border border-transparent px-2 pl-3 py-1 hover:underline opacity-90 text-sm"
    //             >
    //               {item.title}
    //             </Link>
    //           ))}
    //         </div>
    //       ))}
    //     </ScrollArea>
    //   </aside>
    //   <div className="p-8">{children}</div>
    // </div>
  );
}
