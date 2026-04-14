import {
  User,
  Lock,
  Bell,
  Shield,
  Users,
  UserX,
  MapPin,
  MessageSquare,
  HelpCircle,
  Mail,
  AlertCircle,
  LogOut,
} from "lucide-react";

const SettingsSidebar = () => {
  const menuItems = [
    {
      category: "How you use Instagram",
      items: [
        { id: "edit-profile", icon: User, label: "Edit profile" },
        { id: "notifications", icon: Bell, label: "Notifications" },
      ],
    },
    {
      category: "For professionals",
      items: [
        { id: "professional", icon: Shield, label: "Professional account" },
        {
          id: "business-tools",
          icon: Users,
          label: "Business tools and controls",
        },
      ],
    },
    {
      category: "Who can see your content",
      items: [
        { id: "privacy", icon: Lock, label: "Account privacy" },
        { id: "close-friends", icon: Users, label: "Close Friends" },
        { id: "blocked", icon: UserX, label: "Blocked" },
        { id: "story-location", icon: MapPin, label: "Story and location" },
      ],
    },
    {
      category: "How others can interact with you",
      items: [
        {
          id: "messages",
          icon: MessageSquare,
          label: "Messages and story replies",
        },
      ],
    },
    {
      category: "Support & About",
      items: [
        { id: "help", icon: HelpCircle, label: "Help center" },
        { id: "contact", icon: Mail, label: "Contact us" },
        { id: "report", icon: AlertCircle, label: "Report a problem" },
      ],
    },
  ];

  return (
    <div className="w-72 border-r bg-background border-border fixed">
      <div className="p-6 bg-background">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      </div>

      <div className="px-3 pb-6">
        {/* Menu Items */}
        <div className="space-y-6">
          {menuItems.map((section, idx) => (
            <div key={idx}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                {section.category}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all `}
                    >
                      <Icon className={`w-5 h-5 text-muted-foreground`} />
                      <span
                        className={`text-sm font-medium text-muted-foreground`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-6 px-3">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left hover:bg-destructive/10 transition-all group">
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="text-sm font-medium text-destructive">
              Log out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
