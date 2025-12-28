"use client"

import { X, Pen, Type, Smile, Music, Sparkles, Download, Lock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CreateStoryPage() {
  const [selectedTool, setSelectedTool] = useState("draw")
  const [brushSize, setBrushSize] = useState(12)
  const [brushType, setBrushType] = useState("marker")
  const [selectedColor, setSelectedColor] = useState("purple")
  const [showDrawTools, setShowDrawTools] = useState(true)

  const colors = [
    { name: "white", value: "white" },
    { name: "black", value: "black" },
    { name: "red", value: "red" },
    { name: "green", value: "green" },
    { name: "blue", value: "blue" },
    { name: "yellow", value: "yellow" },
    { name: "purple", value: "#9419e6" },
  ]

  const tools = [
    { id: "draw", icon: Pen, label: "Draw" },
    { id: "text", icon: Type, label: "Text" },
    { id: "stickers", icon: Smile, label: "Stickers" },
    { id: "music", icon: Music, label: "Music" },
    { id: "effects", icon: Sparkles, label: "Effects" },
  ]

  return (
    <div className="h-screen bg-[#1b1121] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#4a3c53]/30">
        <h1 className="text-xl font-bold text-white">Create Story</h1>
        <div className="flex items-center gap-3">
          <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-9 px-4 text-sm font-semibold flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Subscribers Only
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-20 bg-[#221c26] border-r border-[#4a3c53]/30 flex flex-col items-center py-4 gap-4">
          <Button
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
          >
            <X className="h-6 w-6" />
          </Button>
          {tools.map((tool) => {
            const Icon = tool.icon
            const isActive = selectedTool === tool.id
            return (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool.id)
                  if (tool.id === "draw") {
                    setShowDrawTools(true)
                  }
                }}
                className={`p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#9419e6] text-white"
                    : "text-gray-400 hover:bg-[#2a2330] hover:text-white"
                }`}
                title={tool.label}
              >
                <Icon className="h-6 w-6" />
              </button>
            )
          })}
        </div>

        {/* Draw Tools Panel */}
        {showDrawTools && selectedTool === "draw" && (
          <div className="w-80 bg-[#2a2330] border-r border-[#4a3c53]/30 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold">DRAW TOOLS</h2>
              <Button
                variant="ghost"
                onClick={() => setShowDrawTools(false)}
                className="text-gray-400 hover:text-white hover:bg-transparent p-0 h-auto"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Brush Size */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 block">Brush Size</label>
              <input
                type="range"
                min="1"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-full h-2 bg-[#221c26] rounded-lg appearance-none cursor-pointer accent-[#9419e6]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1px</span>
                <span className="text-[#9419e6] font-semibold">{brushSize}px</span>
                <span>50px</span>
              </div>
            </div>

            {/* Brush Type */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-3 block">Brush Type</label>
              <div className="space-y-2">
                {["Marker", "Neon", "Chalk"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setBrushType(type.toLowerCase())}
                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      brushType === type.toLowerCase()
                        ? "bg-[#9419e6] text-white"
                        : "bg-[#221c26] text-gray-400 hover:bg-[#332840] hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <label className="text-white text-sm font-medium mb-3 block">Palette</label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-white scale-110"
                        : "border-[#4a3c53] hover:border-gray-500"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
                <button className="w-10 h-10 rounded-lg border-2 border-[#4a3c53] bg-[#221c26] flex items-center justify-center text-gray-400 hover:border-gray-500 hover:text-white">
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center bg-[#1b1121] relative">
          <div className="relative w-full max-w-md aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
            
            {/* Stickers/Overlays */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded">
              <span className="text-black font-bold text-sm">NEW LOOK!</span>
            </div>
            
            {/* Drawn line example */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 50 100 Q 150 50 250 120"
                stroke={selectedColor}
                strokeWidth={brushSize}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Location sticker */}
            <div className="absolute bottom-20 left-4 bg-black/80 px-3 py-2 rounded flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              <span className="text-white text-xs">New York City</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Undo/Redo */}
        <div className="w-20 bg-[#221c26] border-l border-[#4a3c53]/30 flex flex-col items-center py-4 gap-4">
          <Button
            variant="ghost"
            className="w-12 h-12 rounded-full bg-[#2a2330] text-gray-400 hover:text-white hover:bg-[#332840]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            className="w-12 h-12 rounded-full bg-[#2a2330] text-gray-400 hover:text-white hover:bg-[#332840]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-[#4a3c53]/30">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Save
          </Button>
          <span className="text-gray-400 text-sm">Drafts</span>
        </div>
        <div className="flex items-center gap-2 text-green-500 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Saved 2s ago</span>
        </div>
        <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-6 font-semibold flex items-center gap-2">
          Share to Story
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

