"use client";

import { Mic, Music, Palette, Sparkles, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All", icon: null },
  { id: "music", label: "Music", icon: Music },
  { id: "comedy", label: "Comedy", icon: Sparkles },
  { id: "design", label: "Design", icon: Palette },
  { id: "dance", label: "Dance", icon: User },
  { id: "magic", label: "Magic", icon: Sparkles },
  { id: "acting", label: "Acting", icon: Mic },
];

export default function HeaderCategories() {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("all");

  if (pathname !== "/") return null;

  return (
    <section className="w-full border-b border-border bg-background px-4 py-2">
      <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 px-5 py-1.5 cursor-pointer rounded-full text-sm transition-all flex items-center gap-2 border ${
              activeCategory === cat.id
                ? "bg-background text-foreground border-primary"
                : "bg-surface border-border text-text-secondary font-medium"
            }`}
          >
            {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
