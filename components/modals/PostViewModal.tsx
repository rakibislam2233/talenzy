"use client";

import { Post } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import PostDetailsPanel from "./post-view/PostDetailsPanel";
import PostMediaPanel from "./post-view/PostMediaPanel";
import SendGiftModal from "./SendGiftModal";
import ShareModal from "./ShareModal";

interface PostViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export default function PostViewModal({
  isOpen,
  onClose,
  post,
}: PostViewModalProps) {
  const mounted = useMounted();
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const mediaItems = post.mediaItems || [
    { url: post.mediaUrl, type: "image" as const },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const handleReply = (username: string) => {
    setNewComment(`@${username} `);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Close Button - Desktop */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 bg-foreground/10 hover:bg-foreground/20 rounded-full text-white transition-colors cursor-pointer z-20 hidden lg:block"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background w-full max-w-6xl h-[95vh] sm:h-[92vh] lg:h-[90vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative rounded-lg border border-border"
          >
            <PostMediaPanel
              mediaItems={mediaItems}
              currentMediaIndex={currentMediaIndex}
              onNext={nextMedia}
              onPrevious={prevMedia}
              onClose={onClose}
            />

            <PostDetailsPanel
              post={post}
              liked={liked}
              onToggleLiked={() => setLiked((current) => !current)}
              onOpenShare={() => setIsShareModalOpen(true)}
              onOpenGift={() => setIsGiftModalOpen(true)}
              newComment={newComment}
              onChangeComment={setNewComment}
              onReply={handleReply}
            />
          </motion.div>
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
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
