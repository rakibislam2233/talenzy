"use client";
import { MOCK_POSTS } from "@/lib/data";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-8 flex flex-col gap-10 pb-28 sm:pb-32">
      <div className="space-y-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
export default Posts;
