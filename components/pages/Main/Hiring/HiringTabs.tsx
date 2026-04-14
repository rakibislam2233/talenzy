import Link from "next/link";
import { HiringTab } from "./types";

type HiringTabsProps = {
  activeTab: HiringTab;
};

export default function HiringTabs({ activeTab }: HiringTabsProps) {
  const tabs: Array<{ id: HiringTab; label: string }> = [
    { id: "all", label: "All Talents" },
    { id: "my-requests", label: "My Hire Requests" },
    { id: "hired-me", label: "Who Hired Me" },
  ];

  return (
    <div className="mt-7 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.id === "all" ? "/hiring" : `/hiring/${tab.id}`}
          className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
            activeTab === tab.id
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-background text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}