"use client";
import HiringRequestModal from "@/components/modals/HiringRequestModal";
import PostViewModal from "@/components/modals/PostViewModal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MOCK_POSTS } from "@/lib/data";
import { Post } from "@/lib/types";
import {
  Briefcase,
  Calendar,
  Camera,
  ExternalLink,
  FolderHeart,
  Link as LinkIcon,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Play,
  Share,
  Star,
  ThumbsUp,
  UserPlus,
  Verified,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProfileTabs from "./ProfileTabs";
import {
  CURRENT_USER_SLUG,
  currentUserPosts,
  PROFILE_RECORDS,
  profileReviews,
  savedCollections,
} from "./mock-data";
import { ProfileViewProps } from "./types";

function getProfileRecord(slug: string) {
  const normalizedSlug = slug.toLowerCase();

  return (
    PROFILE_RECORDS.find(
      (profile) => profile.slug.toLowerCase() === normalizedSlug,
    ) || {
      slug: normalizedSlug,
      name:
        slug
          .split(/[._-]/)
          .filter(Boolean)
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ") || "Profile",
      username: `@${slug}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${slug}`,
      role: "Content Creator",
      location: "Unknown Location",
      bio: `Passionate creator ${slug} sharing amazing content on Talenzy.`,
      followers: "0",
      following: "0",
      rating: "0.0",
      verified: false,
      hiring: false,
      joined: "Recently joined",
      website: `${slug}.com`,
    }
  );
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-3.5 w-3.5 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-border"}`}
    />
  ));
}

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
      <div className="relative h-72 overflow-hidden rounded-t-xl ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${profile.coverImage || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80"}')`,
          }}
        />
        {isOwnProfile ? (
          <button className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-foreground/10 bg-background/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md transition-all hover:bg-background/60">
            <Camera className="h-4 w-4" />
            <span>Edit Cover</span>
          </button>
        ) : (
          <button className="absolute bottom-4 right-4 rounded-full border border-foreground/10 bg-background/40 p-2 text-foreground backdrop-blur-md transition-all hover:bg-background/60">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="relative px-4 pb-6 sm:px-6">
        <div className="mb-6 flex flex-col items-center justify-between gap-6 md:-mt-20 md:flex-row md:items-end md:gap-4">
          <div className="relative group mx-auto md:mx-0">
            <div className="size-32 rounded-full bg-background p-1.5 md:size-40">
              <div className="h-full w-full rounded-full bg-linear-to-br from-primary to-purple-400 p-0.5">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {isOwnProfile && (
              <button className="absolute bottom-1 right-1 rounded-full border-4 border-background bg-primary p-2 text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-2 sm:right-3">
                <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            )}
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-2 text-foreground md:w-auto md:justify-end md:gap-3">
            {isOwnProfile ? (
              <>
                <Button
                  asChild
                  className="h-10 flex-1 cursor-pointer md:flex-none"
                >
                  <Link href="/settings/edit-profile">Edit Profile</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-10 flex-1 cursor-pointer md:flex-none"
                >
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => toast.follow(profile.slug)}
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:flex-none"
                >
                  <UserPlus className="h-4 w-4" />
                  Follow
                </Button>
                <Button
                  variant="outline"
                  className="h-10 flex-1 cursor-pointer md:flex-none"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsHireModalOpen(true)}
                  className="h-10 flex-1 cursor-pointer md:flex-none"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Hire
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 shrink-0"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="mb-8 mt-2 text-center md:mt-0 md:text-left">
          <div className="mb-2 flex flex-col items-center gap-2 md:flex-row">
            <Link
              href={`/${profile.slug}`}
              className="text-2xl font-bold tracking-tight text-foreground uppercase transition-colors hover:text-primary sm:text-3xl"
            >
              {profile.name}
            </Link>
            <div className="flex items-center gap-2">
              {profile.verified && (
                <Verified className="h-5 w-5 text-blue-500 sm:h-6 sm:w-6" />
              )}
              {profile.hiring && (
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-green-500">
                  Available for Hire
                </span>
              )}
            </div>
          </div>

          <p className="mb-3 text-sm font-medium tracking-tight text-primary sm:text-base">
            {profile.username}
          </p>
          <div className="w-full flex gap-2 mb-4">
            <div className="px-2 ">
              <p className="text-base text-foreground sm:text-lg font-bold">
                {profile.followers}
              </p>
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                Followers
              </p>
            </div>
            <div className="w-px bg-border/50" />
            <div className="px-2 ">
              <p className="text-base text-foreground sm:text-lg font-bold">
                {profile.following}
              </p>
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                Following
              </p>
            </div>
            <div className="w-px bg-border/50" />
            <div className="flex flex-col  px-2 ">
              <div className="flex items-center gap-1">
                <p className="text-base text-foreground sm:text-lg font-bold ">
                  {profile.rating}
                </p>
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                Rating
              </p>
            </div>
          </div>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0">
            {profile.bio}
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground md:justify-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary/70" />
              <a
                href={`https://${profile.website}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                {profile.website}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary/70" />
              <span>Joined {profile.joined}</span>
            </div>
          </div>
        </div>

        <ProfileTabs basePath={`/${profile.slug}`} activeTab={activeTab} />

        <div className="min-h-75">
          {activeTab === "posts" && (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
              {profilePosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
                >
                  <Image
                    src={post.mediaUrl}
                    alt={post.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100 md:gap-2">
                    {post.mediaItems?.some(
                      (media) => media.type === "video",
                    ) && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/20 text-foreground backdrop-blur-md">
                        ▶
                      </div>
                    )}
                    <p className="hidden translate-y-4 px-4  text-sm font-bold text-foreground transition-transform duration-300 group-hover:translate-y-0 md:block line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-3">
              {videoPosts.length > 0 ? (
                videoPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <Image
                      src={post.mediaUrl}
                      alt={post.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/20 text-foreground backdrop-blur-md">
                        <Play className="h-6 w-6 fill-white" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-medium text-muted-foreground">
                    No videos found.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "saved" && (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500 md:grid-cols-4">
              {isOwnProfile ? (
                savedCollections.map((collection) => (
                  <div
                    key={collection.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-card text-left transition-transform"
                  >
                    <div className="relative aspect-4/5 overflow-hidden">
                      <Image
                        src={collection.cover}
                        alt={collection.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm font-semibold text-white">
                          {collection.name}
                        </p>
                        <p className="text-[11px] text-white/75">
                          {collection.count} items
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-2xl border border-border bg-card p-8 text-center">
                  <FolderHeart className="mx-auto h-10 w-10 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    Saved content is private
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This user has not shared saved items publicly.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 gap-6 animate-in fade-in duration-500 md:grid-cols-2">
              <div className="col-span-full mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  Reviews & Feedback
                </h3>
              </div>
              {profileReviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative size-10 overflow-hidden rounded-full border border-border bg-muted">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {review.name}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {review.comment}
                  </p>
                  <div className="mt-auto flex items-center gap-4 border-t border-border/50 pt-4">
                    <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                      <ThumbsUp className="h-3 w-3" /> Helpful
                    </button>
                    <button className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-foreground">
                      <MessageSquare className="h-3 w-3" /> Reply
                    </button>
                    <button className="ml-auto text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
