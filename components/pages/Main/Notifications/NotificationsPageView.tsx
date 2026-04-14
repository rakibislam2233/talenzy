import NotificationGroup from "./NotificationGroup";
import { NOTIFICATIONS } from "./notifications-data";
import NotificationsToolbar from "./NotificationsToolbar";

export default function NotificationsPageView() {
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
            <NotificationsToolbar />
          </div>
        </div>

        <div className="space-y-6 p-4 sm:p-5">
          <NotificationGroup groupName="Today" items={grouped.Today} />
          <NotificationGroup groupName="Yesterday" items={grouped.Yesterday} />

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
