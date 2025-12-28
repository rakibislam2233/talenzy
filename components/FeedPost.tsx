"use client";

import {
  Bookmark,
  Briefcase,
  Gift,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="relative w-full aspect-4/5 bg-surface-dark rounded-2xl overflow-hidden border border-border-dark shadow-2xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20">
      {/* Media Content */}
      <div className="absolute inset-0">
        <Image
          src={post.mediaUrl}
          alt="Post content"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/90"></div>
      </div>

      {/* Right Interaction Rail */}
      <div className="absolute right-4 bottom-24 flex flex-col gap-5 items-center ">
        <button
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
        >
          <div
            className={`p-3 rounded-full backdrop-blur-sm transition-all ${
              liked ? "bg-red-500/30" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <Heart
              className={`h-7 w-7 transition-colors ${
                liked ? "text-red-500 fill-current" : "text-white"
              }`}
            />
          </div>
          <span className="text-xs font-bold text-white drop-shadow-md">
            {liked ? "1.3k" : post.likes}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <span className="text-xs font-bold text-white drop-shadow-md">
            {post.comments}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none">
          <div className="p-3 rounded-full bg-primary/80 backdrop-blur-sm shadow-glow hover:scale-110 transition-all">
            <Gift className="h-7 w-7 text-white" />
          </div>
          <span className="text-xs font-bold text-white drop-shadow-md">
            Gift
          </span>
        </button>

        <button
          onClick={() => setSaved(!saved)}
          className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none"
        >
          <div
            className={`p-3 rounded-full backdrop-blur-sm transition-all ${
              saved ? "bg-primary/30" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <Bookmark
              className={`h-7 w-7 text-white ${saved ? "fill-current" : ""}`}
            />
          </div>
          <span className="text-xs font-bold text-white drop-shadow-md">
            Save
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group/icon cursor-pointer outline-none">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
            <Share2 className="h-7 w-7 text-white" />
          </div>
          <span className="text-xs font-bold text-white drop-shadow-md">
            Share
          </span>
        </button>
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 pr-20 text-left">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full border-2 border-primary p-0.5 pointer-events-none relative">
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
              <h3 className="text-white font-bold text-base shadow-black drop-shadow-md">
                {post.username}
              </h3>
              <span className="text-xs text-gray-300 font-medium">
                {post.audioName || "Original Audio"} • {post.timestamp}
              </span>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-primary backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5" />
            Hire Me
          </button>
        </div>
        <p className="text-white text-sm leading-relaxed drop-shadow-md line-clamp-2 mb-2 text-left">
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
  );
};

export default PostCard;
