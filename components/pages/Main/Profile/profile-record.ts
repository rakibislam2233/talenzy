import { PROFILE_RECORDS } from "./mock-data";
import { ProfileRecord } from "./types";

export function getProfileRecord(slug: string): ProfileRecord {
  const normalizedSlug = slug.toLowerCase();

  return (
    PROFILE_RECORDS.find(
      (profile) => profile.slug.toLowerCase() === normalizedSlug,
    ) || {
      slug: normalizedSlug,
      name:
        slug
          .split(/[._-]/)
          .filter(Boolean)
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ") || "Profile",
      username: `@${slug}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${slug}`,
      role: "Content Creator",
      location: "Unknown Location",
      bio: `Passionate creator ${slug} sharing amazing content on Talenzy.`,
      followers: "0",
      following: "0",
      rating: "0.0",
      verified: false,
      hiring: false,
      joined: "Recently joined",
      website: `${slug}.com`,
    }
  );
}
