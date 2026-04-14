import { Comment } from "./types";

export const getMockComments = (postAvatar: string): Comment[] => [
  {
    id: "1",
    username: "sarah_s",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content: "This tone is incredible! What amp are you using?",
    timestamp: "24m",
    likes: 12,
    replies: [
      {
        id: "1-1",
        username: "GuitarMaster",
        avatarUrl: postAvatar,
        content: "I'm using a Marshall Plexi with a custom boost pedal!",
        timestamp: "10m",
        likes: 3,
      },
    ],
  },
  {
    id: "2",
    username: "mike_drummer",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    content: "Sick riff bro! 🔥 We should jam sometime.",
    timestamp: "1h",
    likes: 5,
  },
];
