import { CallToAction } from "@/components/call-to-action";
import { Navigation } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { guidesSidebarData } from "@/config/guides";
import { navigation } from "@/config/navbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:flex relative md:px-8 items-start prose dark:prose-invert">
      <aside className="hidden lg:sticky lg:top-0 lg:block lg:w-[270px] lg:max-w-[270px] lg:min-w-[270px] h-screen">
        <ScrollArea className="h-full flex flex-col w-full gap-4 py-6 lg:py-8">
          <Navigation navigation={navigation} />
        </ScrollArea>
      </aside>
      <div className="py-8 z-10 px-6 overflow-y-auto flex-1">{children}</div>
      {/* <CallToAction className="mt-10 md:sticky md:top-0 md:overflow-hidden" /> */}

      <Image
        src={"/assets/left-light-effect.svg"}
        width={980}
        className="fixed z-0 pointer-events-none -rotate-90 bottom-0 md:top-32 dark:opacity-60 -right-16 md:-right-32"
        height={600}
        alt="a gradient effect for website aesthetics"
      />
    </div>
  );
}
