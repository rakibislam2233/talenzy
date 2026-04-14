import { Calendar, ExternalLink, Link as LinkIcon, MapPin, Star, Verified } from "lucide-react";
import Link from "next/link";
import { ProfileRecord } from "./types";

type ProfileDetailsProps = {
  profile: ProfileRecord;
};

export default function ProfileDetails({ profile }: ProfileDetailsProps) {
  return (
    <div className="mb-8 mt-2 text-center md:mt-0 md:text-left">
      <div className="mb-2 flex flex-col items-center gap-2 md:flex-row">
        <Link
          href={`/${profile.slug}`}
          className="text-2xl font-bold tracking-tight text-foreground uppercase transition-colors hover:text-primary sm:text-3xl"
        >
          {profile.name}
        </Link>
        <div className="flex items-center gap-2">
          {profile.verified && <Verified className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />}
          {profile.hiring && (
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-green-500">
              Available for Hire
            </span>
          )}
        </div>
      </div>

      <p className="mb-3 text-sm font-medium tracking-tight text-primary sm:text-base">
        {profile.username}
      </p>
      <div className="mb-4 flex w-full gap-2">
        <div className="px-2">
          <p className="text-base font-bold text-foreground sm:text-lg">{profile.followers}</p>
          <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
            Followers
          </p>
        </div>
        <div className="w-px bg-border/50" />
        <div className="px-2">
          <p className="text-base font-bold text-foreground sm:text-lg">{profile.following}</p>
          <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
            Following
          </p>
        </div>
        <div className="w-px bg-border/50" />
        <div className="flex flex-col px-2">
          <div className="flex items-center gap-1">
            <p className="text-base font-bold text-foreground sm:text-lg">{profile.rating}</p>
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          </div>
          <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
            Rating
          </p>
        </div>
      </div>

      <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0">
        {profile.bio}
      </p>

      <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground md:justify-start">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary/70" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <LinkIcon className="h-4 w-4 text-primary/70" />
          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-primary"
          >
            {profile.website}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary/70" />
          <span>Joined {profile.joined}</span>
        </div>
      </div>
    </div>
  );
}
