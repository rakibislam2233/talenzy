"use client"

import { Search, Bell, MessageSquare, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TopBar() {
  return (
    <div className="w-full bg-[#221c26] border-b border-[#4a3c53]/30 px-6 py-4 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search talents, jobs, hashtags..."
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 pl-12 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6] w-full"
            />
          </div>
        </div>

        {/* Actions */}
     
      </div>
    </div>
  )
}

