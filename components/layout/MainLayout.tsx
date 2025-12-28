"use client"

import { ReactNode } from "react"
import Sidebar from "./Sidebar"
import TopBar from "./TopBar"
import RightSidebar from "@/components/RightSidebar"

interface MainLayoutProps {
  children: ReactNode
  showRightSidebar?: boolean
}

export default function MainLayout({ children, showRightSidebar = true }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background-dark flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 flex overflow-y-auto">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          {showRightSidebar && <RightSidebar />}
        </div>
      </div>
    </div>
  )
}

