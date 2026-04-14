import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import React from "react";

type MediaItem = {
  url: string;
  type: "image" | "video";
};

type PostCardMediaProps = {
  mediaItems: MediaItem[];
  currentSlide: number;
  onSlideChange: (slide: number) => void;
  onNextSlide: (event: React.MouseEvent) => void;
  isPlaying: boolean;
  onTogglePlaying: () => void;
  isMuted: boolean;
  onToggleMuted: () => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
};

export default function PostCardMedia({
  mediaItems,
  currentSlide,
  onSlideChange,
  onNextSlide,
  isPlaying,
  onTogglePlaying,
  isMuted,
  onToggleMuted,
  videoRef,
}: PostCardMediaProps) {
  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full"
          onClick={(event: React.MouseEvent) => {
            if (mediaItems.length > 1) {
              onNextSlide(event);
            }
          }}
        >
          {mediaItems[currentSlide].type === "video" ? (
            <div className="relative h-full w-full">
              <video
                ref={videoRef}
                src={mediaItems[currentSlide].url}
                className="h-full w-full object-cover"
                muted={isMuted}
                autoPlay
                loop
                playsInline
                onContextMenu={(event) => event.preventDefault()}
                controlsList="nodownload"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="pointer-events-auto flex gap-4">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      onTogglePlaying();
                    }}
                    className="rounded-full border border-white/20 bg-black/40 p-3 text-white shadow-glow backdrop-blur-sm transition-all hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 fill-current" />
                    ) : (
                      <Play className="h-6 w-6 fill-current" />
                    )}
                  </button>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      onToggleMuted();
                    }}
                    className="rounded-full border border-white/20 bg-black/40 p-3 text-white shadow-glow backdrop-blur-sm transition-all hover:scale-110"
                  >
                    {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={mediaItems[currentSlide].url}
              alt="Post content"
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/90" />

      {mediaItems.length > 1 && (
        <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {mediaItems.map((item, index) => (
            <button
              key={`${item.url}-${index}`}
              onClick={(event) => {
                event.stopPropagation();
                onSlideChange(index);
              }}
              className={`size-1.5 rounded-full transition-all ${
                index === currentSlide ? "w-4 bg-primary" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
