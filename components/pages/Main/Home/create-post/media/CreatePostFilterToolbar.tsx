import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { FILTERS, MediaItem } from "../types";

type CreatePostFilterToolbarProps = {
  isOpen: boolean;
  currentFile: MediaItem;
  currentSlide: number;
  onApplyFilter: (index: number, filterClass: string) => void;
  onClose: () => void;
};

export default function CreatePostFilterToolbar({
  isOpen,
  currentFile,
  currentSlide,
  onApplyFilter,
  onClose,
}: CreatePostFilterToolbarProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="absolute bottom-16 lg:bottom-24 inset-x-4 md:inset-x-8 bg-black/80 backdrop-blur-xl p-3 md:p-4 rounded-2xl border border-gray-800 flex items-center gap-4 px-4 overflow-x-auto custom-scrollbar z-30"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.name}
              onClick={() => onApplyFilter(currentSlide, filter.class)}
              className={`flex flex-col items-center gap-2 cursor-pointer min-w-20 group ${
                currentFile.filter === filter.class ? "text-primary" : "text-gray-400"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gray-800 overflow-hidden border-2 transition-all ${
                  currentFile.filter === filter.class
                    ? "border-primary scale-110"
                    : "border-transparent group-hover:border-gray-500"
                }`}
              >
                {currentFile.type === "image" ? (
                  <Image
                    src={currentFile.url}
                    alt={filter.name}
                    width={48}
                    height={48}
                    className={`w-full h-full object-cover ${filter.class}`}
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-600" />
                )}
              </div>
              <span className="text-xs font-medium">{filter.name}</span>
            </button>
          ))}
          <div className="w-px h-10 bg-gray-700 mx-2" />
          <button
            onClick={onClose}
            className="p-2 bg-white/10 cursor-pointer hover:bg-white/20 rounded-full text-white"
          >
            <Check className="h-5 w-5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
