import { NegotiationEntry } from "./types";

type NegotiationHistoryProps = {
  entries: NegotiationEntry[];
  reverseFor: "client" | "freelancer";
  rightLabel: string;
  leftLabel: string;
};

export default function NegotiationHistory({
  entries,
  reverseFor,
  rightLabel,
  leftLabel,
}: NegotiationHistoryProps) {
  return (
    <div className="mt-8 space-y-4">
      <h4 className="text-xs uppercase tracking-widest text-muted-foreground">
        Negotiation History
      </h4>
      {entries.map((entry, index) => (
        <div
          key={`${entry.timestamp}-${index}`}
          className={`flex items-start gap-3 ${entry.from === reverseFor ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`max-w-[80%] rounded-2xl p-4 ${
              entry.from === reverseFor
                ? "rounded-tr-none border border-primary/30 bg-primary/20"
                : "rounded-tl-none border border-border/40 bg-background/80"
            }`}
          >
            <div className="mb-2 flex justify-between gap-4">
              <span className="text-[10px] uppercase tracking-tight text-muted-foreground">
                {entry.from === reverseFor ? rightLabel : leftLabel}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground">
                {entry.timestamp}
              </span>
            </div>
            <p className="text-lg text-foreground">${entry.amount}</p>
            <p className="mt-1 text-xs text-muted-foreground">{entry.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
