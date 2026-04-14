import { ChevronLeft, ChevronRight, Crop, Plus, Sparkles, X } from "lucide-react";
import { MediaItem } from "../types";
import MediaToolButton from "./MediaToolButton";

type CreatePostMediaControlsProps = {
  selectedFiles: MediaItem[];
  currentSlide: number;
  currentFile: MediaItem;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onRemoveFile: (index: number) => void;
  onOpenCrop: () => void;
  onOpenFilter: () => void;
  onAddMore: () => void;
};

export default function CreatePostMediaControls({
  selectedFiles,
  currentSlide,
  currentFile,
  onPrevSlide,
  onNextSlide,
  onRemoveFile,
  onOpenCrop,
  onOpenFilter,
  onAddMore,
}: CreatePostMediaControlsProps) {
  return (
    <>
      {selectedFiles.length > 1 ? (
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
      ) : null}

      <button
        onClick={() => onRemoveFile(currentSlide)}
        className="absolute top-4 left-4 p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <X className="h-4 w-4" />
      </button>

      <div className="absolute right-4 lg:right-6 bottom-16 lg:bottom-24 cursor-pointer flex flex-col gap-3 lg:gap-4 z-10">
        {currentFile.type === "image" ? (
          <>
            <MediaToolButton icon={Crop} tooltip="Crop" onClick={onOpenCrop} />
            <MediaToolButton icon={Sparkles} tooltip="Filters" onClick={onOpenFilter} />
          </>
        ) : null}
      </div>

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
          onClick={onAddMore}
          className="p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:scale-110 transition-transform absolute right-6 bottom-0"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
