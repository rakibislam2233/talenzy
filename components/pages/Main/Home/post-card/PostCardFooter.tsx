import { Briefcase } from "lucide-react";
import Image from "next/image";

type PostCardFooterProps = {
  avatarUrl: string;
  username: string;
  audioName?: string;
  timestamp: string;
  caption: string;
};

export default function PostCardFooter({
  avatarUrl,
  username,
  audioName,
  timestamp,
  caption,
}: PostCardFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full p-4 pr-16 text-left md:pr-20">
      <div className="mb-2 flex items-center justify-between md:mb-3">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="pointer-events-none relative size-8 rounded-full border-2 border-primary p-0.5 md:size-10">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src={avatarUrl} alt={username} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-sm font-bold text-white drop-shadow-md shadow-black md:text-base">
              {username}
            </h3>
            <span className="text-[10px] font-medium text-white/60 md:text-xs">
              {audioName || "Original Audio"} • {timestamp}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 rounded-lg bg-accent px-2 py-1 text-[10px] font-bold text-foreground backdrop-blur-md transition-colors hover:bg-primary md:px-3 md:py-1.5 md:text-xs">
          <Briefcase className="h-3 w-3 md:h-3.5 md:w-3.5" />
          Hire Me
        </button>
      </div>
      <p className="mb-2 line-clamp-2 text-left text-xs leading-relaxed text-white drop-shadow-md md:text-sm">
        {caption.split(" ").map((word, index) =>
          word.startsWith("#") ? (
            <span key={`${word}-${index}`} className="font-bold text-primary">
              {word}{" "}
            </span>
          ) : (
            `${word} `
          ),
        )}
      </p>
    </div>
  );
}
