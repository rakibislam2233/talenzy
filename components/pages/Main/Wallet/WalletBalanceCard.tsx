import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Eye, EyeOff, RefreshCw } from "lucide-react";
import Link from "next/link";

type WalletBalanceCardProps = {
  balanceVisible: boolean;
  onToggleBalanceVisible: () => void;
};

export default function WalletBalanceCard({
  balanceVisible,
  onToggleBalanceVisible,
}: WalletBalanceCardProps) {
  return (
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
            onClick={onToggleBalanceVisible}
            className="rounded-full border border-border bg-background p-2 text-muted-foreground"
          >
            {balanceVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          Available Balance
        </p>
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
  );
}
