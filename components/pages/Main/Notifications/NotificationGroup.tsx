import { CheckCircle2, Clock3, Dot, MessageSquare } from "lucide-react";
import { NotificationItem, typeConfig } from "./notifications-data";

type NotificationGroupProps = {
  groupName: "Today" | "Yesterday";
  items: NotificationItem[];
};

export default function NotificationGroup({ groupName, items }: NotificationGroupProps) {
  return (
    <section>
      <div className="mb-2 flex items-center gap-2">
        <Clock3 className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {groupName}
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {items.map((notification) => {
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
  );
}
