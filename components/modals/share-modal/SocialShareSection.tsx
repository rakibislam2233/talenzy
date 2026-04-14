import {
    Facebook,
    Linkedin,
    MessageCircle,
    MoreHorizontal,
    Twitter,
} from "lucide-react";
import SocialLink from "./SocialLink";

export default function SocialShareSection() {
  return (
    <div className="space-y-4">
      <h5 className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest pl-1">
        Share Externally
      </h5>
      <div className="flex items-center gap-6 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
        <SocialLink icon={Facebook} label="Facebook" color="bg-[#1877F2]" />
        <SocialLink icon={Twitter} label="X" color="bg-black" />
        <SocialLink icon={MessageCircle} label="WhatsApp" color="bg-[#25D366]" />
        <SocialLink icon={Linkedin} label="LinkedIn" color="bg-[#0A66C2]" />
        <SocialLink icon={MoreHorizontal} label="More" color="bg-muted" />
      </div>
    </div>
  );
}
