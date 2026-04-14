import { Gift, TrendingDown, TrendingUp } from "lucide-react";

type WalletStatsCardProps = {
  earned: number;
  spent: number;
  gifts: number;
};

export default function WalletStatsCard({ earned, spent, gifts }: WalletStatsCardProps) {
  return (
    <section className="mt-5 rounded-2xl border border-border bg-card">
      <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Total Earned</p>
          <div className="mt-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <p className="text-xl font-semibold text-foreground">${earned.toFixed(2)}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Total Spent</p>
          <div className="mt-2 flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-500" />
            <p className="text-xl font-semibold text-foreground">${spent.toFixed(2)}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Gifts Received</p>
          <div className="mt-2 flex items-center gap-2">
            <Gift className="h-4 w-4 text-amber-500" />
            <p className="text-xl font-semibold text-foreground">{gifts} Gifts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
