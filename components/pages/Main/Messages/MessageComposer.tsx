"use client";

import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Mic, Paperclip, Send } from "lucide-react";

type MessageComposerProps = {
  contactName: string;
  value: string;
  onChange: (value: string) => void;
};

export default function MessageComposer({
  contactName,
  value,
  onChange,
}: MessageComposerProps) {
  return (
    <footer className="border-t border-border/60 bg-background/90 px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex items-end gap-3 sm:gap-4">
        <button
          className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          aria-label="Add attachment"
        >
          <Paperclip className="h-5 w-5" />
        </button>

        <div className="relative flex-1">
          <div className="rounded-[22px] border border-border bg-background px-4 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <button
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Emoji"
              >
                <span className="text-base leading-none">☺</span>
              </button>
              <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder={`Message ${contactName}...`}
                className="h-10 flex-1 border-0 bg-transparent px-0 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <button
                  className="rounded-lg p-1.5 transition-colors hover:text-foreground"
                  aria-label="Voice message"
                >
                  <Mic className="h-5 w-5" />
                </button>
                <button
                  className="rounded-lg p-1.5 transition-colors hover:text-foreground"
                  aria-label="Attach image"
                >
                  <ImageIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Button className="h-12 w-12 rounded-2xl bg-primary p-0 text-primary-foreground hover:bg-primary-hover">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}
