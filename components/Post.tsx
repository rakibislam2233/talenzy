"use client"

import { Heart, MessageCircle, Gift, Bookmark, Share2, MoreVertical, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PostProps {
  id: string
  username: string
  userAvatar: string
  timeAgo: string
  category?: string
  location?: string
  caption: string
  hashtags?: string[]
  mediaUrl?: string
  mediaType?: "image" | "video"
  likes: number
  comments: number
  views?: number
  originalAudio?: string
}

export default function Post({
  username,
  userAvatar,
  timeAgo,
  category,
  location,
  caption,
  hashtags,
  mediaUrl,
  mediaType = "image",
  likes,
  comments,
  views,
  originalAudio,
}: PostProps) {
  return (
    <div className="bg-[#221c26] rounded-2xl overflow-hidden border border-[#4a3c53]/30 mb-6">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{userAvatar}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">{username}</span>
              {category && (
                <span className="text-gray-400 text-sm">• {category}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              {location && <span>{location}</span>}
              {location && timeAgo && <span>•</span>}
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-8 w-8 p-0"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Media */}
      {mediaUrl && (
        <div className="relative w-full aspect-[4/5] bg-[#2a2330]">
          {mediaType === "video" ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#9419e6]/20 to-[#7a14c4]/20"></div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-red-500 hover:bg-transparent p-0 h-auto"
            >
              <Heart className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-blue-500 hover:bg-transparent p-0 h-auto"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-yellow-500 hover:bg-transparent p-0 h-auto"
            >
              <Gift className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <Bookmark className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <Share2 className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="mb-2">
          <p className="text-white font-semibold text-sm">
            {likes.toLocaleString()} likes
          </p>
          {views && (
            <p className="text-gray-400 text-sm">{views.toLocaleString()} views</p>
          )}
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="text-white font-semibold text-sm mr-2">{username}</span>
          <span className="text-gray-300 text-sm">{caption}</span>
          {hashtags && hashtags.length > 0 && (
            <div className="mt-1">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[#9419e6] text-sm mr-2 hover:underline cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Original Audio */}
        {originalAudio && (
          <p className="text-gray-400 text-xs mb-2">{originalAudio}</p>
        )}

        {/* Comments */}
        <button className="text-gray-400 text-sm hover:text-white transition-colors">
          View all {comments} comments
        </button>
      </div>
    </div>
  )
}

