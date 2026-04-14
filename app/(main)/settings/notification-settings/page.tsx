'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Bell, Heart, Mail, MessageCircle, User, Video } from 'lucide-react';

export default function NotificationSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Notification settings</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Push notifications</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Enable notifications</h3>
                </div>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Activity notifications</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Likes</h3>
                  <p className="text-sm text-muted-foreground">When someone likes your content</p>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Comments</h3>
                  <p className="text-sm text-muted-foreground">When someone comments on your posts</p>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Follows</h3>
                  <p className="text-sm text-muted-foreground">When someone follows you</p>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Shares</h3>
                  <p className="text-sm text-muted-foreground">When someone shares your content</p>
                </div>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Direct notifications</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Direct messages</h3>
                  <p className="text-sm text-muted-foreground">When someone sends you a DM</p>
                </div>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Tagged posts</h3>
                  <p className="text-sm text-muted-foreground">When someone tags you in a post</p>
                </div>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Notification frequency</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Frequency</span>
              <span className="text-muted-foreground text-sm">Normal</span>
            </button>
            
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Time sensitivity</span>
              <span className="text-muted-foreground text-sm">Real-time</span>
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Notification sounds</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Sound</span>
              <span className="text-muted-foreground text-sm">Default</span>
            </button>
            
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Vibrate</span>
              <span className="text-muted-foreground text-sm">Medium</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}