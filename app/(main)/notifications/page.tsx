import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Gift,
  Heart,
  MessageCircle,
  UserPlus,
} from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "like",
      icon: Heart,
      user: "Sarah_S",
      action: "liked your post",
      time: "5m ago",
      avatar: "SS",
      color: "from-pink-500 to-rose-600",
      online: true,
    },
    {
      id: 2,
      type: "comment",
      icon: MessageCircle,
      user: "GuitarMaster",
      action: "commented on your post",
      time: "12m ago",
      avatar: "GM",
      color: "from-blue-500 to-indigo-600",
      online: false,
    },
    {
      id: 3,
      type: "follow",
      icon: UserPlus,
      user: "DesignPro",
      action: "started following you",
      time: "1h ago",
      avatar: "DP",
      color: "from-emerald-500 to-teal-600",
      online: true,
    },
    {
      id: 4,
      type: "gift",
      icon: Gift,
      user: "Anna_K",
      action: "sent you a gift",
      time: "2h ago",
      avatar: "AK",
      color: "from-amber-400 to-orange-500",
      online: false,
    },
    {
      id: 5,
      type: "hire",
      icon: CheckCircle2,
      user: "CreativeAgency",
      action: "wants to hire you",
      time: "3h ago",
      avatar: "CA",
      color: "from-purple-500 to-violet-600",
      online: true,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase italic">
            Activity<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-500 text-xs font-black uppercase tracking-widest mt-1">
            Stay updated with your community
          </p>
        </div>
        <Button
          variant="ghost"
          className="text-primary hover:text-primary-hover hover:bg-primary/5 font-black uppercase tracking-tighter text-xs h-10 px-4 rounded-xl border border-primary/10"
        >
          Clear All
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="bg-surface-dark/40 backdrop-blur-xl rounded-3xl p-4 sm:p-5 border border-border-dark/30 hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden shadow-xl"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500"></div>

              <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                <div
                  className={`size-12 sm:size-14 rounded-2xl bg-linear-to-br ${notification.color} flex items-center justify-center shrink-0 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="size-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1.5">
                    <span className="text-white font-black text-sm sm:text-base uppercase tracking-tight">
                      {notification.user}
                    </span>
                    <span className="text-gray-400 font-medium text-xs sm:text-sm">
                      {notification.action}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
                      {notification.time}
                    </span>
                    {notification.type === "hire" && (
                      <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black rounded uppercase tracking-tighter border border-primary/20 animate-pulse">
                        Priority
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative group/avatar">
                  <div className="size-10 sm:size-12 rounded-xl bg-linear-to-br from-primary to-purple-800 p-[1px] shadow-lg">
                    <div className="size-full bg-surface-dark rounded-xl flex items-center justify-center">
                      <span className="text-white font-black text-xs sm:text-sm italic">
                        {notification.avatar}
                      </span>
                    </div>
                  </div>
                  {notification.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 border-2 border-surface-dark rounded-full shadow-lg" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center relative">
        <div className="absolute inset-x-0 top-1/2 h-px bg-border-dark/20 -z-10"></div>
        <span className="bg-[#1a161f] px-6 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">
          No more activity
        </span>
      </div>
    </div>
  );
}
