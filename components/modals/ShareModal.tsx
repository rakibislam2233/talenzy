"use client";
import { Post } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { X as XIcon } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import EmbedQrSection from "./share-modal/EmbedQrSection";
import QuickActionsSection from "./share-modal/QuickActionsSection";
import SharePreviewCard from "./share-modal/SharePreviewCard";
import SocialShareSection from "./share-modal/SocialShareSection";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

export default function ShareModal({ isOpen, onClose, post }: ShareModalProps) {
  const mounted = useMounted();
  const [copied, setCopied] = useState(false);

  if (!mounted) return null;

  const shareUrl = `https://talenzy.com/post/${post.id}`;
  const embedCode = `<iframe src="https://talenzy.com/embed/v/1/${post.id}" width="100%" height="auto" />`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-background w-full max-w-lg max-h-[92vh] rounded-3xl overflow-hidden border border-border shadow-2xl relative z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Share this creation
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-full text-muted-foreground transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 max-h-[calc(92vh-92px)] overflow-y-auto custom-scrollbar">
              <SharePreviewCard post={post} />

              <QuickActionsSection
                copied={copied}
                onCopyLink={() => handleCopy(shareUrl)}
              />

              <SocialShareSection />

              <EmbedQrSection
                embedCode={embedCode}
                onCopyEmbedCode={() => handleCopy(embedCode)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
