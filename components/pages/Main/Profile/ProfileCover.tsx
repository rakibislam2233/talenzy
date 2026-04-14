import { Camera, MoreHorizontal } from "lucide-react";

type ProfileCoverProps = {
  coverImage?: string;
  isOwnProfile: boolean;
};

export default function ProfileCover({ coverImage, isOwnProfile }: ProfileCoverProps) {
  return (
    <div className="relative h-72 overflow-hidden rounded-t-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${coverImage || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80"}')`,
        }}
      />
      {isOwnProfile ? (
        <button className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-foreground/10 bg-background/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-background/60">
          <Camera className="h-4 w-4" />
          <span>Edit Cover</span>
        </button>
      ) : (
        <button className="absolute bottom-4 right-4 rounded-full border border-foreground/10 bg-background/40 p-2 text-foreground backdrop-blur-md transition-all hover:bg-background/60">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
