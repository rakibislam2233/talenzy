"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import {
    Coffee,
    Diamond,
    Flower2,
    LucideIcon,
    Pizza,
    Plus,
    Rocket,
    Send,
    Trophy,
    Wallet,
    X,
} from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface GiftItem {
  id: string;
  name: string;
  price: number;
  icon: LucideIcon;
  color: string;
}

interface SendGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
}

const GIFTS = [
  {
    id: "coffee",
    name: "Coffee",
    price: 50,
    icon: Coffee,
    color: "text-orange-400",
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 150,
    icon: Pizza,
    color: "text-orange-500",
  },
  {
    id: "flower",
    name: "Flower",
    price: 300,
    icon: Flower2,
    color: "text-pink-400",
  },
  {
    id: "diamond",
    name: "Diamond",
    price: 1000,
    icon: Diamond,
    color: "text-blue-400",
  },
  {
    id: "rocket",
    name: "Rocket",
    price: 5000,
    icon: Rocket,
    color: "text-red-400",
  },
  {
    id: "trophy",
    name: "Trophy",
    price: 10000,
    icon: Trophy,
    color: "text-yellow-400",
  },
];

export default function SendGiftModal({
  isOpen,
  onClose,
  username,
}: SendGiftModalProps) {
  const mounted = useMounted();
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(GIFTS[1]); // Default to Pizza as per screenshot
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSendGift = () => {
    toast.gift({
      coins: selectedGift?.price || Number(customAmount) || 0,
      username: username,
    });
    onClose();
  };

  if (!mounted) return null;

  const platformFee = 5;
  const total =
    (selectedGift?.price || Number(customAmount) || 0) + platformFee;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-80 flex items-center justify-center p-3 sm:p-4 bg-foreground/60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background w-full max-w-xl max-h-[92vh] rounded-3xl overflow-hidden border border-border shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 pb-4 border-b border-border/50 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Send a Gift to{" "}
                  <span className="text-primary">@{username}</span>
                </h3>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-1">
                  Support Talent Creativity
                </p>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <div className="bg-background/50 px-4 py-2 rounded-full flex items-center gap-2 border border-border">
                  <Wallet className="h-4 w-4 text-primary" />
                  <span className="text-foreground text-sm font-bold">
                    1,250 Coins
                  </span>
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

            <div className="p-4 sm:p-6 space-y-6 max-h-[calc(92vh-180px)] overflow-y-auto custom-scrollbar">
              {/* Gift Grid */}
              <div className="space-y-3">
                <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                  Select a Gift
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {GIFTS.map((gift) => (
                    <button
                      key={gift.id}
                      onClick={() => {
                        setSelectedGift(gift);
                        setCustomAmount("");
                      }}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all group ${
                        selectedGift?.id === gift.id
                          ? "bg-primary/10 border-primary shadow-[0_0_10px_rgba(148,25,230,0.5)] shadow-primary/20"
                          : "bg-background/50 border-transparent hover:border-border"
                      }`}
                    >
                      {selectedGift?.id === gift.id && (
                        <div className="absolute top-2 right-2 size-4 bg-primary rounded-full flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="size-2 bg-white rounded-full"
                          />
                        </div>
                      )}
                      <gift.icon className={`h-8 w-8 mb-3 ${gift.color}`} />
                      <span className="text-foreground font-bold text-sm">
                        {gift.name}
                      </span>
                      <span className="text-muted-foreground text-[10px]">
                        {gift.price} coins
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-3">
                <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                  Custom Amount
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedGift(null);
                    }}
                    className="bg-background/50 border-border rounded-xl h-12 pl-4 pr-12 text-foreground focus:border-primary/50 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-sm">
                    $
                  </div>
                </div>
              </div>

              {/* Personal Message */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    Personal Message
                  </label>
                  <span className="text-muted-foreground text-[10px]">Optional</span>
                </div>
                <Textarea
                  placeholder={`Add a nice message for ${username}...`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 140))}
                  className="bg-background/50 border-border rounded-2xl min-h-[100px] text-foreground focus:border-primary/50 transition-all resize-none p-4"
                />
                <div className="text-right">
                  <span className="text-muted-foreground text-[10px]">
                    {message.length}/140
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-foreground/20 border-t border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                    Selected Gift
                  </p>
                  <div className="flex items-center gap-2">
                    {selectedGift ? (
                      <>
                        <selectedGift.icon
                          className={`h-4 w-4 ${selectedGift.color}`}
                        />
                        <span className="text-foreground font-bold text-sm">
                          {selectedGift.name}
                        </span>
                      </>
                    ) : (
                      <span className="text-foreground font-bold text-sm">
                        Custom Amount
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-px h-8 bg-border/10" />
                <div className="space-y-1">
                  <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider text-center">
                    Platform Fee
                  </p>
                  <p className="text-foreground font-bold text-sm text-center">
                    {platformFee} coins
                  </p>
                </div>
                <div className="w-px h-8 bg-border/10" />
                <div className="space-y-1 text-right">
                  <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                    Total
                  </p>
                  <p className="text-primary font-bold text-xl">
                    {total} coins
                  </p>
                </div>
              </div>
              <Button
                onClick={handleSendGift}
                className="w-full bg-primary hover:bg-primary-hover text-foreground h-14 rounded-2xl font-bold text-base shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Gift
                <Send className="h-5 w-5 rotate-45" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
