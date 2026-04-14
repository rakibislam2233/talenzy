"use client";

import { Button } from "@/components/ui/button";
import { addWalletTransaction } from "@/lib/wallet";
import { ArrowUp, Clock3, Landmark } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function WalletWithdrawPageView() {
  const router = useRouter();
  const [amount, setAmount] = useState("1000");
  const [account, setAccount] = useState("chase-4829");
  const availableBalance = 24593;

  const withdrawalAmount = Number(amount || 0);
  const fee = useMemo(() => (withdrawalAmount > 0 ? 2.5 : 0), [withdrawalAmount]);
  const netAmount = useMemo(() => Math.max(withdrawalAmount - fee, 0), [withdrawalAmount, fee]);

  const handleWithdraw = () => {
    if (!Number.isFinite(withdrawalAmount) || withdrawalAmount <= 0) return;
    if (withdrawalAmount > availableBalance) return;

    const accountLabel = account === "chase-4829" ? "Chase Bank **** 4829" : "City Bank **** 9012";

    addWalletTransaction({
      description: `Withdrawal to ${accountLabel}`,
      detail: `Net ${netAmount.toFixed(2)} after fee`,
      amount: -withdrawalAmount,
      status: "Pending",
      category: "withdrawal",
    });

    router.push("/wallet/transactions");
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Wallet</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">Withdraw</h1>
          <p className="mt-1 text-sm text-muted-foreground">Transfer your available balance to a bank account.</p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Available to Withdraw</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">${availableBalance.toFixed(2)}</p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Withdrawal Amount</p>
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
              className="mt-2 w-full border-0 bg-transparent p-0 text-2xl font-semibold text-foreground outline-none"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Fee: ${fee.toFixed(2)} · You receive: ${netAmount.toFixed(2)}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <Landmark className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Bank Account</p>
                <select
                  value={account}
                  onChange={(event) => setAccount(event.target.value)}
                  className="mt-1 border-0 bg-transparent p-0 text-xs text-muted-foreground outline-none"
                >
                  <option value="chase-4829">Chase Bank · Account ending 4829</option>
                  <option value="city-9012">City Bank · Account ending 9012</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" />
              Processing time: 1-2 business days
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <Button asChild variant="outline" className="h-11 rounded-xl border-border bg-background text-foreground">
              <Link href="/wallet">Cancel</Link>
            </Button>
            <Button
              onClick={handleWithdraw}
              disabled={!Number.isFinite(withdrawalAmount) || withdrawalAmount <= 0 || withdrawalAmount > availableBalance}
              className="h-11 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Confirm Withdrawal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
