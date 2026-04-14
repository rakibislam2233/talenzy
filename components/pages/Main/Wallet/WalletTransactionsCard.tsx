import { Button } from "@/components/ui/button";
import { WalletTransaction } from "@/lib/wallet";
import { Calendar } from "lucide-react";
import Link from "next/link";

type WalletTransactionsCardProps = {
  transactions: WalletTransaction[];
};

export default function WalletTransactionsCard({ transactions }: WalletTransactionsCardProps) {
  return (
    <section className="mt-5 rounded-2xl border border-border bg-card">
      <div className="border-b border-border p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">Recent Transactions</h2>
            <p className="text-xs text-muted-foreground">Latest wallet activity and settlement status</p>
          </div>
          <Button variant="outline" className="h-9 rounded-lg border-border bg-background px-3 text-xs text-foreground">
            <Calendar className="mr-1.5 h-4 w-4" />
            This Month
          </Button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {transactions.slice(0, 5).map((transaction) => (
          <article key={transaction.id} className="p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground sm:text-base">
                  {transaction.description}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                  {transaction.detail} · {transaction.timeLabel}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p
                  className={`text-sm font-semibold sm:text-base ${
                    transaction.amount > 0 ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                </p>

                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest ${
                    transaction.status === "Completed" || transaction.status === "Processed"
                      ? "border-emerald-500/30 text-emerald-600"
                      : "border-amber-500/30 text-amber-600"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="border-t border-border p-4 sm:p-5">
        <Button asChild variant="outline" className="h-11 w-full rounded-lg border-border bg-background text-foreground">
          <Link href="/wallet/transactions">View Full Statement</Link>
        </Button>
      </div>
    </section>
  );
}
