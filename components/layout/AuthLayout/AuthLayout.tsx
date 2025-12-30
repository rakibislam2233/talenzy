"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  variant?: "split" | "centered";
  sideContent?: ReactNode;
}

export default function AuthLayout({
  children,
  variant = "centered",
  sideContent,
}: AuthLayoutProps) {
  if (variant === "split") {
    return (
      <div className="min-h-screen flex bg-background-dark">
        {/* Left Side - Brand/Marketing */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#3a0d5c]">
          {/* Background effects */}
          <div className="absolute inset-0 bg-linear-to-br from-[#5a108f] to-[#2d0845] opacity-90" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9d4edd] rounded-full blur-[128px] opacity-40" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#b5179e] rounded-full blur-[96px] opacity-30" />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col p-12 justify-between">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                  <span className="text-white text-xl">✨</span>
                </div>
                <span className="text-white text-2xl font-bold tracking-tight">
                  Talenzy
                </span>
              </Link>
              <ModeToggle />
            </div>

            <div className="mb-12">{sideContent}</div>

            <div className="text-white/40 text-sm">
              © 2024 Talenzy. All rights reserved.
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-background-dark">
          <div className="w-full max-w-md">
            {/* Mobile Logo (only visible on small screens) */}
            <div className="lg:hidden mb-8 text-center">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-primary text-xl">✨</span>
                </div>
                <span className="text-white text-2xl font-bold">Talenzy</span>
              </Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Centered Variant (Forgot Password, Verify, Reset)
  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      <header className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3a0d5c] rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">✨</span>{" "}
            {/* Replaced T with sparkle/icon as per image */}
          </div>
          <span className="text-white text-xl font-bold">Talenzy</span>
        </Link>
        <ModeToggle />
      </header>

      <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[480px] relative z-10">
          {children}

          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2024 Talenzy. Secure Verification System.
          </div>
        </div>
      </div>
    </div>
  );
}
