import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Minimum 1k followers",
  "Active in last 30 days",
  "No community violations",
];

export default function VerifyEligibility() {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-[#9419e6]" />
        <h3 className="font-semibold uppercase text-white">ELIGIBILITY REQUIREMENTS</h3>
      </div>
      <div className="space-y-2">
        {requirements.map((requirement) => (
          <div key={requirement} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#9419e6]" />
            <span className="text-gray-300">{requirement}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
