"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";

export default function PrivacySafetyPageView() {
  return (
    <div className="mx-auto max-w-2xl p-4 pb-20 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Privacy and safety</h1>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Account privacy</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Private account</h3>
                <p className="text-sm text-muted-foreground">
                  When your account is private, only people you approve can see your photos and videos.
                </p>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Comments</h2>
          </div>
          <div className="divide-y divide-border">
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <div>
                <h3 className="font-medium text-foreground">Comment filtering</h3>
                <p className="text-sm text-muted-foreground">Hide offensive comments</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <div>
                <h3 className="font-medium text-foreground">Manual approval</h3>
                <p className="text-sm text-muted-foreground">Review all comments before they appear</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Hide comments</h3>
                <p className="text-sm text-muted-foreground">Turn off comments from everyone</p>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Tags and mentions</h2>
          </div>
          <div className="divide-y divide-border">
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <div>
                <h3 className="font-medium text-foreground">Photo tags</h3>
                <p className="text-sm text-muted-foreground">Who can tag you in photos</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <div>
                <h3 className="font-medium text-foreground">Mentions</h3>
                <p className="text-sm text-muted-foreground">Who can mention you</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Discovery</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Allow appearing in search results</h3>
                <p className="text-sm text-muted-foreground">Let other accounts find and tag you</p>
              </div>
              <Checkbox />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Suggested for follow</h3>
                <p className="text-sm text-muted-foreground">Appear in suggested users</p>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Blocked accounts</h2>
          </div>
          <div className="divide-y divide-border">
            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <span className="font-medium text-foreground">See all blocked accounts</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
