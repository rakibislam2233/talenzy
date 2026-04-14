import { ValueSettingItem } from "./notification-settings-data";

type NotificationSettingValueItemProps = {
  item: ValueSettingItem;
};

export default function NotificationSettingValueItem({
  item,
}: NotificationSettingValueItemProps) {
  return (
    <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
      <span className="font-medium text-foreground">{item.title}</span>
      <span className="text-sm text-muted-foreground">{item.value}</span>
    </button>
  );
}
