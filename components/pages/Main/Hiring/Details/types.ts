export type NegotiationEntry = {
  from: "client" | "freelancer";
  amount: number;
  message: string;
  timestamp: string;
};

export type StatusBadge = {
  color: string;
  text: string;
};
