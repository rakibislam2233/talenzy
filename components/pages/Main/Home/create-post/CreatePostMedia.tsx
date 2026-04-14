"use client";

import { useState } from "react";
import { Area, Point } from "react-easy-crop";
import CreatePostCropOverlay from "./media/CreatePostCropOverlay";
import CreatePostFilterToolbar from "./media/CreatePostFilterToolbar";
import CreatePostMediaControls from "./media/CreatePostMediaControls";
import CreatePostMediaEmptyState from "./media/CreatePostMediaEmptyState";
import CreatePostMediaPreview from "./media/CreatePostMediaPreview";
import { MediaItem } from "./types";

interface CreatePostMediaProps {
  selectedFiles: MediaItem[];
  currentSlide: number;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (index: number) => void;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onApplyFilter: (index: number, filterClass: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
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
    <div className="relative w-full h-[38vh] sm:h-[48vh] md:h-[52vh] lg:h-full lg:w-[60%] bg-background flex flex-col justify-center group overflow-hidden">
      {selectedFiles.length > 0 ? (
        <>
          {/* Main Preview Area */}
          <div className="relative w-full h-full flex items-center justify-center ">
            {/* Crop Tool View */}
            {activeTool === "crop" && currentFile.type === "image" ? (
              <CreatePostCropOverlay
                image={currentFile.url}
                crop={crop}
                zoom={zoom}
                onCropChange={setCrop}
                onCropComplete={(_area, pixels) => setCroppedAreaPixels(pixels)}
                onZoomChange={setZoom}
                onDone={() => setActiveTool("none")}
              />
            ) : (
              <CreatePostMediaPreview
                currentSlide={currentSlide}
                currentFile={currentFile}
              />
            )}

            {activeTool === "none" ? (
              <CreatePostMediaControls
                selectedFiles={selectedFiles}
                currentSlide={currentSlide}
                currentFile={currentFile}
                onPrevSlide={onPrevSlide}
                onNextSlide={onNextSlide}
                onRemoveFile={onRemoveFile}
                onOpenCrop={() => setActiveTool("crop")}
                onOpenFilter={() => setActiveTool("filter")}
                onAddMore={() => fileInputRef.current?.click()}
              />
            ) : null}
          </div>

          <CreatePostFilterToolbar
            isOpen={activeTool === "filter"}
            currentFile={currentFile}
            currentSlide={currentSlide}
            onApplyFilter={onApplyFilter}
            onClose={() => setActiveTool("none")}
          />

        </>
      ) : (
        <CreatePostMediaEmptyState
          onSelectFromComputer={() => fileInputRef.current?.click()}
        />
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
