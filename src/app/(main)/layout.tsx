import { CallToAction } from "@/components/call-to-action";
import { Navigation } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { guidesSidebarData } from "@/config/guides";
import { navigation } from "@/config/navbar";
import { allComponents } from "contentlayer/generated";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:flex md:px-8 items-start justify-between prose dark:prose-invert">
      <aside className="hidden md:sticky md:top-0 md:overflow-hidden md:block md:w-[270px] md:max-w-[270px] md:min-w-[270px] h-screen">
        <ScrollArea className="h-full flex flex-col w-full gap-4 py-6 lg:py-8">
          <Navigation navigation={navigation} />

        </ScrollArea>
      </aside>
      <div className="py-8 px-6 overflow-y-auto">{children}</div>
      <CallToAction className="mt-10  md:sticky md:top-0 md:overflow-hidden" />
    </div>
  );
}
