import { Post } from "@/lib/types";
import { Play } from "lucide-react";
import Image from "next/image";

type ProfileVideosTabProps = {
  videoPosts: Post[];
  onSelectPost: (post: Post) => void;
};

export default function ProfileVideosTab({
  videoPosts,
  onSelectPost,
}: ProfileVideosTabProps) {
  return (
    <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
      {videoPosts.length > 0 ? (
        videoPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
          >
            <Image
              src={post.mediaUrl}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-foreground backdrop-blur-md">
                <Play className="h-6 w-6 fill-white" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <p className="font-medium text-muted-foreground">No videos found.</p>
        </div>
      )}
    </div>
  );
}
