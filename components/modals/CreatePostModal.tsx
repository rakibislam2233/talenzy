"use client";
import CreatePostForm from "@/components/pages/Main/Home/create-post/CreatePostForm";
import CreatePostMedia from "@/components/pages/Main/Home/create-post/CreatePostMedia";
import { MediaItem } from "@/components/pages/Main/Home/create-post/types";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function CreatePostModal({
  isOpen,
  onClose,
}: CreatePostModalProps) {
  const mounted = useMounted();

  const [selectedFiles, setSelectedFiles] = useState<MediaItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHiring, setIsHiring] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowDownloads, setAllowDownloads] = useState(false);
  const [privacy, setPrivacy] = useState<"public" | "connections" | "private">(
    "public"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle Esc key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video")
          ? ("video" as const)
          : ("image" as const),
        filter: "",
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...selectedFiles];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (currentSlide >= newFiles.length) {
      setCurrentSlide(Math.max(0, newFiles.length - 1));
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedFiles.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + selectedFiles.length) % selectedFiles.length
    );
  };

  const handleApplyFilter = (index: number, filterClass: string) => {
    const newFiles = [...selectedFiles];
    newFiles[index].filter = filterClass;
    setSelectedFiles(newFiles);
  };

  // Prevent SSR render for Portal
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          {/* Close Button - Hidden on mobile, shown on desktop outside */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50 hidden lg:block"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background w-full max-w-6xl h-[95vh] sm:h-[92vh] lg:h-[90vh] rounded-lg lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border-none lg:border border-border-dark relative"
          >
            {/* Left Column: Media (Upload/Review) */}
            <CreatePostMedia
              selectedFiles={selectedFiles}
              currentSlide={currentSlide}
              onFileSelect={handleFileSelect}
              onRemoveFile={handleRemoveFile}
              onNextSlide={handleNextSlide}
              onPrevSlide={handlePrevSlide}
              onApplyFilter={handleApplyFilter}
              fileInputRef={fileInputRef}
            />

            {/* Right Column: Form Details */}
            <CreatePostForm
              onClose={onClose}
              isHiring={isHiring}
              setIsHiring={setIsHiring}
              allowComments={allowComments}
              setAllowComments={setAllowComments}
              allowDownloads={allowDownloads}
              setAllowDownloads={setAllowDownloads}
              privacy={privacy}
              setPrivacy={setPrivacy}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

const subscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
