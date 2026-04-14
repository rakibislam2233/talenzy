"use client";

import { Button } from "@/components/ui/button";
import { getWalletTransactions } from "@/lib/wallet";
import {
    ArrowDown,
    ArrowUp,
    Calendar,
    Eye,
    EyeOff,
    Gift,
    RefreshCw,
    TrendingDown,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function WalletPage() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [transactions, setTransactions] = useState(() => getWalletTransactions());

  useEffect(() => {
    setTransactions(getWalletTransactions());
  }, []);

  const stats = useMemo(() => {
    const earned = transactions
      .filter((tx) => tx.amount > 0)
      .reduce((sum, tx) => sum + tx.amount, 0);
    const spent = Math.abs(
      transactions.filter((tx) => tx.amount < 0).reduce((sum, tx) => sum + tx.amount, 0),
    );
    const gifts = transactions.filter((tx) => tx.category === "gift" && tx.amount > 0).length;

    return { earned, spent, gifts };
  }, [transactions]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Wallet
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Balance
              </h1>
            </div>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="rounded-full border border-border bg-background p-2 text-muted-foreground"
            >
              {balanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Available Balance</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {balanceVisible ? "$24,593.00" : "••••••"}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button asChild className="h-11 rounded-xl bg-primary text-primary-foreground">
              <Link href="/wallet/deposit">
                <ArrowDown className="mr-2 h-4 w-4" />
                Deposit
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-xl border-border bg-background text-foreground">
              <Link href="/wallet/withdraw">
                <ArrowUp className="mr-2 h-4 w-4" />
                Withdraw
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-xl border-border bg-background text-foreground">
              <Link href="/wallet/transactions">
                <RefreshCw className="mr-2 h-4 w-4" />
                Statement
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-border bg-card">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-4 sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Total Earned</p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <p className="text-xl font-semibold text-foreground">${stats.earned.toFixed(2)}</p>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Total Spent</p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-500" />
              <p className="text-xl font-semibold text-foreground">${stats.spent.toFixed(2)}</p>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Gifts Received</p>
            <div className="mt-2 flex items-center gap-2">
              <Gift className="h-4 w-4 text-amber-500" />
              <p className="text-xl font-semibold text-foreground">{stats.gifts} Gifts</p>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}