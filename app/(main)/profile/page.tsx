"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  FolderHeart,
  Link as LinkIcon,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Play,
  Plus,
  Settings,
  Share,
  Star,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Posts");
  const [selectedCollection, setSelectedCollection] = useState<any>(null);

  const posts = [
    {
      id: 1,
      type: "video",
      title: "Guitar Performance",
      pinned: false,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    },
    {
      id: 2,
      type: "image",
      title: "Creative Agency",
      pinned: false,
      image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800",
    },
    {
      id: 3,
      type: "video",
      title: "Pinned Video",
      pinned: true,
      image:
        "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=800",
    },
    {
      id: 4,
      type: "video",
      title: "Road Trip",
      pinned: false,
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800",
    },
    {
      id: 5,
      type: "video",
      title: "Motion Graphics",
      pinned: false,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799312c95d?w=800",
    },
    {
      id: 6,
      type: "image",
      title: "Books Collection",
      locked: true,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
    },
  ];

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
        {
          id: 103,
          title: "Music Vibes",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
          type: "video",
        },
        {
          id: 104,
          title: "Tutorials",
          image:
            "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800",
          type: "video",
        },
      ],
    },
    {
      id: 2,
      name: "Watch Later",
      count: 24,
      cover:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      items: [
        {
          id: 201,
          title: "Event Promo",
          image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
          type: "video",
        },
        {
          id: 202,
          title: "Behind Scenes",
          image:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
          type: "video",
        },
      ],
    },
    {
      id: 3,
      name: "Design Ideas",
      count: 56,
      cover: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
      items: [
        {
          id: 301,
          title: "Color Palettes",
          image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
          type: "image",
        },
      ],
    },
    {
      id: 4,
      name: "Music Types",
      count: 12,
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      items: [],
    },
  ];

  const reviews = [
    {
      id: 1,
      reviewer: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      rating: 5,
      date: "2 days ago",
      comment:
        "Alex is an incredible artist to work with! The motion graphics delivered were beyond my expectations. Highly recommended! ⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      reviewer: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      rating: 5,
      date: "1 week ago",
      comment:
        "Super professional and creative. Looking forward to our next collaboration.",
    },
    {
      id: 3,
      reviewer: "Emily Blunt",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Great work on the portrait session. Very talented photographer!",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-32">
      {/* Cover Image */}
      <div className="relative h-64 bg-linear-to-br from-[#2d0845] to-[#500e7c] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
        <button className="absolute bottom-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all border border-white/10 group">
          <Camera className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>Edit Cover</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="px-6 pb-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end md:items-end justify-between -mt-20 mb-6 gap-4">
          <div className="relative group">
            <div className="size-40 rounded-full p-1.5 bg-background-dark">
              <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-surface-dark overflow-hidden relative">
                  {/* Placeholder for real profile image logic */}
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
            <button className="absolute bottom-3 right-3 bg-primary hover:bg-primary-hover text-white p-2.5 rounded-full border-4 border-background-dark shadow-lg transition-transform hover:scale-105 active:scale-95">
              <Pencil className="h-4 w-4" />
            </button>
          </div>

          <div className="flex gap-3 mb-4 md:mb-2">
            <Button className="bg-primary hover:bg-primary-hover text-white rounded-full h-10 px-6 font-bold shadow-glow transition-all hover:-translate-y-0.5">
              Edit Profile
            </Button>
            <Button
              variant="outline"
              className="bg-surface-dark border-border-dark text-white hover:bg-white/5 hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-surface-dark border border-border-dark text-gray-400 hover:text-white hover:border-white/20 rounded-full h-10 w-10 flex items-center justify-center transition-all bg-transparent"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-white">Alex Talent</h1>
            <CheckCircle2 className="h-6 w-6 text-blue-500" />
            <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-semibold rounded-full">
              HIRING
            </span>
          </div>
          <p className="text-gray-400 mb-4">@alextalent</p>
          <p className="text-white mb-4 max-w-2xl">
            Multidisciplinary creative director & visual artist 🎨. Creating
            digital experiences that matter. Obsessed with colors and motion.
            Open for collaborations! ✨
          </p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              <a href="#" className="hover:text-primary transition-colors">
                alexcreatives.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Joined March 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Visual Arts</span>
            </div>
          </div>
          <div className="flex gap-8 p-4 bg-surface-dark rounded-xl border border-border-dark inline-flex">
            <div className="text-center">
              <p className="text-white font-bold text-lg">142</p>
              <p className="text-gray-500 text-xs font-bold tracking-wider">
                POSTS
              </p>
            </div>
            <div className="w-px bg-border-dark"></div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">12.5k</p>
              <p className="text-gray-500 text-xs font-bold tracking-wider">
                FOLLOWERS
              </p>
            </div>
            <div className="w-px bg-border-dark"></div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">480</p>
              <p className="text-gray-500 text-xs font-bold tracking-wider">
                FOLLOWING
              </p>
            </div>
            <div className="w-px bg-border-dark"></div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1">
                <p className="text-white font-bold text-lg">4.9</p>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-gray-500 text-xs font-bold tracking-wider">
                RATING
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-border-dark mb-8">
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
              {posts.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square bg-surface-dark rounded-xl overflow-hidden group cursor-pointer border border-border-dark"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center md:gap-2">
                    {item.type === "video" && (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                        ▶
                      </div>
                    )}
                    <p className="text-white font-bold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                      {item.title}
                    </p>
                  </div>

                  {item.pinned && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                      PINNED
                    </div>
                  )}
                  {item.locked && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-full">
                      <span className="text-xs">🔒</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "Saved" && (
            <div className="animate-in fade-in duration-500">
              {!selectedCollection ? (
                // Grid of Collections (Folders)
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {collections.map((collection) => (
                    <div
                      key={collection.id}
                      onClick={() => setSelectedCollection(collection)}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[4/5] relative bg-surface-dark rounded-xl overflow-hidden border border-border-dark mb-3">
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
                      <p className="text-text-secondary text-sm">
                        {collection.count} saved items
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                // Collection Detail View
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedCollection(null)}
                      className="text-white hover:text-primary hover:bg-surface-dark"
                    >
                      <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <div>
                      <h2 className="text-2xl font-bold text-white leading-tight">
                        {selectedCollection.name}
                      </h2>
                      <p className="text-text-secondary text-sm">
                        {selectedCollection.items.length} items
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCollection.items.map((item: any) => (
                      <div
                        key={item.id}
                        className="relative aspect-[3/4] bg-surface-dark rounded-xl overflow-hidden group border border-border-dark cursor-pointer"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        {item.type === "video" && (
                          <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                            <Play className="h-3 w-3 text-white fill-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    {/* Add Item Placeholder */}
                    <div className="aspect-[3/4] bg-surface-dark rounded-xl border-2 border-dashed border-border-dark flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-gray-400">
                        <Plus className="h-6 w-6" />
                      </div>
                      <span className="text-gray-400 font-medium text-sm group-hover:text-white">
                        Add New
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-surface-dark p-6 rounded-2xl border border-border-dark flex flex-col gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full overflow-hidden relative border border-border-dark">
                        <Image
                          src={review.avatar}
                          alt={review.reviewer}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">
                          {review.reviewer}
                        </h4>
                        <span className="text-text-secondary text-xs">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-dark/50">
                    <button className="text-xs text-secondary font-medium hover:text-white flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" /> Helpful
                    </button>
                    <button className="text-xs text-secondary font-medium hover:text-white flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" /> Reply
                    </button>
                    <button className="ml-auto text-secondary hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
