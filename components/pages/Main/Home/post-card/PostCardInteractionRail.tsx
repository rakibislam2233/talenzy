import { Bookmark, Gift, Heart, MessageCircle, Share2 } from "lucide-react";

type PostCardInteractionRailProps = {
  likes: string;
  comments: number | string;
  liked: boolean;
  saved: boolean;
  onLike: (event: React.MouseEvent) => void;
  onOpenComments: (event: React.MouseEvent) => void;
  onOpenGift: (event: React.MouseEvent) => void;
  onSave: (event: React.MouseEvent) => void;
  onShare: (event: React.MouseEvent) => void;
};

export default function PostCardInteractionRail({
  likes,
  comments,
  liked,
  saved,
  onLike,
  onOpenComments,
  onOpenGift,
  onSave,
  onShare,
}: PostCardInteractionRailProps) {
  return (
    <div className="absolute bottom-20 right-2 flex flex-col items-center gap-3 md:bottom-24 md:right-4 md:gap-5">
      <button onClick={onLike} className="group/icon flex cursor-pointer flex-col items-center gap-1 outline-none">
        <div
          className={`rounded-full p-2 backdrop-blur-sm transition-all md:p-3 ${
            liked ? "bg-red-500/30" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          <Heart
            className={`h-5 w-5 transition-colors md:h-7 md:w-7 ${
              liked ? "fill-current text-red-500" : "text-white"
            }`}
          />
        </div>
        <span className="text-[10px] font-bold text-white drop-shadow-md md:text-xs">
          {liked ? "1.3k" : likes}
        </span>
      </button>

      <button onClick={onOpenComments} className="group/icon flex cursor-pointer flex-col items-center gap-1 outline-none">
        <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 md:p-3">
          <MessageCircle className="h-5 w-5 text-white md:h-7 md:w-7" />
        </div>
        <span className="text-[10px] font-bold text-white drop-shadow-md md:text-xs">{comments}</span>
      </button>

      <button onClick={onOpenGift} className="group/icon flex cursor-pointer flex-col items-center gap-1 outline-none">
        <div className="rounded-full bg-primary/80 p-2 shadow-glow backdrop-blur-sm transition-all hover:scale-110 md:p-3">
          <Gift className="h-5 w-5 text-white md:h-7 md:w-7" />
        </div>
        <span className="text-[10px] font-bold text-white drop-shadow-md md:text-xs">Gift</span>
      </button>

      <button onClick={onSave} className="group/icon flex cursor-pointer flex-col items-center gap-1 outline-none">
        <div
          className={`rounded-full p-2 backdrop-blur-sm transition-all md:p-3 ${
            saved ? "bg-primary/30" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          <Bookmark className={`h-5 w-5 text-white md:h-7 md:w-7 ${saved ? "fill-current" : ""}`} />
        </div>
        <span className="text-[10px] font-bold text-white drop-shadow-md md:text-xs">Save</span>
      </button>

      <button onClick={onShare} className="group/icon flex cursor-pointer flex-col items-center gap-1 outline-none">
        <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 md:p-3">
          <Share2 className="h-5 w-5 text-white md:h-7 md:w-7" />
        </div>
        <span className="text-[10px] font-bold text-white drop-shadow-md md:text-xs">Share</span>
      </button>
    </div>
  );
}
