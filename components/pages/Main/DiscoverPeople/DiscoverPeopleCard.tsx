import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MessageSquare, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DiscoverProfile } from "./types";

interface DiscoverPeopleCardProps {
  profile: DiscoverProfile;
}

const DiscoverPeopleCard = ({ profile }: DiscoverPeopleCardProps) => {
  return (
    <div
      key={profile.id}
      className="bg-card rounded-lg p-6 border border-border/30 group relative overflow-hidden cursor-pointer "
    >
      {/* Gradient Background Effect */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50"></div>

      <div className="relative flex flex-col items-center text-center">
        <Link href={`/discover/${profile.username.replace("@", "")}`}>
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full p-1 bg-card border border-border/50">
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
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-card rounded-full"></div>
            )}
          </div>
        </Link>

        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-foreground font-bold text-lg">{profile.name}</h3>
          {profile.verified && <Verified className="h-4 w-4 text-blue-500" />}
        </div>
        <p className="text-primary text-sm font-medium mb-3">
          {profile.username}
        </p>

        <div className="bg-accent px-3 py-1 rounded-full text-xs text-muted-foreground mb-4 inline-flex items-center gap-1.5 border border-border/30">
          <span className="font-semibold">{profile.role}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
          <span className="text-muted-foreground">{profile.location}</span>
        </div>

        <p className="text-muted-foreground text-sm mb-6 line-clamp-2 h-10">
          {profile.bio}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 w-full border-t border-border/30 pt-4 mb-6">
          <div className="text-center">
            <p className="text-foreground font-bold text-lg">
              {profile.followers}
            </p>
            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">
              Followers
            </p>
          </div>
          <div className="text-center">
            <p className="text-foreground font-bold text-lg">{profile.posts}</p>
            <p className="text-muted-foreground text-[10px] uppercase tracking-wider">
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
              className="flex-1 bg-accent hover:bg-accent/80 text-muted-foreground border border-border/30 font-semibold h-10 transition-colors"
            >
              Followed
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                toast.follow(profile.username.replace("@", ""));
              }}
              className="flex-1 cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10  transition-all"
            >
              Follow
            </Button>
          )}
          <button
            onClick={(e) => e.stopPropagation()}
            className="h-10 cursor-pointer w-10 flex items-center justify-center rounded-lg bg-accent hover:bg-accent/80 border border-border/30 text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPeopleCard;
