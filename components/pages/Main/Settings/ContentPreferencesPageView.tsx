"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";

export default function ContentPreferencesPageView() {
  return (
    <div className="mx-auto max-w-2xl p-4 pb-20 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Content preferences</h1>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Interests</h2>
          </div>
          <div className="divide-y divide-border">
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">Manage interests</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">Topics you follow</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">Topics to avoid</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Muted words</h2>
          </div>
          <div className="divide-y divide-border">
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">Mute words in posts</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">Mute words in comments</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Media preferences</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <h3 className="font-medium text-foreground">Auto-play videos</h3>
              <Checkbox />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <h3 className="font-medium text-foreground">Show muted videos</h3>
              <Checkbox />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <h3 className="font-medium text-foreground">Reduce motion</h3>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Content filters</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <h3 className="font-medium text-foreground">Show sensitive content</h3>
              <Checkbox />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <h3 className="font-medium text-foreground">Show mature content</h3>
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
