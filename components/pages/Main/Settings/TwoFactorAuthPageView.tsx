"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, Key, Mail, ShieldAlert, Smartphone } from "lucide-react";

export default function TwoFactorAuthPageView() {
  return (
    <div className="mx-auto max-w-2xl p-4 pb-20 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Two-factor authentication</h1>
      </div>

      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Authentication methods</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Text message</h3>
                  <p className="text-sm text-muted-foreground">Receive codes via SMS</p>
                </div>
              </div>
              <Checkbox />
            </div>

            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">Receive codes via email</p>
                </div>
              </div>
              <Checkbox />
            </div>

            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Authentication app</h3>
                  <p className="text-sm text-muted-foreground">Use authenticator apps</p>
                </div>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Recovery options</h2>
          </div>
          <div className="divide-y divide-border p-4">
            <div className="mb-4">
              <Label className="text-foreground">Recovery email</Label>
              <div className="mt-1">
                <Input type="email" placeholder="your-email@example.com" className="border-border bg-background text-foreground" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Add an alternate email to recover your account if you lose access.
              </p>
            </div>

            <div className="mt-4">
              <Label className="text-foreground">Backup codes</Label>
              <div className="mt-4 space-y-2">
                <div className="rounded-lg bg-secondary p-3 text-center">
                  <p className="text-sm text-muted-foreground">Click to generate backup codes</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Store these codes securely. Each code can only be used once.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Security settings</h2>
          </div>
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Require authentication</h3>
                <p className="text-sm text-muted-foreground">For sensitive actions</p>
              </div>
              <Checkbox />
            </div>

            <button className="flex w-full items-start justify-between gap-3 p-4 transition-colors hover:bg-accent">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-destructive/10 p-2">
                  <ShieldAlert className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-medium text-destructive">Turn off two-factor authentication</h3>
                  <p className="text-sm text-destructive">Your account will be less secure</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
