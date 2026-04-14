"use client";
import HiringRequestModal from "@/components/modals/HiringRequestModal";
import PostViewModal from "@/components/modals/PostViewModal";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import { useMemo, useState } from "react";
import {
    CURRENT_USER_SLUG,
    currentUserPosts,
} from "./mock-data";
import { getProfileRecord } from "./profile-record";
import ProfileCover from "./ProfileCover";
import ProfileDetails from "./ProfileDetails";
import ProfileHero from "./ProfileHero";
import ProfileTabs from "./ProfileTabs";
import ProfileTabPanels from "./tabs/ProfileTabPanels";
import { ProfileViewProps } from "./types";

export default function ProfileView({
  slug,
  activeTab,
  forceSelf = false,
}: ProfileViewProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const profile = useMemo(() => getProfileRecord(slug), [slug]);
  const isOwnProfile =
    forceSelf || profile.slug.toLowerCase() === CURRENT_USER_SLUG;

  const profilePosts = useMemo(() => {
    if (isOwnProfile) {
      return currentUserPosts.length > 0
        ? currentUserPosts
        : MOCK_POSTS.slice(0, 6);
    }

    const matchedPosts = MOCK_POSTS.filter(
      (post) => post.username.toLowerCase() === profile.slug.toLowerCase(),
    );

    return matchedPosts.length > 0 ? matchedPosts : MOCK_POSTS.slice(0, 6);
  }, [isOwnProfile, profile.slug]);

  const videoPosts = useMemo(
    () =>
      profilePosts.filter(
        (post) =>
          post.mediaUrl.endsWith(".mp4") ||
          post.mediaItems?.some((media) => media.type === "video"),
      ),
    [profilePosts],
  );

  return (
    <div className="mx-auto w-full max-w-6xl pb-32">
      <ProfileCover coverImage={profile.coverImage} isOwnProfile={isOwnProfile} />

      <div className="relative px-4 pb-6 sm:px-6">
        <ProfileHero
          profile={profile}
          isOwnProfile={isOwnProfile}
          onHireClick={() => setIsHireModalOpen(true)}
        />

        <ProfileDetails profile={profile} />

        <ProfileTabs basePath={`/${profile.slug}`} activeTab={activeTab} />

        <div className="min-h-75">
          <ProfileTabPanels
            activeTab={activeTab}
            profilePosts={profilePosts}
            videoPosts={videoPosts}
            isOwnProfile={isOwnProfile}
            onSelectPost={setSelectedPost}
          />
        </div>
      </div>

      {selectedPost && (
        <PostViewModal
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          post={selectedPost}
        />
      )}

      {isHireModalOpen && (
        <HiringRequestModal
          talentName={profile.name}
          talentImage={profile.avatar}
          onClose={() => setIsHireModalOpen(false)}
        />
      )}
    </div>
  );
}
