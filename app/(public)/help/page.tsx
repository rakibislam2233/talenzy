import PublicPageShell from "@/components/pages/Public/PublicPageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Talenzy",
  description: "Find quick answers and support information for using Talenzy.",
};

const faq = [
  {
    q: "How do I create a strong profile?",
    a: "Add a clear bio, at least 3 portfolio posts, and your key skills. Verified contact info also improves trust.",
  },
  {
    q: "How do hiring requests work?",
    a: "Clients can send a request with budget and timeline. You can accept, reject, or negotiate from the hiring section.",
  },
  {
    q: "Where can I manage wallet activity?",
    a: "Go to Wallet to deposit, withdraw, and track transaction history in one place.",
  },
  {
    q: "How do I report abuse or fake accounts?",
    a: "Open the content menu and tap report. Our moderation team reviews high-priority safety cases quickly.",
  },
];

export default function HelpPage() {
  return (
    <PublicPageShell
      title="Help and support"
      subtitle="Fast answers to common questions. If your issue is urgent, contact the support team from the app settings."
    >
      <div className="grid gap-3">
        {faq.map((item) => (
          <article key={item.q} className="rounded-2xl border border-border/80 bg-background p-5">
            <h2 className="text-base font-semibold sm:text-lg">{item.q}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.a}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/80 bg-background p-5">
          <h3 className="text-lg font-semibold">Safety Center</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Learn about account safety, scam prevention, and how we enforce community standards.
          </p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-background p-5">
          <h3 className="text-lg font-semibold">Business Support</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For agencies and recruiters, we provide onboarding help and best practices for hiring workflows.
          </p>
        </div>
      </div>
    </PublicPageShell>
  );
}
