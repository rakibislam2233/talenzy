"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { MoreHorizontal, TrendingUp, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RightSidebar() {
  const { isAuthenticated } = useAuth();

  return (
    <aside className="w-80 h-full px-5 py-4 space-y-6 overflow-y-auto scrollbar-hide hidden xl:block border-l border-border-dark bg-background-dark fixed right-0 top-0 z-20 ">
      {/* Join Card (if not authenticated) */}
      {!isAuthenticated && (
        <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark shadow-glow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors"></div>
          <h3 className="text-white font-bold text-lg mb-2 relative z-10">
            Join Talenzy
          </h3>
          <p className="text-gray-400 text-xs mb-4 relative z-10 leading-relaxed">
            Unlock your full potential. Connect with top talents and get hired
            for your skills.
          </p>
          <Link href="/auth/register" className="w-full relative z-10">
            <Button className="w-full bg-primary hover:bg-primary-hover text-white font-bold h-10 shadow-lg shadow-primary/25 transition-all">
              Sign Up Now
            </Button>
          </Link>
        </div>
      )}

      {/* Suggested Talents */}
      <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-bold text-sm">Suggested Talents</h3>
          <button className="text-primary text-xs font-semibold hover:text-white transition-colors">
            See All
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              name: "Davide Rossi",
              role: "Photographer",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            },
            {
              name: "Anna Klein",
              role: "Dancer",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            },
            {
              name: "James Lee",
              role: "Developer",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            },
          ].map((talent, index) => (
            <div
              key={index}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border-dark group-hover:border-primary transition-colors">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-bold group-hover:text-primary transition-colors">
                    {talent.name}
                  </p>
                  <p className="text-gray-500 text-xs">{talent.role}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                <UserPlus className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h3 className="text-white font-bold text-sm">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {[
            { category: "Music", tag: "#TalenzyMusic", posts: "12.4k" },
            { category: "Digital Art", tag: "#Cyberpunk2077", posts: "8.2k" },
            { category: "Job Market", tag: "#RemoteWork", posts: "5.1k" },
            { category: "Photography", tag: "#StreetStyle", posts: "3.8k" },
          ].map((trend, index) => (
            <div
              key={index}
              className="flex items-start justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-500 font-medium">
                    {trend.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-[10px] text-gray-600">Trending</span>
                </div>
                <p className="text-white text-sm font-bold group-hover:text-primary transition-colors mb-0.5">
                  {trend.tag}
                </p>
                <p className="text-gray-500 text-xs">{trend.posts} posts</p>
              </div>
              <button className="text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 text-primary text-xs font-bold hover:text-white transition-colors border-t border-border-dark/50">
          Show More
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-500 font-medium px-2">
        <Link href="#" className="hover:text-white transition-colors">
          About
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Help
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Privacy
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Terms
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Locations
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Language
        </Link>
      </div>
      <p className="text-[11px] text-gray-600 px-2 mt-2">
        © 2025 Talenzy, Inc.
      </p>
    </aside>
  );
}
