"use client";
import CreatePostModal from "@/components/modals/CreatePostModal";
import { useAuth } from "@/context/AuthContext";
import {
  Bell,
  Briefcase,
  Compass,
  Home,
  Info,
  LucideIcon,
  MessageCircle,
  PlusCircle,
  Settings,
  Sparkles,
  User,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SubItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
  subItems?: SubItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isAuthenticated, logout } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const publicNavItems: NavItem[] = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/discover-people", icon: Users, label: "Discover People" },
  ];

  const authNavItems: NavItem[] = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/discover-people", icon: Users, label: "Discover People" },
    {
      href: "/hiring",
      icon: Briefcase,
      label: "Hiring",
      subItems: [
        { href: "/hiring?tab=my-requests", label: "My Hire Request" },
        { href: "/hiring?tab=hired-me", label: "Who Hired Me" },
      ],
    },
    { href: "/messages", icon: MessageCircle, label: "Message" },
    { href: "/notifications", icon: Bell, label: "Notification" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Setting" },
  ];

  const currentNavItems: NavItem[] = isAuthenticated
    ? authNavItems
    : publicNavItems;

  return (
    <aside className="w-64 h-full flex-col border-r border-border-dark bg-background-dark shrink-0 hidden md:flex fixed top-0 left-0">
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
          {currentNavItems.map((item: NavItem) => {
            const active = isActive(item.href);

            return (
              <div key={item.label} className="relative group/nav">
                <Link
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border-l-[6px] text-white group transition-all ${
                    active
                      ? "bg-surface-dark text-white border-primary shadow-sm"
                      : "text-text-secondary hover:bg-surface-dark hover:text-white border-transparent"
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

                {/* Sub Items Dropdown on Hover */}
                {item.subItems && item.subItems.length > 0 && (
                  <div className="hidden group-hover/nav:flex flex-col gap-1 ml-10 mt-1 animate-in slide-in-from-top-1 duration-200">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`text-xs px-4 py-2 rounded-lg transition-all ${
                          pathname === subItem.href ||
                          (pathname === "/hiring" &&
                            searchParams.get("tab") ===
                              subItem.href.split("=")[1])
                            ? "text-primary font-bold bg-primary/5"
                            : "text-text-secondary hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Create Post Button (Only for Authenticated Users) */}
          <div className="w-full mt-16">
            {isAuthenticated && (
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-linear-to-r from-primary to-purple-600  text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
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
