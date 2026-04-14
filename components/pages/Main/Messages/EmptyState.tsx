"use client";

export default function EmptyState() {
  return (
    <main className="hidden flex-1 flex-col bg-background/70 backdrop-blur-xl md:flex">
      <div className="flex h-full items-center justify-center p-8 text-center">
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold text-foreground">
            Select a conversation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Open any chat from the inbox to start messaging.
          </p>
        </div>
      </div>
    </main>
  );
}
