'use client'
import {
  Bell,
  Lock,
  Shield,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CURRENT_USER_SLUG } from "../Profile/mock-data";

const SettingsSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      category: "Account",
      items: [
        { id: "profile", href: `/${CURRENT_USER_SLUG}`, icon: User, label: "Profile" },
        { id: "edit-profile", href: "/settings/edit-profile", icon: User, label: "Edit profile" },
      ],
    },
    {
      category: "Privacy & Security",
      items: [
        { id: "privacy", href: "/settings/privacy-and-safety", icon: Shield, label: "Privacy and safety" },
        { id: "change-password", href: "/settings/change-password", icon: Lock, label: "Change password" },
        { id: "two-factor", href: "/settings/two-factor-auth", icon: Lock, label: "Two-factor auth" },
      ],
    },
    {
      category: "Content & Activity",
      items: [
        {
          id: "notifications",
          href: "/settings/notification-settings",
          icon: Bell,
          label: "Notification settings",
        },
        { id: "content", href: "/settings/content-preferences", icon: Bell, label: "Content preferences" },
      ],
    },
  ];

  return (
    <div className="fixed w-72 border-r border-border bg-background">
      <div className="p-6 bg-background">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      </div>

      <div className="px-3 pb-6">
        <div className="space-y-6">
          {menuItems.map((section, idx) => (
            <div key={idx}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                {section.category}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${
                        active ? "bg-accent text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${active ? "text-foreground" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-medium ${active ? "text-foreground" : "text-muted-foreground"}`}>
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
