import { Plus, Wallet, X } from "lucide-react";

type SendGiftHeaderProps = {
  username: string;
  onClose: () => void;
};

export default function SendGiftHeader({ username, onClose }: SendGiftHeaderProps) {
  return (
    <div className="p-4 sm:p-6 pb-4 border-b border-border/50 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between">
      <div>
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          Send a Gift to <span className="text-primary">@{username}</span>
        </h3>
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-1">
          Support Talent Creativity
        </p>
      </div>
      <div className="flex items-center gap-3 self-end sm:self-auto">
        <div className="bg-background/50 px-4 py-2 rounded-full flex items-center gap-2 border border-border">
          <Wallet className="h-4 w-4 text-primary" />
          <span className="text-foreground text-sm font-bold">1,250 Coins</span>
          <button className="text-primary hover:text-primary-hover">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-accent rounded-full text-muted-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
