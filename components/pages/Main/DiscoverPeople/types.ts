export type DiscoverProfile = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  location: string;
  country: string;
  bio: string;
  followers: string;
  posts: string;
  verified?: boolean;
  isFollowing: boolean;
  online: boolean;
  label?: string;
  projects?: boolean;
};