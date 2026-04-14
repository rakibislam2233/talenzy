import Link from "next/link";
import { ProfileTab } from "./types";

type ProfileTabsProps = {
  basePath: string;
  activeTab: ProfileTab;
};

export default function ProfileTabs({ basePath, activeTab }: ProfileTabsProps) {
  const tabs: Array<{ id: ProfileTab; label: string; href: string }> = [
    { id: "posts", label: "Posts", href: basePath },
    { id: "videos", label: "Videos", href: `${basePath}/videos` },
    { id: "saved", label: "Saved", href: `${basePath}/saved` },
    { id: "reviews", label: "Reviews", href: `${basePath}/reviews` },
  ];

  return (
    <div className="flex gap-8 border-b border-border mb-8 overflow-x-auto scrollbar-hide scroll-smooth">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`pb-2 px-2 border-b-2 cursor-pointer transition-all text-sm font-bold whitespace-nowrap ${
            activeTab === tab.id
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}