"use client";

import ConversationHeader from "./ConversationHeader";
import EmptyState from "./EmptyState";
import MessageBubble from "./MessageBubble";
import MessageComposer from "./MessageComposer";
import { Contact, Message } from "./types";

type ChatPaneProps = {
  selectedContact: Contact | null;
  messages: Message[];
  composerText: string;
  onComposerTextChange: (value: string) => void;
  onBack: () => void;
};

export default function ChatPane({
  selectedContact,
  messages,
  composerText,
  onComposerTextChange,
  onBack,
}: ChatPaneProps) {
  if (!selectedContact) {
    return <EmptyState />;
  }

  return (
    <main className="flex flex-1 flex-col bg-background/70 backdrop-blur-xl">
      <ConversationHeader contact={selectedContact} onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
        <div className="mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="h-px flex-1 bg-border/70" />
            <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              October 28
            </span>
            <div className="h-px flex-1 bg-border/70" />
          </div>

              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  contact={selectedContact}
                />
              ))}
        </div>
      </div>

      <MessageComposer
        contactName={selectedContact.name}
        value={composerText}
        onChange={onComposerTextChange}
      />
    </main>
  );
}
