import Link from "next/link";
import { allGuides, Guide } from "contentlayer/generated";

function PostCard(guide: Guide) {
  return (
    <div className="mb-8 max-w-5xl">
      <h2 className="mb-1 text-xl">
        <Link
          href={guide.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {guide.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home() {
  const guides = allGuides;

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Testing content layer with mdx
      </h1>
      {guides.map((guide, idx) => (
        <PostCard key={idx} {...guide} />
      ))}
    </div>
  );
}
