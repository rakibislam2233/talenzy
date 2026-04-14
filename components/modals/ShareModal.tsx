"use client";
import { Button } from "@/components/ui/button";
import { Post } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import {
    Copy,
    Facebook,
    Linkedin,
    LucideIcon,
    MessageCircle,
    MoreHorizontal,
    QrCode,
    Repeat2,
    Send,
    Share2,
    Twitter,
    X as XIcon,
} from "lucide-react";
import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

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
              {/* Preview Card */}
              <div className="bg-background/50 p-4 rounded-2xl border border-border flex gap-4">
                <div className="relative size-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={post.mediaUrl || (post.mediaItems?.[0]?.url ?? "")}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-foreground font-bold text-sm mb-1 line-clamp-1">
                    {post.caption || "Untitled Performance"}
                  </h4>
                  <div className="flex items-center gap-2 text-muted-foreground text-[10px] mb-2 font-medium">
                    <span className="text-primary">@{post.username}</span>
                    <span>•</span>
                    <span>{post.views?.toLocaleString() || "2.5M"} Views</span>
                  </div>
                  <p className="text-muted-foreground text-[10px] line-clamp-2 leading-relaxed italic pr-4">
                    &ldquo;{post.caption.slice(0, 100)}...&rdquo;
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
                  Quick Actions
                </h5>
                <div className="grid grid-cols-4 gap-3">
                  <QuickActionButton
                    icon={Copy}
                    label={copied ? "Copied!" : "Copy Link"}
                    onClick={() => handleCopy(shareUrl)}
                    active={copied}
                  />
                  <QuickActionButton
                    icon={Repeat2}
                    label="Repost"
                    onClick={() => {}}
                  />
                  <QuickActionButton
                    icon={Share2}
                    label="Story"
                    onClick={() => {}}
                  />
                  <QuickActionButton
                    icon={Send}
                    label="Message"
                    onClick={() => {}}
                  />
                </div>
              </div>

              {/* Share Externally */}
              <div className="space-y-4">
                <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
                  Share Externally
                </h5>
                <div className="flex items-center gap-6 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
                  <SocialLink
                    icon={Facebook}
                    label="Facebook"
                    color="bg-[#1877F2]"
                  />
                  <SocialLink icon={Twitter} label="X" color="bg-black" />
                  <SocialLink
                    icon={MessageCircle}
                    label="WhatsApp"
                    color="bg-[#25D366]"
                  />
                  <SocialLink
                    icon={Linkedin}
                    label="LinkedIn"
                    color="bg-[#0A66C2]"
                  />
                  <SocialLink
                    icon={MoreHorizontal}
                    label="More"
                    color="bg-muted"
                  />
                </div>
              </div>

              {/* Embed & QR Code Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
                    Embed Code
                  </h5>
                  <div className="relative">
                    <div className="bg-foreground/40 border border-border/50 rounded-xl h-10 flex items-center px-3 overflow-hidden">
                      <code className="text-[10px] text-muted-foreground whitespace-nowrap overflow-hidden">
                        {embedCode}
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopy(embedCode)}
                      className="absolute inset-y-0 right-0 px-3 bg-white/10 hover:bg-accent/50 text-foreground text-[10px] font-bold transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
                    Scan
                  </h5>
                  <Button
                    variant="outline"
                    className="w-full h-10 bg-background/50 border-border rounded-xl text-foreground text-[10px] font-bold flex items-center gap-2 hover:bg-accent"
                  >
                    <QrCode className="h-4 w-4" />
                    QR Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function QuickActionButton({
  icon: Icon,
  label,
  onClick,
  active,
}: {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-border/50 transition-all w-full ${
        active
          ? "bg-primary/20 border-primary"
          : "bg-background/50 hover:bg-accent"
      }`}
    >
      <div
        className={`p-2 rounded-lg ${
          active ? "bg-primary/20" : "bg-primary/10"
        }`}
      >
        <Icon
          className={`h-5 w-5 ${active ? "text-primary" : "text-primary"}`}
        />
      </div>
      <span className="text-foreground text-[10px] font-bold">{label}</span>
    </button>
  );
}

function SocialLink({
  icon: Icon,
  label,
  color,
}: {
  icon: LucideIcon;
  label: string;
  color: string;
}) {
  return (
    <button className="flex flex-col items-center gap-2 shrink-0 group">
      <div
        className={`${color} p-3 rounded-full text-foreground transition-transform group-hover:scale-110 shadow-lg`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-muted-foreground text-[10px] font-medium">
        {label}
      </span>
    </button>
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
