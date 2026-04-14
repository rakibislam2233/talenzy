import { Post } from "@/lib/types";
import Image from "next/image";

type ProfilePostsTabProps = {
  profilePosts: Post[];
  onSelectPost: (post: Post) => void;
};

export default function ProfilePostsTab({
  profilePosts,
  onSelectPost,
}: ProfilePostsTabProps) {
  return (
    <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
      {profilePosts.map((post) => (
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100 md:gap-2">
            {post.mediaItems?.some((media) => media.type === "video") && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/20 text-foreground backdrop-blur-md">
                ▶
              </div>
            )}
            <p className="hidden translate-y-4 px-4 text-sm font-bold text-foreground transition-transform duration-300 group-hover:translate-y-0 md:block line-clamp-2">
              {post.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
