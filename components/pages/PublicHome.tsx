"use client";
import PostCard from "@/components/FeedPost";
import { MOCK_POSTS } from "@/lib/data";

export default function PublicHome() {

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-12 pb-32">
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
