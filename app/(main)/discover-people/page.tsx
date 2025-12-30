"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Check, ChevronDown, MessageSquare, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DiscoverPeople() {
  const [filter] = useState("Recommended");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-32">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-1">
            Discover <span className="text-primary italic">Talent</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Connect with incredible creators around the globe
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest hidden sm:block">
            Sort by:
          </span>
          <button className="flex items-center justify-between gap-3 bg-[#2a2330] hover:bg-[#332840] text-white px-4 py-2.5 rounded-xl border border-border-dark/30 transition-all text-sm font-bold shadow-lg min-w-[140px]">
            {filter}
            <ChevronDown className="h-4 w-4 text-primary" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-dark/50 p-4 sm:p-5 rounded-2xl border border-border-dark/40 mb-10 shadow-xl backdrop-blur-md">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search by name, role, or username..."
              className="w-full h-12 bg-background-dark/80 border border-border-dark/50 rounded-xl pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="min-w-[150px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="musician">Musicians</SelectItem>
                <SelectItem value="dancer">Dancers</SelectItem>
                <SelectItem value="designer">Designers</SelectItem>
                <SelectItem value="photographer">Photographers</SelectItem>
                <SelectItem value="artist">Artists</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="min-w-[140px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="min-w-[130px]">
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="guitar">Guitar</SelectItem>
                <SelectItem value="piano">Piano</SelectItem>
                <SelectItem value="vocals">Vocals</SelectItem>
                <SelectItem value="production">Production</SelectItem>
                <SelectItem value="mixing">Mixing</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedExperience}
              onValueChange={setSelectedExperience}
            >
              <SelectTrigger className="min-w-[150px]">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                <SelectItem value="intermediate">
                  Intermediate (2-5 years)
                </SelectItem>
                <SelectItem value="advanced">Advanced (5-10 years)</SelectItem>
                <SelectItem value="expert">Expert (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-4 mt-5">
          <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
            Trending:
          </span>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
            {[
              "#Musicians",
              "#Designers",
              "#Dancers",
              "#Photographers",
              "#Editors",
              "#Writers",
            ].map((tag) => (
              <button
                key={tag}
                className="bg-background-dark hover:bg-primary hover:text-white text-gray-500 px-4 py-1.5 rounded-full transition-all text-[11px] font-bold border border-border-dark/30 whitespace-nowrap shadow-sm hover:shadow-primary/20"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
            className="bg-surface-dark rounded-3xl p-6 border border-border-dark/30 group relative overflow-hidden cursor-pointer "
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
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.show({
                        type: "success",
                        title: "Unfollowed",
                        description: `You have unfollowed ${profile.username}`,
                      });
                    }}
                    className="flex-1 bg-[#2a2330] hover:bg-[#332840] text-gray-300 border border-border-dark/30 font-semibold h-10 transition-colors"
                  >
                    Followed
                  </Button>
                ) : (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.follow(profile.username.replace("@", ""));
                    }}
                    className="flex-1 cursor-pointer bg-primary hover:bg-primary-hover text-white font-semibold h-10 shadow-lg shadow-primary/25 transition-all"
                  >
                    Follow
                  </Button>
                )}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="h-10 cursor-pointer w-10 flex items-center justify-center rounded-lg bg-[#2a2330] hover:bg-[#332840] border border-border-dark/30 text-gray-400 hover:text-white transition-colors"
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
