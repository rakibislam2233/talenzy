import { Button } from "@/components/ui/button";
import { Briefcase, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Talent } from "./types";

type HiringTalentCardProps = {
  talent: Talent;
};

export default function HiringTalentCard({ talent }: HiringTalentCardProps) {
  const router = useRouter();

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-border/30 bg-card p-6">
      <div className="absolute left-0 right-0 top-0 h-24 bg-linear-to-b from-accent to-transparent opacity-50" />

      <div
        onClick={() => router.push(`/discover/${talent.username.replace(/^@/, "")}`)}
        className="relative mb-5 flex items-start justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="size-14 overflow-hidden rounded-full border border-border">
              <Image
                src={talent.image}
                alt={talent.name}
                fill
                className="rounded-full object-cover"
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
            <p className="text-xs font-medium text-primary">{talent.username}</p>
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
            className="rounded-full border border-border/30 bg-accent px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="relative mb-6 h-10 line-clamp-2 text-sm text-muted-foreground">
        {talent.bio}
      </p>

      <div className="relative grid grid-cols-2 gap-4 border-t border-border/30 py-4">
        <div className="text-left">
          <p className="mb-1 text-xs text-muted-foreground">Audience</p>
          <p className="text-base font-semibold text-foreground">
            {talent.followers}
          </p>
        </div>
        <div className="text-right">
          <p className="mb-1 text-xs text-muted-foreground">Starting At</p>
          <p className="text-base font-semibold text-foreground">{talent.rate}</p>
        </div>
      </div>

      <Button className="relative mt-3 h-10 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
        <Briefcase className="mr-2 h-4 w-4" />
        Hire Now
      </Button>
    </div>
  );
}