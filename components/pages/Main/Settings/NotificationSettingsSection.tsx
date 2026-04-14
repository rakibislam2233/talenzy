type NotificationSettingsSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function NotificationSettingsSection({
  title,
  children,
}: NotificationSettingsSectionProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background">
      <div className="border-b border-border p-4">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      </div>
      <div className="divide-y divide-border">{children}</div>
    </div>
  );
}
