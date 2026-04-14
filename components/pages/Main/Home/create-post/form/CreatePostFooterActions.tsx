import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type CreatePostFooterActionsProps = {
  onClose: () => void;
};

export default function CreatePostFooterActions({
  onClose,
}: CreatePostFooterActionsProps) {
  return (
    <div className="p-4 border-t border-border bg-background sticky bottom-0 z-30 flex gap-4">
      <Button variant="outline" onClick={onClose} className="w-full cursor-pointer">
        Cancel
      </Button>
      <Button className="w-full cursor-pointer">
        Share Post
        <ChevronRight />
      </Button>
    </div>
  );
}
