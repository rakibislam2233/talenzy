"use client";

import CreatePostForm from "@/components/create-post/CreatePostForm";
import CreatePostMedia from "@/components/create-post/CreatePostMedia";
import { MediaItem } from "@/components/create-post/types";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Main Modal Container for the Create Post feature.
 * Uses React Portal to render outside the main DOM hierarchy (solving Z-index overlap).
 * Orchestrates state between Media Handling and Form Input.
 */
export default function CreatePostModal({
  isOpen,
  onClose,
}: CreatePostModalProps) {
  // Portal target state
  const [mounted, setMounted] = useState(false);

  // Data State
  const [selectedFiles, setSelectedFiles] = useState<MediaItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form State
  const [isHiring, setIsHiring] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowDownloads, setAllowDownloads] = useState(false);
  const [privacy, setPrivacy] = useState<"public" | "connections" | "private">(
    "public"
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ensure portal target exists on client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle Esc key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // File Handlers
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file), // Note: Should revoke URL in real app on unmount/remove
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
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[100001] cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background-dark w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-border-dark relative"
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
              setCurrentSlide={setCurrentSlide}
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
    document.body // Portal Target
  );
}
