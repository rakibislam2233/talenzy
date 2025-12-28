"use client";

import CreatePostModal from "@/components/modals/CreatePostModal";
import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  Briefcase,
  Compass,
  Home,
  Info,
  MessageCircle,
  PlusCircle,
  PlusSquare,
  Settings,
  Sparkles,
  User,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const publicNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/discover", icon: Users, label: "Discover User" },
  ];

  const authNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/discover", icon: Users, label: "Discover User" },
    { href: "/hiring", icon: Briefcase, label: "Hiring" },
    { href: "/messages", icon: MessageCircle, label: "Message" },
    { href: "/notifications", icon: Bell, label: "Notification" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Setting" },
  ];

  const currentNavItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <aside className="w-64 h-full flex-col border-r border-border-dark bg-background-dark shrink-0 z-20 hidden md:flex fixed top-0 left-0">
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3 mb-10 cursor-pointer">
            <div className="size-10 rounded-xl bg-linear-to-br from-primary to-purple-400 flex items-center justify-center shadow-glow">
              <Sparkles className="text-white h-6 w-6 fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Talenzy
              </h1>
              <p className="text-text-secondary text-xs font-medium">
                Unleash Your Potential
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto scrollbar-hide">
          {currentNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${
                  active
                    ? "bg-surface-dark text-white  border-border-dark/50 shadow-sm"
                    : "text-text-secondary hover:bg-surface-dark hover:text-white border border-transparent"
                }`}
              >
                <item.icon
                  className={`h-6 w-6 transition-colors ${
                    active ? "text-primary " : ""
                  }`}
                />
                <span
                  className={`text-sm ${
                    active ? "font-semibold" : "font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Create Post Button (Only for Authenticated Users) */}
          <div className="w-full mt-24">
            {isAuthenticated && (
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full bg-linear-to-tl from-primary to-purple-400 flex items-center gap-3 px-5 py-3 rounded-lg cursor-pointer"
              >
                <PlusCircle className="h-6 w-6 transition-colors group-hover:text-primary" />
                <span className="font-semibold">Create Post</span>
              </button>
            )}
          </div>
        </nav>

        {/* Create Post Modal */}
        <CreatePostModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />

        {/* Footer Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="w-full h-10 rounded-lg border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-all"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link href="/auth/register" className="w-full">
                <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-glow transition-all">
                  Sign Up
                </button>
              </Link>
              <Link href="/auth/login" className="w-full">
                <button className="w-full h-10 rounded-lg border border-border-dark hover:bg-surface-dark text-white text-sm font-bold transition-all">
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
