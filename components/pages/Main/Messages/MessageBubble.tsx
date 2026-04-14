"use client";

import { CheckCheck, FileText, Paperclip } from "lucide-react";
import Image from "next/image";
import { Contact, Message } from "./types";

type MessageBubbleProps = {
  message: Message;
  contact: Contact;
};

export default function MessageBubble({ message, contact }: MessageBubbleProps) {
  const isIncoming = message.type === "incoming";

  return (
    <div className={`flex items-end gap-3 ${isIncoming ? "justify-start" : "justify-end"}`}>
      {isIncoming && (
        <div className="relative size-9 shrink-0 overflow-hidden rounded-2xl border border-border bg-background">
          {contact.avatar ? (
            <Image
              src={contact.avatar}
              alt={contact.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/10 text-[10px] font-semibold text-primary">
              {contact.avatarFallback}
            </div>
          )}
        </div>
      )}

      <div
        className={`max-w-[82%] rounded-[24px] border px-4 py-3 sm:max-w-[68%] ${
          isIncoming
            ? "rounded-bl-md border-border bg-card text-foreground"
            : "rounded-br-md border-primary/20 bg-linear-to-br from-primary to-purple-800 text-primary-foreground"
        }`}
      >
        {message.attachment && (
          <div className="mb-3 flex items-center gap-3 rounded-2xl border border-border/50 bg-background/60 px-3 py-3 text-foreground">
            <div className="flex size-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {message.attachment.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {message.attachment.size} · {message.attachment.kind}
              </p>
            </div>
            <button className="rounded-xl bg-accent p-2 text-muted-foreground transition-colors hover:text-foreground">
              <Paperclip className="h-4 w-4" />
            </button>
          </div>
        )}

        <p className="text-sm leading-relaxed sm:text-[15px]">
          {message.content}
        </p>

        <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-widest">
          <span
            className={
              isIncoming ? "text-muted-foreground" : "text-primary-foreground/70"
            }
          >
            {message.time}
          </span>
          {!isIncoming && <CheckCheck className="h-3.5 w-3.5 text-primary-foreground" />}
        </div>
      </div>

      {!isIncoming && (
        <div className="relative size-9 shrink-0 overflow-hidden rounded-2xl border border-border bg-primary/10">
          <div className="flex h-full items-center justify-center text-[10px] font-semibold text-primary">
            AT
          </div>
        </div>
      )}
    </div>
  );
}
