import { Button } from "@/components/ui/button";
import { Post } from "@/lib/types";
import { Gift, Heart, MessageCircle, MoreVertical, Music, Share2, Smile } from "lucide-react";
import Image from "next/image";
import CommentItem from "./CommentItem";
import { getMockComments } from "./mock-comments";

type PostDetailsPanelProps = {
  post: Post;
  liked: boolean;
  onToggleLiked: () => void;
  onOpenShare: () => void;
  onOpenGift: () => void;
  newComment: string;
  onChangeComment: (value: string) => void;
  onReply: (username: string) => void;
};

export default function PostDetailsPanel({
  post,
  liked,
  onToggleLiked,
  onOpenShare,
  onOpenGift,
  newComment,
  onChangeComment,
  onReply,
}: PostDetailsPanelProps) {
  return (
    <div className="w-full lg:w-[40%] bg-background flex flex-col h-full lg:h-full overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-linear-to-br from-primary to-purple-400 p-px">
            <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
              <Image src={post.avatarUrl} alt={post.username} fill className="object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-foreground font-bold text-sm">{post.username}</h4>
              <span className="text-muted-foreground">•</span>
              <button className="text-primary text-xs font-bold hover:text-primary-hover">
                Follow
              </button>
            </div>
            <p className="text-muted-foreground text-[10px] md:text-xs">Los Angeles • {post.timestamp}</p>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground p-2">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 border-b border-border/50">
          <p className="text-foreground text-sm leading-relaxed mb-3">{post.caption}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-primary font-semibold text-xs cursor-pointer hover:underline"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Music className="h-3 w-3" />
            <span>Original Audio - {post.username}</span>
          </div>
        </div>

        <div className="p-3 flex items-center justify-between text-xs text-muted-foreground border-b border-border/30">
          <div className="flex gap-4">
            <span>
              <strong className="text-foreground">{post.likes}</strong> Likes
            </span>
            <span>
              <strong className="text-foreground">{post.comments}</strong> Comments
            </span>
          </div>
          <span>
            <strong className="text-foreground">12.5k</strong> Views
          </span>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={onToggleLiked}
              className={`flex flex-col items-center gap-1 transition-colors ${
                liked ? "text-destructive" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart className={`h-6 w-6 ${liked ? "fill-current" : ""}`} />
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-6 w-6" />
            </button>
            <button
              onClick={onOpenShare}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              <Share2 className="h-6 w-6" />
            </button>
          </div>
          <Button
            onClick={onOpenGift}
            className="bg-primary hover:bg-primary-hover text-foreground rounded-full h-10 px-5 font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <Gift className="h-4 w-4" />
            Gift
          </Button>
        </div>

        <div className="p-4 pt-0 space-y-5">
          <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Comments
          </h5>
          {getMockComments(post.avatarUrl).map((comment) => (
            <CommentItem key={comment.id} comment={comment} onReply={onReply} />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-border flex items-center gap-3 bg-background/95 backdrop-blur-md">
        <div className="size-8 rounded-full bg-linear-to-br from-primary to-purple-400 p-px shrink-0">
          <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-accent text-foreground font-bold text-[10px]">
              AT
            </div>
          </div>
        </div>
        <div className="relative flex-1 group">
          <input
            type="text"
            value={newComment}
            onChange={(event) => onChangeComment(event.target.value)}
            placeholder="Add a comment..."
            className="w-full bg-background border border-border rounded-full py-2.5 pl-4 pr-20 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-all hover:border-border"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-1 text-muted-foreground hover:text-foreground">
              <Smile className="h-4 w-4" />
            </button>
            <button
              className={`text-primary font-bold text-xs px-2 py-1 transition-opacity ${
                newComment ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
