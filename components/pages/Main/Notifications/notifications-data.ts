import {
    Briefcase,
    Gift,
    Heart,
    MessageCircle,
    UserPlus,
} from "lucide-react";
import type { ComponentType } from "react";

export type NotificationType = "like" | "comment" | "follow" | "gift" | "hire";

export type NotificationItem = {
  id: number;
  type: NotificationType;
  user: string;
  action: string;
  time: string;
  avatar: string;
  online: boolean;
  unread: boolean;
  group: "Today" | "Yesterday";
};

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    type: "hire",
    user: "CreativeAgency",
    action: "sent you a hiring request for a brand campaign",
    time: "5m ago",
    avatar: "CA",
    online: true,
    unread: true,
    group: "Today",
  },
  {
    id: 2,
    type: "comment",
    user: "GuitarMaster",
    action: "commented on your latest post",
    time: "12m ago",
    avatar: "GM",
    online: false,
    unread: true,
    group: "Today",
  },
  {
    id: 3,
    type: "follow",
    user: "Sarah_S",
    action: "started following you",
    time: "47m ago",
    avatar: "SS",
    online: true,
    unread: true,
    group: "Today",
  },
  {
    id: 4,
    type: "gift",
    user: "Anna_K",
    action: "sent you a gift for your performance",
    time: "2h ago",
    avatar: "AK",
    online: false,
    unread: false,
    group: "Today",
  },
  {
    id: 5,
    type: "like",
    user: "DesignPro",
    action: "liked your cover reel",
    time: "Yesterday, 8:42 PM",
    avatar: "DP",
    online: true,
    unread: false,
    group: "Yesterday",
  },
  {
    id: 6,
    type: "comment",
    user: "StudioNorth",
    action: "replied to your comment",
    time: "Yesterday, 5:16 PM",
    avatar: "SN",
    online: false,
    unread: false,
    group: "Yesterday",
  },
];

export const typeConfig: Record<
  NotificationType,
  { icon: ComponentType<{ className?: string }>; tone: string; bg: string }
> = {
  like: {
    icon: Heart,
    tone: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  comment: {
    icon: MessageCircle,
    tone: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  follow: {
    icon: UserPlus,
    tone: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  gift: {
    icon: Gift,
    tone: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  hire: {
    icon: Briefcase,
    tone: "text-primary",
    bg: "bg-primary/10",
  },
};
