export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  mediaUrl: string;
  mediaItems?: { url: string; type: "image" | "video" }[];
  caption: string;
  timestamp: string;
  likes: string;
  comments: number;
  tags: string[];
  category: string;
  audioName?: string;
}

export interface Story {
  id: string;
  username: string;
  avatarUrl: string;
  isViewed: boolean;
}
