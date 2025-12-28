"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Hire() {
  const categories = [
    { name: "Music & Audio", checked: true },
    { name: "Dance & Performance", checked: false },
    { name: "Visual Arts", checked: false },
    { name: "Tech & Development", checked: false },
    { name: "Lifestyle & Model", checked: false },
  ];

  const talents = [
    {
      name: "GuitarMaster",
      username: "@guitarmaster",
      role: "Musician",
      rating: 4.9,
      jobs: 120,
      rate: "$80/hr",
      bio: "Professional session guitarist with 10+ years of experience. I can...",
      tags: ["Music", "Guitarist", "Composer"],
      image:
        "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100&h=100", // Guitarist
      followers: "45.2k",
    },
    {
      name: "Sarah_S",
      username: "@sarahdance",
      role: "Dancer",
      rating: 5.0,
      jobs: 45,
      rate: "$120/hr",
      bio: "Contemporary dancer and choreographer. Available for music...",
      tags: ["Dance", "Choreography"],
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100", // Girl
      followers: "128k",
    },
    {
      name: "Jenny_Art",
      username: "@jennycolors",
      role: "Artist",
      rating: 4.8,
      jobs: 82,
      rate: "$95/hr",
      bio: "Digital illustrator specializing in character design and concept art. ...",
      tags: ["Art", "Digital", "NFT"],
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100", // Girl 2
      followers: "67.5k",
    },
    {
      name: "Tom_Tech",
      username: "@tomcodes",
      role: "Reviewer",
      rating: 5.0,
      jobs: 210,
      rate: "$250/hr",
      bio: "Tech enthusiast and reviewer. I create high-quality unboxing and...",
      tags: ["Tech", "Reviewer"],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100", // Guy
      followers: "240k",
    },
    {
      name: "CreativeAgency",
      username: "@creative_hq",
      role: "Agency",
      rating: 4.7,
      jobs: "300+",
      rate: "$150/hr",
      bio: "Full-service creative design agency. We handle branding, logo design,...",
      tags: ["Design", "Branding"],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100", // Logo placeholder
      followers: "15.4k",
    },
    {
      name: "Anna K.",
      username: "@annadance",
      role: "Dancer",
      rating: 4.6,
      jobs: 28,
      rate: "$75/hr",
      bio: "Classical ballet dancer available for artistic photoshoots, music videos,...",
      tags: ["Dance", "Ballet"],
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100", // Girl 3
      followers: "8.2k",
    },
  ];

  return (
    <div className="flex h-full">
      {/* Inner Filter Sidebar */}
      <div className="w-64 p-6 border-r border-border-dark/30 hidden lg:block overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg">Filters</h2>
          <button className="text-primary text-sm hover:underline">
            Reset
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      cat.checked
                        ? "bg-primary border-primary"
                        : "border-gray-500 group-hover:border-primary"
                    }`}
                  >
                    {cat.checked && (
                      <div className="w-2 h-2 bg-white rounded-sm" />
                    )}
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-white font-semibold mb-3">Price Range / Hr</h3>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>$10</span>
              <span>$500+</span>
            </div>
            <div className="h-1 bg-surface-dark rounded-full relative">
              <div className="absolute left-[30%] right-[40%] bg-primary h-full rounded-full" />
              <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-surface-dark cursor-pointer shadow-lg" />
            </div>
            <div className="mt-2 text-center text-primary font-bold text-sm">
              $150/hr
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-white font-semibold mb-3">Availability</h3>
            <select className="w-full bg-background-dark border border-border-dark/30 rounded-lg h-10 px-3 text-sm text-white focus:outline-none focus:border-primary">
              <option>Anytime</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold mb-3">Location</h3>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="City or Country"
                className="w-full bg-background-dark border border-border-dark/30 rounded-lg h-10 pl-9 pr-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Verified toggle */}
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold">Verified Only</span>
            <div className="w-10 h-6 bg-surface-dark rounded-full p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full ml-auto" />
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-4">
            Apply Filters
          </Button>
          <Button
            variant="outline"
            className="w-full border-border-dark text-white hover:bg-surface-dark mt-2"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8 overflow-y-auto pb-32">
        {/* Gradient Hero Header */}
        <div className="bg-linear-to-br from-primary via-purple-900 to-[#2e1065] rounded-3xl p-6 sm:p-10 mb-8 text-center shadow-2xl relative overflow-hidden group">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 group-hover:bg-white/10 transition-colors" />

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 relative tracking-tighter uppercase italic">
            Hire Top <span className="text-purple-300">Talent</span>
          </h1>
          <p className="text-white/70 mb-8 max-w-lg mx-auto relative text-sm sm:text-base font-medium leading-relaxed">
            Connect with industry-leading creators for your next project.
            Premium members get priority access to vetted profiles.
          </p>

          <div className="relative max-w-xl mx-auto group/search">
            <input
              type="text"
              placeholder="Who are you looking for?"
              className="w-full h-14 sm:h-16 rounded-2xl pl-6 sm:pl-8 pr-16 sm:pr-36 bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-2xl"
            />
            <Button className="absolute right-2 top-2 bottom-2 rounded-xl bg-white text-primary hover:bg-white/90 px-4 sm:px-8 font-black uppercase tracking-widest text-xs">
              <span className="hidden sm:inline">Search Now</span>
              <span className="sm:hidden">GO</span>
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-6 sm:gap-10 mb-8 border-b border-border-dark/40 overflow-x-auto scrollbar-hide no-scrollbar">
          <button className="text-primary font-black border-b-2 border-primary pb-4 px-2 whitespace-nowrap text-xs sm:text-sm uppercase tracking-widest transition-all">
            All Freelancers
          </button>
          <button className="text-gray-500 font-bold hover:text-white pb-4 px-2 whitespace-nowrap text-xs sm:text-sm uppercase tracking-widest transition-colors">
            Saved Talents
          </button>
          <button className="text-gray-500 font-bold hover:text-white pb-4 px-2 whitespace-nowrap text-xs sm:text-sm uppercase tracking-widest transition-colors">
            Direct Messages
          </button>
        </div>

        {/* Mobile Filter Toggle (Visible only on small screens) */}
        <div className="lg:hidden mb-6 flex items-center justify-between p-4 bg-surface-dark border border-border-dark rounded-2xl">
          <span className="text-white font-bold text-sm">Advanced Filters</span>
          <Button
            variant="ghost"
            className="text-primary h-8 px-3 font-bold text-xs uppercase tracking-tighter hover:bg-primary/10"
          >
            Open Filters
          </Button>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {talents.map((talent, i) => (
            <div
              key={i}
              className="bg-surface-dark rounded-3xl p-5 sm:p-6 border border-border-dark/40 hover:border-primary/50 transition-all group card-hover-effect relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="size-14 sm:size-16 rounded-2xl overflow-hidden border-2 border-border-dark group-hover:border-primary/50 transition-colors">
                      <Image
                        src={talent.image || ""}
                        alt={talent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 border-2 border-surface-dark rounded-full shadow-lg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3 className="text-white font-black text-base sm:text-lg tracking-tight uppercase">
                        {talent.name}
                      </h3>
                      <div className="bg-blue-500 p-0.5 rounded-full">
                        <svg
                          className="size-2.5 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-primary font-bold text-[10px] sm:text-xs tracking-tight">
                      {talent.username}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1">
                        <Star className="size-2.5 fill-current" />
                        {talent.rating}
                      </span>
                      <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
                        {talent.jobs} JOBS
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-2.5 rounded-xl bg-background-dark/50 border border-border-dark text-gray-500 hover:text-white hover:border-primary/50 transition-all">
                  <Bookmark className="size-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {talent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-background-dark/80 text-gray-400 text-[10px] sm:text-xs px-3 py-1 rounded-lg border border-border-dark/50 font-bold uppercase tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                {talent.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 py-6 border-t border-border-dark/30 relative z-10">
                <div className="text-left">
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1 leading-none">
                    Audience
                  </p>
                  <p className="text-white font-black text-lg tracking-tight">
                    {talent.followers}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1 leading-none">
                    Starting At
                  </p>
                  <p className="text-white font-black text-lg tracking-tight">
                    {talent.rate}
                  </p>
                </div>
              </div>

              <Button className="w-full h-12 bg-white text-primary hover:bg-white/90 text-sm font-black uppercase tracking-widest rounded-xl shadow-xl shadow-white/5 relative z-10">
                Contact Creator
              </Button>

              {/* Subtle background aesthetic */}
              <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 pb-12 relative z-10">
          <Button
            variant="outline"
            className="rounded-2xl px-10 h-14 border-border-dark text-white hover:bg-surface-dark bg-transparent font-black uppercase tracking-widest text-xs"
          >
            Show More Talents
          </Button>
        </div>
      </div>
    </div>
  );
}
