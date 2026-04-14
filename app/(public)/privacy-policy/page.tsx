import PublicPageShell from "@/components/pages/Public/PublicPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Talenzy",
  description: "Read how Talenzy collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PublicPageShell
      title="Privacy policy"
      subtitle="We believe privacy should be clear and understandable. This page summarizes how your information is handled on Talenzy."
    >
      <div className="space-y-4 text-sm leading-6 text-muted-foreground">
        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">What we collect</h2>
          <p className="mt-2">
            We collect information you provide directly, such as profile details, posts, messages, and transaction-related data needed for wallet operations.
          </p>
        </section>

        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">How we use data</h2>
          <p className="mt-2">
            Data is used to operate the platform, improve recommendations, prevent abuse, and support secure creator-to-client interactions.
          </p>
        </section>

        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h2 className="text-base font-semibold text-foreground">Your control</h2>
          <p className="mt-2">
            You can update profile information, control visibility settings, and request account-level data actions through support channels.
          </p>
        </section>
      </div>
    </PublicPageShell>
  );
}
