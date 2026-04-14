export type ProfileTab = "posts" | "videos" | "saved" | "reviews";

export type ProfileRecord = {
  slug: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  location: string;
  bio: string;
  followers: string;
  following: string;
  rating: string;
  verified: boolean;
  hiring: boolean;
  joined: string;
  website: string;
  coverImage?: string;
};

export type ProfileViewProps = {
  slug: string;
  activeTab: ProfileTab;
  forceSelf?: boolean;
};