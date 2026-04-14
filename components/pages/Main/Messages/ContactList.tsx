"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { Contact } from "./types";

type ContactListProps = {
  contacts: Contact[];
  selectedContactId: number | null;
  searchText: string;
  onSearchTextChange: (value: string) => void;
  onSelectContact: (contactId: number) => void;
  activeFilters: string[];
};

export default function ContactList({
  contacts,
  selectedContactId,
  searchText,
  onSearchTextChange,
  onSelectContact,
  activeFilters,
}: ContactListProps) {
  return (
    <aside
      className={`flex w-full flex-col border-r border-border/60 bg-background/90 backdrop-blur-xl md:w-[22rem] lg:w-[24rem] ${
        selectedContactId ? "hidden md:flex" : "flex"
      }`}
    >
      <div className="border-b border-border/60 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Messages
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              Inbox
            </h1>
          </div>
          <div className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            {contacts.length} chats
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchText}
            onChange={(e) => onSearchTextChange(e.target.value)}
            placeholder="Search conversations..."
            className="h-11 rounded-xl border-border bg-background pl-10 pr-4"
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {activeFilters.map((filter, index) => (
            <button
              key={filter}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                index === 0
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {contacts.map((contact) => {
          const isActive = selectedContactId === contact.id;

          return (
            <button
              key={contact.id}
              onClick={() => onSelectContact(contact.id)}
              className={`relative flex w-full items-start gap-4 rounded-2xl px-4 py-4 text-left transition-colors ${
                isActive ? "bg-accent" : "hover:bg-accent/60"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-primary" />
              )}

              <div className="relative shrink-0">
                <div className="relative size-11 overflow-hidden rounded-2xl border border-border bg-background">
                  {contact.avatar ? (
                    <Image
                      src={contact.avatar}
                      alt={contact.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-primary/10 text-sm font-semibold text-primary">
                      {contact.avatarFallback}
                    </div>
                  )}
                </div>
                {contact.online && (
                  <span className="absolute -bottom-1 -right-1 size-3 rounded-full border-2 border-background bg-emerald-500" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {contact.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      Direct conversation
                    </p>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    {contact.time}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <p
                    className={`truncate text-xs ${
                      contact.unread ? "font-medium text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
