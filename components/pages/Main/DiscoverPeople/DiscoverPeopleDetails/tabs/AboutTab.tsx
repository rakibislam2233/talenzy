import { MessageSquare, MoreHorizontal, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

type AboutTabProps = {
  profileName: string;
};

export default function AboutTab({ profileName }: AboutTabProps) {
  return (
    <div className="grid grid-cols-1 gap-6 animate-in fade-in duration-500 text-foreground md:grid-cols-2">
      <div className="col-span-full mb-4">
        <h3 className="text-xl font-bold">User Experience & Reviews</h3>
      </div>
      {[1, 2, 3].map((id) => (
        <div
          key={id}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative size-10 overflow-hidden rounded-full border border-border bg-muted">
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer${id}`}
                  alt="Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Reviewer {id}</h4>
                <span className="text-xs text-muted-foreground">2 weeks ago</span>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-3 w-3 ${index < 5 - (id % 2) ? "fill-yellow-500 text-yellow-500" : "text-gray-600"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Great work by {profileName}! Very professional and creative. The
            attention to detail in the work is amazing. Definitely recommend
            working with them.
          </p>
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
