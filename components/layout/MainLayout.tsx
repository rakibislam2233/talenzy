"use client";

import RightSidebar from "@/components/RightSidebar";
import HeaderCategories from "@/components/pages/Main/HeaderCategories";
import { usePathname } from "next/navigation";
import Header from "../pages/Main/Header";
import MobileBottomNav from "../pages/Main/MobileBottomNav";
import Sidebar from "../pages/Main/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Hide right sidebar on specific full-width or focused pages
  const hideRightSidebar =
    pathname.includes("/messages") ||
    pathname.includes("/settings") ||
    pathname.includes("/auth");

  return (
    <div className="flex min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-primary-foreground overflow-hidden md:pl-64">
      <Sidebar />
      <MobileBottomNav />
      <main className="relative flex h-dvh w-full flex-1 flex-col overflow-hidden group/main">
        {/* Sticky Header */}
        <Header />
        <HeaderCategories />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth pb-20 md:pb-0">
          {children}
        </div>
      </main>

      {!hideRightSidebar && (
        <div className="sticky top-0 hidden h-dvh w-80 border-l border-border-dark bg-background-dark xl:block">
          <RightSidebar />
        </div>
      )}
    </div>
  );
}
