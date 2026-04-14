import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Comment } from "./types";

type CommentItemProps = {
  comment: Comment;
  isReply?: boolean;
  onReply: (username: string) => void;
};

export default function CommentItem({
  comment,
  isReply = false,
  onReply,
}: CommentItemProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes);

  const toggleLike = () => {
    setLiked((current) => !current);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className={`flex gap-3 ${isReply ? "mt-4" : ""}`}>
      <div
        className={`${
          isReply ? "size-6" : "size-8"
        } rounded-full bg-gradient-to-br from-primary to-purple-400 p-px shrink-0`}
      >
        <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
          <Image
            src={comment.avatarUrl}
            alt={comment.username}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-foreground font-bold text-xs">{comment.username}</span>
          <span className="text-muted-foreground text-[10px]">{comment.timestamp}</span>
        </div>
        <p className="text-foreground text-xs leading-relaxed">{comment.content}</p>
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => onReply(comment.username)}
            className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            Reply
          </button>
          <button
            onClick={toggleLike}
            className={`flex items-center gap-1 text-[10px] font-bold transition-colors ${
              liked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart className={`h-3 w-3 ${liked ? "fill-current" : ""}`} />
            <span>{likesCount}</span>
          </button>
        </div>

        {comment.replies && comment.replies.length > 0 ? (
          <div className="ml-2 border-l border-border pl-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply onReply={onReply} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
