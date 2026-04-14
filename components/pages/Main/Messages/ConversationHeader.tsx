"use client";

import { Info, Phone, Video } from "lucide-react";
import Image from "next/image";
import { Contact } from "./types";

type ConversationHeaderProps = {
  contact: Contact;
  onBack: () => void;
};

export default function ConversationHeader({ contact, onBack }: ConversationHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border/60 bg-background/90 px-4 py-4 sm:px-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onBack}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Back to inbox"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative">
          <div className="relative size-11 overflow-hidden rounded-2xl border border-border bg-background sm:size-12">
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

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="truncate text-base font-semibold text-foreground sm:text-lg">
              {contact.name}
            </h2>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-emerald-500">
            <span
              className={`size-2 rounded-full ${
                contact.online ? "bg-emerald-500" : "bg-muted-foreground"
              }`}
            />
            {contact.online ? "Active now" : "Offline"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 text-muted-foreground sm:gap-2">
        <button
          className="rounded-xl p-2 transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Phone call"
        >
          <Phone className="h-5 w-5" />
        </button>
        <button
          className="hidden rounded-xl p-2 transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          aria-label="Video call"
        >
          <Video className="h-5 w-5" />
        </button>
        <button
          className="rounded-xl p-2 transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Chat details"
        >
          <Info className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
