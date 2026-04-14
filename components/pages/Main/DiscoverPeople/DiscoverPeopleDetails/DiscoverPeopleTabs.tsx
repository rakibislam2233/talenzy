import { DiscoverProfileTab } from "./types";

type DiscoverPeopleTabsProps = {
  activeTab: DiscoverProfileTab;
  onChange: (tab: DiscoverProfileTab) => void;
};

const tabs: DiscoverProfileTab[] = ["Portfolio", "Videos", "About", "Gifts"];

export default function DiscoverPeopleTabs({
  activeTab,
  onChange,
}: DiscoverPeopleTabsProps) {
  return (
    <div className="mb-8 flex gap-6 overflow-x-auto border-b border-border scroll-smooth scrollbar-hide sm:gap-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`whitespace-nowrap border-b-2 px-1 pb-4 text-xs uppercase tracking-widest transition-all sm:text-sm ${
            activeTab === tab
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
