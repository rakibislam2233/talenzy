import {
    Copy,
    Repeat2,
    Send,
    Share2,
} from "lucide-react";
import QuickActionButton from "./QuickActionButton";

type QuickActionsSectionProps = {
  copied: boolean;
  onCopyLink: () => void;
};

export default function QuickActionsSection({
  copied,
  onCopyLink,
}: QuickActionsSectionProps) {
  return (
    <div className="space-y-4">
      <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
        Quick Actions
      </h5>
      <div className="grid grid-cols-4 gap-3">
        <QuickActionButton
          icon={Copy}
          label={copied ? "Copied!" : "Copy Link"}
          onClick={onCopyLink}
          active={copied}
        />
        <QuickActionButton icon={Repeat2} label="Repost" onClick={() => {}} />
        <QuickActionButton icon={Share2} label="Story" onClick={() => {}} />
        <QuickActionButton icon={Send} label="Message" onClick={() => {}} />
      </div>
    </div>
  );
}
