import { Search, MapPin, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function HiringPage() {
  return (
    <div className="flex h-full">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-[#221c26] border-r border-[#4a3c53]/30 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold text-lg">Filters</h2>
          <button className="text-[#9419e6] text-sm hover:underline">Reset</button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {["Music & Audio", "Dance & Performance", "Visual Arts", "Tech & Development", "Lifestyle & Model"].map(
              (category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    className="border-[#4a3c53] data-[state=checked]:bg-[#9419e6] data-[state=checked]:border-[#9419e6]"
                  />
                  <Label
                    htmlFor={category}
                    className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors"
                  >
                    {category}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Price Range / Hr</h3>
          <div className="relative">
            <input
              type="range"
              min="10"
              max="500"
              defaultValue="150"
              className="w-full h-2 bg-[#2a2330] rounded-lg appearance-none cursor-pointer accent-[#9419e6]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$10</span>
              <span className="text-[#9419e6] font-semibold">$150/hr</span>
              <span>$500+</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Rating</h3>
          <div className="space-y-2">
            {[
              { stars: "★★★★★", label: "5 Stars" },
              { stars: "★★★★ & Up", label: "4 Stars & Up" },
            ].map((rating, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  id={`rating-${index}`}
                  defaultChecked={index === 0}
                  className="w-4 h-4 accent-[#9419e6]"
                />
                <Label
                  htmlFor={`rating-${index}`}
                  className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors"
                >
                  {rating.stars}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Location</h3>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="City or Country"
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 pl-10 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="text-white font-medium mb-3">Availability</h3>
          <select className="w-full bg-[#2a2330] border border-[#4a3c53] text-white rounded-lg h-10 px-3 focus:border-[#9419e6] focus:ring-[#9419e6]">
            <option>Anytime</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        {/* Verified Only */}
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="verified"
              className="w-4 h-4 accent-[#9419e6] rounded"
            />
            <Label
              htmlFor="verified"
              className="text-gray-400 text-sm cursor-pointer hover:text-white transition-colors"
            >
              Verified Only
            </Label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 font-semibold">
            Apply Filters
          </Button>
          <Button
            variant="outline"
            className="w-full bg-[#2a2330] border-[#4a3c53] text-gray-400 hover:text-white hover:bg-[#332840] rounded-lg h-10"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#9419e6] to-[#7a14c4] p-8 mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">Hire Talented Creators</h1>
          <p className="text-white/90 text-lg mb-6">
            Connect with top-tier musicians, dancers, artists, and influencers for your next campaign or project.
          </p>
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Search for skills (e.g. 'Guitarist', 'Video Editor')..."
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12 rounded-lg focus:border-white focus:ring-white"
            />
            <Button className="bg-white text-[#9419e6] hover:bg-gray-100 rounded-lg h-12 px-6 font-semibold">
              Search
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-[#4a3c53]/30">
          <div className="flex gap-6">
            {["Available for Hire", "My Hiring Requests", "My Active Hires"].map((tab, index) => (
              <button
                key={tab}
                className={`pb-4 px-2 border-b-2 transition-colors ${
                  index === 0
                    ? "border-[#9419e6] text-white font-semibold"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Talent Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "GuitarMaster",
              handle: "@guitarmaster",
              rating: 4.9,
              jobs: 120,
              category: "Music",
              tags: ["Guitarist"],
              description: "Professional guitarist with 10+ years of experience",
              followers: "45.2k",
              rate: "$80/hr",
              verified: true,
            },
            {
              name: "Sarah_S",
              handle: "@sarah_s",
              rating: 4.8,
              jobs: 95,
              category: "Dance",
              tags: ["Dancer", "Choreographer"],
              description: "Contemporary dancer and choreographer",
              followers: "32.1k",
              rate: "$60/hr",
              verified: true,
            },
            {
              name: "Jenny_Art",
              handle: "@jennyart",
              rating: 5.0,
              jobs: 150,
              category: "Visual Arts",
              tags: ["Designer", "Illustrator"],
              description: "Digital artist specializing in branding",
              followers: "67.8k",
              rate: "$100/hr",
              verified: true,
            },
            {
              name: "Tom_Tech",
              handle: "@tomtech",
              rating: 4.7,
              jobs: 80,
              category: "Tech",
              tags: ["Developer", "Video Editor"],
              description: "Full-stack developer and video editor",
              followers: "28.5k",
              rate: "$90/hr",
              verified: false,
            },
            {
              name: "CreativeAgency",
              handle: "@creativeagency",
              rating: 4.9,
              jobs: 200,
              category: "Design",
              tags: ["Agency", "Branding"],
              description: "Creative agency offering full design services",
              followers: "120k",
              rate: "$150/hr",
              verified: true,
            },
            {
              name: "Anna K.",
              handle: "@annak",
              rating: 4.8,
              jobs: 110,
              category: "Lifestyle",
              tags: ["Model", "Influencer"],
              description: "Fashion model and lifestyle influencer",
              followers: "89.3k",
              rate: "$120/hr",
              verified: true,
            },
          ].map((talent, index) => (
            <div
              key={index}
              className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30 hover:border-[#9419e6]/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{talent.name.split(" ")[0][0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-white font-semibold">{talent.name}</span>
                      {talent.verified && (
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                    <p className="text-gray-400 text-xs">{talent.handle}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white text-sm font-medium">
                  {talent.rating} ({talent.jobs} jobs)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {talent.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-[#2a2330] text-gray-400 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-4">{talent.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-xs">FOLLOWERS</p>
                  <p className="text-white text-sm font-semibold">{talent.followers}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs">STARTING AT</p>
                  <p className="text-[#9419e6] text-sm font-semibold">{talent.rate}</p>
                </div>
              </div>

              <Button className="w-full bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 font-semibold">
                Hire Now
              </Button>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center p-6">
          <Button
            variant="outline"
            className="bg-[#2a2330] border-[#4a3c53] text-gray-400 hover:text-white hover:bg-[#332840] rounded-lg h-10 px-6"
          >
            Load More Talents
          </Button>
        </div>
      </div>
    </div>
  )
}

