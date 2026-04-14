import { Button } from "@/components/ui/button";
import { ArrowUp, Clock3, Landmark } from "lucide-react";
import Link from "next/link";

export default function WalletWithdrawPage() {
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
            <p className="mt-2 text-3xl font-semibold text-foreground">$24,593.00</p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Withdrawal Amount</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">$1,000.00</p>
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <Landmark className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Chase Bank</p>
                <p className="text-xs text-muted-foreground">Account ending 4829</p>
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
            <Button className="h-11 rounded-xl bg-primary text-primary-foreground">
              <ArrowUp className="mr-2 h-4 w-4" />
              Confirm Withdrawal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
