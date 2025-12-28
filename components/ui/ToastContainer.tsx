"use client";

import { ToastOptions, ToastType, useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowDownToLine,
  Briefcase,
  CheckCircle2,
  Heart,
  LogIn,
  LogOut,
  MessageSquare,
  PartyPopper,
  Smile,
  UserCheck,
  UserCog,
  Wallet,
  X,
} from "lucide-react";

const toastIcons: Record<ToastType, any> = {
  gift: PartyPopper,
  follow: UserCheck,
  like: Heart,
  comment: MessageSquare,
  reaction: Smile,
  hire: Briefcase,
  deposit: Wallet,
  withdraw: ArrowDownToLine,
  profile_update: UserCog,
  logout: LogOut,
  login: LogIn,
  success: CheckCircle2,
  error: AlertCircle,
};

const toastColors: Record<ToastType, string> = {
  gift: "from-purple-500 to-primary",
  follow: "from-primary to-purple-400",
  like: "from-pink-500 to-rose-500",
  comment: "from-emerald-500 to-teal-500",
  reaction: "from-yellow-500 to-orange-500",
  hire: "from-primary to-purple-600",
  deposit: "from-green-500 to-emerald-600",
  withdraw: "from-orange-500 to-red-600",
  profile_update: "from-blue-400 to-indigo-500",
  logout: "from-gray-500 to-slate-600",
  login: "from-primary to-blue-500",
  success: "from-green-400 to-emerald-500",
  error: "from-red-500 to-rose-600",
};

const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: ToastOptions;
  onDismiss: (id: string) => void;
}) => {
  const Icon = toastIcons[toast.type] || CheckCircle2;
  const gradientClass = toastColors[toast.type] || "from-primary to-purple-500";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="relative group w-[380px] overflow-hidden"
    >
      {/* Accent Line */}
      <div
        className={`absolute left-0 top-1 bottom-1 w-[4px] rounded-full bg-linear-to-b ${gradientClass} z-10`}
      />

      <div className="bg-surface-dark/90 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl p-4 flex gap-4 ml-[2px]">
        {/* Icon Container */}
        <div
          className={`size-14 rounded-2xl bg-linear-to-br ${gradientClass} p-1 shrink-0`}
        >
          <div className="w-full h-full rounded-[14px] bg-surface-dark flex items-center justify-center">
            <Icon className="h-7 w-7 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-white font-bold text-lg leading-none">
              {toast.title}
            </h3>
            <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap pt-0.5">
              Just now
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {toast.description}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => onDismiss(toast.id)}
          className="size-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-white/5 hover:text-white transition-all shrink-0"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Progress Bar (Visual Only) */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: toast.duration ? toast.duration / 1000 : 5 }}
        className={`absolute bottom-0 left-0 h-[2px] bg-linear-to-r ${gradientClass} opacity-30`}
      />
    </motion.div>
  );
};

export const ToastContainer = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} onDismiss={dismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
