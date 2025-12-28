"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  Eye,
  EyeOff,
  Filter,
  Gift,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function WalletPage() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const transactions = [
    {
      id: 1,
      type: "gift",
      from: "@Davide_R",
      description: "Gift from @Davide_R",
      detail: "Live Stream",
      amount: 50.0,
      status: "Completed",
      time: "Today, 10:45 AM",
      color: "bg-green-500",
    },
    {
      id: 2,
      type: "withdrawal",
      from: "Chase Bank",
      description: "Withdrawal to Chase Bank",
      detail: "**** 4829",
      amount: -500.0,
      status: "Processed",
      time: "Yesterday, 4:20 PM",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "job",
      from: "CreativeAgency",
      description: "Graphic Design Job",
      detail: "Video Post",
      amount: 1200.0,
      status: "Completed",
      time: "Oct 24, 2:15 PM",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "gift",
      from: "@Sarah_S",
      description: "Gift from @Sarah_S",
      detail: "Comment Gift",
      amount: 15.0,
      status: "Pending Release",
      time: "Oct 23, 8:30 AM",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-32 font-outfit">
      {/* Balance Card */}
      <div className="bg-linear-to-br from-[#9419e6] to-[#7a14c4] rounded-2xl p-6 sm:p-8 mb-6 shadow-xl shadow-primary/20">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
              AVAILABLE BALANCE
            </span>
          </div>
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="p-2 bg-white/10 rounded-full text-white/80 hover:text-white transition-colors"
          >
            {balanceVisible ? (
              <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            {balanceVisible ? "$24,593.00" : "••••••"}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Button className="bg-white text-primary hover:bg-white/90 rounded-xl h-12 font-bold shadow-lg">
            <ArrowDown className="h-5 w-5 mr-2" />
            Deposit
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/10 backdrop-blur-md rounded-xl h-12 font-bold">
            <ArrowUp className="h-5 w-5 mr-2" />
            Withdraw
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/10 backdrop-blur-md rounded-xl h-12 font-bold">
            <RefreshCw className="h-5 w-5 mr-2" />
            History
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 sm:gap-10 mb-8 border-b border-border-dark overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar">
        {[
          "Overview",
          "Transactions",
          "Deposit",
          "Withdraw",
          "Payment Methods",
        ].map((tab, index) => (
          <button
            key={tab}
            className={`pb-4 px-1 border-b-2 transition-all whitespace-nowrap text-xs sm:text-sm font-black uppercase tracking-widest ${
              index === 0
                ? "border-primary text-white"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-surface-dark rounded-2xl p-5 sm:p-6 border border-border-dark hover:border-primary/30 transition-colors group">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              Total Earned
            </p>
            <div className="p-2 bg-green-500/10 rounded-lg">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-white">
            $8,430.50
          </p>
        </div>
        <div className="bg-surface-dark rounded-2xl p-5 sm:p-6 border border-border-dark hover:border-primary/30 transition-colors group">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              Total Spent
            </p>
            <div className="p-2 bg-red-500/10 rounded-lg">
              <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-white">
            $1,240.00
          </p>
        </div>
        <div className="bg-surface-dark rounded-2xl p-5 sm:p-6 border border-border-dark hover:border-primary/30 transition-colors group sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
              Gifts Received
            </p>
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-white">
            450 Gifts
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-surface-dark rounded-3xl p-5 sm:p-8 border border-border-dark shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-white font-black text-xl uppercase tracking-tight">
            Recent <span className="text-primary italic">Activity</span>
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="bg-background-dark border-border-dark text-gray-400 hover:text-white hover:bg-surface-dark rounded-xl h-10 w-10 p-0"
            >
              <Calendar className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-background-dark border-border-dark text-gray-400 hover:text-white hover:bg-surface-dark rounded-xl h-10 w-10 p-0"
            >
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-background-dark/50 border border-transparent hover:border-primary/20 rounded-2xl transition-all"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className={`size-12 rounded-2xl bg-linear-to-br from-surface-dark to-background-dark border border-border-dark flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-primary/40`}
                >
                  <div
                    className={`absolute inset-0 ${transaction.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                  ></div>
                  <span
                    className={`font-black text-sm relative z-10 ${transaction.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {transaction.from.substring(0, 1).replace("@", "")}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm sm:text-base mb-0.5 truncate uppercase tracking-tight">
                    {transaction.description}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">
                    {transaction.detail}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 sm:text-right border-t border-border-dark/30 sm:border-0 pt-3 sm:pt-0">
                <div className="flex-1 sm:flex-none">
                  <p
                    className={`text-lg sm:text-xl font-black ${
                      transaction.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                    {transaction.time}
                  </p>
                </div>
                <div className="flex-none">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      transaction.status === "Completed" ||
                      transaction.status === "Processed"
                        ? "bg-green-500/5 text-green-500 border-green-500/20"
                        : "bg-orange-500/5 text-orange-500 border-orange-500/20"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button
            variant="ghost"
            className="w-full text-primary hover:text-primary-hover hover:bg-primary/5 font-black uppercase tracking-widest text-xs h-12 rounded-xl border border-primary/20"
          >
            View Full Statement
          </Button>
        </div>
      </div>
    </div>
  );
}
