import type { Metadata } from "next";
import PostViewModal from "@/components/modals/PostViewModal";
import { Button } from "@/components/ui/button";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import {
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  FolderHeart,
  Link as LinkIcon,
  MapPin,
  Pencil,
  Settings,
  Share,
  Star,
  Verified,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export const metadata: Metadata = {
  title: "Profile | Talenzy",
  description: "View your profile on Talenzy - showcase your talents and connect with other creative professionals.",
  openGraph: {
    title: "Profile | Talenzy",
    description: "View your profile on Talenzy - showcase your talents and connect with other creative professionals.",
    type: "profile",
    url: "https://www.talenzy.com/profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | Talenzy",
    description: "View your profile on Talenzy - showcase your talents and connect with other creative professionals.",
  },
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Posts");
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Filter posts for the current user (demo: Alex Talent)
  const myPosts = useMemo(() => {
    return MOCK_POSTS.filter(
      (p) =>
        p.username === "Alex Talent" ||
        p.username === "alextalent" ||
        p.id === "1" ||
        p.id === "2"
    );
  }, []);

  const collections = [
    {
      id: 1,
      name: "All Saves",
      count: 142,
      cover:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800",
      items: [
        {
          id: 101,
          title: "Inspiration",
          image:
            "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800",
          type: "image",
        },
        {
          id: 102,
          title: "Design Trends",
          image:
            "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800",
          type: "image",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-32">
      {/* Cover Image */}
      <div className="relative h-64 bg-linear-to-br from-[#2d0845] to-primary overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
        <button className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all border border-white/10 group">
          <Camera className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>Edit Cover</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="px-4 sm:px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between -mt-20 sm:-mt-24 mb-6 gap-6 md:gap-4">
          <div className="relative group mx-auto md:mx-0">
            <div className="size-32 sm:size-40 rounded-full p-1.5 bg-background-dark">
              <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-surface-dark overflow-hidden relative">
                  <div className="w-full h-full bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-4xl font-bold text-white relative">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute bottom-1 sm:bottom-3 right-1 sm:right-3 bg-primary hover:bg-primary-hover text-white p-2 sm:p-2.5 rounded-full border-4 border-background-dark shadow-lg transition-transform hover:scale-105 active:scale-95">
              <Pencil className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 mb-2 text-white w-full md:w-auto">
            <Button className="flex-1 md:flex-none bg-primary hover:bg-primary-hover text-white rounded-full h-10 px-6 font-bold shadow-glow transition-all hover:-translate-y-0.5">
              Edit Profile
            </Button>
            <Button
              variant="outline"
              className="flex-1 md:flex-none bg-surface-dark border-border-dark text-white hover:bg-white/5 hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all flex items-center justify-center"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 bg-surface-dark border border-border-dark text-gray-400 hover:text-white hover:border-white/20 rounded-full h-10 w-10 flex items-center justify-center transition-all bg-transparent"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-8 mt-2 md:mt-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Alex Talent
            </h1>
            <div className="flex items-center gap-2">
              <Verified className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-tighter">
                HIRING
              </span>
            </div>
          </div>
          <p className="text-primary font-medium text-sm sm:text-base mb-4 lowercase tracking-tight">
            @alextalent
          </p>
          <p className="text-gray-300 mb-6 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
            Multidisciplinary creative director & visual artist 🎨. Creating
            digital experiences that matter. Obsessed with colors and motion.
            Open for collaborations! ✨
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-gray-400 text-[13px] mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary/70" />
              <a href="#" className="hover:text-primary transition-colors">
                alexcreatives.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span>Joined March 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary/70" />
              <span>Visual Arts</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-8 p-4 bg-surface-dark/50 sm:p-5 sm:bg-surface-dark rounded-2xl border border-border-dark w-full sm:w-fit mx-auto md:mx-0 justify-center sm:justify-start shadow-xl">
            <div className="text-center px-2">
              <p className="text-white font-bold text-lg sm:text-xl">142</p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">
                POSTS
              </p>
            </div>
            <div className="w-px bg-border-dark/50"></div>
            <div className="text-center px-2">
              <p className="text-white font-bold text-lg sm:text-xl">12.5k</p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">
                FOLLOWERS
              </p>
            </div>
            <div className="w-px bg-border-dark/50"></div>
            <div className="text-center px-2">
              <p className="text-white font-bold text-lg sm:text-xl">480</p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">
                FOLLOWING
              </p>
            </div>
            <div className="w-px bg-border-dark/50"></div>
            <div className="text-center flex flex-col items-center px-2">
              <div className="flex items-center gap-1">
                <p className="text-white font-bold text-lg sm:text-xl">4.9</p>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest font-black">
                RATING
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-border-dark mb-8 overflow-x-auto scrollbar-hide scroll-smooth">
          {["Posts", "Saved", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCollection(null);
              }}
              className={`pb-4 px-2 border-b-2 transition-all text-sm font-bold ${
                activeTab === tab
                  ? "border-primary text-white"
                  : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {activeTab === "Posts" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              {myPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="relative aspect-square bg-surface-dark rounded-xl overflow-hidden group cursor-pointer border border-border-dark"
                >
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center md:gap-2">
                    {post.mediaItems?.some((m) => m.type === "video") && (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    )}
                    <p className="text-white font-bold text-sm px-4 text-center line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Saved" && (
            <div className="animate-in fade-in duration-500">
              {!selectedCollection ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {collections.map((collection) => (
                    <div
                      key={collection.id}
                      onClick={() => setSelectedCollection(collection)}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-4/5 relative bg-surface-dark rounded-xl overflow-hidden border border-border-dark mb-3">
                        <Image
                          src={collection.cover}
                          alt={collection.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                          <FolderHeart className="h-8 w-8 text-white mb-2" />
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-lg">
                        {collection.name}
                      </h3>
                      <p className="text-text-secondary text-sm font-medium">
                        {collection.count} saved items
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Collection detail logic */}
                </div>
              )}
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500 text-white">
              {/* Reviews content */}
            </div>
          )}
        </div>
      </div>

      {selectedPost && (
        <PostViewModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      )}
    </div>
  );
}
