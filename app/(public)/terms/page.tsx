import PublicPageShell from "@/components/pages/Public/PublicPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Talenzy",
  description: "Review the terms and conditions for using Talenzy.",
};

export default function TermsPage() {
  return (
    <PublicPageShell
      title="Terms and conditions"
      subtitle="These terms explain the rules for using Talenzy services, creator tools, and wallet features."
    >
      <div className="space-y-4 text-sm leading-6 text-muted-foreground">
        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">Account responsibilities</h2>
          <p className="mt-2">
            You are responsible for account security and the content published from your profile. Misuse, impersonation, and fraud are prohibited.
          </p>
        </section>

        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">Content and conduct</h2>
          <p className="mt-2">
            Content must follow community guidelines and applicable law. We may remove violating content and restrict accounts when necessary.
          </p>
        </section>

        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">Payments and wallet</h2>
          <p className="mt-2">
            Wallet operations, payouts, and fees are subject to compliance checks and payment partner requirements in supported regions.
          </p>
        </section>
      </div>
    </PublicPageShell>
  );
}
