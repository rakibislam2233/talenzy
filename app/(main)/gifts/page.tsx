"use client";

import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Share2 } from "lucide-react";
import { useState } from "react";

export default function GiftsPage() {
  const [showGiftModal, setShowGiftModal] = useState(false);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        <Post
          id="1"
          username="Jessica Melody"
          userAvatar="JM"
          timeAgo="2 hours ago"
          category="Music"
          caption="Practicing a new song for the upcoming concert! What do you guys think? 🎸✨ #music #guitar #live"
          hashtags={["#music", "#guitar", "#live"]}
          mediaType="image"
          likes={2400}
          comments={142}
          originalAudio=""
        />

        {/* Comment Section */}
        <div className="bg-background rounded-2xl p-4 border border-border/30 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-semibold text-xs">AT</span>
            </div>
            <Input
              type="text"
              placeholder="Send message..."
              className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground h-10 rounded-lg focus:border-primary focus:ring-primary"
            />
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
            >
              <span className="text-xl">😊</span>
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto"
            >
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80 hover:bg-transparent p-0 h-auto"
            >
              <Gift className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gift Sent Notification */}
      {showGiftModal && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 bg-background rounded-lg p-4 border border-border/30 shadow-2xl max-w-sm z-50">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-foreground font-semibold">Gift Sent!</p>
                <button
                  onClick={() => setShowGiftModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="text-xl">×</span>
                </button>
              </div>
              <p className="text-muted-foreground text-sm">Just now</p>
              <p className="text-foreground text-sm mt-1">
                You successfully sent 500 Coins to @JessicaMelody.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

