import { Category, Post } from "./types";
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
      "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=800",
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
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800",
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
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1542617300-4740f90e66c0?w=800",
        type: "image",
      },
    ],
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
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1549497401-d70313589b33?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1549497401-d70313589b33?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1520521888991-3ad9b164244a?w=800",
        type: "image",
      },
    ],
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
    mediaUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800",
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
      "https://images.unsplash.com/photo-1626785774573-4b799312c95d?w=800",
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
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
        type: "image",
      },
    ],
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
    mediaUrl: "https://images.unsplash.com/photo-1547466548-038c114f1778?w=800",
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
    mediaUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800",
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
    mediaUrl: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800",
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
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800",
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
    mediaUrl:
      "https://images.unsplash.com/photo-1577985449779-166258410214?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1577985449779-166258410214?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1556648366-2db9320d3f24?w=800",
        type: "image",
      },
    ],
    caption: "Nothing is as it seems. Watch closely... 👁️✨",
    timestamp: "8h ago",
    likes: "2.2k",
    comments: 56,
    tags: ["magic", "mystery", "performing"],
    category: "magic",
    audioName: "Suspense",
  },
  // Notun posts with multiple media items
  {
    id: "15",
    username: "TravelDiaries",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
        type: "image",
      },
    ],
    caption:
      "Mountain adventures never get old! Spent the weekend hiking through the Alps. The views were absolutely breathtaking 🏔️⛰️",
    timestamp: "6h ago",
    likes: "6.7k",
    comments: 234,
    tags: ["travel", "mountains", "adventure"],
    category: "travel",
    audioName: "Mountain Breeze",
  },
  {
    id: "16",
    username: "FoodieHeaven",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    mediaItems: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
        type: "image",
      },
    ],
    caption:
      "Trying out new recipes today! Made homemade pasta from scratch. Swipe to see the process 🍝👨‍🍳",
    timestamp: "3h ago",
    likes: "4.3k",
    comments: 187,
    tags: ["food", "cooking", "recipe"],
    category: "food",
    audioName: "Kitchen Sounds",
  },
  {
    id: "17",
    username: "FitnessFreak",
    avatarUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
        type: "image",
      },
    ],
    caption:
      "Leg day complete! 💪 Here's my full workout routine. Consistency is key! #fitness #workout #gains",
    timestamp: "5h ago",
    likes: "3.8k",
    comments: 142,
    tags: ["fitness", "workout", "health"],
    category: "fitness",
    audioName: "Workout Mix",
  },
  {
    id: "18",
    username: "NaturePhotog",
    avatarUrl:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
        type: "image",
      },
    ],
    caption:
      "Captured some amazing wildlife this morning! The forest at dawn is magical 🌲🦌📸",
    timestamp: "9h ago",
    likes: "7.2k",
    comments: 289,
    tags: ["nature", "photography", "wildlife"],
    category: "photography",
    audioName: "Nature Sounds",
  },
  {
    id: "19",
    username: "TechReviewer",
    avatarUrl:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    mediaItems: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
        type: "image",
      },
    ],
    caption:
      "Full review of the latest smartphone! Check out all the features and specs. Worth the upgrade? 📱💻",
    timestamp: "1d ago",
    likes: "5.9k",
    comments: 312,
    tags: ["tech", "review", "gadgets"],
    category: "tech",
    audioName: "Tech Review",
  },
  {
    id: "20",
    username: "YogaFlow",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800",
        type: "image",
      },
    ],
    caption:
      "Morning yoga session by the beach 🧘‍♀️🌅 Finding peace and balance. Join me tomorrow at 6 AM!",
    timestamp: "10h ago",
    likes: "4.6k",
    comments: 198,
    tags: ["yoga", "wellness", "meditation"],
    category: "fitness",
    audioName: "Meditation Music",
  },
  {
    id: "21",
    username: "StreetArtist",
    avatarUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=800",
        type: "image",
      },
    ],
    caption:
      "New mural project downtown! Took 3 days to complete. Street art is life 🎨✨ #graffiti #urbanart",
    timestamp: "2d ago",
    likes: "8.1k",
    comments: 367,
    tags: ["art", "graffiti", "street"],
    category: "design",
    audioName: "Urban Vibes",
  },
  {
    id: "22",
    username: "PetLovers",
    avatarUrl:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800",
    mediaItems: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800",
        type: "image",
      },
    ],
    caption:
      "Puppy playtime! Meet Luna, she's 8 weeks old and full of energy 🐶❤️ #puppylove #dogsofinstagram",
    timestamp: "7h ago",
    likes: "9.3k",
    comments: 445,
    tags: ["pets", "dogs", "cute"],
    category: "pets",
    audioName: "Happy Paws",
  },
  {
    id: "23",
    username: "BookWorm",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
        type: "image",
      },
    ],
    caption:
      "Current reading list! Can't decide which one to finish first 📚✨ What are you reading?",
    timestamp: "1d ago",
    likes: "3.2k",
    comments: 156,
    tags: ["books", "reading", "literature"],
    category: "books",
    audioName: "Library Ambience",
  },
  {
    id: "24",
    username: "CoffeeAddict",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
        type: "image",
      },
    ],
    caption:
      "Perfecting my latte art skills! Coffee is my love language ☕️💕 #barista #coffeeart",
    timestamp: "4h ago",
    likes: "5.4k",
    comments: 221,
    tags: ["coffee", "barista", "latteart"],
    category: "food",
    audioName: "Cafe Sounds",
  },
  {
    id: "25",
    username: "GamerPro",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
    mediaItems: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        type: "image",
      },
    ],
    caption:
      "Epic gaming setup tour! Finally got my dream rig complete 🎮💻 #gaming #pcsetup #battlestation",
    timestamp: "11h ago",
    likes: "11.2k",
    comments: 521,
    tags: ["gaming", "tech", "setup"],
    category: "tech",
    audioName: "Game Music",
  },
  {
    id: "26",
    username: "FashionIcon",
    avatarUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        type: "video",
      },
      {
        url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
        type: "image",
      },
    ],
    caption:
      "Outfit inspiration for the week! Mixing vintage with modern 👗✨ #fashion #ootd #style",
    timestamp: "8h ago",
    likes: "7.8k",
    comments: 334,
    tags: ["fashion", "style", "outfit"],
    category: "fashion",
    audioName: "Fashion Week",
  },
  {
    id: "30",
    username: "guitarmaster",
    avatarUrl:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
        type: "image",
      },
    ],
    caption: "Late night jamming. This rhythm is so catchy! 🎸✨",
    timestamp: "1h ago",
    likes: "500",
    comments: 12,
    tags: ["music", "guitar", "jamming"],
    category: "music",
    audioName: "Late Night Jam",
  },
  {
    id: "31",
    username: "sarah_dance",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800",
        type: "image",
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        type: "video",
      },
    ],
    caption: "Working on my contemporary flow. Practice makes perfect! 💃",
    timestamp: "3h ago",
    likes: "1.2k",
    comments: 45,
    tags: ["dance", "flow", "art"],
    category: "dance",
    audioName: "Contemporary Spirit",
  },
  {
    id: "32",
    username: "davide_design",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    mediaUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        type: "image",
      },
    ],
    caption: "Brand identity project for a local startup. 🎨💻",
    timestamp: "5h ago",
    likes: "890",
    comments: 26,
    tags: ["design", "branding", "minimal"],
    category: "design",
    audioName: "Creative Workflow",
  },
  {
    id: "33",
    username: "annak_photo",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    mediaUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    mediaItems: [
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
        type: "image",
      },
      {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
        type: "image",
      },
    ],
    caption: "Capturing the golden hour. Nature is amazing. 📸🌅",
    timestamp: "8h ago",
    likes: "2.1k",
    comments: 67,
    tags: ["photo", "goldenhour", "nature"],
    category: "photography",
    audioName: "Golden Moment",
  },
];
