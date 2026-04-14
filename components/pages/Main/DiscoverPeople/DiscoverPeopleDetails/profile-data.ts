import { DiscoverProfile } from "./types";

export function getProfileData(username: string): DiscoverProfile {
  const profiles: DiscoverProfile[] = [
    {
      name: "GuitarMaster",
      username: "guitarmaster",
      avatar: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=400",
      role: "Musician",
      location: "Los Angeles, CA",
      bio: "Creating soulful riffs and melodies. Exploring the boundaries of sound and expression. #guitarist #music #live",
      followers: "45.2k",
      following: "128",
      rating: "4.9",
      verified: true,
      hiring: true,
    },
    {
      name: "Alex Creator",
      username: "alexcreates",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      role: "Digital Artist",
      location: "New York, USA",
      bio: "Digital Artist & 3D Animator exploring the boundaries of motion and surrealism. Creating visual experiences for brands and dreamers. #3dart #blender",
      followers: "12.5k",
      following: "842",
      rating: "4.8",
      verified: true,
      hiring: true,
    },
    {
      name: "Sarah Sterling",
      username: "sarah_dance",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
      role: "Dancer",
      location: "New York, USA",
      bio: "Contemporary dancer & choreographer. Moving through life one step at a time. #dance #art #motion",
      followers: "18.4k",
      following: "342",
      rating: "4.7",
      verified: false,
      hiring: false,
    },
  ];

  return (
    profiles.find((profile) => profile.username.toLowerCase() === username.toLowerCase()) || {
      name: username.charAt(0).toUpperCase() + username.slice(1),
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      role: "Content Creator",
      location: "Unknown Location",
      bio: `Passionate creator ${username} sharing amazing content on Talenzy.`,
      followers: "0",
      following: "0",
      rating: "0.0",
      verified: false,
      hiring: false,
    }
  );
}
