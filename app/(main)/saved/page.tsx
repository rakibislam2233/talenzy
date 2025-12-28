import { Bookmark, Play, Lock } from "lucide-react"

export default function SavedPage() {
  const savedItems = [
    { id: 1, type: "video", title: "Guitar Tutorial", thumbnail: "GM", pinned: false },
    { id: 2, type: "image", title: "Design Inspiration", thumbnail: "DI", pinned: false },
    { id: 3, type: "video", title: "Dance Performance", thumbnail: "DP", pinned: true },
    { id: 4, type: "image", title: "Art Collection", thumbnail: "AC", pinned: false },
    { id: 5, type: "video", title: "Music Production", thumbnail: "MP", locked: true },
    { id: 6, type: "image", title: "Branding Guide", thumbnail: "BG", pinned: false },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bookmark className="h-6 w-6 text-[#9419e6]" />
        <h1 className="text-2xl font-bold text-white">Saved Posts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#221c26] rounded-2xl overflow-hidden border border-[#4a3c53]/30 hover:border-[#9419e6]/50 transition-colors cursor-pointer group"
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#9419e6]/20 to-[#7a14c4]/20">
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              )}
              {item.pinned && (
                <div className="absolute top-3 left-3 bg-[#9419e6] text-white text-xs font-semibold px-2 py-1 rounded">
                  PINNED
                </div>
              )}
              {item.locked && (
                <div className="absolute top-3 right-3 bg-[#2a2330] text-white p-2 rounded-full">
                  <Lock className="h-4 w-4" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">Saved 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

