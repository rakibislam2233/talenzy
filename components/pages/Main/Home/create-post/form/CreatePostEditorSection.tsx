import { Input } from "@/components/ui/input";
import { Editor, EditorContent } from "@tiptap/react";
import {
    AtSign,
    Bold,
    Hash,
    Italic,
    List,
    ListOrdered,
    MapPin,
    Smile,
} from "lucide-react";

type CreatePostEditorSectionProps = {
  editor: Editor | null;
};

export default function CreatePostEditorSection({
  editor,
}: CreatePostEditorSectionProps) {
  return (
    <>
      <div className="space-y-3">
        <div className="min-h-35 cursor-text" onClick={() => editor?.commands.focus()}>
          <EditorContent editor={editor} />
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
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
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              icon={ListOrdered}
            />
          </div>
          <div className="flex gap-2 border-l border-border pl-2">
            <ToolbarButton onClick={() => {}} icon={Smile} />
            <ToolbarButton onClick={() => {}} icon={AtSign} />
            <ToolbarButton onClick={() => {}} icon={Hash} />
          </div>
        </div>
      </div>

      <div className="relative group">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
        <Input type="text" placeholder="Location" className="pl-10 md:pl-12" />
      </div>
    </>
  );
}

function ToolbarButton({
  active,
  onClick,
  icon: Icon,
}: {
  active?: boolean;
  onClick: () => void;
  icon: React.ElementType;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${
        active ? "bg-white/10 text-primary" : "text-gray-400 hover:text-foreground"
      }`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
