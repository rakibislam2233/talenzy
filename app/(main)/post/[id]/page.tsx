"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Gift,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Smile,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comment, setComment] = useState("");

  // Mock Data mimicking the screenshot
  const post = {
    id: params.id,
    user: {
      name: "GuitarMaster",
      location: "Los Angeles",
      time: "2h ago",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
      isFollowing: false,
    },
    content: {
      type: "image", // or video
      url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200",
      caption:
        "Practicing a new riff inspired by the classics. Specifically tried to channel some Hendrix vibes here with the bending. Let me know what you think! 🎸🔥 text-primary",
      tags: ["#TalenzyMusic", "#GuitarSolo", "#Rock", "#MusicianLife"],
      audio: "Original Audio - GuitarMaster",
    },
    stats: {
      likes: "1,245",
      comments: "84",
      views: "12.5k",
    },
    comments: [
      {
        id: 1,
        user: "sarah_s",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        text: "This tone is incredible! What amp are you using?",
        time: "24m",
        likes: 12,
      },
      {
        id: 2,
        user: "mike_drummer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        text: "Sick riff bro! 🔥 We should jam sometime.",
        time: "1h",
        likes: 5,
      },
      {
        id: 3,
        user: "jazz_cat",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
        text: "Smooth transitions. Love it.",
        time: "1h",
        likes: 2,
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 md:right-8 md:top-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Main Container */}
      <div className="bg-background-dark w-full max-w-7xl h-[85vh] md:h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-border-dark animate-in zoom-in-95 duration-300">
        {/* Left Side: Media */}
        <div className="relative w-full md:w-[60%] lg:w-[65%] bg-black flex items-center justify-center group">
          {/* Media Content */}
          <div className="relative w-full h-full">
            <Image
              src={post.content.url}
              alt="Post Content"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Overlay Gradient for mobile legibility if needed, mostly clean on desktop */}
        </div>

        {/* Right Side: Details & Comments */}
        <div className="w-full md:w-[40%] lg:w-[35%] bg-surface-dark flex flex-col h-full border-l border-border-dark">
          {/* Header: User Info */}
          <div className="p-4 border-b border-border-dark flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-background-dark">
                  <Image
                    src={post.user.avatar}
                    alt={post.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm hover:underline cursor-pointer">
                  {post.user.name}
                </h4>
                <p className="text-xs text-gray-400">
                  {post.user.location} • {post.user.time}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary-hover font-bold text-sm h-8 px-3 hover:bg-primary/10"
              >
                Follow
              </Button>
              <button className="text-gray-400 hover:text-white p-1">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content: Caption & Comments */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-6">
            {/* Caption Section */}
            <div className="space-y-3 pb-4 border-b border-border-dark/50">
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                {post.content.caption}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-primary text-sm font-medium hover:underline cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {post.content.audio && (
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <span className="animate-pulse">🎵</span>
                  <span>{post.content.audio}</span>
                </div>
              )}
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between text-sm text-gray-400 pb-2">
              <div className="flex gap-4">
                <span className="font-semibold text-white">
                  {post.stats.likes}{" "}
                  <span className="font-normal text-gray-500">Likes</span>
                </span>
                <span className="font-semibold text-white">
                  {post.stats.comments}{" "}
                  <span className="font-normal text-gray-500">Comments</span>
                </span>
              </div>
              <span>{post.stats.views} Views</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between py-2 border-y border-border-dark/50">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <Heart
                    className={`h-6 w-6 transition-colors ${
                      isLiked
                        ? "fill-red-500 text-red-500"
                        : "text-white group-hover:text-gray-300"
                    }`}
                  />
                  <span className="text-[10px] text-gray-400">Like</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                  <MessageCircle className="h-6 w-6 text-white group-hover:text-gray-300" />
                  <span className="text-[10px] text-gray-400">Comment</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                  <Share2 className="h-6 w-6 text-white group-hover:text-gray-300" />
                  <span className="text-[10px] text-gray-400">Share</span>
                </button>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-9 rounded-full px-4 gap-2">
                <Gift className="h-4 w-4 fill-black" />
                Gift
              </Button>
            </div>

            {/* Comments List */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Comments
              </h5>

              {post.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 group">
                  <div className="size-8 rounded-full overflow-hidden shrink-0 border border-border-dark">
                    <Image
                      src={comment.avatar}
                      alt={comment.user}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-white font-bold text-sm cursor-pointer hover:underline">
                        {comment.user}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-snug">
                      {comment.text}
                    </p>
                    <div className="flex items-center gap-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-xs text-secondary hover:text-white font-medium">
                        Reply
                      </button>
                      <div className="flex items-center gap-1 text-gray-500 hover:text-red-500 cursor-pointer">
                        <Heart className="h-3 w-3" />
                        <span className="text-[10px]">{comment.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer: Add Comment */}
          <div className="p-4 border-t border-border-dark bg-surface-dark shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-gray-700 shrink-0 overflow-hidden">
                {/* Current User Avatar Placeholder */}
                <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-600"></div>
              </div>
              <div className="flex-1 relative">
                <Input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="bg-background-dark border-border-dark text-white rounded-full h-10 pr-10 focus:border-primary/50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                  <Smile className="h-5 w-5" />
                </button>
              </div>
              <button
                disabled={!comment.trim()}
                className="text-primary hover:text-primary-hover font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
