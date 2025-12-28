import { DollarSign, Gift, Globe } from "lucide-react";

export default function RegisterSidePanel() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Unleash Your <br />
          <span className="text-[#d8b4fe]">Talent.</span>
        </h1>
        <p className="text-lg text-white/70 max-w-md">
          Join the world's first social platform designed to monetize your
          creativity instantly.
        </p>
      </div>

      <div className="space-y-4 flex-1">
        <FeatureCard
          icon={<DollarSign className="w-5 h-5 text-white" />}
          title="Monetize Instantly"
          description="Earn from your very first post."
        />
        <FeatureCard
          icon={<Gift className="w-5 h-5 text-white" />}
          title="Gift Interactions"
          description="Fans can send real gifts on comments."
        />
        <FeatureCard
          icon={<Globe className="w-5 h-5 text-white" />}
          title="Global Stage"
          description="Reach audiences in 140+ countries."
        />
      </div>

      {/* Testimonial Card */}
      <div className="mt-8 bg-[#4c1d95]/30 backdrop-blur-md border border-[#6d28d9]/50 p-4 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white font-bold text-sm">@DancePro</span>
          <BadgeCheck
            className="w-4 h-4 text-blue-400"
            fill="currentColor"
            color="white"
          />
        </div>
        <p className="text-white/80 text-sm italic">
          "Talenzy changed my career overnight. The monetization tools are
          lightyears ahead of anything else."
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      <div className="w-10 h-10 rounded-full bg-[#5b21b6] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-white/50 text-sm">{description}</p>
      </div>
    </div>
  );
}

function BadgeCheck(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
