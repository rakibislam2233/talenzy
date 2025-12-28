"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronDown, MessageSquare, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DiscoverPeople() {
  const [filter] = useState("Recommended");

  // Mock data matching the screenshot
  const profiles = [
    {
      id: 1,
      name: "GuitarMaster",
      username: "@guitarmaster",
      avatar:
        "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100&h=100", // Guitarist
      role: "Musician",
      location: "Los Angeles",
      bio: "Creating soulful riffs and melodies. Open for...",
      followers: "45.2k",
      posts: "128",
      verified: true,
      isFollowing: false,
      online: true,
    },
    {
      id: 2,
      name: "Sarah Sterling",
      username: "@sarah_dance",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100", // Girl
      role: "Dancer",
      location: "New York",
      bio: "Contemporary dancer & choreographer. Movin...",
      followers: "18.4k",
      posts: "342",
      verified: false,
      isFollowing: true,
      online: false,
    },
    {
      id: 3,
      name: "Davide Rossi",
      username: "@davide_design",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100", // Guy
      role: "Designer",
      location: "Milan",
      bio: "Visual storyteller and brand identity speciali...",
      followers: "8.2k",
      posts: "56",
      projects: true, // Label switch
      verified: true,
      isFollowing: false,
      online: true,
    },
    {
      id: 4,
      name: "Anna Klein",
      username: "@annak_photo",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100", // Girl 3
      role: "Photographer",
      location: "Berlin",
      bio: "Capturing moments that last forever. Portrait &...",
      followers: "15.9k",
      posts: "890",
      label: "SHOTS",
      verified: false,
      isFollowing: false,
      online: false,
    },
    {
      id: 5,
      name: "James Lee",
      username: "@james_dev",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100",
      role: "Developer",
      location: "San Francisco",
      bio: "Full-stack wizard building the future of...",
      followers: "5.3k",
      posts: "42",
      label: "REPOS",
      verified: false,
      isFollowing: false,
      online: true,
    },
    {
      id: 6,
      name: "Jenny Art",
      username: "@jenny_art",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100",
      role: "Artist",
      location: "Paris",
      bio: "Exploring colors and emotions through digit...",
      followers: "22.1k",
      posts: "105",
      label: "WORKS",
      verified: true,
      isFollowing: true,
      online: false,
    },
    {
      id: 7,
      name: "Mike Motion",
      username: "@mike_motion",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100",
      role: "Videographer",
      location: "Toronto",
      bio: "Cinematic storytelling through lens....",
      followers: "9.8k",
      posts: "64",
      label: "VIDEOS",
      verified: false,
      isFollowing: false,
      online: false,
    },
    {
      id: 8,
      name: "Lisa M.",
      username: "@lisa_model",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100",
      role: "Model",
      location: "Tokyo",
      bio: "Fashion and commercial model. Passionate abo...",
      followers: "30.5k",
      posts: "450",
      label: "PHOTOS",
      verified: false,
      isFollowing: false,
      online: true,
    },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Discover People
          </h1>
          <p className="text-gray-400 text-sm">
            Connect with talented individuals across the globe
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Sort by:</span>
          <button className="flex items-center gap-2 bg-[#2a2330] hover:bg-[#332840] text-white px-4 py-2 rounded-lg border border-border-dark/30 transition-colors text-sm font-medium">
            {filter}
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-dark/50 p-4 rounded-xl border border-border-dark/30 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or username"
              className="w-full h-10 bg-background-dark border border-border-dark/30 rounded-lg pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto">
            <Dropdown label="All Categories" />
            <Dropdown label="Location" />
            <Dropdown label="Skills" />
          </div>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-3 mt-4 text-xs">
          <span className="text-gray-500 font-semibold uppercase tracking-wider">
            Popular:
          </span>
          <div className="flex gap-2">
            {["#Musicians", "#Designers", "#Dancers", "#Photographers"].map(
              (tag) => (
                <button
                  key={tag}
                  className="bg-[#2a2330] hover:bg-primary/20 hover:text-primary text-gray-400 px-3 py-1 rounded-full transition-colors"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => {
              // Navigate to user profile page
              window.location.href = `/discover-people/${profile.username.replace(
                "@",
                ""
              )}`;
            }}
            className="bg-surface-dark rounded-2xl p-6 border border-border-dark/30 hover:border-primary/30 transition-all hover:transform hover:-translate-y-1 group relative overflow-hidden cursor-pointer"
          >
            {/* Gradient Background Effect */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-[#2a2330] to-transparent opacity-50"></div>

            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full p-1 bg-surface-dark border border-border-dark/50">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {profile.online && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-surface-dark rounded-full"></div>
                )}
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-white font-bold text-lg">{profile.name}</h3>
                {profile.verified && (
                  <div className="bg-blue-500 p-0.5 rounded-full">
                    <Check className="w-2 h-2 text-white" />
                  </div>
                )}
              </div>
              <p className="text-primary text-sm font-medium mb-3">
                {profile.username}
              </p>

              <div className="bg-[#2a2330] px-3 py-1 rounded-full text-xs text-gray-300 mb-4 inline-flex items-center gap-1.5 border border-border-dark/30">
                <span className="font-semibold">{profile.role}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-gray-400">{profile.location}</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 line-clamp-2 h-10">
                {profile.bio}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 w-full border-t border-border-dark/30 pt-4 mb-6">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">
                    {profile.followers}
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                    Followers
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-lg">
                    {profile.posts}
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                    {profile.label || (profile.projects ? "Projects" : "Posts")}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 w-full">
                {profile.isFollowing ? (
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-[#2a2330] hover:bg-[#332840] text-gray-300 border border-border-dark/30 font-semibold h-10 transition-colors"
                  >
                    Followed
                  </Button>
                ) : (
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold h-10 shadow-lg shadow-primary/25 transition-all"
                  >
                    Follow
                  </Button>
                )}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#2a2330] hover:bg-[#332840] border border-border-dark/30 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <Button
          variant="outline"
          className="rounded-full px-6 py-6 border-border-dark bg-[#2a2330] text-white hover:bg-[#332840]"
        >
          Load More People <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function Dropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-2 bg-background-dark hover:bg-[#2a2330] border border-border-dark/30 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white whitespace-nowrap transition-colors min-w-[120px] justify-between">
      {label}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
}
