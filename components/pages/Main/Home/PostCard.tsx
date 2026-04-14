"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import PostViewModal from "@/components/modals/PostViewModal";
import SendGiftModal from "@/components/modals/SendGiftModal";
import ShareModal from "@/components/modals/ShareModal";
import { toast } from "@/hooks/use-toast";
import { Post } from "@/lib/types";
import { usePathname } from "next/navigation";
import PostCardFooter from "./post-card/PostCardFooter";
import PostCardInteractionRail from "./post-card/PostCardInteractionRail";
import PostCardMedia from "./post-card/PostCardMedia";

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
    [post.mediaItems, post.mediaUrl],
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
        className={`relative w-full max-w-xl mx-auto aspect-4/5 bg-card rounded-2xl overflow-hidden border border-border shadow-2xl group transition-all duration-300 hover:shadow-primary/20 ${
          !isHome ? "cursor-pointer" : ""
        }`}
      >
        <PostCardMedia
          mediaItems={mediaItems}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          onNextSlide={nextSlide}
          isPlaying={isPlaying}
          onTogglePlaying={() => {
            if (videoRef.current) {
              if (isPlaying) {
                videoRef.current.pause();
              } else {
                videoRef.current.play().catch(() => {});
              }
            }
            setIsPlaying((current) => !current);
          }}
          isMuted={isMuted}
          onToggleMuted={() => setIsMuted((current) => !current)}
          videoRef={videoRef}
        />

        <PostCardInteractionRail
          likes={post.likes}
          comments={post.comments}
          liked={liked}
          saved={saved}
          onLike={(event) => {
            event.stopPropagation();
            const newLikedState = !liked;
            setLiked(newLikedState);
            if (newLikedState) {
              toast.like(post.username);
            }
          }}
          onOpenComments={(event) => handleOpenView(event)}
          onOpenGift={(event) => {
            event.stopPropagation();
            setIsGiftModalOpen(true);
          }}
          onSave={(event) => {
            event.stopPropagation();
            setSaved((current) => !current);
          }}
          onShare={(event) => {
            event.stopPropagation();
            setIsShareModalOpen(true);
          }}
        />

        <PostCardFooter
          avatarUrl={post.avatarUrl}
          username={post.username}
          audioName={post.audioName}
          timestamp={post.timestamp}
          caption={post.caption}
        />
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
