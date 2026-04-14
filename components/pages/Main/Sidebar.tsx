"use client";
import CreatePostModal from "@/components/modals/CreatePostModal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  Briefcase,
  Compass,
  Home,
  Info,
  MessageCircle,
  PlusCircle,
  Settings,
  Sparkles,
  User,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar =() => {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const publicNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/discover-people", icon: Users, label: "Discover People" },
  ];

  const authNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/discover-people", icon: Users, label: "Discover People" },
    { href: "/hiring", icon: Briefcase, label: "Hiring" },
    { href: "/messages", icon: MessageCircle, label: "Message" },
    { href: "/notifications", icon: Bell, label: "Notification" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Setting" },
  ];

  const currentNavItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <aside className="w-64 h-full flex-col border-r border-border bg-background shrink-0 z-20 hidden md:flex fixed top-0 left-0">
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3 mb-10 cursor-pointer">
            <div className="size-10 rounded-xl bg-linear-to-br from-primary to-purple-400 flex items-center justify-center shadow-glow">
              <Sparkles className="text-primary-foreground h-6 w-6 fill-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Talenzy
              </h1>
              <p className="text-muted-foreground text-xs font-medium">
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
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl   to-transparent border-l-4  text-foreground group transition-all ${
                  active
                    ? "bg-accent text-foreground  border-primary shadow-sm"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground border-transparent"
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
          <div className="w-full mt-16">
            {isAuthenticated && (
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-purple-600  text-primary-foreground font-bold rounded-xl shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
              >
                <PlusCircle className="h-6 w-6 transition-colors group-hover:text-primary" />
                Create Post
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
          {/* Theme Toggle */}
          <div className="w-full h-10 rounded-xl bg-surface-dark border border-border flex items-center justify-center hover:bg-accent transition-colors duration-200">
            <ThemeToggle />
          </div>
          
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="w-full h-10 rounded-lg border border-border hover:bg-accent text-foreground text-sm font-bold transition-all"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link href="/auth/register" className="w-full">
                <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold shadow-glow transition-all cursor-pointer">
                  Sign Up
                </button>
              </Link>
              <Link href="/auth/login" className="w-full">
                <button className="w-full h-10 rounded-lg border border-border hover:bg-accent text-foreground text-sm font-bold transition-all cursor-pointer">
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

export default Sidebar;