import PublicPageShell from "@/components/pages/Public/PublicPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Talenzy",
  description:
    "Learn what Talenzy is building for creators, freelancers, and creative teams.",
};

const highlights = [
  {
    title: "Creator First",
    text: "We help creative people turn skills into paid opportunities with a profile that truly represents their work.",
  },
  {
    title: "Trusted Connections",
    text: "From direct messages to hiring requests, every interaction is designed to be transparent, safe, and easy.",
  },
  {
    title: "Global Reach",
    text: "Artists, designers, developers, and performers can discover each other and collaborate across borders.",
  },
];

export default function AboutPage() {
  return (
    <PublicPageShell
      title="A social platform for serious talent"
      subtitle="Talenzy combines the reach of modern social apps with practical tools that help people get discovered, hired, and paid."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border/80 bg-background p-5"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border/80 bg-background p-5 sm:p-6">
        <h2 className="text-xl font-semibold">Why people choose Talenzy</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Like the best parts of TikTok, Facebook, and Instagram, Talenzy keeps discovery fast and content-driven. But we go further with hiring tools, gifting features, and profile depth that helps talent convert attention into real career outcomes.
        </p>
      </div>
    </PublicPageShell>
  );
}
