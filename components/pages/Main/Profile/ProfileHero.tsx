import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Briefcase, Camera, MessageSquare, MoreHorizontal, Share, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProfileRecord } from "./types";

type ProfileHeroProps = {
  profile: ProfileRecord;
  isOwnProfile: boolean;
  onHireClick: () => void;
};

export default function ProfileHero({ profile, isOwnProfile, onHireClick }: ProfileHeroProps) {
  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-6 md:-mt-20 md:flex-row md:items-end md:gap-4">
      <div className="group relative mx-auto md:mx-0">
        <div className="size-32 rounded-full bg-background p-1.5 md:size-40">
          <div className="h-full w-full rounded-full bg-linear-to-br from-primary to-purple-400 p-0.5">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
              <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
            </div>
          </div>
        </div>
        {isOwnProfile && (
          <button className="absolute bottom-1 right-1 rounded-full border-4 border-background bg-primary p-2 text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-2 sm:right-3">
            <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        )}
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-2 text-foreground md:w-auto md:justify-end md:gap-3">
        {isOwnProfile ? (
          <>
            <Button asChild className="h-10 flex-1 cursor-pointer md:flex-none">
              <Link href="/settings/edit-profile">Edit Profile</Link>
            </Button>
            <Button variant="outline" className="h-10 flex-1 cursor-pointer md:flex-none">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => toast.follow(profile.slug)}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:flex-none"
            >
              <UserPlus className="h-4 w-4" />
              Follow
            </Button>
            <Button variant="outline" className="h-10 flex-1 cursor-pointer md:flex-none">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </Button>
            <Button
              variant="outline"
              onClick={onHireClick}
              className="h-10 flex-1 cursor-pointer md:flex-none"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Hire
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
