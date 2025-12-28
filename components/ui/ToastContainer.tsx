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

const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: ToastOptions;
  onDismiss: (id: string) => void;
}) => {
  const Icon = toastIcons[toast.type] || CheckCircle2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
      animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className="pointer-events-auto w-full max-w-[calc(100vw-32px)] sm:w-[360px] mx-auto sm:mx-0"
    >
      <div className="relative overflow-hidden rounded-xl bg-surface-dark/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] group">
        {/* Purple accent glow effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-purple-400"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>

        <div className="flex items-start p-3 sm:p-4 gap-3 sm:gap-4">
          {/* Icon Container */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-sm animate-pulse"></div>
            <div className="relative flex items-center justify-center size-9 sm:size-10 rounded-xl bg-linear-to-br from-border-dark to-[#151118] border border-white/10 shadow-inner">
              <Icon className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(148,25,230,0.6)]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-white font-bold text-sm tracking-wide leading-none mb-1 truncate">
                {toast.title}
              </h4>
              <span className="text-[9px] sm:text-[10px] text-[#ae9db8] font-mono whitespace-nowrap">
                Just now
              </span>
            </div>
            <p className="text-[#d1c4d9] text-[11px] sm:text-xs leading-snug line-clamp-2">
              {toast.description}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => onDismiss(toast.id)}
            className="shrink-0 text-[#ae9db8] hover:text-white transition-colors -mt-1 -mr-1 p-1.5 rounded-md hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-0.5 w-full bg-[#322938] mt-1 relative overflow-hidden">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{
              duration: toast.duration ? toast.duration / 1000 : 4,
              ease: "linear",
            }}
            className="absolute top-0 left-0 h-full bg-linear-to-r from-primary to-purple-400 origin-left"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const ToastContainer = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-4 sm:top-6 left-4 right-4 sm:left-auto sm:right-6 z-9999 flex flex-col gap-3 sm:gap-4 pointer-events-none items-center sm:items-end">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto w-full sm:w-auto">
            <ToastItem toast={toast} onDismiss={dismiss} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
