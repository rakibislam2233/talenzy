export interface Comment {
  id: string;
  username: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}
