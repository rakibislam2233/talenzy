import type { Metadata } from "next";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Talenzy",
  description: "Learn about Talenzy, the premier platform for discovering and hiring top talent across the globe.",
  openGraph: {
    title: "About Us | Talenzy",
    description: "Learn about Talenzy, the premier platform for discovering and hiring top talent across the globe.",
    type: "website",
    url: "https://www.talenzy.com/about",
  },
  twitter: {
    card: "summary",
    title: "About Us | Talenzy",
    description: "Learn about Talenzy, the premier platform for discovering and hiring top talent across the globe.",
  },
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Info className="text-primary h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-white">About Talenzy</h1>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            Talenzy is the premier platform for discovering and hiring top
            talent across the globe. Whether you are a musician, designer,
            developer, or performer, Talenzy provides the stage you need to
            shine.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-background-dark p-6 rounded-xl border border-border-dark/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">
                For Talents
              </h3>
              <p>
                Showcase your portfolio, connect with peers, and find your next
                big opportunity.
              </p>
            </div>
            <div className="bg-background-dark p-6 rounded-xl border border-border-dark/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">
                For Recruiters
              </h3>
              <p>
                Discover verified professionals, view their work history, and
                hire with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
