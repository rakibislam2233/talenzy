import { Category, Post, Story } from "./types";

// ... existing code ...

export const MOCK_STORIES: Story[] = [
  {
    id: "1",
    username: "Anna",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    isViewed: false,
  },
  {
    id: "2",
    username: "James",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    isViewed: false,
  },
  {
    id: "3",
    username: "Sophie",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    isViewed: true,
  },
  {
    id: "4",
    username: "Robert",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    isViewed: false,
  },
  {
    id: "5",
    username: "Elena",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    isViewed: true,
  },
  {
    id: "6",
    username: "David",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    isViewed: false,
  },
];

export const CATEGORIES: Category[] = [
  { id: "all", label: "All", icon: "" },
  { id: "music", label: "Music", icon: "🎵" },
  { id: "comedy", label: "Comedy", icon: "🎭" },
  { id: "design", label: "Design", icon: "🎨" },
  { id: "dance", label: "Dance", icon: "🩰" },
  { id: "magic", label: "Magic", icon: "🪄" },
  { id: "acting", label: "Acting", icon: "🎤" },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    username: "GuitarHero",
    avatarUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800",
        type: "image",
      },
    ],
    caption:
      "Practicing a new solo for the upcoming gig! What do you guys think of this riff? 🎸🔥",
    timestamp: "2h ago",
    likes: "1.2k",
    comments: 45,
    tags: ["music", "rock", "guitar"],
    category: "music",
    audioName: "Original Audio",
  },
  {
    id: "2",
    username: "NeonDreamer",
    avatarUrl:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    mediaItems: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800",
        type: "image",
      },
    ],
    caption:
      "The future is bright. Latest concept art for my personal project. Created in Blender 3D. 🌆🖌️",
    timestamp: "5h ago",
    likes: "3.4k",
    comments: 120,
    tags: ["3dart", "cyberpunk", "design"],
    category: "design",
    audioName: "Concept Art",
  },
  {
    id: "3",
    username: "StandUpSam",
    avatarUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=800", // Microphone/Comedy club
    caption:
      "When the crowd doesn't laugh at your opener... 😅 #standup #comedy #fail",
    timestamp: "1h ago",
    likes: "850",
    comments: 22,
    tags: ["comedy", "standup", "humor"],
    category: "comedy",
    audioName: "Live at The Laugh Factory",
  },
  {
    id: "4",
    username: "DanceMoves101",
    avatarUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800", // Dancers
    caption:
      "Trying out some contemporary moves. Still working on the flow! 💃✨",
    timestamp: "3h ago",
    likes: "2.1k",
    comments: 89,
    tags: ["dance", "contemporary", "art"],
    category: "dance",
    audioName: "Ethereal Beats",
  },
  {
    id: "5",
    username: "MagicMike",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1531747056595-07f6cbbe10bd?w=800", // Cards/Magic
    caption:
      "Pick a card, any card. But not that one! 🃏🎩 #magic #cardtricks #illusion",
    timestamp: "6h ago",
    likes: "4.5k",
    comments: 156,
    tags: ["magic", "cards", "illusion"],
    category: "magic",
    audioName: "Mystery Theme",
  },
  {
    id: "6",
    username: "VocalVibes",
    avatarUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800", // Singer
    caption: "Covering my favorite Adele song. Hope you like it! 🎤🎶",
    timestamp: "30m ago",
    likes: "900",
    comments: 34,
    tags: ["music", "singing", "cover"],
    category: "music",
    audioName: "Adele Cover",
  },
  {
    id: "7",
    username: "StreetBeat",
    avatarUrl:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800", // Breakdancer
    caption: "Street session downtown. The energy was insane! 🏙️🕺",
    timestamp: "4h ago",
    likes: "1.8k",
    comments: 67,
    tags: ["dance", "breakdance", "street"],
    category: "dance",
    audioName: "Hip Hop Beats",
  },
  {
    id: "8",
    username: "DesignGuru",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799312c95d?w=800", // Graphic design / UI
    caption: "Working on a minimal logo concept. Less is more. 🖌️✨",
    timestamp: "1d ago",
    likes: "5.2k",
    comments: 201,
    tags: ["design", "logo", "minimalism"],
    category: "design",
    audioName: "Lo-Fi Study",
  },
  {
    id: "9",
    username: "StageLife",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1503095392237-73621374f63e?w=800", // Spotlight/Stage
    caption: "Rehearsal day 15. The monologue is finally clicking. 🎭📜",
    timestamp: "7h ago",
    likes: "670",
    comments: 18,
    tags: ["acting", "theater", "drama"],
    category: "acting",
    audioName: "Dramatic Score",
  },
  {
    id: "10",
    username: "ComedyKing",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1585647346835-2d8e1376aea6?w=800", // Laughing crowd or mic
    caption: "My cat is smarter than me. Here is the proof... 🐱😂",
    timestamp: "12h ago",
    likes: "1.5k",
    comments: 99,
    tags: ["comedy", "pets", "funny"],
    category: "comedy",
    audioName: "Laugh Track",
  },
  {
    id: "11",
    username: "PianoMan",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800", // Piano
    caption: "Improvising in C minor. Let the keys speak. 🎹🎼",
    timestamp: "2d ago",
    likes: "2.8k",
    comments: 110,
    tags: ["music", "piano", "classical"],
    category: "music",
    audioName: "Piano Soliloquy",
  },
  {
    id: "12",
    username: "AbstractArt",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800", // Abstract painting
    caption: "Colors colliding. Oil on canvas, 2024. 🎨🖼️",
    timestamp: "3d ago",
    likes: "4.1k",
    comments: 145,
    tags: ["design", "art", "abstract"],
    category: "design",
    audioName: "Gallery Ambience",
  },
  {
    id: "13",
    username: "BalletBella",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800", // Ballet shoes
    caption: "En pointe. Practice makes progress. 🩰💖",
    timestamp: "4h ago",
    likes: "3.9k",
    comments: 78,
    tags: ["dance", "ballet", "training"],
    category: "dance",
    audioName: "Swan Lake Theme",
  },
  {
    id: "14",
    username: "Illusionist",
    avatarUrl:
      "https://images.unsplash.com/photo-1560250097-9b9356679190?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1556648366-2db9320d3f24?w=800", // Smoke/Mirror
    caption: "Nothing is as it seems. Watch closely... 👁️✨",
    timestamp: "8h ago",
    likes: "2.2k",
    comments: 56,
    tags: ["magic", "mystery", "performing"],
    category: "magic",
    audioName: "Suspense",
  },
];
