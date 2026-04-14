import { Post } from "@/lib/types";
import { Play } from "lucide-react";
import Image from "next/image";

type VideosTabProps = {
  posts: Post[];
  onSelectPost: (post: Post) => void;
};

export default function VideosTab({ posts, onSelectPost }: VideosTabProps) {
  const videos = posts.filter(
    (item) =>
      item.mediaUrl.endsWith(".mp4") ||
      item.mediaItems?.some((mediaItem) => mediaItem.type === "video")
  );

  return (
    <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
      {videos.map((item) => (
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
              <Play className="h-6 w-6 fill-white" />
            </div>
          </div>
        </div>
      ))}
      {videos.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="font-medium text-muted-foreground">No videos found.</p>
        </div>
      )}
    </div>
  );
}
