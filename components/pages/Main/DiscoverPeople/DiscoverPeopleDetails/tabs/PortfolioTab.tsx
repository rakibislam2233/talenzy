import { Post } from "@/lib/types";
import Image from "next/image";

type PortfolioTabProps = {
  posts: Post[];
  onSelectPost: (post: Post) => void;
};

export default function PortfolioTab({ posts, onSelectPost }: PortfolioTabProps) {
  return (
    <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
      {posts.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectPost(item)}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
        >
          <Image
            src={item.mediaUrl}
            alt={item.caption}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 md:gap-2">
            {item.mediaItems?.some((mediaItem) => mediaItem.type === "video") && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-md">
                ▶
              </div>
            )}
            <p className="hidden translate-y-4 px-4 text-center text-sm font-bold text-white line-clamp-2 transition-transform duration-300 group-hover:translate-y-0 md:block">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
      {posts.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="font-medium text-muted-foreground">No portfolio items yet.</p>
        </div>
      )}
    </div>
  );
}
