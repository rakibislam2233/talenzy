"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Crop,
  Image as ImageIcon,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { FILTERS, MediaItem } from "./types";

interface CreatePostMediaProps {
  selectedFiles: MediaItem[];
  currentSlide: number;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onApplyFilter: (index: number, filterClass: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  setCurrentSlide: (index: number) => void;
}

export default function CreatePostMedia({
  selectedFiles,
  currentSlide,
  onFileSelect,
  onRemoveFile,
  onNextSlide,
  onPrevSlide,
  onApplyFilter,
  fileInputRef,
  setCurrentSlide,
}: CreatePostMediaProps) {
  // Local UI state for tools (only relevant to this component)
  const [activeTool, setActiveTool] = useState<"none" | "crop" | "filter">(
    "none"
  );
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [_croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(
    null
  );

  const currentFile = selectedFiles[currentSlide];

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-full lg:w-[60%] bg-[#0f0f12] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border-dark group overflow-hidden">
      {selectedFiles.length > 0 ? (
        <>
          {/* Main Preview Area */}
          <div className="relative w-full h-full flex items-center justify-center bg-black/50">
            {/* Crop Tool View */}
            {activeTool === "crop" && currentFile.type === "image" ? (
              <div className="absolute inset-0 z-20 bg-black">
                <Cropper
                  image={currentFile.url}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onCropComplete={(_area, pixels) =>
                    setCroppedAreaPixels(pixels)
                  }
                  onZoomChange={setZoom}
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/80 p-2 rounded-full backdrop-blur-md">
                  <span className="text-xs font-bold pl-2 text-white">
                    Zoom
                  </span>
                  <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-32 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <button
                    onClick={() => setActiveTool("none")}
                    className="p-2 bg-primary hover:bg-primary-hover rounded-full text-white"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Preview View */
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`relative w-full h-full ${currentFile.filter}`}
              >
                {currentFile.type === "image" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={currentFile.url}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <video
                    src={currentFile.url}
                    controls
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </motion.div>
            )}

            {/* Navigation Arrows */}
            {selectedFiles.length > 1 && activeTool === "none" && (
              <>
                <button
                  onClick={onPrevSlide}
                  className="absolute left-2 md:left-4 p-2 md:p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors z-10"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={onNextSlide}
                  className="absolute right-2 md:right-4 p-2 md:p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors z-10"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </>
            )}

            {/* Remove File Button */}
            {activeTool === "none" && (
              <button
                onClick={() => onRemoveFile(currentSlide)}
                className="absolute top-4 left-4 p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter Toolbar Overlay */}
          <AnimatePresence>
            {activeTool === "filter" && (
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
                    className={`flex flex-col items-center gap-2 cursor-pointer min-w-[80px] group ${
                      currentFile.filter === filter.class
                        ? "text-primary"
                        : "text-gray-400"
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
                  onClick={() => setActiveTool("none")}
                  className="p-2 bg-white/10 cursor-pointer hover:bg-white/20 rounded-full text-white"
                >
                  <Check className="h-5 w-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Edit Tools Trigger Buttons */}
          {activeTool === "none" && (
            <div className="absolute right-4 lg:right-6 bottom-16 lg:bottom-24 cursor-pointer flex flex-col gap-3 lg:gap-4 z-10">
              {currentFile.type === "image" && (
                <>
                  <ToolButton
                    icon={Crop}
                    tooltip="Crop"
                    onClick={() => setActiveTool("crop")}
                  />
                  <ToolButton
                    icon={Sparkles}
                    tooltip="Filters"
                    onClick={() => setActiveTool("filter")}
                  />
                </>
              )}
            </div>
          )}

          {/* Carousel Indicators & Add More Button */}
          {activeTool === "none" && (
            <div className="absolute bottom-6 w-full px-6 flex items-center justify-between z-10">
              <div className="flex gap-2 mx-auto">
                {selectedFiles.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? "bg-primary w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:scale-110 transition-transform absolute right-6 bottom-0"
              >
                <Plus className="h-6 w-6" />
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State: Prompt to upload */
        <div className="flex flex-col items-center justify-center p-4 md:p-8 text-center h-full">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="w-16 h-16 md:w-24 md:h-24 bg-surface-dark rounded-3xl flex items-center justify-center mb-4 md:mb-6 shadow-2xl border border-white/5"
          >
            <ImageIcon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Create New Post
          </h3>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-xs leading-relaxed text-sm md:text-base">
            Drag and drop photos or videos here, or click to select from your
            computer
          </p>
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="bg-primary hover:bg-primary-hover text-white rounded-xl px-6 py-4 md:px-8 md:py-6 text-base font-medium cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all "
          >
            Select from Computer
          </Button> 
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileSelect}
        className="hidden"
        multiple
        accept="image/*,video/*"
      />
    </div>
  );
}

// Helper component for floating tool buttons
function ToolButton({
  icon: Icon,
  tooltip,
  onClick,
}: {
  icon: React.ElementType;
  tooltip: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-black/40 hover:bg-black/60 rounded-full z-10 text-white backdrop-blur-md transition-all group relative hover:scale-110"
    >
      <Icon className="h-5 w-5" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        {tooltip}
      </span>
    </button>
  );
}
