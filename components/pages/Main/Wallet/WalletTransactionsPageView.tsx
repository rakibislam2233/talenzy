"use client";

import { Button } from "@/components/ui/button";
import { getWalletTransactions, type WalletTransaction } from "@/lib/wallet";
import { Calendar, Download, Filter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WalletTransactionsPageView() {
  const [rows, setRows] = useState<WalletTransaction[]>([]);

  useEffect(() => {
    setRows(getWalletTransactions());
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Wallet</p>
              <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">Transactions</h1>
              <p className="mt-1 text-sm text-muted-foreground">Track deposits, withdrawals, gifts and payouts.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-9 rounded-lg border-border bg-background px-3 text-xs">
                <Calendar className="mr-1.5 h-4 w-4" />
                This Month
              </Button>
              <Button variant="outline" className="h-9 rounded-lg border-border bg-background px-3 text-xs">
                <Filter className="mr-1.5 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-border">
          {rows.map((row) => (
            <article key={row.id} className="p-4 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground sm:text-base">{row.description}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">{row.detail} · {row.timeLabel}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className={`text-sm font-semibold sm:text-base ${row.amount >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                    {row.amount >= 0 ? "+" : "-"}${Math.abs(row.amount).toFixed(2)}
                  </p>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest ${row.status === "Pending" ? "border-amber-500/30 text-amber-600" : "border-emerald-500/30 text-emerald-600"}`}>
                    {row.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 border-t border-border p-4 sm:grid-cols-2 sm:p-5">
          <Button asChild variant="outline" className="h-11 rounded-lg border-border bg-background text-foreground">
            <Link href="/wallet">Back to Wallet</Link>
          </Button>
          <Button variant="outline" className="h-11 rounded-lg border-border bg-background text-foreground">
            <Download className="mr-2 h-4 w-4" />
            Download CSV
          </Button>
        </div>
      </section>
    </div>
  );
}
