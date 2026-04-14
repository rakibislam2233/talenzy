"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, Search, ShieldCheck, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type HiringTab = "all" | "my-requests" | "hired-me";

const Hiring = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = (searchParams.get("tab") as HiringTab) || "all";
  const [talentQuery, setTalentQuery] = useState("");
  const [talentCountry, setTalentCountry] = useState("all");
  const [talentCategory, setTalentCategory] = useState("all");
  const [talentBudget, setTalentBudget] = useState("all");
  const [talentAvailability, setTalentAvailability] = useState("all");
  const [talentOther, setTalentOther] = useState("all");

  const handleTabChange = (newTab: HiringTab) => {
    router.push(`/hiring?tab=${newTab}`);
  };

  const talents = [
    {
      name: "GuitarMaster",
      username: "@guitarmaster",
      role: "Musician",
      category: "music",
      country: "us",
      availability: "available",
      hourlyRate: 80,
      verified: true,
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
      category: "performance",
      country: "us",
      availability: "busy",
      hourlyRate: 120,
      verified: false,
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
      category: "visual",
      country: "fr",
      availability: "available",
      hourlyRate: 95,
      verified: true,
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
      category: "tech",
      country: "ca",
      availability: "available",
      hourlyRate: 250,
      verified: true,
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
      category: "design",
      country: "de",
      availability: "busy",
      hourlyRate: 150,
      verified: true,
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
      category: "performance",
      country: "it",
      availability: "available",
      hourlyRate: 75,
      verified: false,
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

  const myRequests = [
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
      avatar: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=200",
      status: "PENDING",
      progress: 20,
      budget: 800,
      dueDate: "Nov 5, 2023",
      category: "Music",
    },
  ];

  const hiredMe = [
    {
      id: "84925",
      title: "Website Redesign Project",
      client: "Tech Startup Inc",
      username: "@techstartup",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
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
  ];

  const filteredTalents = talents.filter((talent) => {
    const q = talentQuery.trim().toLowerCase();
    const byName =
      q.length === 0 ||
      talent.name.toLowerCase().includes(q) ||
      talent.username.toLowerCase().includes(q);
    const byCountry =
      talentCountry === "all" || talent.country === talentCountry;
    const byCategory = talentCategory === "all" || talent.category === talentCategory;
    const byAvailability =
      talentAvailability === "all" || talent.availability === talentAvailability;
    const byBudget =
      talentBudget === "all" ||
      (talentBudget === "under100" && talent.hourlyRate < 100) ||
      (talentBudget === "100to200" && talent.hourlyRate >= 100 && talent.hourlyRate <= 200) ||
      (talentBudget === "200plus" && talent.hourlyRate > 200);
    const byOther =
      talentOther === "all" ||
      (talentOther === "verified" && talent.verified) ||
      (talentOther === "toprated" && talent.rating >= 4.9) ||
      (talentOther === "pricing" && talent.hourlyRate <= 120);

    return byName && byCountry && byCategory && byAvailability && byBudget && byOther;
  });

  const visibleTalents = filteredTalents.slice(0, 4);

  return (
    <div className="flex h-full">
      <div className="flex-1 overflow-y-auto p-4 pb-32 sm:p-7 lg:p-8">
        <section className="rounded-3xl border border-border bg-card/30 p-5 sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Talent Marketplace
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Find the Right Professional for Your Work
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Review portfolios, compare rates, and hire with confidence. Use
                advanced filters to find creators who match your budget and
                timeline.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-border bg-background px-4 py-3 text-center">
                <p className="text-xs text-muted-foreground">Talents</p>
                <p className="text-lg font-semibold text-foreground">2.4k+</p>
              </div>
              <div className="rounded-2xl border border-border bg-background px-4 py-3 text-center">
                <p className="text-xs text-muted-foreground">Avg Rating</p>
                <p className="text-lg font-semibold text-foreground">4.8</p>
              </div>
              <div className="rounded-2xl border border-border bg-background px-4 py-3 text-center">
                <p className="text-xs text-muted-foreground">Avg Reply</p>
                <p className="text-lg font-semibold text-foreground">2h</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={talentQuery}
                onChange={(e) => setTalentQuery(e.target.value)}
                placeholder="Search talents by name or username"
                className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Select value={talentCountry} onValueChange={setTalentCountry}>
              <SelectTrigger className="h-11 w-full sm:w-56 bg-background">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="it">Italy</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
              </SelectContent>
            </Select>

            <Select value={talentCategory} onValueChange={setTalentCategory}>
              <SelectTrigger className="h-11 w-full sm:w-56 bg-background">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="visual">Visual Arts</SelectItem>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="design">Design</SelectItem>
              </SelectContent>
            </Select>

            <Select value={talentBudget} onValueChange={setTalentBudget}>
              <SelectTrigger className="h-11 w-full sm:w-56 bg-background">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Budgets</SelectItem>
                <SelectItem value="under100">Under $100/hr</SelectItem>
                <SelectItem value="100to200">$100-$200/hr</SelectItem>
                <SelectItem value="200plus">$200+/hr</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={talentAvailability}
              onValueChange={setTalentAvailability}
            >
              <SelectTrigger className="h-11 w-full sm:w-56 bg-background">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Availability</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
              </SelectContent>
            </Select>

            <Select value={talentOther} onValueChange={setTalentOther}>
              <SelectTrigger className="h-11 w-full sm:w-56 bg-background">
                <SelectValue placeholder="Other" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="verified">Verified Only</SelectItem>
                <SelectItem value="toprated">Top Rated</SelectItem>
                <SelectItem value="pricing">Budget Friendly</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="h-11 border-border"
              onClick={() => {
                setTalentQuery("");
                setTalentCountry("all");
                setTalentCategory("all");
                setTalentBudget("all");
                setTalentAvailability("all");
                setTalentOther("all");
              }}
            >
              Reset
            </Button>
          </div>
        </section>

        <div className="mt-7 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => handleTabChange("all")}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
              activeTab === "all"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            All Talents
          </button>
          <button
            onClick={() => handleTabChange("my-requests")}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
              activeTab === "my-requests"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            My Hire Requests
          </button>
          <button
            onClick={() => handleTabChange("hired-me")}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
              activeTab === "hired-me"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            Who Hired Me
          </button>
        </div>

        {activeTab === "all" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-4">
            {visibleTalents.map((talent, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-border/30 bg-card p-6 cursor-pointer"
              >
                <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

                <div
                  onClick={() =>
                    router.push(
                      `/discover/${talent.username.replace(/^@/, "")}`,
                    )
                  }
                  className="relative mb-5 flex items-start justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <div className="size-14 overflow-hidden rounded-full border border-border">
                        <Image
                          src={talent.image || ""}
                          alt={talent.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-background bg-green-500" />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                          {talent.name}
                        </h3>
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-primary">
                        {talent.username}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/15 px-2 py-0.5 text-[11px] font-medium text-yellow-600">
                          <Star className="h-3 w-3 fill-current" />
                          {talent.rating}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {talent.jobs} completed jobs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4 flex flex-wrap gap-2">
                  {talent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent px-3 py-1 rounded-full text-xs text-muted-foreground border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="relative mb-6 line-clamp-2 h-10 text-sm text-muted-foreground">
                  {talent.bio}
                </p>

                <div className="relative grid grid-cols-2 gap-4 border-t border-border/30 py-4">
                  <div className="text-left">
                    <p className="mb-1 text-xs text-muted-foreground">
                      Audience
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {talent.followers}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="mb-1 text-xs text-muted-foreground">
                      Starting At
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {talent.rate}
                    </p>
                  </div>
                </div>

                <Button className="relative mt-3 h-10 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Hire Now
                </Button>
              </div>
            ))}

            {visibleTalents.length === 0 && (
              <div className="col-span-full rounded-2xl border border-border bg-background p-8 text-center">
                <p className="text-lg font-medium text-foreground">
                  No talents found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try another name or country.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "my-requests" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {myRequests.map((order) => (
              <div
                key={order.id}
                onClick={() => router.push(`/hiring/my-requests/${order.id}`)}
                className="relative cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6"
              >
                <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">
                        Order #{order.id}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          order.status === "COMPLETED"
                            ? "bg-green-500/15 text-green-600"
                            : order.status === "IN PROGRESS"
                              ? "bg-primary/15 text-primary"
                              : "bg-orange-500/15 text-orange-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {order.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {order.category} • Due: {order.dueDate}
                    </p>
                  </div>
                </div>

                <div className="relative mb-4 flex items-center gap-4 border-b border-border/30 pb-4">
                  <div className="size-12 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={order.avatar}
                      alt={order.freelancer}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {order.freelancer}
                    </p>
                    <p className="text-xs text-primary">{order.username}</p>
                  </div>
                </div>

                <div className="relative mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {order.progress}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted/40">
                    <div
                      className="h-full bg-linear-to-r from-primary to-purple-600 transition-all"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Total Budget
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      ${order.budget}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/hiring/my-requests/${order.id}`);
                    }}
                    className="h-10 rounded-xl bg-foreground px-5 text-xs text-background hover:bg-foreground/90"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hired-me" && (
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {hiredMe.map((hire) => (
              <div
                key={hire.id}
                onClick={() => router.push(`/hiring/hired-me/${hire.id}`)}
                className="relative cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6"
              >
                <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">
                        Request #{hire.id}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          hire.status === "ACTIVE"
                            ? "bg-green-500/15 text-green-600"
                            : "bg-orange-500/15 text-orange-600"
                        }`}
                      >
                        {hire.status}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {hire.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {hire.category} • Started: {hire.startDate}
                    </p>
                  </div>
                </div>

                <div className="relative mb-6 flex items-center gap-4 border-b border-border/30 pb-4">
                  <div className="size-12 overflow-hidden rounded-xl border border-border">
                    <Image
                      src={hire.avatar}
                      alt={hire.client}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {hire.client}
                    </p>
                    <p className="text-xs text-primary">{hire.username}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Project Budget
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      ${hire.budget}
                    </p>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/hiring/hired-me/${hire.id}`);
                    }}
                    className="h-10 rounded-xl bg-primary px-5 text-xs text-primary-foreground hover:bg-primary-hover"
                  >
                    View Request
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 mt-10 flex justify-center pb-12">
          <Button
            variant="outline"
            className="h-12 rounded-xl border-border bg-transparent px-8"
          >
            Show More Talents
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
