export type Contact = {
  id: number;
  name: string;
  avatar?: string;
  avatarFallback: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
};

export type Message = {
  id: number;
  type: "incoming" | "outgoing";
  content: string;
  time: string;
  status?: "seen" | "delivered";
  attachment?: {
    name: string;
    size: string;
    kind: string;
  };
};
