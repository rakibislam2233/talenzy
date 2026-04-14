import { FolderHeart } from "lucide-react";
import Image from "next/image";
import { savedCollections } from "../mock-data";

type ProfileSavedTabProps = {
  isOwnProfile: boolean;
};

export default function ProfileSavedTab({
  isOwnProfile,
}: ProfileSavedTabProps) {
  return (
    <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-4">
      {isOwnProfile ? (
        savedCollections.map((collection) => (
          <div
            key={collection.id}
            className="group overflow-hidden rounded-2xl border border-border bg-card text-left transition-transform"
          >
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={collection.cover}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-sm font-semibold text-white">
                  {collection.name}
                </p>
                <p className="text-[11px] text-white/75">
                  {collection.count} items
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full rounded-2xl border border-border bg-card p-8 text-center">
          <FolderHeart className="mx-auto h-10 w-10 text-primary" />
          <h3 className="mt-3 text-lg font-semibold text-foreground">
            Saved content is private
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            This user has not shared saved items publicly.
          </p>
        </div>
      )}
    </div>
  );
}
