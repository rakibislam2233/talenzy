export type WalletTransactionStatus = "Completed" | "Processed" | "Pending";
export type WalletTransactionCategory = "gift" | "job" | "withdrawal" | "deposit";

export type WalletTransaction = {
  id: string;
  description: string;
  detail: string;
  amount: number;
  status: WalletTransactionStatus;
  category: WalletTransactionCategory;
  createdAt: number;
  timeLabel: string;
};

const STORAGE_KEY = "talenzy.wallet.custom.transactions";

export const DEFAULT_WALLET_TRANSACTIONS: WalletTransaction[] = [
  {
    id: "seed-1",
    description: "Gift from @Davide_R",
    detail: "Live Stream",
    amount: 50,
    status: "Completed",
    category: "gift",
    createdAt: Date.now() - 1000 * 60 * 60 * 3,
    timeLabel: "Today, 10:45 AM",
  },
  {
    id: "seed-2",
    description: "Withdrawal to Chase Bank",
    detail: "**** 4829",
    amount: -500,
    status: "Processed",
    category: "withdrawal",
    createdAt: Date.now() - 1000 * 60 * 60 * 26,
    timeLabel: "Yesterday, 4:20 PM",
  },
  {
    id: "seed-3",
    description: "Graphic Design Job",
    detail: "Video Post",
    amount: 1200,
    status: "Completed",
    category: "job",
    createdAt: Date.now() - 1000 * 60 * 60 * 46,
    timeLabel: "Oct 24, 2:15 PM",
  },
  {
    id: "seed-4",
    description: "Gift from @Sarah_S",
    detail: "Comment Gift",
    amount: 15,
    status: "Pending",
    category: "gift",
    createdAt: Date.now() - 1000 * 60 * 60 * 62,
    timeLabel: "Oct 23, 8:30 AM",
  },
];

function formatTimeLabel(date: Date): string {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function getCustomWalletTransactions(): WalletTransaction[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as WalletTransaction[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getWalletTransactions(): WalletTransaction[] {
  const custom = getCustomWalletTransactions();
  return [...custom, ...DEFAULT_WALLET_TRANSACTIONS].sort(
    (a, b) => b.createdAt - a.createdAt,
  );
}

export function addWalletTransaction(input: {
  description: string;
  detail: string;
  amount: number;
  status: WalletTransactionStatus;
  category: WalletTransactionCategory;
}) {
  if (typeof window === "undefined") return;

  const now = new Date();
  const record: WalletTransaction = {
    id: `tx-${now.getTime()}`,
    description: input.description,
    detail: input.detail,
    amount: input.amount,
    status: input.status,
    category: input.category,
    createdAt: now.getTime(),
    timeLabel: formatTimeLabel(now),
  };

  const existing = getCustomWalletTransactions();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing]));
}
