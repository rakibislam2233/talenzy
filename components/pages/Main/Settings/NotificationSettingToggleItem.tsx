import { Checkbox } from "@/components/ui/checkbox";
import { ToggleSettingItem } from "./notification-settings-data";

type NotificationSettingToggleItemProps = {
  item: ToggleSettingItem;
};

export default function NotificationSettingToggleItem({
  item,
}: NotificationSettingToggleItemProps) {
  const Icon = item.icon;

  return (
    <div className="flex items-start justify-between gap-3 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">{item.title}</h3>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
        </div>
      </div>
      <Checkbox />
    </div>
  );
}
