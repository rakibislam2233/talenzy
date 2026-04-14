import { Button } from "@/components/ui/button";
import { ArrowDown, Building2, CreditCard, Landmark } from "lucide-react";
import Link from "next/link";

export default function WalletDepositPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Wallet</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">Deposit</h1>
          <p className="mt-1 text-sm text-muted-foreground">Add funds securely to your wallet.</p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Amount</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">$500.00</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Payment Method</p>
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Debit Card ending 4829</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center gap-3">
                <Landmark className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Bank Transfer</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Mobile Banking</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <Button asChild variant="outline" className="h-11 rounded-xl border-border bg-background text-foreground">
              <Link href="/wallet">Cancel</Link>
            </Button>
            <Button className="h-11 rounded-xl bg-primary text-primary-foreground">
              <ArrowDown className="mr-2 h-4 w-4" />
              Confirm Deposit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
