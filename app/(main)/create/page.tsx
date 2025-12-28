"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Crop,
  Globe,
  Hash,
  Image as ImageIcon,
  Layers,
  MapPin,
  Plus,
  Smile,
  Sparkles,
  Type,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function CreatePostPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<
    { url: string; type: "image" | "video" }[]
  >([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [caption, setCaption] = useState("");
  const [isHiring, setIsHiring] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowDownloads, setAllowDownloads] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video")
          ? "video"
          : ("image" as "image" | "video"),
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (currentSlide >= newFiles.length) {
      setCurrentSlide(Math.max(0, newFiles.length - 1));
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedFiles.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + selectedFiles.length) % selectedFiles.length
    );
  };

  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center p-4 md:p-8 z-50 fixed inset-0 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Main Modal Container */}
      <div className="bg-background-dark w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-border-dark animate-in zoom-in-95 duration-300">
        {/* Left Side: Media Preview & Edit */}
        <div className="relative w-full md:w-3/5 bg-[#0f0f12] flex items-center justify-center border-b md:border-b-0 md:border-r border-border-dark group">
          {selectedFiles.length > 0 ? (
            <>
              {/* Main Preview */}
              <div className="relative w-full h-full flex items-center justify-center bg-black/50">
                {selectedFiles[currentSlide].type === "image" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedFiles[currentSlide].url}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <video
                    src={selectedFiles[currentSlide].url}
                    controls
                    className="max-w-full max-h-full object-contain"
                  />
                )}

                {/* Slide Navigation */}
                {selectedFiles.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedFiles.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentSlide === idx
                              ? "bg-primary w-4"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Remove Button for current file */}
                <button
                  onClick={() => removeFile(currentSlide)}
                  className="absolute top-4 left-4 p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Edit Tools Overlay (Right side of preview area) */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <ToolButton icon={Crop} tooltip="Crop" />
                <ToolButton icon={Sparkles} tooltip="Filters" />
                <ToolButton icon={Layers} tooltip="Adjustments" />
                <ToolButton icon={Type} tooltip="Text" />
              </div>

              {/* Add More Floater */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-6 right-6 p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <Plus className="h-6 w-6" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-surface-dark rounded-full flex items-center justify-center mb-6 animate-pulse">
                <ImageIcon className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Create New Post
              </h3>
              <p className="text-gray-400 mb-8 max-w-xs">
                Drag and drop photos or videos here, or click to select from
                your computer
              </p>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-6 text-lg font-bold shadow-glow"
              >
                Select from Computer
              </Button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            multiple
            accept="image/*,video/*"
          />
        </div>

        {/* Right Side: Details Form */}
        <div className="w-full md:w-2/5 bg-surface-dark flex flex-col h-full overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="p-4 border-b border-border-dark flex items-center justify-between sticky top-0 bg-surface-dark/95 backdrop-blur-md z-10">
            <h2 className="text-white font-bold text-lg">New Post</h2>
            <button className="text-primary font-bold text-sm hover:text-primary-hover">
              Save Draft
            </button>
          </div>

          <div className="p-6 flex flex-col gap-6 flex-1">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-purple-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
                  {/* Placeholder Avatar */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-bold text-xs">
                    AT
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Alex Talent</h4>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Globe className="h-3 w-3" />
                  <span>Public</span>
                </div>
              </div>
            </div>

            {/* Caption Input */}
            <div className="space-y-2">
              <Textarea
                placeholder="Write a caption... Use #hashtags and @mentions to reach more people!"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="bg-transparent border-none text-white placeholder:text-gray-500 resize-none min-h-[120px] focus-visible:ring-0 p-0 text-base leading-relaxed"
              />
              <div className="flex items-center justify-between border-t border-border-dark pt-3">
                <div className="flex gap-4">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Smile className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Hash className="h-5 w-5" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {caption.length}/2200
                </span>
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Add Location"
                className="bg-background-dark border-border-dark pl-10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Category Select */}
            <div className="relative">
              <Layers className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select className="w-full bg-background-dark border border-border-dark text-white rounded-xl h-12 pl-10 pr-4 appearance-none focus:outline-none focus:border-primary/50 transition-colors cursor-pointer text-sm">
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="art">Digital Art</option>
                <option value="music">Music</option>
                <option value="video">Video</option>
                <option value="tech">Technology</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
            </div>

            {/* Hiring Toggle */}
            <div className="bg-background-dark p-4 rounded-xl flex items-center justify-between border border-border-dark">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Hiring?</h4>
                  <p className="text-xs text-gray-400">
                    Add a hiring badge to this post
                  </p>
                </div>
              </div>
              <Switch
                checked={isHiring}
                onChange={() => setIsHiring(!isHiring)}
              />
            </div>

            {/* Advanced Settings */}
            <div className="border-t border-border-dark pt-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-white font-bold text-sm mb-4">
                  <span>Advanced Settings</span>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>

                <div className="flex flex-col gap-4 pl-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                      Allow Comments
                    </span>
                    <Switch
                      checked={allowComments}
                      onChange={() => setAllowComments(!allowComments)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">
                      Allow Downloads
                    </span>
                    <Switch
                      checked={allowDownloads}
                      onChange={() => setAllowDownloads(!allowDownloads)}
                    />
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="p-4 border-t border-border-dark bg-surface-dark sticky bottom-0 z-10 flex gap-3">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="flex-1 bg-transparent border-gray-700 text-white hover:bg-white/5 hover:text-white hover:border-gray-500 h-11 rounded-xl font-semibold"
            >
              Cancel
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-hover text-white h-11 rounded-xl font-bold shadow-lg shadow-primary/25">
              Post
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolButton({ icon: Icon, tooltip }: { icon: any; tooltip: string }) {
  return (
    <button className="p-3 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-md transition-all group relative">
      <Icon className="h-5 w-5" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {tooltip}
      </span>
    </button>
  );
}

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors duration-300 ease-in-out ${
        checked ? "bg-primary" : "bg-gray-600"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-md ${
          checked ? "left-[calc(100%-1.375rem)]" : "left-0.5"
        }`}
      />
    </button>
  );
}
