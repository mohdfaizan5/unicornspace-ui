import Link from "next/link";
import { allGuides, Guide } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function PostCard(guide: Guide) {
  return (
    <div className="mb-8 max-w-5xl bg-muted-foreground/0 px-4 py-5 rounded-sm">
      <Link href={guide.slug} className="group flex gap-2 items-center">
        <h2 className="mb-1  text-xl font-semibold">{guide.title}</h2>
        <ArrowRight size={16} className="group-hover:ml-2 transition" />
      </Link>
      <p className="text-muted-foreground">{guide.description}</p>
      {guide.tags && (
        <div className="py-2">
          {guide.tags.split(",").map((tag, idx) => (
            <Badge variant="secondary" key={idx}>
              #{tag}
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
    <div className="max-w-xl py-8">
      {guides.map((guide, idx) => (
        <PostCard key={idx} {...guide} />
      ))}
    </div>
  );
}
