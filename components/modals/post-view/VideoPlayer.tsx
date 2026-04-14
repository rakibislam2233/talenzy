import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (event?: React.MouseEvent) => {
    if (event) event.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((current) => !current);
  };

  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted((current) => !current);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleProgressChange = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!videoRef.current) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    videoRef.current.currentTime = (x / width) * videoRef.current.duration;
  };

  return (
    <div className="relative w-full h-full group/video">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        onContextMenu={(event) => event.preventDefault()}
        controlsList="nodownload"
      />

      <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-foreground/80 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex flex-col gap-3 pointer-events-auto">
          <div
            className="w-full h-1.5 bg-foreground/20 rounded-full cursor-pointer relative group/progress"
            onClick={handleProgressChange}
          >
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute size-3 bg-primary rounded-full top-1/2 -translate-y-1/2 -ml-1.5 opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-[0_0_10px_rgba(148,25,230,0.5)]"
              style={{ left: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-current" />
                ) : (
                  <Play className="h-5 w-5 fill-current" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-full bg-foreground/40 backdrop-blur-sm border border-white/20"
          >
            <Play className="h-10 w-10 text-foreground fill-current" />
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
