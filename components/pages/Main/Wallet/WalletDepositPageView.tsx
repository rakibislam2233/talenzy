"use client";

import { Button } from "@/components/ui/button";
import { addWalletTransaction } from "@/lib/wallet";
import { ArrowDown, Building2, CreditCard, Landmark } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function WalletDepositPageView() {
  const router = useRouter();
  const [amount, setAmount] = useState("500");
  const [method, setMethod] = useState("card-4829");
  const [reference, setReference] = useState("");

  const depositFee = useMemo(() => {
    const value = Number(amount || 0);
    return value > 0 ? Number((value * 0.015).toFixed(2)) : 0;
  }, [amount]);

  const depositAmount = Number(amount || 0);

  const handleDeposit = () => {
    if (!Number.isFinite(depositAmount) || depositAmount <= 0) return;

    const methodLabel =
      method === "card-4829"
        ? "Card **** 4829"
        : method === "bank-transfer"
          ? "Bank Transfer"
          : "Mobile Banking";

    addWalletTransaction({
      description: `Deposit via ${methodLabel}`,
      detail: reference ? `Ref: ${reference}` : methodLabel,
      amount: depositAmount,
      status: "Processed",
      category: "deposit",
    });

    router.push("/wallet/transactions");
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Wallet
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">Deposit</h1>
          <p className="mt-1 text-sm text-muted-foreground">Add funds securely to your wallet.</p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Amount</p>
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
              className="mt-2 w-full border-0 bg-transparent p-0 text-3xl font-semibold text-foreground outline-none"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Estimated processing fee: ${depositFee.toFixed(2)}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Payment Method</p>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background p-4">
              <input
                type="radio"
                name="deposit-method"
                value="card-4829"
                checked={method === "card-4829"}
                onChange={() => setMethod("card-4829")}
              />
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Debit Card ending 4829</span>
              </div>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background p-4">
              <input
                type="radio"
                name="deposit-method"
                value="bank-transfer"
                checked={method === "bank-transfer"}
                onChange={() => setMethod("bank-transfer")}
              />
              <div className="flex items-center gap-3">
                <Landmark className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Bank Transfer</span>
              </div>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background p-4">
              <input
                type="radio"
                name="deposit-method"
                value="mobile-banking"
                checked={method === "mobile-banking"}
                onChange={() => setMethod("mobile-banking")}
              />
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Mobile Banking</span>
              </div>
            </label>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Reference (Optional)</p>
            <input
              value={reference}
              onChange={(event) => setReference(event.target.value)}
              placeholder="Transaction note"
              className="mt-2 w-full border-0 bg-transparent p-0 text-sm text-foreground outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <Button asChild variant="outline" className="h-11 rounded-xl border-border bg-background text-foreground">
              <Link href="/wallet">Cancel</Link>
            </Button>
            <Button
              onClick={handleDeposit}
              disabled={!Number.isFinite(depositAmount) || depositAmount <= 0}
              className="h-11 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Confirm Deposit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
