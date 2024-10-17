import Link from "next/link";
import { allGuides, Guide } from "contentlayer/generated";
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

function PostCard(guide: Guide) {
  const imageLink = `${guide.thumbnail}`;

  return (
    <Card className="w-[320px]  overflow-hidden">
      <CardHeader className="p-0 overflow-hidden">
        {guide.thumbnail && (
          <Image
            src={`/images/guides/${guide.thumbnail}`}
            width={320}
            height={120}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${guide.title}`}
          />
        )}
      </CardHeader>
      <CardContent className="mt-4 pb-4">
        <CardTitle className="pb-1"> {guide.title}</CardTitle>
        <CardDescription> {guide.description}</CardDescription>
      </CardContent>
      <CardFooter className="py-2 pb-4 flex gap-1 flex-wrap px-5">
        {guide.tags &&
          guide.tags.split(",").map((tag, idx) => (
            <Badge
              className="font-normal text-xs"
              variant="default"
              key={idx}
            >
              #{tag.trim()}
            </Badge>
          ))}
      </CardFooter>
    </Card>
  );

  return (
    <div className="mb-8 w-80 bg-muted  py-5 rounded-sm">
      <Link
        href={guide.slug}
        className="group flex flex-col gap-2 items-center"
      >
        {guide.thumbnail && (
          <Image
            src={`/images/guides/${guide.thumbnail}`}
            width={320}
            height={120}
            // public\images\guides\Authjs part 1.png
            alt={`\images\guides\${guide.title}`}
          />
        )}
        <h2 className="px-5 text-left mb-1 text-xl font-semibold flex gap-2 items-center">
          {guide.title}{" "}
          <ArrowRight size={16} className="group-hover:ml-2 transition" />
        </h2>
      </Link>
      <p className="text-muted-foreground px-5 ">{guide.description}</p>
      {guide.tags && (
        <div className="py-2 flex gap-1 flex-wrap px-5 ">
          {guide.tags &&
            guide.tags.split(",").map((tag, idx) => (
              <Badge
                className="font-normal text-xs"
                variant="secondary"
                key={idx}
              >
                #{tag.trim()}
              </Badge>
            ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const guides = allGuides;

  return (
    <div className=" py-8">
      <h1>Guides</h1>
      <main className="grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {guides.map((guide, idx) => {
          if (guide.isPublished) return <PostCard key={idx} {...guide} />;
        })}
      </main>
    </div>
  );
}
