"use client";

import PostViewModal from "@/components/modals/PostViewModal";
import { Button } from "@/components/ui/button";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import {
  Calendar,
  CheckCircle2,
  Gift,
  Link as LinkIcon,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Play,
  Star,
  ThumbsUp,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";

// Helper to get profile data based on username
// In a real app, this would be an API call
const getProfileData = (username: string) => {
  const profiles = [
    {
      name: "GuitarMaster",
      username: "guitarmaster",
      avatar: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=400",
      role: "Musician",
      location: "Los Angeles, CA",
      bio: "Creating soulful riffs and melodies. Exploring the boundaries of sound and expression. #guitarist #music #live",
      followers: "45.2k",
      following: "128",
      rating: "4.9",
      verified: true,
      hiring: true,
    },
    {
      name: "Alex Creator",
      username: "alexcreates",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      role: "Digital Artist",
      location: "New York, USA",
      bio: "Digital Artist & 3D Animator 🎨 exploring the boundaries of motion and surrealism. Creating visual experiences for brands and dreamers. #3dart #blender",
      followers: "12.5k",
      following: "842",
      rating: "4.8",
      verified: true,
      hiring: true,
    },
    {
      name: "Sarah Sterling",
      username: "sarah_dance",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
      role: "Dancer",
      location: "New York, USA",
      bio: "Contemporary dancer & choreographer. Moving through life one step at a time. #dance #art #motion",
      followers: "18.4k",
      following: "342",
      rating: "4.7",
      verified: false,
      hiring: false,
    },
  ];
  return (
    profiles.find(
      (p) => p.username.toLowerCase() === username.toLowerCase()
    ) || {
      name: username.charAt(0).toUpperCase() + username.slice(1),
      username: username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      role: "Content Creator",
      location: "Unknown Location",
      bio: `Passionate creator ${username} sharing amazing content on Talenzy.`,
      followers: "0",
      following: "0",
      rating: "0.0",
      verified: false,
      hiring: false,
    }
  );
};

export default function UserProfilePage() {
  const params = useParams();
  const usernameParam = params.username as string;
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const profile = useMemo(() => getProfileData(usernameParam), [usernameParam]);

  const userPosts = useMemo(() => {
    // Search both username and lowercase username for safety
    return MOCK_POSTS.filter(
      (p) =>
        p.username.toLowerCase() === usernameParam.toLowerCase() ||
        p.username.toLowerCase() === profile.username.toLowerCase()
    );
  }, [usernameParam, profile.username]);

  // Fallback posts if the user has none
  const displayPosts = useMemo(() => {
    if (userPosts.length > 0) return userPosts;

    // Default fallback for demo - show first 6 posts from MOCK_POSTS
    // This ensures no profile page looks empty
    return MOCK_POSTS.slice(0, 6);
  }, [userPosts]);

  return (
    <div className="max-w-6xl mx-auto pb-32 font-outfit">
      {/* Cover Image */}
      <div className="relative h-64 bg-linear-to-br from-[#2d0845] to-primary overflow-hidden rounded-t-xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row items-end md:items-end justify-between -mt-20 mb-6 gap-4">
          <div className="relative group">
            <div className="size-40 rounded-full p-1.5 bg-background-dark">
              <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-surface-dark overflow-hidden relative">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-4 md:mb-2 text-white">
            <Button className="bg-primary hover:bg-primary-hover text-white rounded-full h-10 px-6 font-bold shadow-glow transition-all hover:-translate-y-0.5 flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Follow
            </Button>
            <Button
              variant="outline"
              className="bg-surface-dark border-border-dark text-white hover:bg-white/5 hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button
              variant="outline"
              className="bg-surface-dark border-border-dark text-white hover:bg-white/5 hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all"
            >
              <Gift className="h-4 w-4 mr-2" />
              Hire
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-surface-dark border border-border-dark text-gray-400 hover:text-white hover:border-white/20 rounded-full h-10 w-10 flex items-center justify-center transition-all bg-transparent"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
            {profile.verified && (
              <CheckCircle2 className="h-6 w-6 text-blue-500" />
            )}
            {profile.hiring && (
              <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
                AVAILABLE FOR HIRE
              </span>
            )}
          </div>
          <p className="text-gray-400 mb-4">@{usernameParam}</p>
          <p className="text-white mb-4 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              <a href="#" className="hover:text-primary transition-colors">
                {profile.username}.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Joined March 2024</span>
            </div>
          </div>
          <div className="flex gap-8 p-4 bg-surface-dark rounded-xl border border-border-dark w-fit">
            <div className="text-center px-2">
              <p className="text-white font-bold text-lg">
                {profile.followers}
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                FOLLOWERS
              </p>
            </div>
            <div className="w-px bg-border-dark"></div>
            <div className="text-center px-2">
              <p className="text-white font-bold text-lg">
                {profile.following}
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                FOLLOWING
              </p>
            </div>
            <div className="w-px bg-border-dark"></div>
            <div className="text-center flex flex-col items-center px-2">
              <div className="flex items-center gap-1">
                <p className="text-white font-bold text-lg">{profile.rating}</p>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                RATING
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-border-dark mb-8">
          {["Portfolio", "Videos", "About", "Gifts"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
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
          {activeTab === "Portfolio" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              {displayPosts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPost(item)}
                  className="relative aspect-square bg-surface-dark rounded-xl overflow-hidden group cursor-pointer border border-border-dark"
                >
                  <Image
                    src={item.mediaUrl}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center md:gap-2">
                    {item.mediaItems?.some((m) => m.type === "video") && (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    )}
                    <p className="text-white font-bold text-sm px-4 text-center line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
              {displayPosts.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-500 font-medium">
                    No portfolio items yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Videos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              {displayPosts
                .filter(
                  (item) =>
                    item.mediaUrl.endsWith(".mp4") ||
                    item.mediaItems?.some((m) => m.type === "video")
                )
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPost(item)}
                    className="relative aspect-square bg-surface-dark rounded-xl overflow-hidden group cursor-pointer border border-border-dark"
                  >
                    <Image
                      src={item.mediaUrl}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Play className="h-6 w-6 fill-white" />
                      </div>
                    </div>
                  </div>
                ))}
              {displayPosts.filter(
                (item) =>
                  item.mediaUrl.endsWith(".mp4") ||
                  item.mediaItems?.some((m) => m.type === "video")
              ).length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="text-gray-500 font-medium">No videos found.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "About" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500 text-white">
              <div className="col-span-full mb-4">
                <h3 className="text-xl font-bold mb-4">
                  User Experience & Reviews
                </h3>
              </div>
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="bg-surface-dark p-6 rounded-2xl border border-border-dark flex flex-col gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full overflow-hidden relative border border-border-dark bg-gray-700">
                        <Image
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer${id}`}
                          alt="Reviewer"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">
                          Reviewer {id}
                        </h4>
                        <span className="text-gray-400 text-xs">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < 5 - (id % 2)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Great work by {profile.name}! Very professional and
                    creative. The attention to detail in the work is amazing.
                    Definitely recommend working with them.
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-dark/50">
                    <button className="text-xs text-gray-400 font-medium hover:text-white flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" /> Helpful
                    </button>
                    <button className="text-xs text-white font-medium hover:text-white flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> Reply
                    </button>
                    <button className="ml-auto text-gray-400 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Gifts" && (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
              <div className="w-20 h-20 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center mb-4">
                <Gift className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                No Gifts Yet
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Send a gift to show your appreciation!
              </p>
              <Button className="bg-primary hover:bg-primary-hover text-white rounded-full h-10 px-6 font-bold shadow-glow">
                <Gift className="h-4 w-4 mr-2" />
                Send Gift
              </Button>
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
