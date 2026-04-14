import BrandLogo from "@/components/BrandLogo";
import { CURRENT_USER_SLUG } from "@/components/pages/Main/Profile/mock-data";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { useAuth } from "@/context/AuthContext";
import {
    Bell,
    Bookmark,
    Briefcase,
    Compass,
    Home,
    Info,
    Menu,
    MessageCircle,
    Mic,
    Music,
    Palette,
    PlusSquare,
    Search,
    Settings,
    Sparkles,
    User,
    Users,
    Wallet,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All", icon: null },
  { id: "music", label: "Music", icon: Music },
  { id: "comedy", label: "Comedy", icon: Sparkles },
  { id: "design", label: "Design", icon: Palette },
  { id: "dance", label: "Dance", icon: User },
  { id: "magic", label: "Magic", icon: Sparkles },
  { id: "acting", label: "Acting", icon: Mic },
];

export default function Header() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const isHome = pathname === "/";

  const publicNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/discover", icon: Compass, label: "Discover" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/help", icon: Users, label: "Help" },
  ];

  const authNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/discover", icon: Compass, label: "Discover" },
    { href: "/hiring", icon: Briefcase, label: "Hiring" },
    { href: "/messages", icon: MessageCircle, label: "Messages" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
    { href: `/${CURRENT_USER_SLUG}/saved`, icon: Bookmark, label: "Saved" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: `/${CURRENT_USER_SLUG}`, icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const currentNavItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <header className="bg-background sticky top-0 w-full  border-b border-border z-10">
      <div className="w-full px-4 py-3 flex flex-col gap-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-6 ">
          {/* Center: Search Bar */}
          <div className="w-full flex items-center gap-6 ">
            <Link href={"/"} className="block md:hidden">
              <BrandLogo size={40} withText={false} className="cursor-pointer" />
            </Link>
            <div className="w-full relative flex-1 md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-secondary" />
              </div>
              <input
                className="block w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-full text-sm text-foreground  focus:border-primary transition-all outline-none"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated && (
              <div className="w-full flex gap-2">
                <button
                  className="p-2 text-text-secondary hover:text-foreground transition-colors"
                  aria-label="Upload"
                >
                  <PlusSquare className="size-6" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-foreground transition-colors"
                  aria-label="Messages"
                >
                  <MessageCircle className="size-6" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-foreground transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="size-6" />
                  <span className="absolute top-1.5 right-1.5 size-3 bg-red-500 rounded-full border-2 border-background"></span>
                </button>
                <Link href={`/${CURRENT_USER_SLUG}`}>
                  <div className="size-10 rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="size-10 rounded-full "
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Categories Chips (Only on Home Page - Hidden if Mobile Menu is Open) */}
        {isHome && !isMobileMenuOpen && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-5 py-1.5 cursor-pointer rounded-full text-sm transition-all  flex items-center gap-2 border ${
                  activeCategory === cat.id
                    ? "bg-background text-foreground border-primary "
                    : "bg-surface border-border text-text-secondary  font-medium"
                }`}
              >
                {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full max-h-[calc(100dvh-72px)] overflow-y-auto bg-background border-b border-border py-4 px-4 shadow-xl animate-in slide-in-from-top-2 z-40">
            <nav className="flex flex-col gap-2">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    pathname === item.href
                      ? "bg-surface text-foreground border border-border/50"
                      : "text-text-secondary hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 ${
                      pathname === item.href ? "text-primary" : ""
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      pathname === item.href ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}

              {!isAuthenticated && (
                <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-primary text-foreground py-2 rounded-lg text-center font-bold text-sm"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full border border-border text-foreground py-2 rounded-lg text-center font-bold text-sm hover:bg-surface"
                  >
                    Log In
                  </Link>
                </div>
              )}

              {/* Theme Toggle for Mobile */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-text-secondary text-sm">Theme</span>
                  <ModeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
