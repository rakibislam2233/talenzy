import { LucideIcon } from "lucide-react";

type SocialLinkProps = {
  icon: LucideIcon;
  label: string;
  color: string;
};

export default function SocialLink({ icon: Icon, label, color }: SocialLinkProps) {
  return (
    <button className="flex flex-col items-center gap-2 shrink-0 group">
      <div
        className={`${color} p-3 rounded-full text-foreground transition-transform group-hover:scale-110 shadow-lg`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-muted-foreground text-[10px] font-medium">{label}</span>
    </button>
  );
}
