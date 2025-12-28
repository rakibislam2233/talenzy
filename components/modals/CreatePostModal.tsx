"use client";

import { Button } from "@/components/ui/button";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { AnimatePresence, motion } from "framer-motion";
import {
  AtSign,
  Bold,
  Briefcase,
  Check,
  ChevronLeft,
  ChevronRight,
  Crop,
  Globe,
  Hash,
  Image as ImageIcon,
  Italic,
  Layers,
  List,
  ListOrdered,
  Lock,
  MapPin,
  Plus,
  Smile,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MediaItem {
  id: string;
  url: string;
  type: "image" | "video";
  filter: string;
}

const FILTERS = [
  { name: "Normal", class: "" },
  { name: "Clarendon", class: "brightness-110 contrast-125 saturation-125" },
  { name: "Gingham", class: "sepia-20 brightness-110 contrast-90" },
  { name: "Moon", class: "grayscale brightness-110" },
  { name: "Vivid", class: "contrast-125 saturation-150" },
];

export default function CreatePostModal({
  isOpen,
  onClose,
}: CreatePostModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<MediaItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHiring, setIsHiring] = useState(false);
  const [allowComments, setAllowComments] = useState(true);
  const [allowDownloads, setAllowDownloads] = useState(false);
  const [privacy, setPrivacy] = useState<"public" | "connections" | "private">(
    "public"
  );

  // Tools State
  const [activeTool, setActiveTool] = useState<"none" | "crop" | "filter">(
    "none"
  );
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  // Rich Text Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder:
          "Write a caption... Use #hashtags and @mentions to reach more people!",
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "bg-transparent border-none text-white focus:outline-none min-h-[120px] text-base leading-relaxed",
      },
    },
    immediatelyRender: false,
  });

  // Esc key close
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

  const removeFile = (index: number) => {
    const newFiles = [...selectedFiles];
    URL.revokeObjectURL(newFiles[index].url);
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (currentSlide >= newFiles.length) {
      setCurrentSlide(Math.max(0, newFiles.length - 1));
    }
    setActiveTool("none");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedFiles.length);
    setActiveTool("none");
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + selectedFiles.length) % selectedFiles.length
    );
    setActiveTool("none");
  };

  const applyFilter = (filterClass: string) => {
    const newFiles = [...selectedFiles];
    newFiles[currentSlide].filter = filterClass;
    setSelectedFiles(newFiles);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[10000]"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background-dark w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-border-dark relative"
          >
            {/* Left Side: Media Preview & Edit */}
            <div className="relative w-full md:w-[60%] bg-[#0f0f12] flex flex-col justify-center border-b md:border-b-0 md:border-r border-border-dark group overflow-hidden">
              {selectedFiles.length > 0 ? (
                <>
                  {/* Main Preview */}
                  <div className="relative w-full h-full flex items-center justify-center bg-black/50">
                    {/* Active Tool Views */}
                    {activeTool === "crop" &&
                    selectedFiles[currentSlide].type === "image" ? (
                      <div className="absolute inset-0 z-20 bg-black">
                        <Cropper
                          image={selectedFiles[currentSlide].url}
                          crop={crop}
                          zoom={zoom}
                          aspect={1}
                          onCropChange={setCrop}
                          onCropComplete={(area, pixels) =>
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
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`relative w-full h-full ${selectedFiles[currentSlide].filter}`}
                      >
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
                      </motion.div>
                    )}

                    {/* Navigation Arrows */}
                    {selectedFiles.length > 1 && activeTool === "none" && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-4 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors z-10"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors z-10"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}

                    {/* Remove Button */}
                    {activeTool === "none" && (
                      <button
                        onClick={() => removeFile(currentSlide)}
                        className="absolute top-4 left-4 p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Filter Tool Overlay */}
                  <AnimatePresence>
                    {activeTool === "filter" && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="absolute bottom-24 inset-x-8 h-24 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-800 flex items-center gap-4 px-4 overflow-x-auto custom-scrollbar z-30"
                      >
                        {FILTERS.map((filter) => (
                          <button
                            key={filter.name}
                            onClick={() => applyFilter(filter.class)}
                            className={`flex flex-col items-center gap-2 min-w-[80px] group ${
                              selectedFiles[currentSlide].filter ===
                              filter.class
                                ? "text-primary"
                                : "text-gray-400"
                            }`}
                          >
                            <div
                              className={`w-12 h-12 rounded-lg bg-gray-800 overflow-hidden border-2 transition-all ${
                                selectedFiles[currentSlide].filter ===
                                filter.class
                                  ? "border-primary scale-110"
                                  : "border-transparent group-hover:border-gray-500"
                              }`}
                            >
                              {selectedFiles[currentSlide].type === "image" ? (
                                <Image
                                  src={selectedFiles[currentSlide].url}
                                  alt={filter.name}
                                  width={48}
                                  height={48}
                                  className={`w-full h-full object-cover ${filter.class}`}
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600" />
                              )}
                            </div>
                            <span className="text-xs font-medium">
                              {filter.name}
                            </span>
                          </button>
                        ))}
                        <div className="w-[1px] h-10 bg-gray-700 mx-2" />
                        <button
                          onClick={() => setActiveTool("none")}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Edit Tools Trigger */}
                  {activeTool === "none" && (
                    <div className="absolute right-6 bottom-24 flex flex-col gap-4 z-10">
                      {selectedFiles[currentSlide].type === "image" && (
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

                  {/* Add More & Dots */}
                  {activeTool === "none" && (
                    <div className="absolute bottom-6 w-full px-6 flex items-center justify-between z-10">
                      <div className="flex gap-2 mx-auto">
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
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-24 h-24 bg-surface-dark rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/5"
                  >
                    <ImageIcon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Create New Post
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
                    Drag and drop photos or videos here, or click to select from
                    your computer
                  </p>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-primary hover:bg-primary-hover text-white rounded-xl px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
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
            <div className="w-full md:w-[40%] bg-surface-dark flex flex-col h-full overflow-y-auto custom-scrollbar relative z-20">
              {/* Header */}
              <div className="p-4 border-b border-border-dark flex items-center justify-between sticky top-0 bg-surface-dark/95 backdrop-blur-md z-10">
                <h2 className="text-white font-bold text-lg">New Post</h2>
                <button
                  onClick={() => onClose()}
                  className="text-primary font-bold text-sm hover:text-primary-hover"
                >
                  Save Draft
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6 flex-1">
                {/* User Info & Privacy */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-400 p-[2px]">
                      <div className="w-full h-full rounded-full bg-surface-dark relative overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white font-bold text-sm">
                          AT
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">
                        Alex Talent
                      </h4>
                      {/* Privacy Dropdown */}
                      <div className="relative mt-0.5 group">
                        <select
                          value={privacy}
                          onChange={(e: any) => setPrivacy(e.target.value)}
                          className="appearance-none bg-transparent text-gray-400 text-xs font-medium pr-4 cursor-pointer focus:outline-none hover:text-white transition-colors"
                        >
                          <option value="public">Public</option>
                          <option value="connections">Connections</option>
                          <option value="private">Only Me</option>
                        </select>
                        <div className="absolute top-0 left-0 pointer-events-none flex items-center gap-1 text-gray-400 text-xs font-medium">
                          {privacy === "public" && (
                            <Globe className="h-3 w-3" />
                          )}
                          {privacy === "connections" && (
                            <Users className="h-3 w-3" />
                          )}
                          {privacy === "private" && (
                            <Lock className="h-3 w-3" />
                          )}
                          <span>
                            {privacy === "public"
                              ? "Public"
                              : privacy === "connections"
                              ? "Connections"
                              : "Only Me"}
                          </span>
                          <ChevronRight className="h-3 w-3 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rich Text Caption Editor */}
                <div className="space-y-3">
                  <div
                    className="min-h-[140px] cursor-text"
                    onClick={() => editor?.commands.focus()}
                  >
                    <EditorContent editor={editor} />
                  </div>

                  {/* Rich Text Toolbar */}
                  <div className="flex items-center justify-between border-t border-border-dark pt-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          editor?.isActive("bold")
                            ? "bg-white/10 text-primary"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <Bold className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          editor?.isActive("italic")
                            ? "bg-white/10 text-primary"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <Italic className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().toggleBulletList().run()
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          editor?.isActive("bulletList")
                            ? "bg-white/10 text-primary"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <List className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().toggleOrderedList().run()
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          editor?.isActive("orderedList")
                            ? "bg-white/10 text-primary"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        <ListOrdered className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex gap-2 border-l border-border-dark pl-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Smile className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <AtSign className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Hash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Input */}
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    placeholder="Add Location"
                    className="bg-background-dark border border-border-dark pl-12 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary/50 transition-all hover:border-gray-600 w-full"
                  />
                </div>

                {/* Category Select */}
                <div className="relative group">
                  <Layers className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <select className="w-full bg-background-dark border border-border-dark text-white rounded-xl h-12 pl-12 pr-4 appearance-none focus:outline-none focus:border-primary/50 transition-all hover:border-gray-600 cursor-pointer text-sm font-medium">
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
                <div className="bg-background-dark p-4 rounded-xl flex items-center justify-between border border-border-dark hover:border-gray-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Hiring?</h4>
                      <p className="text-xs text-gray-400 mt-0.5">
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
                    <summary className="flex items-center justify-between cursor-pointer list-none text-white font-bold text-sm mb-4 hover:text-primary transition-colors">
                      <span>Advanced Settings</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-open:rotate-90 transition-transform" />
                    </summary>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="flex flex-col gap-4 pl-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm font-medium">
                          Turn off commenting
                        </span>
                        <Switch
                          checked={!allowComments}
                          onChange={() => setAllowComments(!allowComments)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm font-medium">
                          Allow Downloads
                        </span>
                        <Switch
                          checked={allowDownloads}
                          onChange={() => setAllowDownloads(!allowDownloads)}
                        />
                      </div>
                    </motion.div>
                  </details>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-4 border-t border-border-dark bg-surface-dark sticky bottom-0 z-10 flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-transparent border-gray-700 text-white hover:bg-white/5 hover:text-white hover:border-gray-500 h-11 rounded-xl font-semibold transition-all hover:scale-[1.02]"
                >
                  Cancel
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary-hover text-white h-11 rounded-xl font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95">
                  Post
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ToolButton({
  icon: Icon,
  tooltip,
  onClick,
}: {
  icon: any;
  tooltip: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-black/40 hover:bg-black/60 rounded-full text-white backdrop-blur-md transition-all group relative hover:scale-110"
    >
      <Icon className="h-5 w-5" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
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
