"use client";
import BrandLogo from "@/components/BrandLogo";
import CreatePostModal from "@/components/modals/CreatePostModal";
import { CURRENT_USER_SLUG } from "@/components/pages/Main/Profile/mock-data";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
    Bell,
    Briefcase,
    Home,
    Info,
    LogIn,
    LogOut,
    MessageCircle,
    Palette,
    PlusCircle,
    Settings,
    User,
    UserPlus,
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
    { href: "/discover", icon: Users, label: "Discover" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/help", icon: Info, label: "Help" },
  ];

  const authNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/discover", icon: Users, label: "Discover" },
    { href: "/hiring", icon: Briefcase, label: "Hiring" },
    { href: "/messages", icon: MessageCircle, label: "Messages" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: `/${CURRENT_USER_SLUG}`, icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const currentNavItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <aside className="w-64 h-dvh flex-col border-r border-border bg-background shrink-0 z-20 hidden md:flex fixed top-0 left-0">
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <Link href={"/"}>
          <BrandLogo className="mb-10 cursor-pointer" showTagline />
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
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-linear-to-r from-primary to-purple-600  text-primary-foreground font-bold rounded-xl shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
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
        <div className="flex flex-col gap-3 mt-auto pt-3 border-t border-border/60">
          <div className="w-full rounded-xl border border-border bg-muted/20 px-3 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
              <Palette className="h-4 w-4 text-primary" />
              Theme
            </div>
            <ModeToggle />
          </div>

          {isAuthenticated ? (
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={logout}
              className="w-full h-11 justify-center gap-2 rounded-xl border-border text-foreground font-semibold"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          ) : (
            <>
              <Link href="/auth/register" className="w-full">
                <Button className="w-full h-11 rounded-xl font-semibold gap-2">
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </Link>
              <Link href="/auth/login" className="w-full">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 rounded-xl border-border font-semibold gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Log In
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;