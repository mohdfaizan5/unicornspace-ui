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
  return (
    <div className="mb-8 max-w-5xl bg-muted-foreground/0  py-5 rounded-sm">
      <Link href={guide.slug} className="group flex gap-2 items-center">
        <h2 className="mb-1  text-xl font-semibold">{guide.title}</h2>
        <ArrowRight size={16} className="group-hover:ml-2 transition" />
      </Link>
      <p className="text-muted-foreground">{guide.description}</p>
      {guide.tags && (
        <div className="py-2 flex gap-1 flex-wrap">
          {guide.tags.split(",").map((tag, idx) => (
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
