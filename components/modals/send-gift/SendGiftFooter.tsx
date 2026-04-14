import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { GiftItem } from "./types";

type SendGiftFooterProps = {
  selectedGift: GiftItem | null;
  platformFee: number;
  total: number;
  onSend: () => void;
};

export default function SendGiftFooter({
  selectedGift,
  platformFee,
  total,
  onSend,
}: SendGiftFooterProps) {
  return (
    <div className="p-6 bg-foreground/20 border-t border-border/50">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
            Selected Gift
          </p>
          <div className="flex items-center gap-2">
            {selectedGift ? (
              <>
                <selectedGift.icon className={`h-4 w-4 ${selectedGift.color}`} />
                <span className="text-foreground font-bold text-sm">{selectedGift.name}</span>
              </>
            ) : (
              <span className="text-foreground font-bold text-sm">Custom Amount</span>
            )}
          </div>
        </div>
        <div className="w-px h-8 bg-border/10" />
        <div className="space-y-1">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider text-center">
            Platform Fee
          </p>
          <p className="text-foreground font-bold text-sm text-center">{platformFee} coins</p>
        </div>
        <div className="w-px h-8 bg-border/10" />
        <div className="space-y-1 text-right">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Total</p>
          <p className="text-primary font-bold text-xl">{total} coins</p>
        </div>
      </div>
      <Button
        onClick={onSend}
        className="w-full bg-primary hover:bg-primary-hover text-foreground h-14 rounded-2xl font-bold text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        Send Gift
        <Send className="h-5 w-5 rotate-45" />
      </Button>
    </div>
  );
}
