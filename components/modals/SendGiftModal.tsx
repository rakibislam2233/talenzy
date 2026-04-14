"use client";

import { toast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import CustomAmountField from "./send-gift/CustomAmountField";
import { GIFTS } from "./send-gift/gift-data";
import GiftSelector from "./send-gift/GiftSelector";
import MessageField from "./send-gift/MessageField";
import SendGiftFooter from "./send-gift/SendGiftFooter";
import SendGiftHeader from "./send-gift/SendGiftHeader";
import { GiftItem } from "./send-gift/types";

interface SendGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
}

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
            <SendGiftHeader username={username} onClose={onClose} />

            <div className="p-4 sm:p-6 space-y-6 max-h-[calc(92vh-180px)] overflow-y-auto custom-scrollbar">
              <GiftSelector
                selectedGift={selectedGift}
                onSelectGift={(gift) => {
                  setSelectedGift(gift);
                  setCustomAmount("");
                }}
              />

              <CustomAmountField
                customAmount={customAmount}
                onChange={(value) => {
                  setCustomAmount(value);
                  setSelectedGift(null);
                }}
              />

              <MessageField
                username={username}
                message={message}
                onChange={setMessage}
              />
            </div>

            <SendGiftFooter
              selectedGift={selectedGift}
              platformFee={platformFee}
              total={total}
              onSend={handleSendGift}
            />
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
