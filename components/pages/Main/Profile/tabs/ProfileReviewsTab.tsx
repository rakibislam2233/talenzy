import { MessageSquare, MoreHorizontal, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { profileReviews } from "../mock-data";
import { renderStars } from "../utils";

export default function ProfileReviewsTab() {
  return (
    <div className="grid grid-cols-1 gap-6 animate-in fade-in duration-500 md:grid-cols-2">
      <div className="col-span-full mb-2">
        <h3 className="text-xl font-bold text-foreground">Reviews & Feedback</h3>
      </div>
      {profileReviews.map((review) => (
        <div
          key={review.id}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative size-10 overflow-hidden rounded-full border border-border bg-muted">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{review.name}</h4>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
            <div className="flex gap-0.5">{renderStars(review.rating)}</div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
          <div className="mt-auto flex items-center gap-4 border-t border-border/50 pt-4">
            <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
              <ThumbsUp className="h-3 w-3" /> Helpful
            </button>
            <button className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-foreground">
              <MessageSquare className="h-3 w-3" /> Reply
            </button>
            <button className="ml-auto text-muted-foreground hover:text-foreground">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
