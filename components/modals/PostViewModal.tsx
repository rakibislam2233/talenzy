"use client";

import { Button } from "@/components/ui/button";
import { Post } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  Heart,
  MessageCircle,
  MoreVertical,
  Music,
  Pause,
  Play,
  Share2,
  Smile,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import SendGiftModal from "./SendGiftModal";
import ShareModal from "./ShareModal";

interface Comment {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface PostViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post;
}

const getMockComments = (postAvatar: string): Comment[] => [
  {
    id: "1",
    username: "sarah_s",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content: "This tone is incredible! What amp are you using?",
    timestamp: "24m",
    likes: 12,
    replies: [
      {
        id: "1-1",
        username: "GuitarMaster",
        avatarUrl: postAvatar,
        content: "I'm using a Marshall Plexi with a custom boost pedal!",
        timestamp: "10m",
        likes: 3,
      },
    ],
  },
  {
    id: "2",
    username: "mike_drummer",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    content: "Sick riff bro! 🔥 We should jam sometime.",
    timestamp: "1h",
    likes: 5,
  },
];

const CommentItem = ({
  comment,
  isReply = false,
  onReply,
}: {
  comment: Comment;
  isReply?: boolean;
  onReply: (username: string) => void;
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className={`flex gap-3 ${isReply ? "mt-4" : ""}`}>
      <div
        className={`${
          isReply ? "size-6" : "size-8"
        } rounded-full bg-linear-to-br from-primary to-purple-400 p-px shrink-0`}
      >
        <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
          <Image
            src={comment.avatarUrl}
            alt={comment.username}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-bold text-xs">
            {comment.username}
          </span>
          <span className="text-gray-500 text-[10px]">{comment.timestamp}</span>
        </div>
        <p className="text-gray-300 text-xs leading-relaxed">
          {comment.content}
        </p>
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => onReply(comment.username)}
            className="text-[10px] font-bold text-gray-500 hover:text-white transition-colors"
          >
            Reply
          </button>
          <button
            onClick={toggleLike}
            className={`flex items-center gap-1 text-[10px] font-bold transition-colors ${
              liked ? "text-primary" : "text-gray-500 hover:text-white"
            }`}
          >
            <Heart className={`h-3 w-3 ${liked ? "fill-current" : ""}`} />
            <span>{likesCount}</span>
          </button>
        </div>

        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-2 border-l border-border-dark pl-4">
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                isReply
                onReply={onReply}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const VideoPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (x / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="relative w-full h-full group/video">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onContextMenu={(e) => e.preventDefault()}
        controlsList="nodownload"
      />

      {/* Custom Controls Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex flex-col gap-3 pointer-events-auto">
          {/* Progress Bar */}
          <div
            className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer relative group/progress"
            onClick={handleProgressChange}
          >
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute size-3 bg-primary rounded-full top-1/2 -translate-y-1/2 -ml-1.5 opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-glow"
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-primary transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-current" />
                ) : (
                  <Play className="h-5 w-5 fill-current" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-primary transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Big Center Play/Pause Indicator (Optional) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/20"
          >
            <Play className="h-10 w-10 text-white fill-current" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

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
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-20 hidden lg:block"
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background-dark w-full max-w-6xl h-full lg:h-[90vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative lg:rounded-3xl border-none lg:border border-border-dark"
          >
            {/* Left Column: Media */}
            <div className="relative w-full h-[50vh] lg:h-full lg:w-[60%] bg-surface-dark flex items-center justify-center overflow-hidden group">
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

              {/* Media Navigation */}
              {mediaItems.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 p-2 md:p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 p-2 md:p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {mediaItems.map((_, i) => (
                      <div
                        key={i}
                        className={`size-1.5 rounded-full transition-all ${
                          i === currentMediaIndex
                            ? "bg-primary w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Mobile Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white lg:hidden z-10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Right Column: Details & Comments */}
            <div className="w-full lg:w-[40%] bg-surface-dark flex flex-col h-full lg:h-full overflow-hidden">
              {/* Header: User Info */}
              <div className="p-4 border-b border-border-dark flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-linear-to-br from-primary to-purple-400 p-px">
                    <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
                      <Image
                        src={post.avatarUrl}
                        alt={post.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm">
                        {post.username}
                      </h4>
                      <span className="text-gray-500">•</span>
                      <button className="text-primary text-xs font-bold hover:text-primary-hover">
                        Follow
                      </button>
                    </div>
                    <p className="text-gray-400 text-[10px] md:text-xs">
                      Los Angeles • {post.timestamp}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white p-2">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content (Caption + Comments) */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Caption Area */}
                <div className="p-4 border-b border-border-dark/50">
                  <p className="text-white text-sm leading-relaxed mb-3">
                    {post.caption}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-primary font-semibold text-xs cursor-pointer hover:underline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Music className="h-3 w-3" />
                    <span>Original Audio - {post.username}</span>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="p-3 flex items-center justify-between text-xs text-gray-400 border-b border-border-dark/30">
                  <div className="flex gap-4">
                    <span>
                      <strong className="text-white">{post.likes}</strong> Likes
                    </span>
                    <span>
                      <strong className="text-white">{post.comments}</strong>{" "}
                      Comments
                    </span>
                  </div>
                  <span>
                    <strong className="text-white">12.5k</strong> Views
                  </span>
                </div>

                {/* Interaction Buttons */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex flex-col items-center gap-1 transition-colors ${
                        liked
                          ? "text-red-500"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Heart
                        className={`h-6 w-6 ${liked ? "fill-current" : ""}`}
                      />
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
                      <MessageCircle className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => setIsShareModalOpen(true)}
                      className="flex flex-col items-center gap-1 text-gray-400 hover:text-white"
                    >
                      <Share2 className="h-6 w-6" />
                    </button>
                  </div>
                  <Button
                    onClick={() => setIsGiftModalOpen(true)}
                    className="bg-primary hover:bg-primary-hover text-white rounded-full h-10 px-5 font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
                  >
                    <Gift className="h-4 w-4" />
                    Gift
                  </Button>
                </div>

                {/* Comments List */}
                <div className="p-4 pt-0 space-y-5">
                  <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Comments
                  </h5>
                  {getMockComments(post.avatarUrl).map((comment) => (
                    <CommentItem
                      key={comment.id}
                      comment={comment}
                      onReply={handleReply}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom: Comment Input */}
              <div className="p-4 border-t border-border-dark flex items-center gap-3 bg-surface-dark/95 backdrop-blur-md">
                <div className="size-8 rounded-full bg-linear-to-br from-primary to-purple-400 p-px shrink-0">
                  <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-bold text-[10px]">
                      AT
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 group">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-background-dark border border-border-dark rounded-full py-2.5 pl-4 pr-20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all hover:border-gray-600"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="p-1 text-gray-500 hover:text-white">
                      <Smile className="h-4 w-4" />
                    </button>
                    <button
                      className={`text-primary font-bold text-xs px-2 py-1 transition-opacity ${
                        newComment
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
