"use client";

import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { X } from "lucide-react";
import CreatePostAdvancedSettings from "./form/CreatePostAdvancedSettings";
import CreatePostAuthorHeader from "./form/CreatePostAuthorHeader";
import CreatePostEditorSection from "./form/CreatePostEditorSection";
import CreatePostFooterActions from "./form/CreatePostFooterActions";

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
          "bg-transparent border-none text-foreground focus:outline-none min-h-[120px] text-base leading-relaxed",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full lg:w-[40%] bg-background flex flex-col flex-1 lg:h-full overflow-y-auto custom-scrollbar border-l border-border relative z-20">
      <div className="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-background backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-foreground font-bold text-lg">New Post</h2>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 md:gap-6 flex-1">
        <CreatePostAuthorHeader />

        <CreatePostEditorSection editor={editor} />

        <CreatePostAdvancedSettings
          isHiring={isHiring}
          setIsHiring={setIsHiring}
          allowComments={allowComments}
          setAllowComments={setAllowComments}
          allowDownloads={allowDownloads}
          setAllowDownloads={setAllowDownloads}
          privacy={privacy}
          setPrivacy={setPrivacy}
        />
      </div>

      <CreatePostFooterActions onClose={onClose} />
    </div>
  );
}
