"use client";

import { getWalletTransactions } from "@/lib/wallet";
import { useEffect, useMemo, useState } from "react";
import WalletBalanceCard from "./WalletBalanceCard";
import WalletStatsCard from "./WalletStatsCard";
import WalletTransactionsCard from "./WalletTransactionsCard";

export default function WalletPageView() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [transactions, setTransactions] = useState(() => getWalletTransactions());

  useEffect(() => {
    setTransactions(getWalletTransactions());
  }, []);

  const stats = useMemo(() => {
    const earned = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    const spent = Math.abs(
      transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((sum, transaction) => sum + transaction.amount, 0)
    );
    const gifts = transactions.filter(
      (transaction) => transaction.category === "gift" && transaction.amount > 0
    ).length;

    return { earned, spent, gifts };
  }, [transactions]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-32 pt-6 sm:px-6 sm:pt-8">
      <WalletBalanceCard
        balanceVisible={balanceVisible}
        onToggleBalanceVisible={() => setBalanceVisible((current) => !current)}
      />
      <WalletStatsCard earned={stats.earned} spent={stats.spent} gifts={stats.gifts} />
      <WalletTransactionsCard transactions={transactions} />
    </div>
  );
}
