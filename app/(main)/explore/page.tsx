import { Music, Smile, Palette, Users, Wand2, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import Post from "@/components/Post"

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "music", label: "Music", icon: Music },
  { id: "comedy", label: "Comedy", icon: Smile },
  { id: "design", label: "Design", icon: Palette },
  { id: "dance", label: "Dance", icon: Users },
  { id: "magic", label: "Magic", icon: Wand2 },
  { id: "acting", label: "Acting", icon: Mic },
]

export default function ExplorePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Category Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = category.id === "all"
          return (
            <Button
              key={category.id}
              className={`rounded-full px-6 h-10 ${
                isActive
                  ? "bg-white text-[#1b1121] hover:bg-gray-100"
                  : "bg-[#221c26] text-gray-400 hover:bg-[#2a2330] hover:text-white border border-[#4a3c53]"
              }`}
            >
              {Icon && <Icon className="h-4 w-4 mr-2" />}
              {category.label}
            </Button>
          )
        })}
      </div>

      {/* Posts Grid */}
      <div className="space-y-6">
        <Post
          id="1"
          username="GuitarHero"
          userAvatar="GH"
          timeAgo="2h ago"
          category="Music"
          caption="Practicing a new solo for the upcoming gig! What do you guys think of this 🔥 #music #rock #guitar"
          hashtags={["#music", "#rock", "#guitar"]}
          mediaType="video"
          likes={1200}
          comments={45}
          views={12500}
          originalAudio="Original Audio"
        />

        <Post
          id="2"
          username="DancePro"
          userAvatar="DP"
          timeAgo="4h ago"
          category="Dance"
          caption="New choreography piece! The energy is everything 💃✨"
          hashtags={["#dance", "#choreography"]}
          mediaType="video"
          likes={850}
          comments={32}
          views={8900}
          originalAudio="Original Audio"
        />

        <Post
          id="3"
          username="DesignMaster"
          userAvatar="DM"
          timeAgo="6h ago"
          category="Design"
          caption="Latest branding project for a tech startup. Thoughts? 🎨"
          hashtags={["#design", "#branding"]}
          mediaType="image"
          likes={2100}
          comments={89}
          originalAudio=""
        />
      </div>
    </div>
  )
}

