import { Camera, Pencil, Mail, Phone, MapPin, AtSign, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <div className="flex h-full">
      {/* Left Sidebar - Settings Navigation */}
      <div className="w-64 bg-[#221c26] border-r border-[#4a3c53]/30 p-6">
        <h2 className="text-white font-semibold text-xl mb-6">Settings</h2>
        <nav className="space-y-2">
          {[
            { label: "My Account", icon: null, active: true },
            { label: "Profile", icon: Pencil },
            { label: "Privacy & Safety", icon: Lock },
            { label: "Notifications", icon: null },
            { label: "Billing & Payments", icon: null },
            { label: "Security", icon: Lock },
            { label: "Appearance", icon: null },
            { label: "Connected Apps", icon: null },
            { label: "Help & Support", icon: null },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-[#9419e6] text-white"
                    : "text-gray-400 hover:bg-[#2a2330] hover:text-white"
                }`}
              >
                {Icon && <Icon className="h-5 w-5" />}
                <span>{item.label}</span>
              </button>
            )
          })}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors mt-4">
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-white mb-2">My Account</h1>
          <p className="text-gray-400 mb-8">
            Manage your personal details, login information, and account status.
          </p>

          {/* Profile Card */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30 mb-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9419e6] to-[#7a14c4] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SJ</span>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#9419e6] hover:bg-[#a824f0] text-white p-2 rounded-full">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Sarah Jenkins</h3>
                <p className="text-[#9419e6] mb-4">@sarahcreative</p>
                <div className="flex gap-3">
                  <Button className="bg-[#9419e6] hover:bg-[#a824f0] text-white rounded-lg h-10 px-6 font-semibold">
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-10 px-6"
                  >
                    Change Password
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-[#9419e6]/20 text-[#9419e6] text-xs font-semibold rounded-full mb-2">
                  • CREATOR
                </span>
                <p className="text-gray-400 text-sm">Member since Oct 2023</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30 mb-6">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Information</h3>
            <p className="text-gray-400 text-sm mb-6">
              Manage how you access your account and how we contact you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-white mb-2">Email Address</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="email"
                      value="sarah.jenkins@example.com"
                      className="bg-[#2a2330] border-[#4a3c53] text-white pl-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      readOnly
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-12 px-4"
                  >
                    Change
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-white mb-2">Phone Number</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="tel"
                      value="+1 (555) 000-1234"
                      className="bg-[#2a2330] border-[#4a3c53] text-white pl-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                      readOnly
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="bg-[#2a2330] border-[#4a3c53] text-white hover:bg-[#332840] rounded-lg h-12 px-4"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-[#221c26] rounded-2xl p-6 border border-[#4a3c53]/30">
            <h3 className="text-white font-semibold text-lg mb-2">Profile Details</h3>
            <p className="text-gray-400 text-sm mb-6">
              This information will be displayed on your public profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label className="text-white mb-2">Username</Label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    defaultValue="@sarahcreative"
                    className="bg-[#2a2330] border-[#4a3c53] text-white pl-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                  />
                </div>
              </div>
              <div>
                <Label className="text-white mb-2">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    defaultValue="Los Angeles, CA"
                    className="bg-[#2a2330] border-[#4a3c53] text-white pl-10 h-12 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <Label className="text-white mb-2">Bio</Label>
              <Textarea
                defaultValue="Digital artist and content creator passionate about bringing imagination to life. Open for collaborations!"
                className="bg-[#2a2330] border-[#4a3c53] text-white min-h-24 rounded-lg focus:border-[#9419e6] focus:ring-[#9419e6]"
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-400 text-sm">Brief description for your profile.</p>
                <p className="text-gray-400 text-sm">84/200</p>
              </div>
            </div>
            <div>
              <Label className="text-white mb-2">Talents & Skills</Label>
              <div className="bg-[#2a2330] border border-[#4a3c53] rounded-lg p-4 min-h-20">
                {/* Skills tags would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

