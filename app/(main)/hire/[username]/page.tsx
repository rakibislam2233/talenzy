"use client"

import { useParams } from "next/navigation"
import { X, CheckCircle2, Star, Calendar, Upload, ToggleLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function HirePage() {
  const params = useParams()
  const username = params?.username as string

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#221c26] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#4a3c53]/30">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#4a3c53]/30">
          <h2 className="text-2xl font-bold text-white">Hire @{username || "SarahJones"}</h2>
          <Link href="/hiring">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
            >
              <X className="h-6 w-6" />
            </Button>
          </Link>
        </div>

        {/* Talent Info */}
        <div className="p-6 border-b border-[#4a3c53]/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                <span className="text-white font-bold text-xl">SJ</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#221c26]"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">Sarah Jones</h3>
                <span className="px-2 py-1 bg-[#9419e6]/20 text-[#9419e6] text-xs font-semibold rounded">
                  PRO
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">Video Editor</p>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white text-sm font-medium">4.9 (124 Reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1">Starting at</p>
              <p className="text-2xl font-bold text-white">$50/hr</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Project Description */}
          <div>
            <Label className="text-white mb-2">What do you need done?</Label>
            <Textarea
              placeholder="Describe your project goals, style preferences, and any specific requirements for the video edit..."
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 min-h-32 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
            <p className="text-gray-400 text-xs mt-1 text-right">0/500</p>
          </div>

          {/* Project Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-white mb-2">Start</Label>
              <div className="relative">
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  defaultValue="Oct 24"
                  className="bg-[#2a2330] border-[#4a3c53] text-white pl-4 pr-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
            </div>
            <div>
              <Label className="text-white mb-2">End</Label>
              <div className="relative">
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  defaultValue="Nov 01"
                  className="bg-[#2a2330] border-[#4a3c53] text-white pl-4 pr-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div>
            <Label className="text-white mb-2">Your Budget</Label>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <Input
                  type="text"
                  placeholder="FIXED"
                  className="bg-[#2a2330] border-[#4a3c53] text-white pl-8 pr-4 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-gray-400 text-sm">Allow Bidding</Label>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="w-10 h-6 rounded-full appearance-none bg-[#4a3c53] checked:bg-[#9419e6] transition-colors"
                  />
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                </div>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-white mb-2">Additional Files (Optional)</Label>
            <div className="border-2 border-dashed border-[#4a3c53] rounded-lg p-12 text-center hover:border-[#9419e6] transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#9419e6]/20 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-[#9419e6]" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-gray-400 text-sm">MP4, PNG, JPG or PDF (max. 20MB)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="agreement"
              className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6] mt-1"
            />
            <Label
              htmlFor="agreement"
              className="text-gray-400 text-sm cursor-pointer"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-[#9419e6] hover:underline">
                Terms of Service
              </Link>{" "}
              and Talent Agreement.
            </Label>
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 font-semibold flex items-center justify-center gap-2">
            Send Hiring Request
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

