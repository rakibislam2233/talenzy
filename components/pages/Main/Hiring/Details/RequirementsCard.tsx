import { CheckCircle2 } from "lucide-react";

type RequirementsCardProps = {
  title: string;
  description: string;
  requirements: string[];
  mode: "list" | "grid";
};

export default function RequirementsCard({
  title,
  description,
  requirements,
  mode,
}: RequirementsCardProps) {
  return (
    <div className="rounded-3xl border border-border/40 bg-background/50 p-6 backdrop-blur-xl sm:p-8">
      <h3 className="mb-4 text-sm uppercase tracking-widest text-foreground">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {mode === "grid" ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {requirements.map((requirement, index) => (
            <div
              key={`${requirement}-${index}`}
              className="flex items-center gap-2 rounded-xl border border-border/30 bg-background/50 p-3 text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              <CheckCircle2 className="size-3 text-primary" />
              <span>{requirement}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {requirements.map((requirement, index) => (
            <div
              key={`${requirement}-${index}`}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{requirement}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
