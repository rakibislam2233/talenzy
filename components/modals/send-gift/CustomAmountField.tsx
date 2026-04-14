import { Input } from "@/components/ui/input";

type CustomAmountFieldProps = {
  customAmount: string;
  onChange: (value: string) => void;
};

export default function CustomAmountField({
  customAmount,
  onChange,
}: CustomAmountFieldProps) {
  return (
    <div className="space-y-3">
      <label className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
        Custom Amount
      </label>
      <div className="relative">
        <Input
          type="number"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(event) => onChange(event.target.value)}
          className="bg-background/50 border-border rounded-xl h-12 pl-4 pr-12 text-foreground focus:border-primary/50 transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-sm">
          $
        </div>
      </div>
    </div>
  );
}
