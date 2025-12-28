import { Heart, MessageCircle, UserPlus, Gift, CheckCircle2, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "like",
      icon: Heart,
      user: "Sarah_S",
      action: "liked your post",
      time: "5m ago",
      avatar: "SS",
      color: "bg-red-500",
    },
    {
      id: 2,
      type: "comment",
      icon: MessageCircle,
      user: "GuitarMaster",
      action: "commented on your post",
      time: "12m ago",
      avatar: "GM",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "follow",
      icon: UserPlus,
      user: "DesignPro",
      action: "started following you",
      time: "1h ago",
      avatar: "DP",
      color: "bg-green-500",
    },
    {
      id: 4,
      type: "gift",
      icon: Gift,
      user: "Anna_K",
      action: "sent you a gift",
      time: "2h ago",
      avatar: "AK",
      color: "bg-yellow-500",
    },
    {
      id: 5,
      type: "hire",
      icon: CheckCircle2,
      user: "CreativeAgency",
      action: "wants to hire you",
      time: "3h ago",
      avatar: "CA",
      color: "bg-purple-500",
    },
    {
      id: 6,
      type: "like",
      icon: Heart,
      user: "Mike_Drummer",
      action: "liked your post",
      time: "5h ago",
      avatar: "MD",
      color: "bg-red-500",
    },
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        <Button
          variant="ghost"
          className="text-[#9419e6] hover:text-[#a824f0] hover:bg-transparent"
        >
          Mark all as read
        </Button>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => {
          const Icon = notification.icon
          return (
            <div
              key={notification.id}
              className="bg-[#221c26] rounded-2xl p-4 border border-[#4a3c53]/30 hover:border-[#9419e6]/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${notification.color} flex items-center justify-center shrink-0`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold">{notification.user}</span>
                    <span className="text-gray-400">{notification.action}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{notification.time}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center shrink-0">
                  <span className="text-white font-semibold text-sm">{notification.avatar}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

