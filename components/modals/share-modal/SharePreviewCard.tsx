import { Post } from "@/lib/types";
import Image from "next/image";

type SharePreviewCardProps = {
  post: Post;
};

export default function SharePreviewCard({ post }: SharePreviewCardProps) {
  return (
    <div className="bg-background/50 p-4 rounded-2xl border border-border flex gap-4">
      <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={post.mediaUrl || (post.mediaItems?.[0]?.url ?? "")}
          alt="Preview"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-foreground font-bold text-sm mb-1 line-clamp-1">
          {post.caption || "Untitled Performance"}
        </h4>
        <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-2 font-medium">
          <span className="text-primary">@{post.username}</span>
          <span>•</span>
          <span>{post.views?.toLocaleString() || "2.5M"} Views</span>
        </div>
        <p className="text-muted-foreground text-[10px] line-clamp-2 leading-relaxed italic pr-4">
          &ldquo;{post.caption.slice(0, 100)}...&rdquo;
        </p>
      </div>
    </div>
  );
}
