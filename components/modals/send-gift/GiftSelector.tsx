import { motion } from "framer-motion";
import { GIFTS } from "./gift-data";
import { GiftItem } from "./types";

type GiftSelectorProps = {
  selectedGift: GiftItem | null;
  onSelectGift: (gift: GiftItem) => void;
};

export default function GiftSelector({ selectedGift, onSelectGift }: GiftSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
        Select a Gift
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {GIFTS.map((gift) => (
          <button
            key={gift.id}
            onClick={() => onSelectGift(gift)}
            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all group ${
              selectedGift?.id === gift.id
                ? "bg-primary/10 border-primary shadow-[0_0_10px_rgba(148,25,230,0.5)] shadow-primary/20"
                : "bg-background/50 border-transparent hover:border-border"
            }`}
          >
            {selectedGift?.id === gift.id ? (
              <div className="absolute top-2 right-2 size-4 bg-primary rounded-full flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="size-2 bg-white rounded-full"
                />
              </div>
            ) : null}
            <gift.icon className={`h-8 w-8 mb-3 ${gift.color}`} />
            <span className="text-foreground font-bold text-sm">{gift.name}</span>
            <span className="text-muted-foreground text-[10px]">{gift.price} coins</span>
          </button>
        ))}
      </div>
    </div>
  );
}
