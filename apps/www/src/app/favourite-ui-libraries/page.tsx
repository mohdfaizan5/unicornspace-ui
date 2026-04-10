import { Heart } from "lucide-react";
import { DirectoryList } from "./directory-list";

export default function FavouriteUILibraries() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <section className="flex items-center gap-6">
        <Heart className="size-12 text-red-5s00 mt-4" />
        <div>
          <h1 className="text-2xl font-medium">Favourite UI Libraries</h1>
          <p className="text-muted-foreground">
            This page is under construction. Stay tuned for updates!
          </p>
          {/* <HeartStraightIcon size={32} weight="duotone" /> */}
        </div>

      </section>
      <DirectoryList />
    </div>
  );
}