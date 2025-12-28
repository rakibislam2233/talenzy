"use client";

import PostCard from "@/components/FeedPost";
import PublicHome from "@/components/pages/PublicHome";
import { useAuth } from "@/context/AuthContext";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

import { MOCK_POSTS, MOCK_STORIES } from "@/lib/data";

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PublicHome />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pb-32">
      {/* Stories Section */}
      <div className="py-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 p-0.5 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
              <div className="w-full h-full bg-surface-dark rounded-full flex items-center justify-center">
                <PlusCircle className="text-primary h-6 w-6" />
              </div>
            </div>
            <span className="text-xs text-white font-medium">My Story</span>
          </div>
          {MOCK_STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center gap-2 min-w-[72px] cursor-pointer group"
            >
              <div
                className={`w-16 h-16 rounded-full border-2 p-0.5 group-hover:scale-105 transition-transform ${
                  story.isViewed ? "border-gray-600" : "border-primary"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-800">
                  <Image
                    src={story.avatarUrl}
                    alt={story.username}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-white font-medium truncate w-full text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <button className="flex items-center gap-2 hover:bg-background-dark px-3 py-2 rounded-lg transition-colors group">
      <Icon className={`h-4 w-4 ${color}`} />
      <span className="text-gray-400 font-medium text-xs group-hover:text-white transition-colors">
        {label}
      </span>
    </button>
  );
}
