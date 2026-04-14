import { Check } from "lucide-react";
import { checkRequirement } from "./reset-password-utils";

type PasswordRequirementsProps = {
  password: string;
};

const REQUIREMENTS = [
  { key: "length", label: "At least 8 characters long" },
  { key: "number", label: "Contains at least one number" },
  { key: "special", label: "Contains at least one special character" },
  { key: "noSpaces", label: "No spaces" },
] as const;

export default function PasswordRequirements({ password }: PasswordRequirementsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-foreground text-sm font-semibold">PASSWORD REQUIREMENTS</h3>
      <div className="space-y-2">
        {REQUIREMENTS.map((requirement) => (
          <div key={requirement.key} className="flex items-center gap-2">
            {checkRequirement(password, requirement.key) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <div className="h-4 w-4 rounded-full border-2 border-border" />
            )}
            <span className="text-sm text-muted-foreground">{requirement.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
