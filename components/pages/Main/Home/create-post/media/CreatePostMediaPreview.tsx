import { motion } from "framer-motion";
import Image from "next/image";
import { MediaItem } from "../types";

type CreatePostMediaPreviewProps = {
  currentSlide: number;
  currentFile: MediaItem;
};

export default function CreatePostMediaPreview({
  currentSlide,
  currentFile,
}: CreatePostMediaPreviewProps) {
  return (
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full h-full ${currentFile.filter}`}
    >
      {currentFile.type === "image" ? (
        <div className="relative w-full h-full">
          <Image src={currentFile.url} alt="Preview" fill className="object-contain" />
        </div>
      ) : (
        <video
          src={currentFile.url}
          controls
          className="w-full h-full object-contain"
          onContextMenu={(event) => event.preventDefault()}
          controlsList="nodownload"
        />
      )}
    </motion.div>
  );
}
