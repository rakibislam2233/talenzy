import { Sparkles } from "lucide-react";

export default function HiringHero() {
  return (
    <section className="rounded-3xl border border-border bg-card/30 p-5 sm:p-7">
      <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Talent Marketplace
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Find the Right Professional for Your Work
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
        Review portfolios, compare rates, and hire with confidence. Use filters
        to narrow down creators by budget, category, availability, and location.
      </p>
    </section>
  );
}