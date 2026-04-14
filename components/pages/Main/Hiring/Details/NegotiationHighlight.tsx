import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

type NegotiationHighlightProps = {
  title: string;
  amount: number;
  description: string;
  onAccept: () => void;
  onReject: () => void;
  onCounter: () => void;
};

export default function NegotiationHighlight({
  title,
  amount,
  description,
  onAccept,
  onReject,
  onCounter,
}: NegotiationHighlightProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
          <DollarSign className="size-5 text-blue-400" />
        </div>
        <div>
          <p className="mb-1 text-xs uppercase tracking-widest text-blue-400">{title}</p>
          <h4 className="mb-1 text-2xl text-foreground">${amount}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Button
          onClick={onAccept}
          className="h-11 rounded-xl bg-green-500 text-xs uppercase tracking-widest text-primary-foreground shadow-lg shadow-green-500/20 hover:bg-green-600"
        >
          Accept Offer
        </Button>
        <Button
          onClick={onReject}
          variant="outline"
          className="h-11 rounded-xl border-red-500/50 bg-transparent text-xs uppercase tracking-widest text-red-500 hover:bg-red-500/10"
        >
          Reject Offer
        </Button>
        <Button
          onClick={onCounter}
          className="h-11 rounded-xl bg-primary text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary-hover"
        >
          Counter Offer
        </Button>
      </div>
    </div>
  );
}
