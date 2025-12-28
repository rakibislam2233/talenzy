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
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/discover", icon: Users, label: "Discover User" },
  ];

  const authNavItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/explore", icon: Compass, label: "Explore" },
    { href: "/hiring", icon: Briefcase, label: "Hiring" },
    { href: "/messages", icon: MessageCircle, label: "Message" },
    { href: "/notifications", icon: Bell, label: "Notification" },
    { href: "/saved", icon: Bookmark, label: "Saved" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/settings", icon: Settings, label: "Setting" },
  ];

  const currentNavItems = isAuthenticated ? authNavItems : publicNavItems;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-6">
          {/* Logo - Visible on Mobile (Left) AND Desktop (if not Home) */}
          <Link
            href="/"
            className={`flex items-center gap-2 shrink-0 ${
              isHome ? "md:hidden" : "flex"
            }`}
          >
            <div className="size-8 rounded-lg bg-linear-to-br from-primary to-purple-400 flex items-center justify-center shadow-glow">
              <Sparkles className="text-white h-5 w-5 fill-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
              Talenzy
            </span>
          </Link>

          {/* Center: Search Bar */}
          <div
            className={`relative flex-1 ${
              isHome ? "max-w-xl md:ml-0" : "max-w-md mx-auto"
            }`}
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-text-secondary" />
            </div>
            <input
              className="block w-full pl-10 pr-4 py-2 bg-surface-dark border border-border-dark rounded-full text-sm text-white placeholder-text-secondary focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
              placeholder="Search..."
              type="text"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
            {!isHome && isAuthenticated ? (
              <>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Upload"
                >
                  <PlusSquare className="h-5 w-5" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors"
                  aria-label="Messages"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
                <button
                  className="p-2 text-text-secondary hover:text-white transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
                </button>
                <Link href="/profile" className="ml-2">
                  <div className="size-8 rounded-full bg-surface-dark border border-border-dark overflow-hidden cursor-pointer hover:border-primary transition-colors">
                    <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-500"></div>
                  </div>
                </Link>
              </>
            ) : !isHome && !isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className="text-sm font-semibold text-white hover:text-primary transition-colors px-3 py-1.5"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/register"
                  className="text-sm font-bold bg-white text-primary hover:bg-gray-100 px-4 py-1.5 rounded-full transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              // Home Page Right Side (Default)
              <div className="flex items-center gap-4">
                <button className="p-2 text-text-secondary hover:text-white transition-colors relative group">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
                </button>
                <div className="size-8 rounded-full bg-surface-dark border border-border-dark overflow-hidden cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-500"></div>
                </div>
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
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-white text-background-dark font-bold shadow-sm"
                    : "bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-primary/50 font-medium"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-border-dark py-4 px-4 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    pathname === item.href
                      ? "bg-surface-dark text-white border border-border-dark/50"
                      : "text-text-secondary hover:bg-surface-dark hover:text-white"
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
                <div className="mt-4 pt-4 border-t border-border-dark flex flex-col gap-3">
                  <Link
                    href="/auth/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-primary text-white py-2 rounded-lg text-center font-bold text-sm"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full border border-border-dark text-white py-2 rounded-lg text-center font-bold text-sm hover:bg-surface-dark"
                  >
                    Log In
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
