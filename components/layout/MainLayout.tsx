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
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative group/main w-full">
        {/* Sticky Header */}
        <Header />
        <HeaderCategories />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth pb-20 md:pb-0">
          {children}
        </div>
      </main>

      {!hideRightSidebar && (
        <div className="hidden xl:block w-80 border-l border-border-dark bg-background-dark h-screen sticky top-0">
          <RightSidebar />
        </div>
      )}
    </div>
  );
}
