import { Contact, Message } from "./types";

export const activeFilters = ["All", "Unread", "Hiring", "Starred"];

export const contacts: Contact[] = [
  {
    id: 1,
    name: "CreativeAgency",
    avatarFallback: "CA",
    lastMessage: "Can you send the portfolio by 5 PM?",
    time: "Now",
    unread: 1,
    online: true,
  },
  {
    id: 2,
    name: "GuitarMaster",
    avatar:
      "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=120&h=120",
    avatarFallback: "GM",
    lastMessage: "That new riff is fire! 🔥",
    time: "2h ago",
    unread: 2,
    online: false,
  },
  {
    id: 3,
    name: "Sarah_S",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120",
    avatarFallback: "SS",
    lastMessage: "Thanks for the gift! 🙌",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "James Lee",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120",
    avatarFallback: "JL",
    lastMessage: "Let's discuss the project scope.",
    time: "Oct 24",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Davide Rossi",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120",
    avatarFallback: "DR",
    lastMessage: "Sent the revised brand kit.",
    time: "Oct 20",
    unread: 0,
    online: false,
  },
];

export const messagesByContact: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      type: "incoming",
      content:
        "Hi CreativeAgency! I saw your post regarding the Senior Graphic Designer position. Is it still open?",
      time: "Yesterday",
      status: "seen",
    },
    {
      id: 2,
      type: "outgoing",
      content:
        "Here are the detailed requirements for the Senior Designer role. Let me know if you need any adjustments to the scope.",
      time: "10:30 AM",
      attachment: {
        name: "Job_Requirements.pdf",
        size: "2.4 MB",
        kind: "Adobe PDF",
      },
      status: "seen",
    },
    {
      id: 3,
      type: "outgoing",
      content:
        "Sure! I'm just polishing the last few slides. It will be ready in an hour.",
      time: "10:40 AM",
      status: "seen",
    },
  ],
  2: [
    {
      id: 1,
      type: "incoming",
      content:
        "That riff idea is solid. Can we also see a short demo version for the first minute?",
      time: "2h ago",
      status: "seen",
    },
    {
      id: 2,
      type: "outgoing",
      content:
        "Absolutely. I’ll send both the demo and full version so you can compare the tone.",
      time: "1h ago",
      status: "delivered",
    },
  ],
  3: [
    {
      id: 1,
      type: "incoming",
      content: "Thanks again for the support. The gift was really thoughtful!",
      time: "Yesterday",
      status: "seen",
    },
  ],
  4: [
    {
      id: 1,
      type: "incoming",
      content:
        "I’ve reviewed the proposal. Let’s align on timeline and deliverables first.",
      time: "Oct 24",
      status: "seen",
    },
  ],
  5: [
    {
      id: 1,
      type: "incoming",
      content: "The revised brand kit looks great. I’ve shared a couple of small notes.",
      time: "Oct 20",
      status: "seen",
    },
  ],
};
