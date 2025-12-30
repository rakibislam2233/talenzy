
'use client'
import PostCard from "@/components/FeedPost";
import PublicHome from "@/components/pages/PublicHome";
import { useAuth } from "@/context/AuthContext";
import { MOCK_POSTS } from "@/lib/data";

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PublicHome />;
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4 pb-32">
      {/* Feed Posts */}
      <div className="w-full space-y-8 mt-8">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}