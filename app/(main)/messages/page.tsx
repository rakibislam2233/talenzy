import { Search, Pencil, Phone, Video, Info, Paperclip, Image as ImageIcon, Send, Check, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MessagesPage() {
  return (
    <div className="flex h-full">
      {/* Left Sidebar - Messages List */}
      <div className="w-96 bg-[#221c26] border-r border-[#4a3c53]/30 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#4a3c53]/30 flex items-center justify-between">
          <h2 className="text-white font-semibold text-lg">Messages</h2>
          <Button
            variant="ghost"
            className="text-[#9419e6] hover:text-[#a824f0] hover:bg-transparent p-0 h-auto"
          >
            <Pencil className="h-5 w-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-[#4a3c53]/30">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search messages..."
              className="bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-10 pl-10 pr-4 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 pt-4 border-b border-[#4a3c53]/30">
          <div className="flex gap-4">
            {["All", "Unread", "Hiring", "Archived"].map((tab, index) => (
              <button
                key={tab}
                className={`pb-3 px-2 border-b-2 transition-colors ${
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

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto">
          {[
            {
              name: "CreativeAgency",
              avatar: "CA",
              message: "Can you send the portfolio by 5 PM?",
              time: "Now",
              unread: 0,
              verified: true,
              color: "bg-green-500",
            },
            {
              name: "GuitarMaster",
              avatar: "GM",
              message: "That new riff is fire! 🔥",
              time: "2h ago",
              unread: 2,
              verified: false,
              color: "bg-blue-500",
            },
            {
              name: "Sarah_S",
              avatar: "SS",
              message: "Thanks for the gift! 🙌",
              time: "Yesterday",
              unread: 0,
              verified: false,
              color: "bg-purple-500",
            },
            {
              name: "James L.",
              avatar: "JL",
              message: "Let's discuss the project scope.",
              time: "Oct 24",
              unread: 0,
              verified: false,
              color: "bg-orange-500",
            },
            {
              name: "Davide R.",
              avatar: "DR",
              message: "Sent a photo.",
              time: "Oct 20",
              unread: 0,
              verified: false,
              color: "bg-pink-500",
            },
          ].map((conversation, index) => (
            <div
              key={index}
              className={`p-4 border-b border-[#4a3c53]/30 cursor-pointer hover:bg-[#2a2330] transition-colors ${
                index === 0 ? "bg-[#2a2330]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${conversation.color} flex items-center justify-center`}>
                  <span className="text-white font-semibold text-sm">{conversation.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-white font-semibold text-sm truncate">{conversation.name}</span>
                    {conversation.verified && (
                      <CheckCircle2 className="h-3 w-3 text-blue-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-400 text-xs truncate">{conversation.message}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs mb-1">{conversation.time}</p>
                  {conversation.unread > 0 && (
                    <span className="inline-block w-5 h-5 bg-[#9419e6] text-white text-xs rounded-full flex items-center justify-center">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Window */}
      <div className="flex-1 flex flex-col bg-[#1b1121]">
        {/* Chat Header */}
        <div className="p-4 border-b border-[#4a3c53]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">CA</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold">CreativeAgency</span>
                <CheckCircle2 className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-green-500 text-xs">• Online for Hiring</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
            >
              <Video className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
            >
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[70%]">
              <div className="bg-[#9419e6] text-white rounded-2xl rounded-tr-none p-4">
                <p>
                  Hi CreativeAgency! I saw your post regarding the Senior Graphic Designer position. Is it still
                  open?
                </p>
              </div>
              <div className="flex items-center gap-1 justify-end mt-1">
                <span className="text-gray-500 text-xs">Yesterday</span>
                <Check className="h-3 w-3 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Date Separator */}
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500 text-xs bg-[#221c26] px-3 py-1 rounded-full">Today, Oct 26</span>
          </div>

          {/* Agency Message with File */}
          <div className="flex justify-start">
            <div className="max-w-[70%]">
              <div className="bg-[#221c26] border border-[#4a3c53]/30 rounded-2xl rounded-tl-none p-4">
                <div className="flex items-center gap-3 mb-2 p-3 bg-[#2a2330] rounded-lg">
                  <div className="w-10 h-10 rounded bg-[#9419e6]/20 flex items-center justify-center">
                    <Paperclip className="h-5 w-5 text-[#9419e6]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">Job_Requirements.pdf</p>
                    <p className="text-gray-400 text-xs">2.4 MB</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Here are the detailed requirements for the Senior Designer role.
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-1">10:30 AM</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[70%]">
              <div className="bg-[#9419e6] text-white rounded-2xl rounded-tr-none p-4">
                <p>Sure! I'm just polishing the last few slides. It will be ready in an hour.</p>
              </div>
              <div className="flex items-center gap-1 justify-end mt-1">
                <span className="text-gray-500 text-xs">10:40 AM</span>
                <Check className="h-3 w-3 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Agency Message */}
          <div className="flex justify-start">
            <div className="max-w-[70%]">
              <div className="bg-[#221c26] border border-[#4a3c53]/30 rounded-2xl rounded-tl-none p-4">
                <p className="text-gray-300">
                  Can you send the portfolio by 5 PM? We're finalizing the candidates today.
                </p>
              </div>
              <p className="text-gray-500 text-xs mt-1">10:42 AM</p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-[#4a3c53]/30">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-[#2a2330] border-[#4a3c53] text-white placeholder:text-gray-500 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
            />
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-[#2a2330] rounded-lg h-10 w-10 p-0"
            >
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-12 w-12 p-0">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

