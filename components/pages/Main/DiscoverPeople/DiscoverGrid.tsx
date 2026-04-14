import DiscoverPeopleCard from "./DiscoverPeopleCard";
import { DiscoverProfile } from "./types";

type DiscoverGridProps = {
  profiles: DiscoverProfile[];
};

export default function DiscoverGrid({ profiles }: DiscoverGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {profiles.map((profile) => (
        <DiscoverPeopleCard key={profile.id} profile={profile} />
      ))}

      {profiles.length === 0 && (
        <div className="col-span-full rounded-xl border border-border bg-background p-8 text-center">
          <p className="text-lg font-medium text-foreground">No creators found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another name or country.
          </p>
        </div>
      )}
    </div>
  );
}