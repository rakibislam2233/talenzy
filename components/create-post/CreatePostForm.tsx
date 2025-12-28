"use client";

import { Button } from "@/components/ui/button";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";
import {
  AtSign,
  Bold,
  Briefcase,
  ChevronRight,
  Globe,
  Hash,
  Italic,
  Layers,
  List,
  ListOrdered,
  Lock,
  MapPin,
  Smile,
  Users,
} from "lucide-react";

interface CreatePostFormProps {
  onClose: () => void;
  isHiring: boolean;
  setIsHiring: (val: boolean) => void;
  allowComments: boolean;
  setAllowComments: (val: boolean) => void;
  allowDownloads: boolean;
  setAllowDownloads: (val: boolean) => void;
  privacy: "public" | "connections" | "private";
  setPrivacy: (val: "public" | "connections" | "private") => void;
}

/**
 * Component responsible for the post details form.
 * Handles caption rich-text editing, location, categorization, and privacy settings.
 */
export default function CreatePostForm({
  onClose,
  isHiring,
  setIsHiring,
  allowComments,
  setAllowComments,
  allowDownloads,
  setAllowDownloads,
  privacy,
  setPrivacy,
}: CreatePostFormProps) {
  // Tiptap Editor Configuration
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder:
          "Write a caption... Use #hashtags and @mentions to reach more people!",
      }),
      LinkExtension.configure({
        openOnClick: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "bg-transparent border-none text-white focus:outline-none min-h-[120px] text-base leading-relaxed",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full md:w-[40%] bg-surface-dark flex flex-col h-full overflow-y-auto custom-scrollbar relative z-20">
      {/* Header */}
      <div className="p-4 border-b border-border-dark flex items-center justify-between sticky top-0 bg-surface-dark/95 backdrop-blur-md z-10">
        <h2 className="text-white font-bold text-lg">New Post</h2>
        <button
          onClick={onClose}
          className="text-primary font-bold text-sm hover:text-primary-hover"
        >
          Save Draft
        </button>
      </div>

      <div className="p-6 flex flex-col gap-6 flex-1">
        {/* User Info & Privacy Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-bold text-sm">
                  AT
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Alex Talent</h4>
              {/* Privacy Dropdown */}
              <div className="relative mt-0.5 group">
                <select
                  value={privacy}
                  onChange={(e) =>
                    setPrivacy(
                      e.target.value as "public" | "connections" | "private"
                    )
                  }
                  className="appearance-none bg-transparent text-gray-400 text-xs font-medium pr-4 cursor-pointer focus:outline-none hover:text-white transition-colors"
                >
                  <option value="public">Public</option>
                  <option value="connections">Connections</option>
                  <option value="private">Only Me</option>
                </select>
                <div className="absolute top-0 left-0 pointer-events-none flex items-center gap-1 text-gray-400 text-xs font-medium">
                  {privacy === "public" && <Globe className="h-3 w-3" />}
                  {privacy === "connections" && <Users className="h-3 w-3" />}
                  {privacy === "private" && <Lock className="h-3 w-3" />}
                  <span>
                    {privacy === "public"
                      ? "Public"
                      : privacy === "connections"
                      ? "Connections"
                      : "Only Me"}
                  </span>
                  <ChevronRight className="h-3 w-3 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rich Text Caption Editor */}
        <div className="space-y-3">
          <div
            className="min-h-[140px] cursor-text"
            onClick={() => editor?.commands.focus()}
          >
            <EditorContent editor={editor} />
          </div>

          {/* Editor Toolbar */}
          <div className="flex items-center justify-between border-t border-border-dark pt-3">
            <div className="flex gap-2">
              <ToolbarButton
                active={editor?.isActive("bold")}
                onClick={() => editor?.chain().focus().toggleBold().run()}
                icon={Bold}
              />
              <ToolbarButton
                active={editor?.isActive("italic")}
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                icon={Italic}
              />
              <ToolbarButton
                active={editor?.isActive("bulletList")}
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                icon={List}
              />
              <ToolbarButton
                active={editor?.isActive("orderedList")}
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
                icon={ListOrdered}
              />
            </div>
            <div className="flex gap-2 border-l border-border-dark pl-2">
              <ToolbarButton onClick={() => {}} icon={Smile} active={false} />
              <ToolbarButton onClick={() => {}} icon={AtSign} active={false} />
              <ToolbarButton onClick={() => {}} icon={Hash} active={false} />
            </div>
          </div>
        </div>

        {/* Location Input */}
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input
            placeholder="Add Location"
            className="bg-background-dark border border-border-dark pl-12 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary/50 transition-all hover:border-gray-600 w-full"
          />
        </div>

        {/* Category Selection */}
        <div className="relative group">
          <Layers className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          <select className="w-full bg-background-dark border border-border-dark text-white rounded-xl h-12 pl-12 pr-4 appearance-none focus:outline-none focus:border-primary/50 transition-all hover:border-gray-600 cursor-pointer text-sm font-medium">
            <option value="" disabled className="text-gray-500">
              Select Category
            </option>
            <option value="art">Digital Art</option>
            <option value="music">Music</option>
            <option value="video">Video</option>
            <option value="tech">Technology</option>
          </select>
          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
        </div>

        {/* Hiring Switch */}
        <div className="bg-background-dark p-4 rounded-xl flex items-center justify-between border border-border-dark hover:border-gray-600 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Hiring?</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Add a hiring badge to this post
              </p>
            </div>
          </div>
          <Switch checked={isHiring} onChange={() => setIsHiring(!isHiring)} />
        </div>

        {/* Advanced Settings */}
        <div className="border-t border-border-dark pt-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none text-white font-bold text-sm mb-4 hover:text-primary transition-colors">
              <span>Advanced Settings</span>
              <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
            </summary>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="flex flex-col gap-4 pl-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm font-medium">
                  Turn off commenting
                </span>
                <Switch
                  checked={!allowComments}
                  onChange={() => setAllowComments(!allowComments)}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm font-medium">
                  Allow Downloads
                </span>
                <Switch
                  checked={allowDownloads}
                  onChange={() => setAllowDownloads(!allowDownloads)}
                />
              </div>
            </motion.div>
          </details>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-t border-border-dark bg-surface-dark sticky bottom-0 z-10 flex gap-3">
        <Button
          variant="outline"
          onClick={onClose}
          className="flex-1 bg-transparent border-gray-700 text-white hover:bg-white/5 hover:text-white hover:border-gray-500 h-11 rounded-xl font-semibold transition-all hover:scale-[1.02]"
        >
          Cancel
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary-hover text-white h-11 rounded-xl font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95">
          Post
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// Helper Components
function ToolbarButton({
  active,
  onClick,
  icon: Icon,
}: {
  active?: boolean;
  onClick: () => void;
  icon: any;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${
        active ? "bg-white/10 text-primary" : "text-gray-400 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors duration-300 ease-in-out ${
        checked ? "bg-primary" : "bg-gray-600"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
          checked ? "left-[calc(100%-1.375rem)]" : "left-0.5"
        }`}
      />
    </button>
  );
}
