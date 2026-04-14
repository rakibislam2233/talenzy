import { Camera } from "lucide-react";

type EditProfileAvatarCardProps = {
  displayName: string;
  username: string;
};

export default function EditProfileAvatarCard({
  displayName,
  username,
}: EditProfileAvatarCardProps) {
  return (
    <div className="mb-6 flex flex-col items-center">
      <div className="relative mb-4">
        <div className="size-24 rounded-full bg-linear-to-br from-primary to-purple-800 p-1">
          <div className="flex size-full items-center justify-center overflow-hidden rounded-full bg-background">
            <span className="text-2xl font-bold text-foreground">SJ</span>
          </div>
        </div>
        <button
          type="button"
          className="absolute bottom-0 right-4 rounded-full bg-primary p-2 text-primary-foreground"
        >
          <Camera className="h-4 w-4" />
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-foreground">{displayName}</h2>
        <p className="text-muted-foreground">{username}</p>
      </div>
    </div>
  );
}
