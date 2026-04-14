import { Button } from "@/components/ui/button";
import {
    Briefcase,
    CheckCircle2,
    Clock3,
    Dot,
    Gift,
    Heart,
    MessageCircle,
    MessageSquare,
    UserPlus
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Talenzy",
  description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
  openGraph: {
    title: "Notifications | Talenzy",
    description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
    type: "website",
    url: "https://www.talenzy.com/notifications",
  },
  twitter: {
    card: "summary",
    title: "Notifications | Talenzy",
    description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
  },
};

type NotificationType = "like" | "comment" | "follow" | "gift" | "hire";

type NotificationItem = {
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

const NOTIFICATIONS: NotificationItem[] = [
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

const typeConfig: Record<NotificationType, { icon: React.ComponentType<{ className?: string }>; tone: string; bg: string }> = {
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

export default function NotificationsPage() {
  const grouped = {
    Today: NOTIFICATIONS.filter((item) => item.group === "Today"),
    Yesterday: NOTIFICATIONS.filter((item) => item.group === "Yesterday"),
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-32 pt-6 sm:px-6 sm:pt-10">
      <section className="overflow-hidden rounded-2xl border border-border bg-background">
        <div className="border-b border-border p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Activity
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Notifications
              </h1>
              <p className="mt-1 text-sm text-muted-foreground sm:text-[15px]">
                Likes, comments, follows and hiring updates.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-8 rounded-full px-3 text-xs">
                All
              </Button>
              <Button variant="outline" className="h-8 rounded-full px-3 text-xs">
                Unread
              </Button>
              <Button className="h-8 rounded-full px-4 text-xs font-medium">Mark all read</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-4 sm:p-5">
          {(Object.keys(grouped) as Array<keyof typeof grouped>).map((groupName) => (
            <section key={groupName}>
              <div className="mb-2 flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {groupName}
                </h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-card">
                {grouped[groupName].map((notification) => {
                  const config = typeConfig[notification.type];
                  const Icon = config.icon;

                  return (
                    <article
                      key={notification.id}
                      className="relative border-b border-border p-3 last:border-b-0 sm:p-4"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${config.bg}`}>
                          <Icon className={`h-4 w-4 ${config.tone}`} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm leading-relaxed text-foreground">
                            <span className="font-semibold">{notification.user}</span>{" "}
                            <span className="text-muted-foreground">{notification.action}</span>
                          </p>

                          <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                            <span>{notification.time}</span>
                            {notification.type === "hire" && (
                              <>
                                <Dot className="h-4 w-4" />
                                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                                  <CheckCircle2 className="h-3 w-3" />
                                  Hiring
                                </span>
                              </>
                            )}
                            {notification.type === "comment" && (
                              <>
                                <Dot className="h-4 w-4" />
                                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                                  <MessageSquare className="h-3 w-3" />
                                  Reply
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="relative shrink-0">
                          <div className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground">
                            {notification.avatar}
                          </div>
                          {notification.online && (
                            <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-background bg-green-500" />
                          )}
                        </div>

                        {notification.unread && (
                          <span className="absolute right-3 top-3 size-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <div className="pt-1 text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              You are all caught up
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}