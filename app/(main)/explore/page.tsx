import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, TrendingUp, User, Video } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Explore | Talenzy",
  description: "Discover amazing content and creative professionals on Talenzy. Explore trending posts, videos, and talented creators.",
  openGraph: {
    title: "Explore | Talenzy",
    description: "Discover amazing content and creative professionals on Talenzy. Explore trending posts, videos, and talented creators.",
    type: "website",
    url: "https://www.talenzy.com/explore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore | Talenzy",
    description: "Discover amazing content and creative professionals on Talenzy. Explore trending posts, videos, and talented creators.",
  },
};

export default function Explore() {
  const exploreItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
      aspect: "aspect-4/5",
    }, // Guitar
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1514525253440-b393452e233e?w=600",
      aspect: "aspect-16/9",
    }, // Concert wide
    {
      type: "person",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
      aspect: "aspect-square",
    }, // Portrait
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=600",
      aspect: "aspect-4/3",
    }, // Guitar 2
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f436?w=600",
      aspect: "aspect-3/4",
    }, // Stage vertical
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=600",
      aspect: "aspect-video",
    }, // Crowd
    {
      type: "person",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      aspect: "aspect-3/4",
    }, // Man portrait
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
      aspect: "aspect-square",
    }, // Mountain
  ];

  const filters = ["All Content", "Videos", "Images", "People"];

  const chips = [
    { label: "Trending Now", icon: TrendingUp, active: true },
    { label: "Music", active: false },
    { label: "Visual Arts", active: false },
    { label: "Dance", active: false },
    { label: "Comedy", active: false },
    { label: "Acting", active: false },
    { label: "Sports", active: false },
    { label: "Gaming", active: false },
  ];

  return (
    <div className="flex-1 p-8 space-y-8">
      {/* Header & Filter Bar */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 border-b border-border-dark/30 overflow-x-auto scrollbar-hide">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`pb-4 text-sm font-semibold transition-colors relative ${
                  i === 0 ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {filter}
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-border-dark bg-surface-dark text-gray-300 hover:text-white hover:bg-surface-dark/80 gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              Filters
            </Button>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white flex items-center gap-1"
            >
              Trending{" "}
              <div className="ml-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
          {chips.map((chip, i) => (
            <button
              key={chip.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                chip.active
                  ? "bg-primary text-white"
                  : "bg-surface-dark border border-border-dark/30 text-gray-400 hover:bg-surface-dark/80 hover:text-white"
              }`}
            >
              {chip.icon && <chip.icon className="h-4 w-4" />}
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Simulation */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {/* Featured Large Card (Simulated first item spans) */}
        <div className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border border-border-dark/30">
          <div className="relative aspect-4/5">
            <Image
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800"
              alt="Guitarist"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
              <Video className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Sarah Jenkins Profile Card */}
        <div className="break-inside-avoid relative overflow-hidden rounded-xl border border-border-dark/30 bg-surface-dark p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-primary p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
                      alt="Sarah"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-primary text-[8px] text-white px-1 rounded-sm font-bold shadow-sm">
                  PRO
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Sarah Jenkins</h3>
                <p className="text-primary text-xs font-semibold">
                  VOCALIST • JAZZ
                </p>
                <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1">
                  <MapPinIcon /> New York, USA
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
                <circle cx="5" cy="12" r="2" />
              </svg>
            </button>
          </div>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
            Professional jazz vocalist available for events and studio sessions.
            10+ years of experience performing live.
          </p>
          <div className="flex gap-2">
            <Button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 text-sm h-9">
              Hire Talent
            </Button>
            <Button
              variant="outline"
              className="w-9 h-9 p-0 border-border-dark bg-transparent text-gray-400 hover:text-white"
            >
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* More Grid Items */}
        {exploreItems.map((item, i) => (
          <div
            key={i}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border border-border-dark/30 bg-surface-dark mb-4"
          >
            {item.type === "person" ? (
              <div className="p-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 relative">
                  <Image src={item.src} alt="" fill className="object-cover" />
                </div>
                <h3 className="text-white font-semibold text-sm">David Chen</h3>
                <p className="text-gray-500 text-xs">Photographer</p>
                <Button className="mt-3 w-full h-8 text-xs bg-surface-dark hover:bg-primary text-white rounded-full border border-border-dark/50">
                  Follow
                </Button>
              </div>
            ) : (
              <div className={`relative ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden relative border border-white">
                      <Image
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
                        alt="Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white text-xs font-medium shadow-black drop-shadow-sm">
                      David Chen
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                  {item.type === "video" ? (
                    <Video className="h-3 w-3 text-white" />
                  ) : (
                    <ImageIcon className="h-3 w-3 text-white" />
                  )}
                </div>
                {item.type === "image" &&
                  i === 7 && ( // Abstract art one from design
                    <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-bold">
                      +12
                    </div>
                  )}
              </div>
            )}

            {/* Caption/Meta for non-person items if desired, but image 4 is mostly visual tiles */}
          </div>
        ))}

        {/* Abstract Art Tile (Simulating the +12 tile from image 4) */}
        <div className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border border-border-dark/30 mb-4">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600"
              alt="Abstract"
              fill
              className="object-cover"
            />
            {/* +12 Overlay card simulation */}
            <div className="absolute right-4 bottom-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 shadow-xl">
              <span className="text-white font-bold text-lg">+12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
