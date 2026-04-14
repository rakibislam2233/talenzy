"use client";

import CreatePostModal from "@/components/modals/CreatePostModal";
import { CURRENT_USER_SLUG } from "@/components/pages/Main/Profile/mock-data";
import { useAuth } from "@/context/AuthContext";
import { Bell, Compass, Home, Info, Plus, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border flex items-center justify-between px-3 sm:px-6 z-40 pb-safe">
        {/* Original Left Side */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 ${
            isActive("/") ? "text-primary" : "text-gray-400"
          }`}
        >
          <Home className={`h-6 w-6 ${isActive("/") ? "fill-current" : ""}`} />
        </Link>

        <Link
          href="/discover"
          className={`flex flex-col items-center gap-1 ${
            isActive("/discover") ? "text-primary" : "text-gray-400"
          }`}
        >
          <Compass
            className={`h-6 w-6 ${isActive("/discover") ? "fill-current" : ""}`}
          />
        </Link>

        {/* Center Create Button */}
        <div className="relative -top-4 sm:-top-5">
          {isAuthenticated ? (
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-r from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background active:scale-95 transition-transform"
            >
              <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </button>
          ) : (
            <Link
              href="/auth/login"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-r from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background"
            >
              <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </Link>
          )}
        </div>

        {/* Right Side */}
        {isAuthenticated ? (
          <>
            <Link
              href="/notifications"
              className={`flex flex-col items-center gap-1 ${
                isActive("/notifications") ? "text-primary" : "text-gray-400"
              }`}
            >
              <Bell
                className={`h-6 w-6 ${
                  isActive("/notifications") ? "fill-current" : ""
                }`}
              />
            </Link>
            <Link
              href={`/${CURRENT_USER_SLUG}`}
              className={`flex flex-col items-center gap-1 ${
                isActive(`/${CURRENT_USER_SLUG}`)
                  ? "text-primary"
                  : "text-gray-400"
              }`}
            >
              <User
                className={`h-6 w-6 ${
                  isActive(`/${CURRENT_USER_SLUG}`) ? "fill-current" : ""
                }`}
              />
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/help"
              className={`flex flex-col items-center gap-1 ${
                isActive("/help") ? "text-primary" : "text-gray-400"
              }`}
            >
              <Info
                className={`h-6 w-6 ${isActive("/help") ? "fill-current" : ""}`}
              />
            </Link>
            <Link
              href="/auth/login"
              className={`flex flex-col items-center gap-1 ${
                isActive("/auth/login") ? "text-primary" : "text-gray-400"
              }`}
            >
              <User
                className={`h-6 w-6 ${
                  isActive("/auth/login") ? "fill-current" : ""
                }`}
              />
            </Link>
          </>
        )}
      </div>

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}
