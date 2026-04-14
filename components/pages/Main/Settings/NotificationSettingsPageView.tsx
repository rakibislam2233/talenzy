"use client";

import NotificationSettingToggleItem from "./NotificationSettingToggleItem";
import NotificationSettingValueItem from "./NotificationSettingValueItem";
import NotificationSettingsSection from "./NotificationSettingsSection";
import {
    activityNotificationItems,
    directNotificationItems,
    frequencyItems,
    pushNotificationItems,
    soundItems,
} from "./notification-settings-data";

export default function NotificationSettingsPageView() {
  return (
    <div className="mx-auto max-w-2xl p-4 pb-20 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Notification settings</h1>
      </div>

      <div className="space-y-6">
        <NotificationSettingsSection title="Push notifications">
          {pushNotificationItems.map((item) => (
            <NotificationSettingToggleItem key={item.title} item={item} />
          ))}
        </NotificationSettingsSection>

        <NotificationSettingsSection title="Activity notifications">
          {activityNotificationItems.map((item) => (
            <NotificationSettingToggleItem key={item.title} item={item} />
          ))}
        </NotificationSettingsSection>

        <NotificationSettingsSection title="Direct notifications">
          {directNotificationItems.map((item) => (
            <NotificationSettingToggleItem key={item.title} item={item} />
          ))}
        </NotificationSettingsSection>

        <NotificationSettingsSection title="Notification frequency">
          {frequencyItems.map((item) => (
            <NotificationSettingValueItem key={item.title} item={item} />
          ))}
        </NotificationSettingsSection>

        <NotificationSettingsSection title="Notification sounds">
          {soundItems.map((item) => (
            <NotificationSettingValueItem key={item.title} item={item} />
          ))}
        </NotificationSettingsSection>
      </div>
    </div>
  );
}
