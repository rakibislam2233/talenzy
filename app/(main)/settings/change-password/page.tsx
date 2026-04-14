"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ShieldCheck } from "lucide-react";

export default function ChangePasswordPage() {
  return (
    <div className="mx-auto w-full max-w-3xl p-4 pb-24 pt-6 sm:p-6">
      <section className="rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Security</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">Change Password</h1>
          <p className="mt-1 text-sm text-muted-foreground">Use a strong and unique password to keep your account secure.</p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="rounded-xl border border-border bg-background p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Current Password</p>
            <Input type="password" placeholder="Enter current password" className="h-11" />
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">New Password</p>
            <Input type="password" placeholder="Enter new password" className="h-11" />
          </div>

          <div className="rounded-xl border border-border bg-background p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Confirm Password</p>
            <Input type="password" placeholder="Re-enter new password" className="h-11" />
          </div>

          <div className="rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Password should be at least 8 characters and include letters, numbers, and symbols.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            <Button variant="outline" className="h-11 rounded-lg border-border bg-background text-foreground">Cancel</Button>
            <Button className="h-11 rounded-lg bg-primary text-primary-foreground">
              <Lock className="mr-2 h-4 w-4" />
              Update Password
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
