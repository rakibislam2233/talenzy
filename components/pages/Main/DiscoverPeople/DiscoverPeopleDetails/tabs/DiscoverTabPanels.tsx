import { Post } from "@/lib/types";
import { DiscoverProfileTab } from "../types";
import AboutTab from "./AboutTab";
import GiftsTab from "./GiftsTab";
import PortfolioTab from "./PortfolioTab";
import VideosTab from "./VideosTab";

type DiscoverTabPanelsProps = {
  activeTab: DiscoverProfileTab;
  posts: Post[];
  onSelectPost: (post: Post) => void;
  profileName: string;
};

export default function DiscoverTabPanels({
  activeTab,
  posts,
  onSelectPost,
  profileName,
}: DiscoverTabPanelsProps) {
  if (activeTab === "Videos") {
    return <VideosTab posts={posts} onSelectPost={onSelectPost} />;
  }

  if (activeTab === "About") {
    return <AboutTab profileName={profileName} />;
  }

  if (activeTab === "Gifts") {
    return <GiftsTab />;
  }

  return <PortfolioTab posts={posts} onSelectPost={onSelectPost} />;
}
