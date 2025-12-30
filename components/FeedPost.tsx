"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  Briefcase,
  Gift,
  Heart,
  MessageCircle,
  Pause,
  Play,
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { toast } from "@/hooks/use-toast";
import { Post } from "@/lib/types";
import { usePathname } from "next/navigation";
import PostViewModal from "./modals/PostViewModal";
import SendGiftModal from "./modals/SendGiftModal";
import ShareModal from "./modals/ShareModal";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const mediaItems = useMemo(
    () => post.mediaItems || [{ url: post.mediaUrl, type: "image" as const }],
    [post.mediaItems, post.mediaUrl]
  );

  const handleOpenView = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsViewModalOpen(true);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.6, // Only play if 60% of the video is visible
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting && !isViewModalOpen) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, [isViewModalOpen]);

  useEffect(() => {
    if (mediaItems[currentSlide].type === "video" && videoRef.current) {
      if (isPlaying && !isViewModalOpen) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentSlide, isPlaying, mediaItems, isViewModalOpen]);

  return (
    <>
      <article
        onClick={() => !isHome && handleOpenView()}
        className={`relative w-full aspect-4/5 bg-surface-dark rounded-2xl overflow-hidden border border-border-dark shadow-2xl group transition-all duration-300  hover:shadow-primary/20 ${
          !isHome ? "cursor-pointer" : ""
        }`}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
              onClick={(e: React.MouseEvent) => {
                if (mediaItems.length > 1) {
                  nextSlide(e);
                }
              }}
            >
              {mediaItems[currentSlide].type === "video" ? (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src={mediaItems[currentSlide].url}
                    className="w-full h-full object-cover"
                    muted={isMuted}
                    autoPlay
                    loop
                    playsInline
                    onContextMenu={(e) => e.preventDefault()}
                    controlsList="nodownload"
                  />

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="flex gap-4 pointer-events-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (videoRef.current) {
                            if (isPlaying) videoRef.current.pause();
                            else videoRef.current.play();
                            setIsPlaying(!isPlaying);
                          }
                        }}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:scale-110 transition-all shadow-glow"
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6 fill-current" />
                        ) : (
                          <Play className="h-6 w-6 fill-current" />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:scale-110 transition-all shadow-glow"
                      >
                        {isMuted ? (
                          <VolumeX className="h-6 w-6" />
                        ) : (
                          <Volume2 className="h-6 w-6" />
                        )}
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
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/90 pointer-events-none"></div>

          {/* Dot Indicators */}
          {mediaItems.length > 1 && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {mediaItems.map(
                (item: { url: string; type: string }, i: number) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(i);
                    }}
                    className={`size-1.5 rounded-full transition-all ${
                      i === currentSlide ? "bg-primary w-4" : "bg-white/40"
                    }`}
                  />
                )
              )}
            </div>
          )}
        </div>

        {/* Right Interaction Rail */}
        <div className="absolute right-2 md:right-4 bottom-20 md:bottom-24 flex flex-col gap-3 md:gap-5 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              const newLikedState = !liked;
              setLiked(newLikedState);
              if (newLikedState) {
                toast.like(post.username);
              }
            }}
            className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
          >
            <div
              className={`p-2 md:p-3 rounded-full backdrop-blur-sm transition-all ${
                liked ? "bg-red-500/30" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <Heart
                className={`h-5 w-5 md:h-7 md:w-7 transition-colors ${
                  liked ? "text-red-500 fill-current" : "text-white"
                }`}
              />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
              {liked ? "1.3k" : post.likes}
            </span>
          </button>
          <button
            onClick={(e) => handleOpenView(e)}
            className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
          >
            <div className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <MessageCircle className="h-5 w-5 md:h-7 md:w-7 text-white" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
              {post.comments}
            </span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsGiftModalOpen(true);
            }}
            className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
          >
            <div className="p-2 md:p-3 rounded-full bg-primary/80 backdrop-blur-sm shadow-glow hover:scale-110 transition-all">
              <Gift className="h-5 w-5 md:h-7 md:w-7 text-white" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
              Gift
            </span>
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
          >
            <div
              className={`p-2 md:p-3 rounded-full backdrop-blur-sm transition-all ${
                saved ? "bg-primary/30" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <Bookmark
                className={`h-5 w-5 md:h-7 md:w-7 text-white ${
                  saved ? "fill-current" : ""
                }`}
              />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
              Save
            </span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsShareModalOpen(true);
            }}
            className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
          >
            <div className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <Share2 className="h-5 w-5 md:h-7 md:w-7 text-white" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
              Share
            </span>
          </button>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 pr-16 md:pr-20 text-left">
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="size-8 md:size-10 rounded-full border-2 border-primary p-0.5 pointer-events-none relative">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={post.avatarUrl}
                    alt={post.username}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-white font-bold text-sm md:text-base shadow-black drop-shadow-md">
                  {post.username}
                </h3>
                <span className="text-[10px] md:text-xs text-gray-300 font-medium">
                  {post.audioName || "Original Audio"} • {post.timestamp}
                </span>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-primary backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-lg transition-colors flex items-center gap-1">
              <Briefcase className="h-3 w-3 md:h-3.5 md:w-3.5" />
              Hire Me
            </button>
          </div>
          <p className="text-white text-xs md:text-sm leading-relaxed drop-shadow-md line-clamp-2 mb-2 text-left">
            {post.caption.split(" ").map((word, i) =>
              word.startsWith("#") ? (
                <span key={i} className="text-primary font-bold">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </p>
        </div>
      </article>

      <PostViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        post={post}
      />

      <SendGiftModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
        username={post.username}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        post={post}
      />
    </>
  );
};

export default PostCard;
