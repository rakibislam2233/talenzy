"use client";
import HiringRequestModal from "@/components/modals/HiringRequestModal";
import PostViewModal from "@/components/modals/PostViewModal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import {
    Calendar,
    Gift,
    Link as LinkIcon,
    MapPin,
    MessageSquare,
    MoreHorizontal,
    Star,
    UserPlus,
    Verified,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import DiscoverPeopleTabs from "./DiscoverPeopleTabs";
import { getProfileData } from "./profile-data";
import DiscoverTabPanels from "./tabs/DiscoverTabPanels";
import { DiscoverProfileTab } from "./types";

const DiscoverPeopleDetails = () => {
  const params = useParams();
  const usernameParam = params.username as string;
  const [activeTab, setActiveTab] = useState<DiscoverProfileTab>("Portfolio");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

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
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Profile Header */}
      <div className="px-4 sm:px-6 pb-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between -mt-20 sm:-mt-24 mb-6 gap-6 md:gap-4">
          <div className="relative group">
            <div className="size-32 sm:size-40 rounded-full p-1.5 bg-background">
              <div className="w-full h-full rounded-full ring-4 ring-primary">
                <div className="w-full h-full rounded-full bg-card overflow-hidden relative">
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

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 mb-2 text-white w-full md:w-auto">
            <Button
              onClick={() => toast.follow(usernameParam)}
              className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-10 px-6 font-bold shadow-glow transition-all cursor-pointer hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Follow
            </Button>
            <Button
              variant="outline"
              className="flex-1 cursor-pointer md:flex-none bg-card border-border text-foreground hover:bg-accent hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all flex items-center justify-center"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsHireModalOpen(true)}
              className="flex-1 cursor-pointer md:flex-none bg-card border-border text-foreground hover:bg-accent hover:border-primary/50 hover:text-primary rounded-full h-10 px-4 font-semibold transition-all flex items-center justify-center"
            >
              <Gift className="h-4 w-4 mr-2" />
              Hire
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/50 rounded-full h-10 w-10 flex items-center justify-center transition-all"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-8 mt-2 md:mt-0 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
              {profile.name}
            </h1>
            <div className="flex items-center gap-2">
              {profile.verified && (
                <Verified className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              )}
              {profile.hiring && (
                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-tighter">
                  AVAILABLE FOR HIRE
                </span>
              )}
            </div>
          </div>
          <p className="text-primary font-medium text-sm sm:text-base mb-4 lowercase tracking-tight">
            @{usernameParam}
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
            {profile.bio}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-muted-foreground text-[13px] mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary/70" />
              <a href="#" className="hover:text-primary transition-colors">
                {profile.username}.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span>Joined March 2024</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-8 p-4 bg-card/50 sm:p-5 sm:bg-card rounded-2xl border border-border w-full sm:w-fit mx-auto md:mx-0 justify-center sm:justify-start shadow-xl">
            <div className="text-center px-2">
              <p className="text-foreground font-bold text-lg sm:text-xl">
                {profile.followers}
              </p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                FOLLOWERS
              </p>
            </div>
            <div className="w-px bg-border/50"></div>
            <div className="text-center px-2">
              <p className="text-foreground font-bold text-lg sm:text-xl">
                {profile.following}
              </p>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                FOLLOWING
              </p>
            </div>
            <div className="w-px bg-border/50"></div>
            <div className="text-center flex flex-col items-center px-2">
              <div className="flex items-center gap-1">
                <p className="text-foreground font-bold text-lg sm:text-xl">
                  {profile.rating}
                </p>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p className="text-muted-foreground text-[9px] sm:text-[10px] uppercase tracking-widest ">
                RATING
              </p>
            </div>
          </div>
        </div>

        <DiscoverPeopleTabs activeTab={activeTab} onChange={setActiveTab} />

        <div className="min-h-75">
          <DiscoverTabPanels
            activeTab={activeTab}
            posts={displayPosts}
            onSelectPost={setSelectedPost}
            profileName={profile.name}
          />
        </div>
      </div>

      {selectedPost && (
        <PostViewModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      )}

      {isHireModalOpen && (
        <HiringRequestModal
          talentName={profile.name}
          talentImage={profile.avatar}
          onClose={() => setIsHireModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DiscoverPeopleDetails;
