import { CURRENT_USER_SLUG } from "@/components/pages/Main/Profile/mock-data"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, Lock, Music, Pencil, Play, Share2, Trash2 } from "lucide-react"
import Link from "next/link"

export default function SavedCollectionPage({ params }: { params: { collectionId: string } }) {
  const collectionItems = [
    { id: 1, type: "video", title: "Monologue Practice", username: "@sarah_actor", time: "2 days ago", duration: "01:24" },
    { id: 2, type: "video", title: "Contemporary Improvisation", username: "@dance_mike", time: "3 days ago", hiring: true },
    { id: 3, type: "video", title: "Stage Makeup Tutorial", username: "@mua_jess", time: "4 days ago" },
    { id: 4, type: "video", title: "Audience Reaction", username: "@theater_daily", time: "5 days ago" },
    { id: 5, type: "image", title: "Vintage Costume Ideas", username: "@designer_pro", time: "1 week ago" },
    { id: 6, type: "image", title: "Mood Lighting Refs", username: "@cinematog_life", time: "1 week ago" },
    { id: 7, type: "text", title: "Quote to remember", username: "@meisner_fan", time: "1 week ago", quote: "Acting is behaving truthfully under imaginary circumstances." },
    { id: 8, type: "audio", title: "Vocal Warmups Part 2", username: "@singer_coach", time: "2 weeks ago" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href={`/${CURRENT_USER_SLUG}`} className="hover:text-white">Profile</Link>
        <span>/</span>
        <Link href="/saved" className="hover:text-white">Saved</Link>
        <span>/</span>
        <span className="text-white">Audition Inspiration</span>
      </div>

      {/* Collection Header */}
      <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-48 h-64 bg-linear-to-br from-gray-800 to-gray-900 rounded-xl shrink-0"></div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Audition Inspiration</h1>
                <p className="text-gray-300 mb-4">
                  Curated clips, monologues, and outfit ideas for the upcoming pilot season auditions. Focus on dramatic
                  range and contemporary styling.
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    <span>24 Items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span>Private Collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Created Oct 12, 2023</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-4"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#2a2330] border-[#4a3c53] text-red-400 hover:bg-red-500/10 rounded-lg h-10 px-4"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {["All", "Videos", "Images", "Audio"].map((filter, index) => (
            <Button
              key={filter}
              className={`rounded-full px-6 h-10 ${
                index === 0
                  ? "bg-white text-[#1b1121] hover:bg-gray-100"
                  : "bg-[#221c26] text-gray-400 hover:bg-[#2a2330] hover:text-white border border-[#4a3c53]"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        <select className="bg-[#221c26] border border-[#4a3c53] text-white rounded-lg h-10 px-4 focus:border-[#9419e6] focus:ring-[#9419e6]">
          <option>Sort by: Date Added</option>
          <option>Sort by: Name</option>
          <option>Sort by: Type</option>
        </select>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {collectionItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#221c26] rounded-xl overflow-hidden border border-[#4a3c53]/30 hover:border-[#9419e6]/50 transition-colors cursor-pointer group"
          >
            <div className="relative aspect-square bg-linear-to-br from-[#9419e6]/20 to-[#7a14c4]/20">
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
              )}
              {item.type === "image" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-gray-500" />
                </div>
              )}
              {item.type === "audio" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="h-12 w-12 text-gray-500" />
                </div>
              )}
              {item.type === "text" && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-linear-to-br from-[#9419e6] to-[#7a14c4] rounded-lg p-4 w-full h-full flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center">"{item.quote}"</p>
                  </div>
                </div>
              )}
              {item.hiring && (
                <div className="absolute top-2 left-2 px-2 py-1 bg-[#9419e6] text-white text-xs font-semibold rounded">
                  OPEN FOR HIRE
                </div>
              )}
              {item.duration && (
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                  {item.duration}
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-white font-semibold text-sm mb-1 truncate">{item.title}</h3>
              <p className="text-gray-400 text-xs truncate">
                {item.username} • {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


