import { Button } from "@/components/ui/button";

type CounterOfferEditorProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

export default function CounterOfferEditor({
  value,
  onChange,
  onSubmit,
  onCancel,
}: CounterOfferEditorProps) {
  return (
    <div className="animate-in zoom-in-95 rounded-2xl border border-border/30 bg-background/50 p-6 duration-200">
      <label className="mb-3 block text-[10px] uppercase tracking-widest text-foreground">
        Your New Offer ($)
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter amount..."
        className="mb-4 h-12 w-full rounded-xl border border-border/40 bg-background px-4 text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
      />
      <div className="flex gap-3">
        <Button onClick={onSubmit} className="h-11 flex-1 bg-primary text-xs uppercase text-primary-foreground">
          Send Offer
        </Button>
        <Button onClick={onCancel} variant="ghost" className="h-11 flex-1 text-xs uppercase text-muted-foreground">
          Cancel
        </Button>
      </div>
    </div>
  );
}
