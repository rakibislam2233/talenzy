import { Post } from "@/lib/types";
import { ProfileTab } from "../types";
import ProfilePostsTab from "./ProfilePostsTab";
import ProfileReviewsTab from "./ProfileReviewsTab";
import ProfileSavedTab from "./ProfileSavedTab";
import ProfileVideosTab from "./ProfileVideosTab";

type ProfileTabPanelsProps = {
  activeTab: ProfileTab;
  profilePosts: Post[];
  videoPosts: Post[];
  isOwnProfile: boolean;
  onSelectPost: (post: Post) => void;
};

export default function ProfileTabPanels({
  activeTab,
  profilePosts,
  videoPosts,
  isOwnProfile,
  onSelectPost,
}: ProfileTabPanelsProps) {
  if (activeTab === "videos") {
    return <ProfileVideosTab videoPosts={videoPosts} onSelectPost={onSelectPost} />;
  }

  if (activeTab === "saved") {
    return <ProfileSavedTab isOwnProfile={isOwnProfile} />;
  }

  if (activeTab === "reviews") {
    return <ProfileReviewsTab />;
  }

  return <ProfilePostsTab profilePosts={profilePosts} onSelectPost={onSelectPost} />;
}
