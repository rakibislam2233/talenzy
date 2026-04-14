"use client";

import { useMemo, useState } from "react";
import ChatPane from "./ChatPane";
import ContactList from "./ContactList";
import { activeFilters, contacts, messagesByContact } from "./mock-data";

export default function Messages() {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(1);
  const [searchText, setSearchText] = useState("");
  const [composerText, setComposerText] = useState("");

  const selectedContact = useMemo(
    () => contacts.find((contact) => contact.id === selectedContactId) ?? null,
    [selectedContactId],
  );

  const visibleContacts = contacts.filter((contact) => {
    const query = searchText.trim().toLowerCase();
    if (!query) return true;
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.lastMessage.toLowerCase().includes(query)
    );
  });

  const selectedMessages = selectedContact
    ? messagesByContact[selectedContact.id] ?? []
    : [];

  return (
    <div className="h-full bg-background p-4 sm:p-5">
      <div className="flex h-[calc(100dvh-7.5rem)] w-full overflow-hidden border border-border bg-card/30 shadow-sm rounded-lg">
        <ContactList
          contacts={visibleContacts}
          selectedContactId={selectedContactId}
          searchText={searchText}
          onSearchTextChange={setSearchText}
          onSelectContact={(contactId) => setSelectedContactId(contactId)}
          activeFilters={activeFilters}
        />

        <ChatPane
          selectedContact={selectedContact}
          messages={selectedMessages}
          composerText={composerText}
          onComposerTextChange={setComposerText}
          onBack={() => setSelectedContactId(null)}
        />
      </div>
    </div>
  );
}
