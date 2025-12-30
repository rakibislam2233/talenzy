'use client';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Search, Star } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function Hire() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab =
    (searchParams.get("tab") as "all" | "my-requests" | "hired-me") || "all";

  const handleTabChange = (newTab: "all" | "my-requests" | "hired-me") => {
    router.push(`/hiring?tab=${newTab}`);
  };

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([150]);
  const [availability, setAvailability] = useState("anytime");
  const [location, setLocation] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categories = [
    { id: "music", name: "Music & Audio" },
    { id: "dance", name: "Dance & Performance" },
    { id: "visual", name: "Visual Arts" },
    { id: "tech", name: "Tech & Development" },
    { id: "lifestyle", name: "Lifestyle & Model" },
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

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([150]);
    setAvailability("anytime");
    setLocation("");
    setVerifiedOnly(false);
  };

  return (
    <div className="flex h-full">
      {/* Inner Filter Sidebar */}
      <div className="w-64 p-6 border-r border-border-dark/30 hidden lg:block overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-black text-lg uppercase tracking-tight">
            Filters
          </h2>
          <button
            onClick={handleResetFilters}
            className="text-primary text-xs hover:underline font-bold uppercase tracking-wider"
          >
            Reset
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">
              Categories
            </h3>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={cat.id}
                    checked={selectedCategories.includes(cat.id)}
                    onCheckedChange={() => handleCategoryToggle(cat.id)}
                  />
                  <Label
                    htmlFor={cat.id}
                    className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors font-medium"
                  >
                    {cat.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">
              Price Range / Hr
            </h3>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3 font-medium">
              <span>$10</span>
              <span>$500+</span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500}
              min={10}
              step={10}
              className="mb-3"
            />
            <div className="text-center text-primary font-black text-sm">
              ${priceRange[0]}/hr
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">
              Availability
            </h3>
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="anytime">Anytime</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="urgent">Urgent (24hrs)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">
              Location
            </h3>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="City or Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-background-dark border border-border-dark/30 rounded-xl h-12 pl-10 pr-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Verified toggle */}
          <div className="flex items-center justify-between py-3 px-4 bg-background-dark/50 rounded-xl border border-border-dark/30">
            <Label
              htmlFor="verified"
              className="text-white font-bold text-sm cursor-pointer"
            >
              Verified Only
            </Label>
            <Checkbox
              id="verified"
              checked={verifiedOnly}
              onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary-hover text-white font-black uppercase tracking-wider text-xs h-12 rounded-xl shadow-xl shadow-primary/20">
            Apply Filters
          </Button>
          <Button
            onClick={handleResetFilters}
            variant="outline"
            className="w-full border-border-dark text-white hover:bg-surface-dark bg-transparent font-bold uppercase tracking-wider text-xs h-12 rounded-xl"
          >
            Clear All
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

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 relative ">
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
            <Button className="absolute right-2 top-2 rounded-full size-10 cursor-pointer">
              <Search />
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-6 sm:gap-10 mb-8 border-b border-border-dark/40 overflow-x-auto scrollbar-hide no-scrollbar">
          <button
            onClick={() => handleTabChange("all")}
            className={`${
              activeTab === "all"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-white"
            } font-black pb-4 px-2 whitespace-nowrap text-xs sm:text-sm  tracking-widest transition-all`}
          >
            All People
          </button>
          <button
            onClick={() => handleTabChange("my-requests")}
            className={`${
              activeTab === "my-requests"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-white"
            } font-black pb-4 px-2 whitespace-nowrap cursor-pointer text-xs sm:text-sm  tracking-widest transition-all`}
          >
            My Hire Requests
          </button>
          <button
            onClick={() => handleTabChange("hired-me")}
            className={`${
              activeTab === "hired-me"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-white"
            } font-black pb-4 px-2 whitespace-nowrap cursor-pointer text-xs sm:text-sm  tracking-widest transition-all`}
          >
            Who Hired Me
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

        {/* Talent Grid - All Talents Tab */}
        {activeTab === "all" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {talents.map((talent, i) => (
              <div
                key={i}
                className="bg-surface-dark rounded-3xl p-5 sm:p-6 border border-border-dark/40 hover:border-primary/50 transition-all group card-hover-effect relative overflow-hidden"
              >
                <div
                  onClick={() =>
                    router.push(`/discover-people/${talent.username}`)
                  }
                  className="flex items-start justify-between mb-6 relative z-10 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="size-14 sm:size-16 rounded-full overflow-hidden border-2 border-border-dark group-hover:border-primary/50 transition-colors">
                        <Image
                          src={talent.image || ""}
                          alt={talent.name}
                          fill
                          className="object-cover rounded-full"
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

                <Button className="w-full h-12 cursor-pointer bg-primary hover:bg-primary-hover text-white text-sm font-black tracking-widest rounded-xl shadow-xl shadow-primary/20 relative z-10">
                  Hire Now
                </Button>

                {/* Subtle background aesthetic */}
                <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        )}

        {/* My Hire Requests Tab */}
        {activeTab === "my-requests" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                id: "84920",
                title: "Video Editing for Campaign Q3",
                freelancer: "Sarah Jenkins",
                username: "@sarahcreative",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
                status: "IN PROGRESS",
                progress: 60,
                budget: 500,
                dueDate: "Oct 20, 2023",
                category: "Video Editing",
              },
              {
                id: "84915",
                title: "Logo Design for Startup",
                freelancer: "Davide Rossi",
                username: "@davide_design",
                avatar:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
                status: "COMPLETED",
                progress: 100,
                budget: 350,
                dueDate: "Oct 15, 2023",
                category: "Design",
              },
              {
                id: "84910",
                title: "Music Production for Podcast",
                freelancer: "GuitarMaster",
                username: "@guitarmaster",
                avatar:
                  "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=200",
                status: "PENDING",
                progress: 20,
                budget: 800,
                dueDate: "Nov 5, 2023",
                category: "Music",
              },
            ].map((order) => (
              <div
                key={order.id}
                onClick={() => router.push(`/hiring/my-requests/${order.id}`)}
                className="bg-surface-dark rounded-3xl p-6 border border-border-dark/40 hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500 font-medium">
                        Order #{order.id}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                          order.status === "COMPLETED"
                            ? "bg-green-500/20 text-green-500"
                            : order.status === "IN PROGRESS"
                            ? "bg-primary/20 text-primary"
                            : "bg-orange-500/20 text-orange-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <h3 className="text-white font-black text-lg mb-2 uppercase tracking-tight">
                      {order.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">
                      {order.category} • Due: {order.dueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border-dark/30">
                  <div className="size-12 rounded-xl overflow-hidden border-2 border-border-dark">
                    <Image
                      src={order.avatar}
                      alt={order.freelancer}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {order.freelancer}
                    </p>
                    <p className="text-primary text-xs font-medium">
                      {order.username}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase">
                      Progress
                    </span>
                    <span className="text-sm font-black text-primary">
                      {order.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-primary to-purple-600 transition-all"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-medium">
                      Total Budget
                    </p>
                    <p className="text-white font-black text-xl">
                      ${order.budget}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/hiring/${order.id}`);
                    }}
                    className="bg-white text-primary hover:bg-white/90 rounded-xl h-10 px-6 font-black uppercase text-xs"
                  >
                    View Details
                  </Button>
                </div>

                <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        )}

        {/* Who Hired Me Tab */}
        {activeTab === "hired-me" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                id: "84925",
                title: "Website Redesign Project",
                client: "Tech Startup Inc",
                username: "@techstartup",
                avatar:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
                status: "ACTIVE",
                budget: 1200,
                startDate: "Oct 25, 2023",
                category: "Web Design",
              },
              {
                id: "84922",
                title: "Brand Identity Package",
                client: "Coffee Shop",
                username: "@coffeeshop",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
                status: "PENDING APPROVAL",
                budget: 650,
                startDate: "Oct 28, 2023",
                category: "Branding",
              },
            ].map((hire) => (
              <div
                key={hire.id}
                onClick={() => router.push(`/hiring/hired-me/${hire.id}`)}
                className="bg-surface-dark rounded-3xl p-6 border border-border-dark/40 hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500 font-medium">
                        Request #{hire.id}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                          hire.status === "ACTIVE"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-orange-500/20 text-orange-500"
                        }`}
                      >
                        {hire.status}
                      </span>
                    </div>
                    <h3 className="text-white font-black text-lg mb-2 uppercase tracking-tight">
                      {hire.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">
                      {hire.category} • Started: {hire.startDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border-dark/30">
                  <div className="size-12 rounded-xl overflow-hidden border-2 border-border-dark">
                    <Image
                      src={hire.avatar}
                      alt={hire.client}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {hire.client}
                    </p>
                    <p className="text-primary text-xs font-medium">
                      {hire.username}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-xs font-medium">
                      Project Budget
                    </p>
                    <p className="text-white font-black text-xl">
                      ${hire.budget}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/hiring/hired-me/${hire.id}`);
                    }}
                    className="bg-primary hover:bg-primary-hover text-white rounded-xl h-10 px-6 font-black uppercase text-xs shadow-lg shadow-primary/20"
                  >
                    View Request
                  </Button>
                </div>

                <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        )}

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
