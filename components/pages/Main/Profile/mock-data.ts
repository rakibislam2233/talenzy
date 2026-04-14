import { MOCK_POSTS } from "@/lib/data";
import { ProfileRecord } from "./types";

export const CURRENT_USER_SLUG = "alextalent";

export const PROFILE_RECORDS: ProfileRecord[] = [
  {
    slug: CURRENT_USER_SLUG,
    name: "Alex Talent",
    username: "@alextalent",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    role: "Visual Arts",
    location: "Los Angeles, CA",
    bio: "Multidisciplinary creative director & visual artist. Creating digital experiences that matter. Open for collaborations.",
    followers: "12.5k",
    following: "480",
    rating: "4.9",
    verified: true,
    hiring: true,
    joined: "March 2021",
    website: "alexcreatives.com",
    coverImage:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
  },
  {
    slug: "guitarmaster",
    name: "GuitarMaster",
    username: "@guitarmaster",
    avatar:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=400",
    role: "Musician",
    location: "Los Angeles, CA",
    bio: "Creating soulful riffs and melodies. Touring guitarist, session musician, and sound explorer.",
    followers: "45.2k",
    following: "128",
    rating: "4.9",
    verified: true,
    hiring: true,
    joined: "April 2022",
    website: "guitarmaster.live",
    coverImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
  },
  {
    slug: "sarah_dance",
    name: "Sarah Sterling",
    username: "@sarah_dance",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    role: "Dancer",
    location: "New York, USA",
    bio: "Contemporary dancer & choreographer. Moving through life one step at a time.",
    followers: "18.4k",
    following: "342",
    rating: "4.7",
    verified: false,
    hiring: false,
    joined: "June 2023",
    website: "sarahdance.co",
    coverImage:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1200&q=80",
  },
  {
    slug: "davide_design",
    name: "Davide Rossi",
    username: "@davide_design",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    role: "Designer",
    location: "Milan, Italy",
    bio: "Visual storyteller and brand identity specialist building clean systems for modern brands.",
    followers: "8.2k",
    following: "56",
    rating: "4.8",
    verified: true,
    hiring: true,
    joined: "November 2022",
    website: "davidedesign.studio",
    coverImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
  },
];

export const currentUserPosts = MOCK_POSTS.filter(
  (post) =>
    post.username.toLowerCase() === CURRENT_USER_SLUG.toLowerCase() ||
    post.username.toLowerCase() === "alextalent",
);

export const savedCollections = [
  {
    id: 1,
    name: "All Saves",
    count: 142,
    cover:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800",
  },
  {
    id: 2,
    name: "Motion Ideas",
    count: 38,
    cover:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
  },
  {
    id: 3,
    name: "Brand References",
    count: 24,
    cover:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
  },
  {
    id: 4,
    name: "Color Studies",
    count: 19,
    cover:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
  },
];

export const profileReviews = [
  {
    id: 1,
    name: "Creative Agency",
    username: "@creative_hq",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Great communication and strong art direction. Delivery was polished and on time.",
  },
  {
    id: 2,
    name: "Studio North",
    username: "@studionorth",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 5,
    date: "1 month ago",
    comment:
      "Very professional workflow and excellent creative instincts. Would hire again.",
  },
  {
    id: 3,
    name: "Indie Label",
    username: "@indielabel",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 4,
    date: "1 month ago",
    comment:
      "Fast turnaround, clear communication, and the final work matched the brief closely.",
  },
];