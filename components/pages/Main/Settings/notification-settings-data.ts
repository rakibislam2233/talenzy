import {
    Bell,
    Heart,
    Mail,
    MessageCircle,
    User,
    Video,
    type LucideIcon,
} from "lucide-react";

export type ToggleSettingItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export type ValueSettingItem = {
  title: string;
  value: string;
};

export const pushNotificationItems: ToggleSettingItem[] = [
  {
    title: "Enable notifications",
    icon: Bell,
  },
];

export const activityNotificationItems: ToggleSettingItem[] = [
  {
    title: "Likes",
    description: "When someone likes your content",
    icon: Heart,
  },
  {
    title: "Comments",
    description: "When someone comments on your posts",
    icon: MessageCircle,
  },
  {
    title: "Follows",
    description: "When someone follows you",
    icon: User,
  },
  {
    title: "Shares",
    description: "When someone shares your content",
    icon: Video,
  },
];

export const directNotificationItems: ToggleSettingItem[] = [
  {
    title: "Direct messages",
    description: "When someone sends you a DM",
    icon: Mail,
  },
  {
    title: "Tagged posts",
    description: "When someone tags you in a post",
    icon: User,
  },
];

export const frequencyItems: ValueSettingItem[] = [
  {
    title: "Frequency",
    value: "Normal",
  },
  {
    title: "Time sensitivity",
    value: "Real-time",
  },
];

export const soundItems: ValueSettingItem[] = [
  {
    title: "Sound",
    value: "Default",
  },
  {
    title: "Vibrate",
    value: "Medium",
  },
];
