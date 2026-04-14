import { Button } from "@/components/ui/button";

export default function NotificationsToolbar() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="h-8 rounded-full px-3 text-xs">
        All
      </Button>
      <Button variant="outline" className="h-8 rounded-full px-3 text-xs">
        Unread
      </Button>
      <Button className="h-8 rounded-full px-4 text-xs font-medium">Mark all read</Button>
    </div>
  );
}
