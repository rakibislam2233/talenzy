"use client";

import {
  CheckCheck,
  FileText,
  Image as ImageIcon,
  Info,
  Mic,
  Phone,
  Search,
  Send,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Messages() {
  const contacts = [
    {
      id: 1,
      name: "CreativeAgency",
      avatar: "CA",
      role: "Agency",
      lastMessage: "Can you send the portfolio by 5 PM?",
      time: "Now",
      unread: 1,
      online: true,
      isAgency: true,
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "GuitarMaster",
      avatar: "GM",
      image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=100",
      lastMessage: "That new riff is fire! 🔥",
      time: "2h ago",
      unread: 2,
      online: false,
    },
    {
      id: 3,
      name: "Sarah_S",
      avatar: "SS",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      lastMessage: "Thanks for the gift! 🙌",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      name: "James L.",
      avatar: "JL",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      lastMessage: "Let's discuss the project scope.",
      time: "Oct 24",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Davide R.",
      avatar: "DR",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      lastMessage: "Sent a photo.",
      time: "Oct 20",
      unread: 0,
      online: false,
    },
  ];

  const [selectedContact, setSelectedContact] = useState<number | null>(1); // 1 = CreativeAgency for demo

  return (
    <div className="flex h-[calc(100vh-140px)] sm:h-[calc(100vh-100px)] m-0 sm:m-4 bg-surface-dark sm:rounded-3xl border-0 sm:border border-border-dark/30 overflow-hidden backdrop-blur-md shadow-2xl relative font-outfit">
      {/* Left Sidebar: Chat List */}
      <div
        className={`w-full sm:w-80 border-r border-border-dark/30 flex flex-col bg-surface-dark/50 absolute sm:relative z-20 inset-0 transition-transform duration-300 ${
          selectedContact && "-translate-x-full sm:translate-x-0"
        }`}
      >
        <div className="p-4 sm:p-6 border-b border-border-dark/30">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter italic">
              Inbox<span className="text-primary">.</span>
            </h1>
            <button className="text-primary hover:text-white transition-colors bg-white/5 p-2.5 rounded-xl border border-white/5">
              <PlusIcon />
            </button>
          </div>

          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-background-dark/80 border border-border-dark/30 rounded-2xl h-12 pl-11 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 no-scrollbar">
            {["All Chats", "Unread", "Hiring", "Starred"].map((filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                  i === 0
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-background-dark text-gray-500 border border-border-dark/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar py-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`px-4 sm:px-6 py-4 flex gap-4 hover:bg-white/5 cursor-pointer transition-all relative group ${
                selectedContact === contact.id ? "bg-white/5" : ""
              }`}
            >
              {selectedContact === contact.id && (
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-primary rounded-r-full shadow-[0_0_10px_rgba(148,25,230,0.5)]"></div>
              )}
              <div className="relative">
                <div
                  className={`size-12 sm:size-14 rounded-2xl overflow-hidden flex items-center justify-center border border-border-dark/50 relative ${
                    contact.image ? "" : contact.color || "bg-gray-700"
                  }`}
                >
                  {contact.image ? (
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-white font-black text-lg">
                      {contact.avatar}
                    </span>
                  )}
                </div>
                {contact.online && (
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-surface-dark rounded-full shadow-lg" />
                )}
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-black truncate text-sm sm:text-base uppercase tracking-tight">
                    {contact.name}
                  </h3>
                  <span
                    className={`text-[10px] font-black uppercase tracking-tighter ${
                      contact.unread > 0 ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {contact.time}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm truncate leading-relaxed ${
                    contact.unread > 0
                      ? "text-white/90 font-bold"
                      : "text-gray-500 font-medium"
                  }`}
                >
                  {contact.lastMessage}
                </p>
              </div>
              {contact.unread > 0 && (
                <div className="flex flex-col justify-center">
                  <div className="size-5 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-white text-[10px] font-black">
                      {contact.unread}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane: Chat Window */}
      <div
        className={`flex-1 flex flex-col bg-background-dark/30 relative transition-transform duration-300 ${
          !selectedContact && "translate-x-full sm:translate-x-0"
        }`}
      >
        {/* Detail Header */}
        <div className="h-16 sm:h-20 border-b border-border-dark/30 flex items-center justify-between px-4 sm:px-8 bg-surface-dark/50 backdrop-blur-xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setSelectedContact(null)}
              className="sm:hidden p-2 text-gray-500 hover:text-white"
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="size-10 sm:size-12 rounded-2xl bg-linear-to-br from-green-500 to-green-700 p-px shadow-lg shadow-green-500/10">
              <div className="size-full bg-surface-dark rounded-2xl flex items-center justify-center">
                <span className="text-green-500 font-black text-xs sm:text-sm">
                  CA
                </span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-white font-black text-sm sm:text-lg uppercase tracking-tight truncate">
                  CreativeAgency
                </h2>
                <div className="bg-blue-500 p-0.5 rounded-full shrink-0">
                  <svg
                    className="size-2.5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span>
                <span className="text-[10px] font-bold text-green-500/80 uppercase tracking-widest">
                  Active Now
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 text-gray-500">
            <button className="p-2 sm:p-3 hover:bg-white/5 rounded-xl hover:text-white transition-all">
              <Phone className="h-5 w-5" />
            </button>
            <button className="hidden sm:block p-3 hover:bg-white/5 rounded-xl hover:text-white transition-all">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-2 sm:p-3 hover:bg-white/5 rounded-xl hover:text-white transition-all">
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 no-scrollbar scroll-smooth">
          {/* Message Bubble: Received */}
          <div className="flex justify-start items-end gap-3">
            <div className="size-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <span className="text-purple-500 text-[10px] font-black">AT</span>
            </div>
            <div className="bg-surface-dark/80 rounded-[24px] rounded-bl-none p-4 sm:p-5 max-w-[85%] sm:max-w-[70%] border border-border-dark/30 shadow-2xl">
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                Hi CreativeAgency! I saw your post regarding the Senior Graphic
                Designer position. Is it still open?
              </p>
              <div className="flex items-center justify-end gap-1.5 mt-2">
                <span className="text-gray-600 text-[10px] font-bold uppercase">
                  Yesterday
                </span>
                <CheckCheck className="h-3 w-3 text-primary" />
              </div>
            </div>
          </div>

          {/* Date Divider */}
          <div className="flex justify-center items-center gap-4 my-8">
            <div className="h-px bg-border-dark/30 flex-1"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 bg-surface-dark px-4 py-1.5 rounded-full border border-border-dark/30">
              October 28
            </span>
            <div className="h-px bg-border-dark/30 flex-1"></div>
          </div>

          {/* Message Bubble: Sent with Attachment */}
          <div className="flex justify-end items-end gap-3">
            <div className="bg-surface-dark rounded-[24px] rounded-br-none p-4 sm:p-5 max-w-[85%] sm:max-w-[70%] border border-border-dark/30 shadow-2xl relative">
              <div className="bg-background-dark/50 rounded-2xl p-4 mb-4 flex items-center gap-4 border border-border-dark/50 hover:bg-white/5 cursor-pointer transition-all group overflow-hidden">
                <div className="size-12 bg-red-500/10 rounded-xl flex items-center justify-center shrink-0 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                  <FileText className="h-6 w-6 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-black truncate uppercase tracking-tight">
                    Job_Requirements.pdf
                  </p>
                  <p className="text-gray-500 text-[10px] font-bold">
                    2.4 MB • ADOBE PDF
                  </p>
                </div>
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-white transition-all">
                  <svg
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                Here are the detailed requirements for the Senior Designer role.
                Let me know if you need any adjustments to the scope.
              </p>
              <div className="flex items-center justify-start gap-1.5 mt-2">
                <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  10:30 AM
                </span>
              </div>
            </div>
            <div className="size-8 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
              <span className="text-green-500 text-[10px] font-black">CA</span>
            </div>
          </div>

          {/* Message Bubble: Sent Text */}
          <div className="flex justify-end gap-3 items-end">
            <div className="bg-linear-to-br from-primary to-purple-800 rounded-[24px] rounded-br-none p-4 sm:p-5 max-w-[85%] sm:max-w-[70%] shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-white/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <p className="text-white text-sm sm:text-base leading-relaxed font-bold relative z-10">
                Sure! I&apos;m just polishing the last few slides. It will be
                ready in an hour.
              </p>
              <div className="flex items-center justify-end gap-1.5 mt-2 relative z-10">
                <span className="text-white/60 text-[10px] font-black uppercase">
                  10:40 AM
                </span>
                <CheckCheck className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="size-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary text-[10px] font-black italic">
                AT
              </span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-surface-dark/80 backdrop-blur-3xl border-t border-border-dark/30">
          <div className="flex items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            <button className="group relative">
              <div className="size-10 sm:size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <PlusIcon />
              </div>
            </button>
            <div className="flex-1 relative group">
              <input
                type="text"
                placeholder="Message CreativeAgency..."
                className="w-full bg-background-dark/80 border border-border-dark/50 rounded-2xl h-12 sm:h-14 pl-12 pr-28 text-sm sm:text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-all shadow-inner"
              />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <div className="size-6 rounded-lg border-2 border-gray-600 flex items-center justify-center opacity-60 hover:opacity-100">
                  <span className="text-[10px] font-black leading-none">☺</span>
                </div>
              </button>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-gray-500">
                <button className="hover:text-white transition-colors">
                  <Mic className="h-5 w-5" />
                </button>
                <div className="w-px h-4 bg-border-dark/50"></div>
                <button className="hover:text-white transition-colors">
                  <ImageIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button className="size-12 sm:size-14 bg-primary hover:bg-primary-hover rounded-2xl text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-primary-hover/50">
              <Send className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#2a2330" stroke="#4a3c53" />
      <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
