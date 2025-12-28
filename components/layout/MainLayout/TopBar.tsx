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
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-[#9419e6] hover:bg-[#a824f0] border-[#9419e6] text-white rounded-lg h-10 px-4"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#9419e6] rounded-full"></span>
          </Button>
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#9419e6] transition-all">
            <span className="text-white font-semibold text-sm">AT</span>
          </div>
        </div>
      </div>
    </div>
  )
}

