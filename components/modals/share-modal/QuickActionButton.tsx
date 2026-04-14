import { LucideIcon } from "lucide-react";

type QuickActionButtonProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  active?: boolean;
};

export default function QuickActionButton({
  icon: Icon,
  label,
  onClick,
  active,
}: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-border/50 transition-all w-full ${
        active ? "bg-primary/20 border-primary" : "bg-background/50 hover:bg-accent"
      }`}
    >
      <div className={`p-2 rounded-lg ${active ? "bg-primary/20" : "bg-primary/10"}`}>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-foreground text-[10px] font-bold">{label}</span>
    </button>
  );
}
