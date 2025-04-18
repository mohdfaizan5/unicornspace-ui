import Link from "next/link";
// import { allGuides, Guide } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "@/styles/mdx.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { getGuidesFromPayload } from "@/actions";


export const metadata: Metadata = {
  title: {
    absolute:
      "Guides - Indept Guides on technology & Startups | UnicornSpaceUI",
  },
  description:
    "Clear, step-by-step follow-along guides for every level. (Complex tools & concepts made easy.)",
};

// function PostCard(guide) {
//   const imageLink = `${guide.thumbnail}`;

//   return (

//   );
//   // return (
//   //   <div className="mb-8 w-80 bg-muted  py-5 rounded-sm">
//   //     <Link
//   //       href={guide.slug}
//   //       className="group flex flex-col gap-2 items-center"
//   //     >
//   //       {guide.thumbnail && (
//   //         <Image
//   //           src={`/images/guides/${guide.thumbnail}`}
//   //           width={320}
//   //           height={120}
//   //           // public\images\guides\Authjs part 1.png
//   //           alt={`\images\guides\${guide.title}`}
//   //         />
//   //       )}
//   //       <h2 className="px-5 text-left mb-1 text-xl font-semibold flex gap-2 items-center">
//   //         {guide.title}{" "}
//   //         <ArrowRight size={16} className="group-hover:ml-2 transition" />
//   //       </h2>
//   //     </Link>
//   //     <p className="text-muted-foreground px-5 ">{guide.description}</p>
//   //     {guide.tags && (
//   //       <div className="py-2 flex gap-1 flex-wrap px-5 ">
//   //         {guide.tags &&
//   //           guide.tags.split(",").map((tag, idx) => (
//   //             <Badge
//   //               className="font-normal text-xs"
//   //               variant="secondary"
//   //               key={idx}
//   //             >
//   //               #{tag.trim()}
//   //             </Badge>
//   //           ))}
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// }

export default async function Home() {
  const guides = await getGuidesFromPayload();
  console.log(guides)

  return (
    <div className="">
      <h1 className="text-4xl font-bold font-passion ">Guides</h1>
      <p className="max-w-2xl text-lg  text-muted-foreground mb-8">
        Clear, step-by-step follow-along guides for every level. (Complex
        concepts made easy.)
      </p>

      <main className="grid max-w-4xl auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {guides.docs.map((guide, i) => {
          if (guide.isPublished) return (
            <Card key={i} className="relative max-w-xl dark:border border-gray-800 overflow-hidden">
              <Link href={`/guides/${guide.main?.slug}`}>
                <CardHeader className="relative h-32 p-0 overflow-hidden flex items-end px-5">
                  {/* Gradient background */}
                  <div className="absolute inset-0 z-0 bg-neutral-950
                             bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                  />

                  {/* Title on top of gradient */}
                  <Badge className="absolute top-2 right-2" variant={"secondary"}>Guide</Badge>
                  <div className="absolute z-10 left-4 bottom-3">

                    <CardTitle className=" text-white text-xl font-semibold leading-snug">
                      {guide.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="mt-4 pb-4 px-5">
                  <CardDescription>{guide.main?.description}</CardDescription>
                </CardContent>

                <CardFooter className="py-2 pb-4 flex gap-1 flex-wrap px-5">
                  {guide.main?.tags?.split(",").map((tag, idx) => (
                    <Badge key={idx} className="font-normal text-xs" variant="secondary">
                      {tag.trim()}
                    </Badge>
                  ))}
                </CardFooter>
              </Link>
            </Card>
          );
        })}
      </main>
    </div>
  );
}
