'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';

export default function ContentPreferencesPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Content preferences</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Interests</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Manage interests</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Topics you follow</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Topics to avoid</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Muted words</h2>
          </div>
          
          <div className="divide-y divide-border">
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Mute words in posts</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            
            <button className="w-full flex items-start justify-between gap-3 p-4 hover:bg-accent transition-colors">
              <span className="text-foreground font-medium">Mute words in comments</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Media preferences</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Auto-play videos</h3>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Show muted videos</h3>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Reduce motion</h3>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border p-4">
            <h2 className="text-lg font-semibold text-foreground">Content filters</h2>
          </div>
          
          <div className="divide-y divide-border">
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Show sensitive content</h3>
              </div>
              <Checkbox />
            </div>
            
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="font-medium text-foreground">Show mature content</h3>
              </div>
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}