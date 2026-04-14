import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

type CreatePostMediaEmptyStateProps = {
  onSelectFromComputer: () => void;
};

export default function CreatePostMediaEmptyState({
  onSelectFromComputer,
}: CreatePostMediaEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 text-center h-full">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-16 h-16 md:w-24 md:h-24 bg-surface-dark rounded-3xl flex items-center justify-center mb-4 md:mb-6 shadow-2xl border border-white/5"
      >
        <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
      </motion.div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Create New Post</h3>
      <p className="text-gray-400 mb-6 md:mb-8 max-w-xs leading-relaxed text-sm md:text-base">
        Drag and drop photos or videos here, or click to select from your computer
      </p>
      <Button
        onClick={onSelectFromComputer}
        className="bg-primary hover:bg-primary-hover text-white rounded-xl px-6 py-4 md:px-8 md:py-6 text-base font-medium cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
      >
        Select from Computer
      </Button>
    </div>
  );
}
