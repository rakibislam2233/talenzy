import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

type MediaItem = { url: string; type: "image" | "video" };

type PostMediaPanelProps = {
  mediaItems: MediaItem[];
  currentMediaIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
};

export default function PostMediaPanel({
  mediaItems,
  currentMediaIndex,
  onNext,
  onPrevious,
  onClose,
}: PostMediaPanelProps) {
  return (
    <div className="relative w-full h-[50vh] lg:h-full lg:w-[60%] bg-background flex items-center justify-center overflow-hidden group">
      {mediaItems[currentMediaIndex].type === "video" ? (
        <VideoPlayer src={mediaItems[currentMediaIndex].url} />
      ) : (
        <Image
          src={mediaItems[currentMediaIndex].url}
          alt="Post Content"
          fill
          className="object-contain"
          priority
        />
      )}

      {mediaItems.length > 1 ? (
        <>
          <button
            onClick={onPrevious}
            className="absolute left-4 p-2 md:p-3 bg-foreground/50 hover:bg-black/70 rounded-full text-foreground backdrop-blur-sm transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 p-2 md:p-3 bg-foreground/50 hover:bg-black/70 rounded-full text-foreground backdrop-blur-sm transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {mediaItems.map((_, index) => (
              <div
                key={index}
                className={`size-1.5 rounded-full transition-all ${
                  index === currentMediaIndex ? "bg-primary w-4" : "bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}

      <button
        onClick={onClose}
        className="absolute top-4 left-4 p-2 bg-foreground/50 backdrop-blur-md rounded-full text-foreground lg:hidden z-10"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
