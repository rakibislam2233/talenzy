export type DiscoverProfileTab = "Portfolio" | "Videos" | "About" | "Gifts";

export type DiscoverProfile = {
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
};
